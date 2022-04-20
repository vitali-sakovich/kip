$(document).ready(function () {

  // слайдер видео на главной
  $('.bg-video').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5100,
    speed: 200,
    fade: true,
    arrows: false,
    cssEase: 'linear'
  });

  // слайдер товаров
  $('.js-init-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    prevArrow: $('.product-prev'),
    nextArrow: $('.product-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // слайдер товаров
  $('.js-init-slider2').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    prevArrow: $('.product-prev2'),
    nextArrow: $('.product-next2'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // слайдер проектов
  $('.slider-projects__track').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    prevArrow: $('.project-prev'),
    nextArrow: $('.project-next'),
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // слайдер поставщиков
  $('.slider-suppliers__track').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    prevArrow: $('.suppliers-prev'),
    nextArrow: $('.suppliers-next'),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // gallery slider
  $('.gallery-slider__for-catalog').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-slider__row-catalog'
  });
  $('.gallery-slider__row-catalog').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.gallery-slider__for-catalog',
    dots: false,
    infinite: true,
    focusOnSelect: true,
    prevArrow: $('.gallery-btn_prev-catalog'),
    nextArrow: $('.gallery-btn_next-catalog'),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });

  // gallery slider
  $('.gallery-slider__for-projects').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-slider__row-projects'
  });
  $('.gallery-slider__row-projects').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.gallery-slider__for-projects',
    dots: false,
    infinite: true,
    focusOnSelect: true,
    prevArrow: $('.gallery-btn_prev-projects'),
    nextArrow: $('.gallery-btn_next-projects'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });

  // если слайды помещаются на экран без прокрутки, убирается навигация слайдер
  function controlsHidden() {
    const controlSlider = document.querySelectorAll('.product-slider__block');
    const controlSliderArray = Array.prototype.slice.call(controlSlider);
    controlSliderArray.forEach(function (item) {
      const slickHidden = item.querySelector(".slick-hidden");
      if (slickHidden !== null) {
        item.classList.add('hidden')
      }
      else if (!slickHidden) {
        return;
      }
    }
    );
  };


  function controlGallery() {
    const gallerySliderInner = document.querySelectorAll('.gallery-slider__inner');
    const gallerySliderInnerArray = Array.prototype.slice.call(gallerySliderInner);
    gallerySliderInnerArray.forEach(function (itemGallery) {
      const galleryBtnHidden = itemGallery.querySelector(".slick-hidden");
      if (galleryBtnHidden !== null) {
        itemGallery.classList.add('hidden')
      }
      else if (!galleryBtnHidden) {
        return;
      }
    }
    );
  };

  window.onload = function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('loader');
    window.setTimeout(function () {
      preloader.remove();
    }, 500);
    controlsHidden();
    controlGallery();
  }


  // маска телефона
  jQuery(function ($) {
    $.mask.definitions['~'] = '[1,2,3,4,5,6,8,9]';
    $('.phone_validate').mask("+7 (~99) 999-99-99");
    $.mask.definitions['~'] = '[1,2,3,4,5,6,8,9]';
    $(".date_validate").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
  });

  // input phone    
  $(document).on('keypress', function (evt) {
    if (evt.isDefaultPrevented()) {
      // Assume that's because of maskedInput
      // See https://github.com/guillaumepotier/Parsley.js/issues/1076
      $(evt.target).trigger('input');
    }
  });


  //   placeholder
  $('.input, .textarea').on('focusin', function () {
    $(this).addClass('is-active');
  });
  $('.input, .textarea').on('focusout', function () {
    if (!$(this).val()) {
      $(this).removeClass('is-active');
    }
  });

  // очистка форм
  (function () {
    // очистка инпута
    function clearInput(clearInput) {
      const input = clearInput.querySelector('.input');
      const clearBtn = clearInput.querySelector('.clear-input');

      if (!clearBtn) {
        return;
      }

      clearBtn.addEventListener("click", function (e) {
        input.value = "";
      });
    }
    const label = document.querySelectorAll('.label');
    label.forEach(clearInput);

    // очистка Textarea
    function clearTextarea(clearTextarea) {
      const textarea = clearTextarea.querySelector('.textarea');
      const clearBtn = clearTextarea.querySelector('.clear-input');
      if (!clearBtn) {
        return;
      }
      clearBtn.addEventListener("click", function (e) {
        textarea.value = "";
      });
    }
    const labelTextarea = document.querySelectorAll('.label-textarea');
    labelTextarea.forEach(clearTextarea);
  })();

  // появление лого в кнопке каталог
  (function () {
    const triger = document.querySelector('.triger');

    const postion = $('.triger').offset().top;
    height = $('.triger').height();
    $(document).on('scroll', function () {
      const scroll = $(document).scrollTop();
      if (scroll > postion) {
        $('.logo-btn').addClass('open');
      } else {
        $('.logo-btn').removeClass('open');
      }
    });
  })();

  // счетчик товаров
  (function () {
    function addHandlers(count) {
      const minus = count.querySelector(".counter__minus");
      let number = count.querySelector(".counter__number");
      const plus = count.querySelector(".counter__plus");
      plus.addEventListener("click", function () {
        number.value++;
      });
      minus.addEventListener("click", function () {
        number.value--;
      });
    }
    var counts = document.querySelectorAll(".counter");
    counts.forEach(addHandlers);
  })();

  $('.counter__number').on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
  });



  // модалки
  (function () {
    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');
    const basketBtn = document.querySelectorAll('.basket-btn');
    const basket = document.querySelector('.basket');
    const searchBtn = document.querySelectorAll('.search-btn');
    const modalSearch = document.querySelector('.modal-search');
    const modalCall = document.querySelector('.modal-call');
    const btnCall = document.querySelectorAll('.btn__phone-modal');
    const modalPassword = document.querySelector('.change-password');
    const btnPassword = document.querySelector('.btn-change-password');
    const changeAddress = document.querySelector('.change-address');
    const btnChangeAddress = document.querySelectorAll('.btn-change-address');
    const addAddress = document.querySelector('.add-address');
    const bntAddAddress = document.querySelector('.btn-add-address');
    const changeDataIndividual = document.querySelector('.change-data-individual');
    const btnChangeData = document.querySelector('.btn-change-data');
    const autorization = document.querySelector('.autorization');
    const btnAuthorization = document.querySelectorAll('.authorization-btn');
    const passwordRecovery = document.querySelector('.password-recovery');
    const btnPasswordRecovery = document.querySelector('.btn-password-recovery');
    const registration = document.querySelector('.registration');
    const btnRegistration = document.querySelector('.btn-registration');
    const servicesBtn = document.querySelectorAll('.js-services-btn');
    const orderService = document.querySelector('.order-service');
    const consultation = document.querySelector('.consultation');
    const btnModalConsultations = document.querySelector('.js-btn-modal-consultations');
    const changeDataEntity = document.querySelector('.change-data-entity');
    const btnChangeDataEntity = document.querySelector('.btn-change-data-entity');
    const modalThank = document.querySelector('.modal-thank');
    const btnModalThank = document.querySelector('.btn-modal-thank');
    const consentModal = document.querySelector('.consent-modal');
    const btnAgree = document.querySelectorAll('.btn-agree');
    const politicsModal = document.querySelector('.politics-modal');
    const btnPolitics = document.querySelector('.btn-politics');

    basketBtn.forEach(function (basketBtnItem) {
      basketBtnItem.addEventListener('click', openBasket);
    });

    searchBtn.forEach(function (searchBtnItem) {
      searchBtnItem.addEventListener('click', openSearch);
    });

    btnCall.forEach(function (btnCallItem) {
      btnCallItem.addEventListener('click', openCall);
    });

    btnChangeAddress.forEach(function (btnAddressItem) {
      if (!btnChangeAddress) {
        return;
      }
      btnAddressItem.addEventListener('click', openChangeAddress);
    });

    if (btnPassword !== null) {
      btnPassword.addEventListener('click', openPassword);
    }

    if (bntAddAddress !== null) {
      bntAddAddress.addEventListener('click', openAddAddress);
    }

    if (btnChangeData !== null) {
      btnChangeData.addEventListener('click', openchangeDataIndividual);
    }

    if (btnPasswordRecovery !== null) {
      btnPasswordRecovery.addEventListener('click', openPasswordRecovery);
    }

    btnAuthorization.forEach(function (btnAuthorizationItem) {
      btnAuthorizationItem.addEventListener('click', openAuthorization);
    });

    servicesBtn.forEach(function (servicesBtnItem) {
      servicesBtnItem.addEventListener('click', openorderService);
    });

    btnAgree.forEach(function (btnAgreeItem) {
      btnAgreeItem.addEventListener('click', openConsentModal);
    });

    if (btnRegistration !== null) {
      btnRegistration.addEventListener('click', openRegistration);
    }

    if (btnModalConsultations !== null) {
      btnModalConsultations.addEventListener('click', openConsultation);
    }

    if (btnChangeDataEntity !== null) {
      btnChangeDataEntity.addEventListener('click', openchangeDataEntity);
    }

    if (btnModalThank !== null) {
      btnModalThank.addEventListener('click', openModalThank);
    }

    if (btnPolitics !== null) {
      btnPolitics.addEventListener('click', openpoliticsModal);
    }



    function modal(modal) {
      const overlay = modal.querySelector('.overlay');
      const closeModal = modal.querySelector('.close-modal');

      closeModal.addEventListener('click', modalHidden);
      overlay.addEventListener('click', modalHidden);

      function modalHidden() {
        modal.classList.remove('open');
        body.classList.remove('hidden');
        window.setTimeout(function () {
          modal.style.display = 'none';
        }, 300);
      }

    }
    modals.forEach(modal);

    function openBasket() {
      basket.style.display = 'block';
      basket.classList.add('open');
      body.classList.add('hidden');
    };

    function openSearch() {
      modalSearch.style.display = 'block';
      formTab();
      modalSearch.classList.add('open');
      body.classList.add('hidden');
      $(".resalt-search").getNiceScroll().show().resize();
    };


    function openCall() {
      modalCall.style.display = 'block';
      formTab();
      modalCall.classList.add('open');
      body.classList.add('hidden');
    };

    function openPassword() {
      if (!modalPassword) {
        return;
      }
      modalPassword.style.display = 'block';
      formTab();
      modalPassword.classList.add('open');
      body.classList.add('hidden');
    };

    function openpoliticsModal() {
      if (!politicsModal) {
        return;
      }
      politicsModal.style.display = 'block';
      politicsModal.classList.add('open');
      body.classList.add('hidden');
      $(".simplebar").getNiceScroll().show().resize();
    };

    function openModalThank() {
      if (!modalThank) {
        return;
      }
      modalThank.style.display = 'block';
      modalThank.classList.add('open');
      body.classList.add('hidden');
    };

    function openConsentModal() {
      if (!consentModal) {
        return;
      }
      consentModal.style.display = 'block';
      consentModal.classList.add('open');
      $(".simplebar").getNiceScroll().show().resize();
    };

    function openChangeAddress() {
      if (!changeAddress) {
        return;
      }
      changeAddress.style.display = 'block';
      formTab();
      changeAddress.classList.add('open');
      body.classList.add('hidden');
    };

    function openAddAddress() {
      if (!addAddress) {
        return;
      }
      addAddress.style.display = 'block';
      formTab();
      addAddress.classList.add('open');
      body.classList.add('hidden');
    };

    function openchangeDataIndividual() {
      if (!changeDataIndividual) {
        return;
      }
      changeDataIndividual.style.display = 'block';
      formTab();
      changeDataIndividual.classList.add('open');
      body.classList.add('hidden');
    };

    function openorderService() {
      if (!orderService) {
        return;
      }
      orderService.style.display = 'block';
      formTab();
      orderService.classList.add('open');
      body.classList.add('hidden');
    };

    function openConsultation() {
      if (!consultation) {
        return;
      }
      consultation.style.display = 'block';
      formTab();
      consultation.classList.add('open');
      body.classList.add('hidden');
    };

    function openchangeDataEntity() {
      if (!changeDataEntity) {
        return;
      }
      changeDataEntity.style.display = 'block';
      formTab();
      changeDataEntity.classList.add('open');
      body.classList.add('hidden');
    };



    function openAuthorization() {
      if (!autorization) {
        return;
      }
      autorization.style.display = 'block';
      formTab();
      autorization.classList.add('open');
      body.classList.add('hidden');
      passwordRecovery.classList.remove('open');
      body.classList.remove('hidden');
      window.setTimeout(function () {
        passwordRecovery.style.display = 'none';
      }, 300);
      if (registration !== null) {
        registration.classList.remove('open');
        window.setTimeout(function () {
          registration.style.display = 'none';
        }, 300);
      }
    };

    function openPasswordRecovery() {
      if (!passwordRecovery) {
        return;
      }
      passwordRecovery.style.display = 'block';
      formTab();
      passwordRecovery.classList.add('open');
      body.classList.add('hidden');
      autorization.classList.remove('open');
      body.classList.remove('hidden');
      window.setTimeout(function () {
        autorization.style.display = 'none';
      }, 300);
    };

    function openRegistration() {
      if (!registration) {
        return;
      }
      registration.style.display = 'block';
      formTab();
      registration.classList.add('open');
      body.classList.add('hidden');
      autorization.classList.remove('open');
      body.classList.remove('hidden');
      window.setTimeout(function () {
        autorization.style.display = 'none';
      }, 300);
    };

    // фокусировка табом
    function formTab() {
      const formModal = document.querySelectorAll('.modal form');
      formModal.forEach(function (formModalItem) {
        let lastElem = formModalItem.elements[formModalItem.elements.length - 1];
        let firstElem = formModalItem.elements[0];

        lastElem.onkeydown = function (e) {
          if (e.key == 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
          }
        };

        firstElem.onkeydown = function (e) {
          if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
          }
        };
        formModalItem.elements[0].focus();
      });
    }


  })();

  // вызов модалки каталог
  (function () {

    function catalogModal() {
      const btnCatalogOpen = document.querySelector('.btn-catalog_open');
      const btnCatalogClose = document.querySelector('.btn-catalog_close');
      const catalogModal = document.querySelector('.catalog-modal');
      const body = document.querySelector('body');

      btnCatalogOpen.addEventListener('click', function () {
        catalogModal.classList.add('open');
        body.classList.add('hidden');
        $(".catalog-tab__list").getNiceScroll().show().resize();
        $(".catalog-tabs__list").getNiceScroll().show().resize();
      });

      btnCatalogClose.addEventListener('click', function () {
        catalogModal.classList.remove('open');
        body.classList.remove('hidden');
      });

    };
    catalogModal();

  })();

  // скролл карзины
  $(document).ready(
    function () {
      $(".resalt-search").niceScroll(".resalt-search__list", {
        cursorcolor: "#757e8f",
        cursorwidth: "9px",
        cursorborder: false,
        cursorborderradius: false,
        autohidemode: false
      });
    }
  );

  // полоса прокрутки каталога
  $(document).ready(
    function scrollNice() {
      $(".catalog-tab__list").niceScroll({
        cursorcolor: "#757e8f",
        cursorwidth: "9px",
        cursorborder: false,
        cursorborderradius: false,
        autohidemode: false
      });
    }
  );


  $(document).ready(
    function scrollNice() {
      $(".simplebar").niceScroll({
        cursorcolor: "#757e8f",
        cursorwidth: "9px",
        cursorborder: false,
        cursorborderradius: false,
        autohidemode: false
      });
    }
  );


  // полоса прокрутки каталога
  $(document).ready(
    function () {
      $(".autocomplite-location").niceScroll(".autocomplite-location__list", {
        cursorcolor: "#757e8f",
        cursorwidth: "9px",
        cursorborder: false,
        cursorborderradius: false,
        autohidemode: false
      });
    }
  );


  // полоса прокрутки каталога
  $(document).ready(
    function () {
      $(".catalog-tabs").niceScroll(".catalog-tabs__scroll", {
        cursorcolor: "#757e8f",
        cursorwidth: "9px",
        cursorborder: false,
        cursorborderradius: false,
        autohidemode: false
      });
    }
  );

  // табы меню каталога
  $('.catalog-tab__list').on('click', 'div:not(.catalog-tab_active)', function () {
    $(this)
      .addClass('catalog-tab_active').siblings().removeClass('catalog-tab_active')
      .closest('div.catalog-modal__block').find('div.catalog-tabs').removeClass('catalog-tabs_active').eq($(this).index()).addClass('catalog-tabs_active');
  });

  // табы каталог детальная
  $('.product-tabs').on('click', 'div:not(.active_tab)', function () {
    $(this)
      .addClass('active_tab').siblings().removeClass('active_tab')
      .closest('div.product-about__inner').find('div.product__content-item').removeClass('content_active').eq($(this).index()).addClass('content_active');
  });


  // табы форм
  $('.form-tabs').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.form__block').find('div.form-content__item').removeClass('active').eq($(this).index()).addClass('active');
  });

  // // скролл вниз страницы 
  (function () {
    const button = document.querySelector(".down");

    button.addEventListener('click', function (e) {
      e.stopPropagation();
      let scrollDistance = document.documentElement.clientHeight;
      if (button.className.split(' ').includes('scroll-up')) {
        scrollDistance *= -1;
      }
      window.scrollBy(0, scrollDistance);
    });

  })();
  document.querySelectorAll('.down').forEach(button => {

  });
  // скрытие кнопки вниз
  (function () {
    const postion = $('footer').offset().top - 500;
    height = $('footer').height();
    $(document).on('scroll', function () {
      const scroll = $(document).scrollTop();
      if (scroll > postion) {
        $('.down').addClass('hidden');
      } else {
        $('.down').removeClass('hidden');
      }
    });
  })();

  // Прикрепить файл
  (function () {
    const inputFile = document.querySelector('.input-file');
    const labelFileName = document.querySelector('.file-name');
    if (inputFile != null) {
      let clearFile = renderCloseBtn();

      inputFile.addEventListener('change', inputFileHendler)
      clearFile.addEventListener('click', cickCloseHeendler)

      function inputFileHendler(e) {
        let target = e.target;

        if (target == inputFile && target.files != null) {
          let fileName = target.files[0].name;

          labelFileName.textContent = fileName;
          labelFileName.append(clearFile);
        }
      }

      function cickCloseHeendler(e) {
        e.preventDefault();
        inputFile.value = '';
        clearFile.remove();
        labelFileName.textContent = 'Прикрепить файл';
        const img = document.createElement('img');
        const contentCooperation = document.querySelector('.content__cooperation');
        img.classList.add('attach');
        img.src = '../img/attach.svg';
        labelFileName.appendChild(img);
      }

      function renderCloseBtn() {
        let span = document.createElement('span');
        span.classList.add('label-file__clear');
        span.innerHTML = '&times;';
        return span;
      }
    }
  })();

  // select
  function sortSelect() {
    const selectDrop = document.querySelector('.sort__dropdown');

    if (selectDrop == null) {
      return;
    };

    $(document).ready(function () {
      $('.sort__dropdown').niceSelect();
    });
  }
  sortSelect();

  // расположение карточек товара
  function sortCatalog() {
    const btnRow = document.querySelector('.sort-layout__btn_row');
    const btnCol = document.querySelector('.sort-layout__btn_col');
    const catalogContainer = document.querySelector('.catalog-container');

    if (!catalogContainer) {
      return;
    }

    btnCol.addEventListener('click', clickCol);
    btnRow.addEventListener('click', clickRow);

    function clickCol() {
      catalogContainer.classList.add('catalog-container_col');
      catalogContainer.classList.remove('catalog-container_row');
      btnRow.classList.remove('active');
      btnCol.classList.add('active');
      localStorage.setItem('catalog', 'col');
    };

    function clickRow() {
      catalogContainer.classList.remove('catalog-container_col');
      catalogContainer.classList.add('catalog-container_row');
      btnRow.classList.add('active');
      btnCol.classList.remove('active');
      localStorage.setItem('catalog', 'row');
    };

    let localCatalog = localStorage.getItem('catalog');
    if (localCatalog == 'row') {
      clickRow();
    } else if (localCatalog == 'col') {
      clickCol();
    }

  };
  sortCatalog();


  (function () {
    function defaultText(defaultText) {
      const defaultBtn = defaultText.querySelector('.default');
      const activeDefault = defaultText.querySelector('.active');
      if (defaultBtn == activeDefault) {
        defaultBtn.innerHTML = 'По умолчанию';
      }
    };
    const profile = document.querySelectorAll('.profile_col');
    profile.forEach(defaultText);
  })();

  // показать фильтры 
  function OpenFilter() {
    const btnFilterOpen = document.querySelector('.btn-filter');
    const filter = document.querySelector('.filter');

    if (!btnFilterOpen) {
      return;
    }

    btnFilterOpen.addEventListener('click', () => {
      btnFilterOpen.innerHTML = (btnFilterOpen.innerHTML === 'Скрыть все фильтры') ? btnFilterOpen.innerHTML = 'Показать все фильтры' : btnFilterOpen.innerHTML = 'Скрыть все фильтры';

      filter.classList.toggle('open');
    })
  }
  OpenFilter();



  // пароль скрыть, показать
  $('body').on('click', '.password-control', function () {
    if ($('.js-password').attr('type') == 'password') {
      $(this).addClass('view');
      $('.js-password').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('.js-password').attr('type', 'password');
    }
    return false;
  });


  // Пустая корзина
  function basketNotDelete() {

    const basketNot = document.querySelector('.basket_not');
    const basketNotText = document.querySelector('.basket-not__text');
    if (!basketNotText) {
      return;
    }
    if (!basketNot) {
      basketNotText.remove();
    }
  };
  basketNotDelete();

  // Textarea Автовысота
  (function () {
    document.querySelectorAll('textarea').forEach(el => {
      el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
      el.classList.add('auto');
      el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
      });
    });
  })();


  // Закратие модалок на Esc
  (function () {
    document.addEventListener('keydown', ESCclose);
    function ESCclose(evt) {
      if (evt.keyCode == 27) {
        //window.close();
        const bodyEsc = document.querySelector('body');
        const modalEsc = document.querySelectorAll('.modal');
        modalEsc.forEach(function (modalEscIttem) {
          modalEscIttem.classList.remove('open');
          bodyEsc.classList.remove('hidden');
          window.setTimeout(function () {
            modalEscIttem.style.display = 'none';
          }, 300);
        });
      }
    };
  })();


  function consent() {
    const consentYes = document.querySelector('.consent-yes');
    const consentNo = document.querySelector('.consent-no');
    const checkData = document.querySelectorAll('.check-data');
    const consentModal = document.querySelector('.consent-modal');

    function modalClose() {
      consentModal.classList.remove("open");
      window.setTimeout(function () {
        consentModal.style.display = 'none';
      }, 300);
    }
    consentYes.addEventListener('click', function () {
      checkData.forEach(function (checkDataItem) {
        checkDataItem.checked = true;
        modalClose();
      })
    });

    consentNo.addEventListener('click', function () {
      checkData.forEach(function (checkDataItem) {
        checkDataItem.checked = false;
        modalClose();
      })
    });

  };
  consent();

});








// добавления классов на разрешении 1023
$(document).ready(function () {
  function checkWidth() {
    const windowWidth = $('body').innerWidth(),
      dropdownBtn = $('.dropdown-btn'),
      tab = $('.catalog-tab'),
      tabs = $('.catalog-tabs')

    if (windowWidth < 600) {
      tab.removeClass('catalog-tab_active');
      tabs.removeClass('catalog-tabs_active');
      $('.catalog-tab').on('click', function () {
        $('.catalog-tabs__list').addClass('active');
        $('.close-tabs').addClass('active');
      });
      $('.close-tabs').on('click', function () {
        $('.catalog-tabs__list').removeClass('active');
        $('.close-tabs').removeClass('active');
        $('.catalog-tabs').removeClass('catalog-tabs_active');
        $('.catalog-tab').removeClass('catalog-tab_active');
      });
    }
  }
  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });
});

