import'./Footer.module.scss'
import AboutShop from './aboutShop/AboutShop.jsx'
import IntroduceCollumn from './introduceCollumn/IntroduceCollumn.jsx'

const Footer = () => {

  return(
    <footer>
      <IntroduceCollumn/>
      <AboutShop/>
    </footer>
  )
}

export default Footer