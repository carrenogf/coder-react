import Navbar from "../components/Navbar";
import Footer from "./Footer"

export const Layout = ({children})=>{
  return (

    <main className="container-fluid">
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}