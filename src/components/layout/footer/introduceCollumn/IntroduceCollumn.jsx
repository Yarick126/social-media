import { Link } from 'react-router-dom';
import styles from './InntroduceCollumn.module.scss';


function IntroduceCollumn() {
  return (
    <div className={styles.introduceCollumn}>
      <Link to='/'>
        <img src="logo_15942853415624.png" alt="404"/>
      </Link>
      <span>© 2023 Мир мебели</span>
      <Link to='#'>Политика конфиденциальности</Link>
      <Link to='#'>Согласие на обработку персональных данных</Link>
      <p>Используя данный сайт, вы автоматически принимаете условия пользовательского соглашения и соглашаетесь с политикой конфиденциальности.</p>
    </div>
  );
}

export default IntroduceCollumn;