import Image from 'next/image'
import React from 'react'
import NavBar from './NavBar'
import {motion as m} from 'framer-motion'

import aboutMeImg2 from "@/images/aboutMe2.png";
import ContactMeContent from './ContactMeContent';

const ContactMeLayout = () => {
  return (
    <div>
      <NavBar />
      <ContactMeContent />
    </div>
  );
}

export default ContactMeLayout