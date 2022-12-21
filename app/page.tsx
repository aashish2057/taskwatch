import Image from 'next/image';
import styles from './page.module.css';


export default async function Home() {
  const date = new Date("2022-12-15").setHours(0,0,0,0)
  const today = new Date(date)
  console.log(today)
  return (
    <div>
      hi
    </div>
  )
}
