import Navbar from "../components/Navbar";
import Footer from "./Footer"
import { CartContextProvider } from "../Context/CartContext";

export const Layout = ({children})=>{
  return (

    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}