'use client' 
import './globals.css'
import Cards from "@/components/cards";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";


export default function Home() {

  const [cart, setCart] = useState(0)

  function addCart(){
    setCart(cart + 1)
  }

  useEffect(()=>{
    setCart(0)
  }, [])

  return (
    <>
      <div className="flex w-full py-5">
        <Navbar count = {cart}/>
      </div>
      <div className="banner">
        <img className="img-background" src="/background.png" alt="banner" />
        <img className="img-2" src="/descuento.png" alt="" />
      </div>
      <div className="w-full flex justify-evenly flex-wrap my-24">
        <Cards callback = {addCart}/>
        <Cards callback = {addCart}/>
        <Cards callback = {addCart}/>
        <Cards callback = {addCart}/>
      </div>
    </>
  );
}
