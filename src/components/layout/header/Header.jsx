import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import HeaderIcons from './header-icons/HeaderIcons.jsx'
import HeaderNavigation from './header-navigation/HeaderNavigation.jsx'

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
      <HeaderNavigation/>
      <hr className={styles.hrLine}/>
    </header>
  )
}

export default Header