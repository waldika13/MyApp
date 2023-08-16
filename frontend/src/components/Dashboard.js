import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
  const [ username, setUsername ] = useState('');
  const [ token, setToken ] = useState('');
  const [ expire, setExpire ] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, [])

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error) {
      if(error.response) {
        navigate("/");
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime() ){
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  const getUsers = async() => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
  }

  const AddArtikel = () => {
    navigate("/tambah_artikel");
  }

  const ListArtikel = () => {
    navigate("/");
  }

  return (
    <div className='container mt-5'>
        <h1 >Welcome back: {username}</h1>
        <button onClick={ AddArtikel } className='button is-info mt-5'>Tambah Artikel</button>
        <button onClick={ ListArtikel } className='button is-info mt-5 mx-5'>List Artikel</button>
    </div>
  )
}

export default Dashboard