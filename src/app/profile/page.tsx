"use client"

import { redirect } from 'next/navigation';
import React, { useContext } from 'react'
import Header from '~/components/Header'
import { AuthContext } from '~/contexts/AuthContext'
import Login from '../login/page';

export default function profile() {

  const auth = useContext(AuthContext);

  console.log(auth.user)

  if(auth.user) {
    return (
      <div>
        <Header/>
        
      </div>
    )
  }

  <Login/>
}
