import { authActions, selectAuth } from '../store/reducers/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback,  useState } from 'react';
import { capitalizeString } from '../utils/helpers';
import useAxios from './useAxios';
import { useHistory } from 'react-router-dom';
import useAppInsights from './useAppInsights';
import { setUsers } from '../utils/setUser';
import { useToast } from '@chakra-ui/toast';

const useAuthActions = () => {
  const { setAuth: set, setProfile: setP, closeWelcome: close } = authActions;

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { auth, profile: userProfile, welcome } = useSelector(selectAuth);

  const Axios = useAxios();

  const toast = useToast()

  const {  userTimezone,device,getGeolocation } = useAppInsights();
  
  const history = useHistory(); 


  const profile = userProfile
    ? {
        ...userProfile,
        timezone: userProfile?.timezone || userTimezone,
      }
    : undefined;

  const profileSetup = auth?.onboarding?.profileSetup
 
  const setAuth = useCallback(
    (payload) => dispatch(set(payload)),
    [dispatch, set]
  );


  const setProfile = useCallback(
    (payload) => {
      console.log('setting profile', payload);
      dispatch(setP(payload));
    },
    [dispatch, setP]
  );

  const loginUser = useCallback(async(token,sign=false,authCheck=false)=>{
    try {
      const geolocation = await getGeolocation()
      console.log('sign value',sign)
      let req = await Axios.get(
        `/auth${sign ? '?sign=yes' : ''}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
            deviceinfo:JSON.stringify({
              device,
              userTimezone,
              geolocation
            }),
          },
        }
      );

      const { status, data: dataPayload } = req;

      let data = {
        ...dataPayload,
        firstName: capitalizeString(dataPayload?.firstName || ''),
        lastName: capitalizeString(dataPayload?.lastName || ''),
      };

      if (status === 200 || status === 201) {
        setAuth({
          ...data,
          token,
          isAuthenticated: true,
        });
        let tokenInStorage = localStorage.getItem('peepsdb-auth')

        !tokenInStorage && localStorage.setItem('peepsdb-auth', JSON.stringify({...data,token:data?.token}));

        fetchMyProfile(token);

        let firstLoginEntry = localStorage.getItem('firstLoginStamp');

        !firstLoginEntry && localStorage.setItem('firstLoginStamp', true);


      }
    } 
    catch (err) {
      console.log('login err caught',err)
      if(authCheck){
        logout()
      }
      else{
        setAuth({
          isAuthenticated: false,
        });
      }
    }

  },[setAuth])


  const handleUserLogin = useCallback(({email,password})=>{

      let user = setUsers.find(user=>user.email );

      console.log('email and pass',email,password,setUsers)
      if(user){
        setAuth({
          ...user,
          isAuthenticated: true,
        });
        let tokenInStorage= localStorage.getItem('skillbit-auth')
        !tokenInStorage && localStorage.setItem('skillbit-auth', JSON.stringify({...user}));

        toast({
          status:'success',
          title:'Login successful',
          description:`Welcome ${user?.email}`,
          position:'top',
          isClosable:true
        })
  
  
        return user;

      }
      else{
        toast({
          status:'error',
          title:'Login failed',
          description:'Please enter correct login credentials',
          position:'top',
          isClosable:true
        })
      }
    
  })

  const logout = () => {
    console.log('logging out',)
    localStorage.removeItem('peepsdb-auth');
    localStorage.removeItem('first-login');
    sessionStorage.removeItem('geoCoordinates');
    setAuth({});
    history.push('/');
  };




  return {
    loginUser,
    logout,
    setAuth,
    setProfile,
    updateUser,
    fetchMyProfile,
    setLoading,
    closeWelcome,
    loading,
    auth,
    profile,
    welcome,
    profileSetup,
    handleUserLogin
  };
};

export default useAuthActions;
