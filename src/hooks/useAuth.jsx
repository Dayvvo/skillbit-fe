import { authActions, selectAuth } from '../store/reducers/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback,  useState } from 'react';
import { capitalizeString } from '../utils/helpers';
import useAxios from './useAxios';
import { useHistory } from 'react-router-dom';
import useAppInsights from './useAppInsights';

const useAuthActions = () => {
  const { setAuth: set, setProfile: setP, closeWelcome: close } = authActions;

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { auth, profile: userProfile, welcome } = useSelector(selectAuth);

  const Axios = useAxios();

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

  const closeWelcome = useCallback(() => dispatch(close()), [dispatch, close]);

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

        fetchMyProfile(token);

        let firstLoginEntry = localStorage.getItem('firstLoginStamp');

        !firstLoginEntry && localStorage.setItem('firstLoginStamp', true);

        let tokenInStorage = localStorage.getItem('peepsdb-auth')

        !tokenInStorage && localStorage.setItem('peepsdb-auth', JSON.stringify({...data,token:data?.token}));
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

  const logout = () => {
    console.log('logging out',)
    localStorage.removeItem('peepsdb-auth');
    localStorage.removeItem('first-login');
    sessionStorage.removeItem('geoCoordinates');
    setAuth({});
    history.push('/');
  };

  const updateUser = async (payload) => {
    console.log('profile payload', payload);

    let req = await Axios[profileSetup ? 'put' : 'post'](
      `/profiles?logtype=${profileSetup ? 'onboard' : 'update'}`,
      payload
    );
    let { data, status } = req;

    let statusText = req.status === '201' ? 'created' : 'updated';

    setProfile(req.data?._doc ? req.data?._doc : req.data);

    statusText === 'created' && setAuth({ ...auth, profileSetup: true,onboarding:{
      ...auth?.onboarding,
      profileSetup:true,
    } });

    return {
      data: data,
      status,
      statusText
    };
  };

  const fetchMyProfile = async (token) => {

    try {
      setLoading(true);
      let siginStamp = localStorage.getItem('first-login');

      let profileUrl = `profiles/me${siginStamp ? '' : '?firstLogin=true'}`;

      let req = await Axios.get(profileUrl, {
        ...(token
          ? {
              headers: {
                Authorization: token,
              },
            }
          : {}),
      });

      !siginStamp && localStorage.setItem('first-login', true);

      let { data } = req;

      console.log('result from profile', req);

      req.status === 201 &&
        setProfile({
          ...data,
          firstName: capitalizeString(data?.firstName),
          lastName: capitalizeString(data?.lastName),
        });
    } catch (err) {
      console.error('err at fetching my profile', err);
    } finally {
      setLoading(false);
    }
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
    profileSetup
  };
};

export default useAuthActions;
