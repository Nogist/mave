import Head from '../components/Head'
import Image from 'next/image'
import Header from '../containers/Header'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <Header />
    </div>
  )
}
