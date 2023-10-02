import { Link } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss'
import { HiSquares2X2 } from 'react-icons/hi2'

function HeaderNavigation(props) {
  return (
    <nav className={styles.navigation}>
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
    </nav>
  );
}

export default HeaderNavigation;