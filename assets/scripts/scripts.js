document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu-overlay");
    const closeMenu = document.querySelector(".close-mobile-menu");

    // открытие моб меню
    burger.addEventListener("click", function() {
        mobileMenu.classList.add("active");
    });

    // закрытие моб меню
    closeMenu.addEventListener("click", function() {
        mobileMenu.classList.remove("active");
    });

    const menuItems = document.querySelectorAll(".mobile-menu__item > .mobile-menu__link");

    // открытие подменю
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Отмена перехода по ссылке
            const submenu = this.nextElementSibling;
            
            if (submenu && submenu.classList.contains("mobile-submenu")) {
                if (submenu.style.maxHeight) {
                    submenu.style.maxHeight = null;
                    submenu.style.overflow = "hidden";
                    submenu.classList.remove("active");
                } else {
                    submenu.classList.add("active");
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                    submenu.style.overflow = "visible";
                }
            }
        });
    });

    //Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
        //
    });

    //Aside
    document.querySelectorAll(".aside-item > p").forEach(item => {
        item.addEventListener("click", function () {
            let parent = this.closest(".aside-item");
            let sublist = parent.querySelector(".aside-sublist");
            
            if (sublist) {
                let isActive = parent.classList.contains("aside-item__active");
                
                // Закрываем все открытые элементы
                document.querySelectorAll(".aside-item").forEach(el => {
                    el.classList.remove("aside-item__active");
                    let sub = el.querySelector(".aside-sublist");
                    if (sub) sub.style.maxHeight = null;
                });
                
                // Открываем или закрываем текущий
                if (!isActive) {
                    parent.classList.add("aside-item__active");
                    sublist.style.maxHeight = sublist.scrollHeight + "px";
                }
            }
        });
    });
});