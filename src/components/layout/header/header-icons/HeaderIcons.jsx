import styles from './HeaderIcons.module.scss';
import {BiSolidBox} from 'react-icons/bi'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {PiBasketLight} from 'react-icons/pi'


const HeaderIcons = () => {
  return (
    <ul>
      <li>
        <BiSolidBox size={30} color='#804c3e'/>
        <span>Мои заказы</span>
      </li>
      <li>
        <MdOutlineFavoriteBorder size={30} color='#804c3e'/>
        <span>Избранное</span>
      </li>
      <li>
        <div className={styles.circle}>0</div>
        <PiBasketLight size={33} color='#804c3e'/>
        <span>Корзина</span>
      </li>
    </ul>
  )
}

export default HeaderIcons