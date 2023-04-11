
import React, { useEffect } from 'react';
import NavBar from '../NavigationBar/NavigationBar';
import axios from 'axios';
const About = () => {

  useEffect(() => {
    var api = axios.create({ baseUrl: 'http://localhost/8082' })
    api.get('/students', { withCredentials: true }).then(function (response) {
      console.log(response.data);
    });
    return () => {
      
    }
  }, [])
  
  return (
    <div>
      {/* <NavBar /> */}
      <div>About</div>
    </div>

  )
};

export default About;