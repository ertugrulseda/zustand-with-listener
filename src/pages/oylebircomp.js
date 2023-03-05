import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { userStore } from 'store/userStore'
import { useEffect, useState } from 'react'
import  Logout  from '../components/Logout'


export default function Home() {
  const [userName, setUserName] = useState("");
  const [pass, setpass] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  //const store = userStore();   1. çözüm  
  const userNameSetter = userStore(state=>state.setUserName); //2. çözüm tek tek store'da lazım olanları çekmek
  const userPassSetter = userStore(state=>state.setUserPass);
  const isAuthenticatedSetter = userStore(state=>state.isAuthenticated);
  const login = userStore(state=>state.login);

  useEffect(()=>{
    setIsAuthenticated(isAuthenticatedSetter);    
  }, [isAuthenticatedSetter])


  return (
    <>
      <div>
        deneme
      </div>
    </>
  )
}
