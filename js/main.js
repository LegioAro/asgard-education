if (document.querySelector('.feedback__items')) {
  const swiper = new Swiper('.feedback__items', {
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

//info popup
const infoBtns = document.querySelectorAll('.lesson__desc');
if (infoBtns.length > 0) {
  infoBtns.forEach((btn) => {
    const popup = btn.querySelector('.lesson__desc-info');
    let popupWidth = 380;
    const buttonRect = btn.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const buttonRight = windowWidth - buttonRect.right;

    if (popup.classList.contains('lesson__title--tmpl-2')) {
      popupWidth = 360;
    }

    if (windowWidth <= 768) {
      popupWidth = 300;
    }

    if (buttonRight < popupWidth / 2) {
      popup.style.right = `-${buttonRight - 20}px`;
    }

    if (buttonRect.left < popupWidth / 2) {
      popup.style.left = `-${buttonRect.left - 20}px`;
    }
  });
}
