  const tabItem = document.querySelectorAll(".tabs__btn-item");
  const tabContent = document.querySelectorAll(".tabs__content-item");  /** нашли тех и тех */

  tabItem.forEach(function name(el) {
    el.addEventListener('click', open) /* пробегались по кнопкам и отслеживали клик на них */
  })

  function open(evt) {
    const tabTarget = evt.currentTarget; /* отслеживаем по ip на том на ком это происходит */

     const button = tabTarget.dataset.button;

    tabItem.forEach(function name(item) {
      item.classList.remove('tabs__btn-item--active');
    })
    
    tabTarget.classList.add('tabs__btn-item--active'); /*убераем класс активности  */

    tabContent.forEach(function (item) {
      item.classList.remove('tabs__content-item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
  }

  const menuBtm =  document.querySelector('.menu__btn');

  const menu =  document.querySelector('.menu__list');
  

  menuBtm.addEventListener('click', ()=>{
   menu.classList.toggle('menu__list--active');
  } );



  const swiper = new Swiper(".swiper", {
    effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay:3000,
        dssableOnInteraction:false,
      },
    });
  