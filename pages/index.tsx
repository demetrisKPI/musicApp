import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';
//import Parent from '../components/Parent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music Player</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <main className='content'>
        
        {/* <Parent /> */}
        <AudioPlayer />
      </main>
    </div>
  )
}
