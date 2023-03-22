import Landing from '@/components/Landing'
import Head from 'next/head'
import Image from 'next/image'
import clicle from '@/images/Ellipse 2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wasath Theekshana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        <img 
        className='-z-50 absolute'
        src="/Ellipse 3.png" 
        alt="blur" 
        loading='lazy'
        />

        <img 
        className='-z-50 absolute opacity-[70%]'
        src="/Ellipse 1.png" 
        alt="blur" 
        loading='lazy'
        />

        {/* <img 
        className='-z-50 absolute right-0 bottom-0'
        src="/Ellipse 2.png" 
        alt="blur"
        loading='lazy' 
        /> */}

        <Image 
        src={clicle}
        className='-z-50 absolute right-0 bottom-0'
        />
        
        <Landing />
        
      </div>
    </>
  )
}
