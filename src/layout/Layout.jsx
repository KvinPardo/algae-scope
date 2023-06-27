import { Outlet } from "react-router-dom"
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <div className="sticky top-0 z-40">
        <Header />
      </div>

      <Outlet/>
    </>
  )
}

export default Layout