import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';


const buttonvarients = {
     hover:{
      scale:1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:0.2,
        yoyo:Infinity,
      }
     }
}

const containervarients = {
    hidden:{
      opacity:0
    },
    visable:{
      opacity:1,
      transition:{delay: 1.5, duration:1.5}
    },
    exit:{
      x:"-100vh",
      transition: { ease: "easeInOut"}
    }
}

const Home = () => {
  return (
    <motion.div className="home container" variants={containervarients} initial="hidden" animate="visable" exit="exit" >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button variants={buttonvarients} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;