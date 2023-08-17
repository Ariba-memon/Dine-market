import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import Girl from '../components/Girl'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <Navbar />
      <Girl />
    </>
  )
}
