import './styles.css';
import menu from './menu.json';
import templates from './templates/cart.hbs';

const menuEl = document.querySelector('.js-menu');

const markup = templates(menu);
menuEl.insertAdjacentHTML('beforeend', markup);
