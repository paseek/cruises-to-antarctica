import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initMap} from './modules/map/map';
import {Burger} from './utils/burger';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // const pageHeader = document.querySelector('[data-page-header]');
  // const navToggle = document.querySelector('[data-menu-toggle]');

  // navToggle.addEventListener('click', function () {
  //   pageHeader.classList.toggle('is-open');
  //   if (pageHeader.classList.contains('is-open')) {
  //     document.body.classList.add('scroll-lock');
  //   }
  //   else {document.body.classList.revome('scroll-lock');}
  // });

  // Utils
  // ---------------------------------

  iosVhFix();

  const burger = new Burger();
  burger.init();

  initMap({
    id: 'map',
    initials: {
      center: [59.93868425386648, 30.3230366711649],
      zoom: 15,
    },
    placemark: [
      {
        hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
      },
      {
        iconImageHref: 'img/svg/pin.svg',
        iconImageSize: [18, 22],
        iconImageOffset: [-9, -22],
        iconLayout: 'default#image',
        iconShadow: false,
      }
    ],
  });

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
