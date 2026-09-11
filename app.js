// nav bar button

$(document).ready(function () {
    $('.btn-navigation').click(function () {
        $('.navigation').toggleClass('isOpen');
    });
    $(document).scroll(function () {
        if (document.querySelector(".navigation").classList.contains("isOpen")) {
            $('.navigation').toggleClass('isOpen');
            $(".burger-phone span:nth-of-type(1)").click();
        }
    });
});

// test: button for nav barre

let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false
    }
});