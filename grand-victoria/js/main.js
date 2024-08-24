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

    // Модальное окно для получения консультации

    const modalCall = document.querySelector('.modal__call')
    const modalButtonCall = document.querySelector('.contacts__button')

    modalButtonCall.addEventListener('click', openModalCall)
    modalCall.addEventListener('click', closeModalCall)

    function openModalCall(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal-call')
    }

    function closeModalCall(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal__call')) {
            document.body.classList.remove('body--opened-modal-call')
        }
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal-call')) {
            document.body.classList.remove('body--opened-modal-call')
        }
    })

    // Модальное окно для 100% оплаты

    const modalFull = document.querySelector('.modal__full')
    const modalButtonFull = document.querySelector('.option__button-full')

    modalButtonFull.addEventListener('click', openModalFull)
    modalFull.addEventListener('click', closeModalFull)

    function openModalFull(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal-full')
    }

    function closeModalFull(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal__full')) {
            document.body.classList.remove('body--opened-modal-full')
        }
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal-full')) {
            document.body.classList.remove('body--opened-modal-full')
        }
    })

    // Модальное окно для рассрочки

    const modalPart = document.querySelector('.modal__part')
    const modalButtonPart = document.querySelector('.option__button-part')

    modalButtonPart.addEventListener('click', openModalPart)
    modalPart.addEventListener('click', closeModalPart)

    function openModalPart(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal-part')
    }

    function closeModalPart(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal__part')) {
            document.body.classList.remove('body--opened-modal-part')
        }
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal-part')) {
            document.body.classList.remove('body--opened-modal-part')
        }
    })

    // Модальное окно для ипотеки

    const modalMortgage = document.querySelector('.modal__mortgage')
    const modalButtonMortgage = document.querySelector('.option__button-mortgage')

    modalButtonMortgage.addEventListener('click', openModalMortgage)
    modalMortgage.addEventListener('click', closeModalMortgage)

    function openModalMortgage(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal-mortgage')
    }

    function closeModalMortgage(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal__mortgage')) {
            document.body.classList.remove('body--opened-modal-mortgage')
        }
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal-mortgage')) {
            document.body.classList.remove('body--opened-modal-mortgage')
        }
    })

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
            nextEl: '.gallery__prev',
            prevEl: '.gallery__next',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            1501: {
                slidesPerView: 2,
            }
        }
    });

    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})()
