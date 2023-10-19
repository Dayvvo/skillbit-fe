import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import countries from '../utils/timezone-cities.json';

import { deviceDetect,isMobile,isBrowser } from "react-device-detect";
import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { backendURL } from '../utils/setEnv';
// import { Initialization } from '@microsoft/applicationinsights-web/types/Initialization';


const useAppInsights = (init=false) => {

    const getUserTimezone = ()=>{
        
        let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        let tzArr = userTimezone.split("/");
        
        let userRegion = tzArr[0];
        
        let userCity = tzArr[tzArr.length - 1];
        
        let userCountry = countries[userCity];
        
        return {
            timezone:userTimezone,
            city:userCity,
            country:userCountry,
            region:userRegion
        }
    }

    const [geoLocation, setGeoLocation] = useState(null);

    const setGeoLocationRef = useRef(setGeoLocation)

    useEffect(()=>{
        (
        async()=>{
            try{

                let geoCoordinates = sessionStorage.getItem('geoCoordinates');

                let req = geoCoordinates? JSON.parse(geoCoordinates) : await axios.get('https://ipapi.co/json');
                
                let {data} = req;

                const {latitude,longitude}  = data;
                
                !geoCoordinates && sessionStorage.setItem('geoCoordinates',JSON.stringify({data:{latitude,longitude}}));

                setGeoLocationRef.current({latitude,longitude});

            }
            catch(err){
                console.log('location request failed',err)
            }
        }
        )()

    },[])
    

    useEffect(() => {
        let connectionString = process.env['REACT_APP_AZURE_INSIGHTS_CONNECTION_STRING'];

        if( init ) {
        
            const initializeAzureLogging = () => {
                try{

                    let reactPlugin = new ReactPlugin();

                    let appInsights = new ApplicationInsights({
                    config: {
                        enableAutoRouteTracking: true,
                        extensions: [reactPlugin],
                        connectionString,                    
                    },
                    });
                    appInsights.loadAppInsights();
                }
                catch(err){
                    console.log('err loading app insights',err)
                }
            };
      
            initializeAzureLogging()
        } 


    

    } , [init]);

    
    function getUserCoordinates() {
        const triggerGeolocation  = ()=>{
                
            if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return Promise.resolve(null);
            }
        
            return new Promise((resolve, reject) => {
            function success(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const geolocation = {
                latitude,
                longitude
                };
                resolve(geolocation);
            }
        
            function error(errCallback) {
                console.log("Unable to retrieve your location", errCallback);
                reject(errCallback);
            }
        
            navigator.geolocation.getCurrentPosition(success, error);
            });
        }

        const getCoords =async()=>{
            let coords = undefined;
            await triggerGeolocation().then(location=>{
                coords = location
            })
            .catch(err=>{
                console.log('failed to retrieve user coordinates',err)
                return
            })

            return coords;
        
        }

        return getCoords();
    

    }
      
    const device = deviceDetect();

    const userTimezone = getUserTimezone();

    const getGeolocation = async()=>{
        try{

            let geoCoordinates = sessionStorage.getItem('geoCoordinates');

            let req = geoCoordinates? JSON.parse(geoCoordinates) : await axios.get('https://ipapi.co/json');
            
            let {data} = req;

            const {latitude,longitude}  = data;
            
            !geoCoordinates && sessionStorage.setItem('geoCoordinates',JSON.stringify({data:{latitude,longitude}}));

            setGeoLocationRef.current({latitude,longitude});
            
            return {
                latitude,
                longitude
            }

        }
        catch(err){
            console.log('location request failed',err)
            return;
        }
    };

    console.log('device type',device);

    const sanitizePostEventMessages = useCallback((event)=>{

        if (event?.origin === backendURL){
            return event.data.replace(/<\/?script>/gi, "");
        }
    },[])


    return {
        getUserTimezone,
        getUserCoordinates,
        sanitizePostEventMessages,
        getGeolocation,
        device,
        userTimezone,
        geoLocation
    }
};

export default useAppInsights;
