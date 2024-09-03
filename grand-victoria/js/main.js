(function () {

    // Бургер меню

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.aside')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1100) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Модалка

    document.querySelectorAll('.option__var-button, .contacts__button').forEach(button => {
        button.addEventListener('click', openModal);
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    function openModal(e) {
        e.preventDefault();

        const targetModalClass = e.currentTarget.getAttribute('data-modal-target');
        const targetModal = document.querySelector(`.${targetModalClass}`);

        if (targetModal) {
            targetModal.classList.add('modal--opened');
            document.body.classList.add('body--opened-modal');
        }
    }

    function closeModal(e) {
        e.preventDefault();
        const target = e.target;

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            e.currentTarget.classList.remove('modal--opened');
            document.body.classList.remove('body--opened-modal');
        }
    }

    function closeAllModals() {
        document.querySelectorAll('.modal.modal--opened').forEach(modal => {
            modal.classList.remove('modal--opened');
        });
        document.body.classList.remove('body--opened-modal');
    }

// Табы

document.querySelectorAll('.tab-controls').forEach(tabControls => {

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = tabControls.closest('.tab-container').querySelector(tabContentID)
        const activeControl = tabControls.querySelector('.tab-controls__link--active')
        const activeContent = tabControls.closest('.tab-container').querySelector('.tab-content--show')

        if (activeContent) {
            activeControl.classList.remove('tab-controls__link--active')
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }
});

// Cлайдер

new Swiper('.layout__slider-one', {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.layout__one-next',
        prevEl: '.layout__one-prev',
    }
});

new Swiper('.layout__slider-two', {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.layout__two-next',
        prevEl: '.layout__two-prev',
    }
});

new Swiper('.layout__slider-three', {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.layout__three-next',
        prevEl: '.layout__three-prev',
    }
});

new Swiper('.layout__slider-four', {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.layout__four-next',
        prevEl: '.layout__four-prev',
    }
});

// ----------------------------------------------

new Swiper('.gallery__slider', {

    slidesPerView: 1.5,
    spaceBetween: 10,
    initialSlide: 1,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    scrollbar: {
        el: '.gallery__scrollbar',
        draggable: true,
    },
    breakpoints: {
        1501: {
            slidesPerView: 2,
        }
    }
});

// ----------------------------------------------

new Swiper('.construction__slider-1', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-1',
        prevEl: '.construction__prev-1',
    },
    scrollbar: {
        el: '.construction__scrollbar-1',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-2', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-2',
        prevEl: '.construction__prev-2',
    },
    scrollbar: {
        el: '.construction__scrollbar-2',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-3', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-3',
        prevEl: '.construction__prev-3',
    },
    scrollbar: {
        el: '.construction__scrollbar-3',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-4', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-4',
        prevEl: '.construction__prev-4',
    },
    scrollbar: {
        el: '.construction__scrollbar-4',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-5', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-5',
        prevEl: '.construction__prev-5',
    },
    scrollbar: {
        el: '.construction__scrollbar-5',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-6', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-6',
        prevEl: '.construction__prev-6',
    },
    scrollbar: {
        el: '.construction__scrollbar-6',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-7', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-7',
        prevEl: '.construction__prev-7',
    },
    scrollbar: {
        el: '.construction__scrollbar-7',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-8', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-8',
        prevEl: '.construction__prev-8',
    },
    scrollbar: {
        el: '.construction__scrollbar-8',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-9', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-9',
        prevEl: '.construction__prev-9',
    },
    scrollbar: {
        el: '.construction__scrollbar-9',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-10', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-10',
        prevEl: '.construction__prev-10',
    },
    scrollbar: {
        el: '.construction__scrollbar-10',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-11', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-11',
        prevEl: '.construction__prev-11',
    },
    scrollbar: {
        el: '.construction__scrollbar-11',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-12', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-12',
        prevEl: '.construction__prev-12',
    },
    scrollbar: {
        el: '.construction__scrollbar-12',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-13', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-13',
        prevEl: '.construction__prev-13',
    },
    scrollbar: {
        el: '.construction__scrollbar-13',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-14', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-14',
        prevEl: '.construction__prev-14',
    },
    scrollbar: {
        el: '.construction__scrollbar-14',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-15', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-15',
        prevEl: '.construction__prev-15',
    },
    scrollbar: {
        el: '.construction__scrollbar-15',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.construction__slider-16', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next-16',
        prevEl: '.construction__prev-16',
    },
    scrollbar: {
        el: '.construction__scrollbar-16',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 3,
        },
        651: {
            slidesPerView: 2,
        }
    }
});

// Маска для телефона

const telInputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(telInputs)

/* Yandex Map */
ymaps.ready(init);
var myMap;
function init() {
    // Создание карты.     
    myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: <широта, долгота>.
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь интрументом Определение коорлинат.
        center: [51.119062658639834, 71.4829130587871],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([51.119062658639834, 71.4829130587871],
        {
            balloonContent:
                `
                <div class="balloon">
                    <address class="balloon__contacts">
                    <p class="balloon__text contacts__text">
                        Отдел продаж:
                    </p>
                    <div class="balloon__location contacts__location">
                        <div class="contacts__location-icon">
                            <img src="img/icons/location.svg" alt="Локация">
                        </div>
                        г. Нур-Султан,<br>
                        пересечение ул. С. Нурмағамбетова
                        <br>и Ж.Нажімеденова
                    </div>
                    <div class="balloon__tel contacts__tel">
                        <div class="contacts__tel-icon">
                            <img src="img/icons/phone.svg" alt="Телефон">
                        </div>
                        <a href="tel:+77172777777">
                            +7 7172 77-77-77
                        </a>
                    </div>
                </div>
                `,
        },
        {
            iconLayout: "default#image",
            iconImageHref: "img/icons/logo/logo-3.svg",
            iconImageSize: [100, 96],
            iconImageOffset: [-50, -48]
        });


    myMap.controls.remove("geolocationControl"); // удаляем геолокацию
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафика
    myMap.controls.remove("typeSelector"); // удаляем тип

    // myMap.controls.remove("fullscreenControl"); //удаляем кнопку перехода в полноэкранный режим
    // myMap.controls.remove("zoomControl"); // удаляем контрол зкммирования
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
    myMap.behaviors.disable("scrollZoom"); // отключаем скролл карты (опционально)

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    // myPlacemark.balloon.open();

}


}) ()
