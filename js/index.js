// const headerItem = document.querySelector('.header__item');

// Додайте обробник події на клік по гамбургер кнопці
// headerItem.addEventListener('click', () => {
//   headerItem.classList.toggle('active');
// });


$(".bbutton").on("click", function () {
    $(".header__item").toggleClass("active");
});

// photo slider
console.log("H");
$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    }); 

    $(window).on('resize', function () {
        if ($(window).width() < 1100) {
            $('.slider').slick('slickSetOption', 'slidesToShow', 1, true);
        } else if ($(window).width() < 1400) {
            $('.slider').slick('slickSetOption', 'slidesToShow', 2, true);
        } else {
            $('.slider').slick('slickSetOption', 'slidesToShow', 3, true);
        }
    });
});

// tabcontent in product page
function openInfo(evt, infoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("product__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("product__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").addClass("active");

