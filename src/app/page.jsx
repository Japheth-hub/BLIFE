import Image from "next/image";
import './globals.css'
import Cards from "@/components/cards";

export default function Home() {
  return (<>
    <div className="banner">
      <img className="img-background" src='/background.png' alt="banner" />
      <img className="img-2" src="/descuento.png" alt="" />
    </div>
    <div className="w-full flex justify-evenly flex-wrap my-24">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  </>);
}
