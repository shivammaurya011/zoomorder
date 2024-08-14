import React, { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import Layout from '../layout/Index';
import QuickSearch from '../components/home/QuickSearch';
import axios from 'axios';
import Cookies from 'js-cookie';


function Home() {
  const [token, setToken] = useState(Cookies.get('Token'));
  const [locations, setLocation] = useState(null)

  useEffect(()=>{
    const getLocation = async()=>{
      try{
        const res = await axios.get('http://localhost:3030/api/location', {
          headers:{
            Authorization: `Berar ${token}`
          }
        })
        console.log(res.data)
        setLocation(res.data)
      }catch(error){
        console.log(error.message)
      }
    }
    getLocation()
  }, [token])
  return (
    <Layout>
      <HeroSection locations={locations}/>
      <QuickSearch />
    </Layout>
  );
}

export default Home;