import NavBar from '@/components/NavBar'
import React from 'react'
import Image from 'next/image';
import ContactMeLayout from '@/components/ContactMeLayout';
import {motion as m} from 'framer-motion'

import blueContact from '@/images/blue-contact.png'
import redContact from '@/images/red-contact.png'


function ContactMe() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
    >
      <Image
        src={blueContact}
        className="-z-50 absolute top-0 right-0"
        loading="lazy"
      />
      <Image
        src={redContact}
        className="-z-50 absolute opacity-50  top-0"
        loading="lazy"
      />
      <ContactMeLayout />
    </m.div>
  );
}

export default ContactMe