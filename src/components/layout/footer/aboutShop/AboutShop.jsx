import { Link } from 'react-router-dom';
import styles from './AboutShop.module.scss';


function AboutShop() {
  return (
    <div className={styles.aboutShop}>
      <span>О магазине</span>
      <Link to='/'>Главная</Link>
      <Link to='/stocks'>Акции</Link>
      <Link to = '/aboutUs'>О компании</Link>
      <Link to='/delivery'>Доставка и оплата</Link>
      <Link to='/contacts'>Контакты</Link>
      <Link to='#'>Новости</Link>
      <Link to='#'>Статьи</Link>
    </div>
  );
}

export default AboutShop;