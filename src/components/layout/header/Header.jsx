import { Link } from 'react-router-dom'
import { HiSquares2X2 } from 'react-icons/hi2'
import styles from './Header.module.scss'
import HeaderIcons from './header-icons/HeaderIcons.jsx'

const Header = () => {

  return(
    <header>
      <div >
        <span>support@furniture.com</span>
        <span>8-480-953-70-65</span>
        <span>Вход / Регистрация</span>
      </div>
      <div className={styles.middleOfHeader}>

        <Link to='/'>
          <img src="logo_15942853415624.png" alt="404" />
        </Link>
      
        <p>Интернет-магазин <br />
          корпусной мебели</p>

        <div id="search-field">
          <input type="text" placeholder='Найти товар'/>
          <button>Поиск</button>
        </div>

        <HeaderIcons/>

      </div>
      <div className={styles.downOfHeader}>
        <Link to="#">
          <HiSquares2X2 
          size={30} 
          color='black' 
          onMouseOver={({target})=>target.style.color = '#ff9e75'}
          onMouseOut={({target})=>target.style.color = 'black'}
          />
          <span>Каталог</span>
        </Link>
        <Link to='/stocks'>Акции</Link>
        <Link to = '/aboutUs'>О компании</Link>
        <Link to = '/feedBack'>Отзывы</Link>
        <Link to = '/delivery'>Доставка и оплата</Link>
        <Link to = '/contacts'>Контакты</Link>
      </div>
      <hr className={styles.hrLine}/>
    </header>
  )
}

export default Header