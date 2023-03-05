import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { userStore } from 'store/userStore'
import { useEffect, useState } from 'react'
import Logout from '../components/Logout'
import Link from 'next/link'

export default function Home() {
  const [userName, setUserName] = useState("");
  const [pass, setpass] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  //const store = userStore();   1. çözüm  
  const userNameSetter = userStore(state => state.setUserName); //2. çözüm tek tek store'da lazım olanları çekmek
  const userPassSetter = userStore(state => state.setUserPass);
  const isAuthenticatedSetter = userStore(state => state.isAuthenticated);
  const login = userStore(state => state.login);

  useEffect(() => {
    setIsAuthenticated(isAuthenticatedSetter);

  }, [isAuthenticatedSetter])



  // const myUser = userStore((x) => {  
  //   return x.userName
  // });

  // yukardakiyle aynı aslında const myUser2 = userStore((x) => (x.userName )); 

  // const changedUserName = userStore((x) => {
  //   return x.changeUserName
  // });

  // useEffect(() => {
  //   setPageUser(myUser)
  // }, [myUser])


  const onClick = () => {
    //1. çözüm tüm storu çekersin sonra setlersin. Bu performanssız olacaktır
    //store.setUserName(userName);
    //store.setUserPass(pass);
    //store.login();

    userNameSetter(userName);    //2. çözüm de sadece bana lazım olanları storedan çekip setlemek
    userPassSetter(pass);
    login();
  }


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div>
          <label htmlFor="username">Username : </label>
          <input onChange={(e) => { setUserName(e.target.value) }} className={styles.input} type="text" id="username" name="username" required minLength="4" maxLength="8" size="10" />
        </div>
        <div>
          <label htmlFor="pass">Password (8 characters minimum):</label>
          <input onChange={(e) => { setpass(e.target.value) }} className={styles.input} type="password" id="pass" name="password" minLength="8" required />
        </div>
        <button className={styles.button} onClick={onClick}>login</button>
        <Logout />
        <div>{isAuthenticated ? "bizden" : "kim bu"}</div>
        <div>
          <Link href="/oylebircomp">Öylesine tıkla</Link>
        </div>

      </main>
    </>
  )
}
