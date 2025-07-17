
import dynamic from "next/dynamic"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })









export default function Home() {

 
  return (
    <main  id="fuf" className="h-full">
  
  <Scene />
     
    
    </main>
  )
}
