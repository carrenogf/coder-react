import Navbar from "../components/Navbar";
import Footer from "./Footer"
export const Layout = ({children})=>{
  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}