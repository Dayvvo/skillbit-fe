import { useEffect, } from 'react';
import useAuthActions from './useAuth';


const useLogin = () => {

  const {  auth, loginUser,setAuth} = useAuthActions();


  // const windowQueries = window.location.search;

  // const urlSearch = new URLSearchParams(windowQueries);

  // const queries = Object.fromEntries(urlSearch.entries()) || {};

  const tokenInStorage = auth?.token? auth: JSON.parse(localStorage.getItem('peepsdb-auth'));

  console.log('token in storage',tokenInStorage)

  const {token,sign} = tokenInStorage || {}
  // const tokenRef = useRef({
  //   type: browserToken?.token ? 'sign' : '',
  //   token: queries?.token || browserToken,
  // });



  useEffect(() => {
    (() => {
      let token  = localStorage.get('skillbit-auth');
      console.log('parsed',JSON.parse(token))
      token && setAuth({
        ...JSON.parse(token),
        isAuthenticated:true    
      })
    })();
  }, [sign,token]);

};

export default useLogin;
