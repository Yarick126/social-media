import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx"
import styles from './Layout.module.scss'
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
  <section className={styles.Layout}>
    <Header/>
    <Outlet/>
    <Footer/>
  </section>
  )
}

export default Layout