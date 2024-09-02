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
        }

        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }
});

// Cлайдер

new Swiper('.layout__slider', {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.layout__next',
        prevEl: '.layout__prev',
    }
});

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

new Swiper('.construction__slider', {

    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
        nextEl: '.construction__next',
        prevEl: '.construction__prev',
    },
    scrollbar: {
        el: '.construction__scrollbar',
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
