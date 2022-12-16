import Image from 'next/image'
import styles from './page.module.css'
import {getDate, getFiveDays} from '../prisma/calendarDB'

export default async function Home() {
  const date = new Date().setHours(0,0,0,0)
  const today = new Date(date)
  
  const { day } = await getFiveDays(today)
  console.log(day)
  return (
    <div>
      {/* {day.date.getDay()} */}
    </div>
  )
}
