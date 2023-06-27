import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
      <div className="sticky top-0 z-40">
        <Header />
      </div>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default Layout