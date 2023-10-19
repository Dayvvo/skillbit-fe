import { teamActions, selectTeam } from "../store/reducers/team";
import useWidget from "./useWidget"
import {useSelector,useDispatch} from 'react-redux'
import { useCallback, useRef } from "react";
import useAxios from "./useAxios";
import { useEffect } from "react";
import { renderJSX } from "../utils/helpers";
import StartOnboardingModal from "../screens/teams/onboarding/onboarding-modal";
import { useToast } from "@chakra-ui/react";

const useAppAudits = ({limit,type})=>{

    const {setLogs:setL} = teamActions;

    const dispatch = useDispatch();

    // let appLimit = limit

    // const {setLoading} = useWidget();
    const Axios = useAxios();

    const setLogs = useCallback((data)=>dispatch(setL(data)),[setL,dispatch])

    const fetchUserAudits = async()=>{
        try{
            // setLoading(false);
            let req = await Axios.get(`/audit${renderJSX(limit,`?limit=${limit}`,'')}${renderJSX(type,`&type=${type}`,'')}`)

            
            console.log('req data length',req?.data?.length)

            setLogs(req.data);
        }
        catch(err){
            console.log('fetch user audit',err?.response)
            return { err:err?.response }
        }
        // finally{
        //     setLoading(false);
        // }
    }


    useEffect(()=>{
        fetchUserAudits()
    },[limit,type])
}

const useFetchProfiles = ()=>{
    const Axios = useAxios();

    const {setLoading} = useWidget();

    const {setProfiles:setP} = teamActions;

    const dispatch = useDispatch();

    const setProfiles = useCallback((data)=>dispatch(setP(data)),[setP,dispatch])

    const fetchAllProfiles = async()=>{
        try{
            setLoading(true);
            const req = await Axios.get('/profiles');

            setProfiles(req.data);

            return {
                data:req.data
            }
        }
        catch(err){
            return {
                err:err?.response
            }

        }
        finally{
            setLoading(false);

        }

    }

    const fetchProfilesRef= useRef(fetchAllProfiles)


    useEffect(()=>{
        fetchProfilesRef.current();
    },[])
}



const useTeams = ()=>{

    const {setProfiles:setP,replaceProfile:replaceP,updateProfile:updateP,dumpToTeams:dumpTo} = teamActions;

    const {setLoading,openModal,closeModal:close} = useWidget();    

    const Axios = useAxios()

    const dispatch = useDispatch();

    const setProfiles = useCallback((data)=>dispatch(setP(data)),[setP,dispatch]);

    const replaceProfile = useCallback((data)=>dispatch(replaceP(data)),[replaceP,dispatch]);

    const updateProfile = useCallback((data)=>dispatch(updateP(data)),[updateP,dispatch]);

    const dumpToTeams = useCallback((key,payload)=>{
        dispatch(dumpTo({
            key,
            payload,
        }))
    },[]);

    const {profiles,logs,onboardings} = useSelector(selectTeam);

  
    const fetchAllProfiles = async()=>{
        try{
            setLoading(true);
            const req = await Axios.get('/profiles');

            setProfiles(req.data);

            return {
                data:req.data
            }
        }
        catch(err){
            return {
                err:err?.response
            }

        }
        finally{
            setLoading(false);

        }

    }

    const updateOnboarding = useCallback(async(payload,resend=false)=>
        Axios.put(`/onboard/update${resend?'?resend=true':''}`,payload),[]
    )

    const fetchOnboarding = async()=>{
        try{

            const req = await Axios.get('/onboard');

            let {data} = req;

            dumpToTeams('onboardings',data)

        }
        catch(err){
            console.log('err fetching onboardings',err)
        }
    }

    const fetchUserProfile = async(id)=>{
        try{
            let req = await Axios.get(`/profiles/${id}`);

            let {data} = req;

            if(data) {
                return {data}
            }

        }
        catch(err){
            return  {
                error:err
            }
        }
    }

    const toast = useToast()

    const openOnboardingModal = ()=>{
        openModal({
         children: StartOnboardingModal,
         size: 'xl',
         isOpen: true,
         payload:{
            initiateOnboarding:async({contactEmail,name,ccEmail,setIsLoading})=>{
                try{
                    setIsLoading && setIsLoading()
                    let {data,status} = await Axios.post('/onboard/initiate',{
                        contactEmail,
                        name,
                        ccEmail
                    })
                    status ===200 && toast({
                        status:'success',
                        title:'Onboarding successful',
                        position:'top',
                        description:`Onboarding Process for ${name} started. Intro email has been sent to cfo@sjultra.com`
                    });

                    dumpToTeams('onboardings',data)
                }
                catch(err){
                    
                    let errData = err?.response?.data;

                    if(errData){
                        errData['contactEmail'] &&
                        toast({
                            status:'error',
                            position:'top',
                            title:'Request failed',
                            description:errData['contactEmail']
                        })
                    }
                    
                }
            },
            close
        
         }
        });
      
    }


    return {
        fetchAllProfiles,
        fetchUserProfile,
        useFetchProfiles,
        useAppAudits,
        replaceProfile,
        updateProfile,
        openOnboardingModal,
        fetchOnboarding,
        dumpToTeams,
        updateOnboarding,
        onboardings,
        profiles,
        logs
    }


}

export default useTeams;