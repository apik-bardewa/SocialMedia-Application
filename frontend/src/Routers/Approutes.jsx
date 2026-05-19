import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Forgetpass from '../pages/forgetPass/Forgetpass'
import Signup from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home';
import { useSelector } from 'react-redux';
import getCurrentUser from '../hooks/getCurrentUser';
import Profile from '../pages/Profile';
import getSuggestUser from '../hooks/getSuggestUser';
import SignOut from '../pages/SignOut';

function Approutes() {
  const {userData} = useSelector(state=>state.user);
  getCurrentUser();
  getSuggestUser();
  return (
    <div>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/send-otp' element={!userData?<Forgetpass/>:<Home/>}/>
          <Route path='/signup' element={!userData?<Signup/>:<Home/>}/>
          <Route path='/signin' element={!userData?<SignIn/>:<Home/>}/>
          <Route path='/' element={userData?<Home/>:<Signup/>}/>
          <Route path='/signout' element={<SignOut/>}/>

          <Route path='/getProfile/:userName' element={userData?<Profile/>:<Signup/>}/>
        </Routes>
    </div>
  )
}

export default Approutes