import BlogLayout from '@/components/Layout/BlogLayout'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'
import circle1 from '../images/Ellipse 1.png'
import circle2 from '../images/Ellipse 2.png'
import circle3 from '../images/Ellipse 3.png'
import {motion as m} from 'framer-motion'

function Blog() {
  return (
    <m.div
    initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
    >
      <Image
            src={circle3}
            className='-z-50 absolute top-0'
            loading='lazy'
          />

          <Image
            src={circle2}
            className='-z-50 absolute right-0 bottom-0'
            loading='lazy'
          />

          <Image
            src={circle1}
            className='-z-50 absolute left-0 top-0 opacity-70'
            loading='lazy'
          />
        <BlogLayout />
    </m.div>
  )
}

export default Blog