import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
export default function Home() {
  return (
   <div className="min-h-full">
   <Navbar/>
   <Main/>
   <Services/>
   </div>
   
  );
}
