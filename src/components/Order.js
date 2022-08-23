import React,{useState,useEffect} from 'react';
import { motion,AnimatePresence } from "framer-motion";

const orderVarient = {
  hidden:{
    opacity:0,
    x:"100vw"
  },
  visable:{
     opacity:1,
     x:0,
     
     transition:{type:"spring", mass:0.4, dumping:8, when:"beforeChildren", staggerChildren:0.4}
  }
}

const ThankYou = {
   hidden:{
     opacity:0
   },
   visable:{
    opacity:1
   },
  
}

const Order = ({ pizza , setShowModal}) => {
  const[showorder, setorder]=useState(true)

  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  setTimeout(()=>{
    setorder(false)
  },5000)
  return (
    <motion.div variants={orderVarient} initial="hidden" animate="visable" className="container order" exit={{
      x: "-100vh",
      transition: { ease: "easeInOut" },
    }}>

      <AnimatePresence>
       {showorder && <motion.h2 transition={{duration:1}} exit={{y:-1000}}>Thank you for your order :)</motion.h2>}
      </AnimatePresence>
      
      
      <motion.p variants={ThankYou}>You ordered a {pizza.base} pizza with:</motion.p>
       <motion.div variants={ThankYou}>{pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}</motion.div>
      
    </motion.div>
  )
}

export default Order;