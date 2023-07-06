'use client'
import {  useSession } from 'next-auth/react'

export const metadata = {
  title: "Trips"
}

export default function Home() {

  const {data} = useSession()

  return (
  <div>
  <h1>HELLO</h1>
    
  </div>
  )
}
