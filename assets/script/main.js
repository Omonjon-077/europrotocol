/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");

});

// Header | Search modal ************************************ */
if ($(".search-action").length) {
    $(".search-action").click(function () {
        // $(".search-action-input").attr("autofocus", "autofocus");
        // $(".search-action-input").autocomplete({
        //     autoFocus: true
        // });
        var interval = 500;
        setTimeout(() => {
            $('.search-action-input').focus();
            console.log('work');
        }, interval);
    });
};

/* Voice on mode ******************************************** */
/* Modal okna zvukovoy effect uchun ************************* */
let Voicemode = localStorage.getItem("Voicemode");
var voiceTop = document.querySelector(".voiceOn");
var timeCloseModalAlert = 1000;
let voiceOn = false;
let voiceCheck = true;
var voiceModeControl = document.querySelector(".voiceModeControl");
const voiceModeToggle = document.querySelector(".mode__voice");
let voiceSaveToggle = document.querySelector(".voicemode input[type='checkbox']");

/* Barcha matnlarni ovozlarni ******************************* */
/* ijro etuvchi funksiyalar shuni ichida ******************** */
function ifActiveVoice() {
    if (!voiceOn) {
        // Malum secundan keyin sahifa yangilanadi
        setInterval(() => {
            location.reload();
        }, timeCloseModalAlert);
    } else if (voiceOn) {
        // A simple IIFE function.
        // Простая функция IIFE.
        // Oddiy IIFE funktsiyasi.
        (function () {
            "use strict"; // For the sake of practice.
            // Ради практики.
            // Amaliyot uchun.

            if (typeof speechSynthesis === 'undefined') return; // Some config stuffs...
            // Некоторые конфиги...
            // Ba'zi konfiguratsiyalar ...

            var voiceSelect = document.getElementById("voiceSelect");
            var myPhrase = ' ';
            var voices = []; // This is essentially similar to jQuery's $.ready.
            // По сути, это похоже на $.ready в jQuery.
            // Bu mohiyatan jQuery $.ready dasturiga o'xshaydi.

            var ready = function (callback) {
                var d = document,
                    s = d.readyState; // DOMContentLoaded was fired
                // DOMContentLoaded был запущен
                // DOMContentLoaded ishdan bo'shatildi

                if (s === "complete" || s === "loaded" || s === "interactive") {
                    callback();
                } else {
                    if (d.addEventListener) {
                        d.addEventListener("DOMContentLoaded", callback, false);
                    } else {
                        d.attachEvent("onDOMContentLoaded", callback);
                    }
                }
            }; // This is a function to display all possible voice options.
            // Это функция для отображения всех возможных вариантов голоса.
            // Bu barcha mumkin bo'lgan ovozli variantlarni ko'rsatish funksiyasi.


            function populateVoiceList() {
                voices = speechSynthesis.getVoices();

                for (var i = 0; i < voices.length; i++) {
                    var option = document.createElement('option');
                    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
                    option.textContent += voices[i].default ? ' -- DEFAULT' : '';
                    option.setAttribute('data-lang', voices[i].lang);
                    option.setAttribute('data-name', voices[i].name);
                    document.getElementById("voiceSelect").appendChild(option);
                }
            } // This is the handler for when the select tag is changed.
            // Это обработчик изменения тега select.
            // Bu tanlangan teg o'zgartirilganda ishlov beruvchidir.


            function handler() {
                var utterThis = new SpeechSynthesisUtterance(myPhrase);
                var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

                for (var i = 0; i < voices.length; i++) {
                    if (voices[i].name === selectedOption) {
                        utterThis.voice = voices[i];
                    }
                }

                speechSynthesis.speak(utterThis);
            };

            function buildBtn(e) {
                let button = document.getElementById("voice");
                if (!getSelectionText()) {
                    button.style.display = "none";
                } else if (getSelectionText()) {
                    let x = e.pageX;
                    let y = e.pageY;
                    let justBitPlus = -20;
                    let justBitMinus = -5;
                    button.style.display = "block";
                    button.style.position = "absolute";
                    button.style.left = justBitPlus + x + "px";
                    button.style.top = justBitPlus + y + "px";
                    /*button.style.left = justBitMinus + x + "px";
                     button.style.top = justBitMinus + y + "px";*/

                    /*
                    let coor = "Coordinates: (" + x + "," + y + ")";
                    button.innerHTML = coor;
                    button.style.left = justBit + x + "px";
                    button.style.top = justBit + y + "px";
                    */
                }

            }

            function fnBrowserDetect() {
                let userAgent = navigator.userAgent;
                let browserName;
                var button = document.querySelector(".btn-voice");
                var detectBrowser = document.querySelector(".detect");

                if (userAgent.match(/chrome|chromium|crios/i)) {
                    button.addEventListener("click", () => {
                        setTimeout(function () {
                            speechSynthesis.cancel();
                            myPhrase = getSelectionText();
                            handler();
                        }, 1);
                    });
                    console.log("chrome work");
                } else if (userAgent.match(/firefox|fxios/i)) {
                    setTimeout(function () {
                        speechSynthesis.cancel();
                        myPhrase = getSelectionText();
                        handler();
                    }, 1);
                } else if (userAgent.match(/safari/i)) {
                    setTimeout(function () {
                        speechSynthesis.cancel();
                        myPhrase = getSelectionText();
                        handler();
                    }, 1);
                } else if (userAgent.match(/opr\//i)) {
                    button.addEventListener("click", () => {
                        setTimeout(function () {
                            speechSynthesis.cancel();
                            myPhrase = getSelectionText();
                            handler();
                        }, 1);
                    });
                } else if (userAgent.match(/edg/i)) {
                    button.addEventListener("click", () => {
                        setTimeout(function () {
                            speechSynthesis.cancel();
                            myPhrase = getSelectionText();
                            handler();
                        }, 1);
                    });
                } else {
                    button.addEventListener("click", () => {
                        setTimeout(function () {
                            speechSynthesis.cancel();
                            myPhrase = getSelectionText();
                            handler();
                        }, 1);
                    });
                }
            } // This is your code to get the selected text.
            // Это ваш код для получения выделенного текста.
            // Bu tanlangan matnni olish uchun sizning kodingiz.


            function getSelectionText() {
                var text = "";

                if (window.getSelection) {
                    text = window.getSelection().toString().trim(); // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
                    // для Internet Explorer 8 и ниже. Для Blogger следует использовать &amp;&amp; вместо &&.
                    // Internet Explorer 8 va undan past versiyalar uchun. Blogger uchun siz &amp;&amp;amp;amp;amp; ning o'rniga &&.
                } else if (document.selection && document.selection.type !== "Control") {
                    text = document.selection.createRange().text;
                }

                return text;
            } // This is the on mouse up event, no need for jQuery to do this.
            // Это событие при наведении мыши, для этого не требуется jQuery.
            // Bu sichqonchani yuqoriga ko'tarish hodisasi, buni amalga oshirish uchun jQuery kerak emas.


            document.onmouseup = function (e) {
                fnBrowserDetect();
                buildBtn(e);
            }; // Some place for the application to start.
            // Некоторое место для запуска приложения.
            // Ilovani boshlash uchun ba'zi joy.


            function start() {
                populateVoiceList();
                if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = populateVoiceList;
                voiceSelect.onchange = handler;
                setTimeout(handler, 75);
            } // Run the start function.
            // Запускаем функцию запуска.
            // Boshlash funksiyasini ishga tushiring.

            ready(start);


        })();
    }
}
const enableVoiceMode = () => {
    voiceTop.classList.add("active");
    voiceModeControl.classList.add("active");
    voiceModeToggle.classList.add("active");
    voiceSaveToggle.setAttribute("checked", "true");
    voiceOn = true;
    voiceCheck = true;
    ifActiveVoice();
    localStorage.setItem("Voicemode", "enabled");
};
const DisableAllSound = () => {
    voiceModeControl.innerHTML = "";
    document.getElementById("voice").classList.add("d-none", "visibility-hidden", "user-select");
    /*document.getElementById("voice").innerHTML = "";*/
}
const EnableAllSound = () => {
    document.getElementById("voice").classList.remove("d-none", "visibility-hidden", "user-select");
}
const disableVoiceMode = () => {
    voiceTop.classList.remove("active");
    voiceModeControl.classList.remove("active");
    voiceModeToggle.classList.remove("active");
    voiceSaveToggle.setAttribute("checked", "false");
    voiceOn = false;
    voiceCheck = false;
    localStorage.setItem("Voicemode", null);
};
if (Voicemode === 'enabled') {
    enableVoiceMode();
}
voiceTop.addEventListener("click", () => {
    if (!voiceOn) {
        enableVoiceMode();
        EnableAllSound();
    } else {
        disableVoiceMode();
        DisableAllSound();

    }

    /*ifActiveVoice();*/
});
/* ********************************************************** */
/* ########################################################## */
/* Font size incremine or decremine ************************* */
$(document).ready(function () {
    let plus5Max = '22px';
    let minus5Min = '16px';
    let decrease = document.querySelector(".decremet");
    let increase = document.querySelector(".increment");
    let currentSize = document.getElementById("currentSize");
    var curFontSize = localStorage["FontSize"];
    if (curFontSize) {
        //set to previously saved fontsize if available
        $('.dataFont').css('font-size', curFontSize);
        currentSize.innerText = curFontSize;
        if (curFontSize === '22px') {
            increase.classList.add('active-last');
            increase.classList.add('visibile-hide');
            decrease.classList.remove('active-last');
            decrease.classList.add('visibile');

        } else if (curFontSize === '16px') {
            decrease.classList.remove('active-last');
            decrease.classList.remove('visibile');
        } else {
            decrease.classList.add('active-last');
            decrease.classList.add('visibile');
        }

    }
    $(".increaseFont,.decreaseFont,.resetFont").click(function () {
        var type = $(this).val();
        curFontSize = $('.dataFont').css('font-size');
        if (type === 'increase') {
            decrease.classList.remove('active-last');
            decrease.classList.add('visibile');
            if (curFontSize !== plus5Max) {
                $('.dataFont').css('font-size', parseInt(curFontSize) + 1 + "px");
                curFontSize = parseInt(curFontSize) + 1 + "px";
            } else {
                increase.classList.add('active-last');
                increase.classList.add('visibile-hide');
            }
        } else if (type === 'decrease') {
            increase.classList.remove('active-last');
            increase.classList.remove('visibile-hide');
            if (curFontSize !== minus5Min) {
                $('.dataFont').css('font-size', parseInt(curFontSize) - 1 + "px");
                curFontSize = parseInt(curFontSize) - 1 + "px";
            } else {
                decrease.classList.add('active-last');
                decrease.classList.remove('visibile');
            }
        } else if (type === 'resetFont') {
            decrease.classList.remove('active-last');
            decrease.classList.remove('visibile');
            increase.classList.remove('active-last');
            increase.classList.remove('visibile-hide');
            $('.dataFont').css('font-size', "16px");
            curFontSize = "16px";
        }
        currentSize.innerText = curFontSize;
        localStorage.setItem('FontSize', curFontSize);
    });
});
/* ********************************************************** */
/* ########################################################## */
/* Dark light mode bilan ulanishlar ************************* */
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".mode__theme");
let svgNone = document.querySelectorAll(".svg-none");
let saveToggle = document.querySelector(".darkmode input[type='checkbox']");

const enableDarkMode = () => {
    document.documentElement.classList.add("blind");
    darkModeToggle.classList.add("active");
    saveToggle.setAttribute("checked", "true");

    for (let i = 0; i < svgNone.length; i++) {
        const element = svgNone[i];
        element.style.display = "none";
    }

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.documentElement.classList.remove("blind");
    darkModeToggle.classList.remove("active");
    saveToggle.setAttribute("checked", "false");
    for (let i = 0; i < svgNone.length; i++) {
        const element = svgNone[i];
        element.style.display = "block";
    }

    localStorage.setItem("darkMode", null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== 'enabled') {
        enableDarkMode();
        /*disableScroll();*/
    } else {
        disableDarkMode();
    }
});

/* Bootstrap Notify ***********************************************/
$('.voiceOn').click(function () {
    if ($(".voiceOn").hasClass("active")) {
        console.log('Work notify');
        $.notify({
            // options
            icon: 'bx bx-volume-full bx-sm',
            title: 'Ovozli rejmda o’qish',
            message: 'Siz matnni ovozli rejimda o’qishni yoqdingiz, kerakli matnni belgilang va paydo bo’lgan tugmachani bosing !',
            // url: 'https://github.com/mouse0270/bootstrap-notify',
            // target: '_blank'
        }, {
            // settings
            element: 'body',
            // position: null,
            type: "info",
            // allow_dismiss: true,
            // newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 9999,
            delay: 3500,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutRight'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            // template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            //     '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            //     '<span data-notify="icon"></span> ' +
            //     '<span data-notify="title">{1}</span> ' +
            //     '<span data-notify="message">{2}</span>' +
            //     '<div class="progress" data-notify="progressbar">' +
            //     '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            //     '</div>' +
            //     '<a href="{3}" target="{4}" data-notify="url"></a>' +
            //     '</div>'
        });
    } else {
        $.notify({
            // options
            icon: 'bx bx-volume-mute bx-sm',
            title: 'Ovozli rejmda o’qish',
            message: 'Siz matnni ovozli rejimda o’qishni o’chirdingiz !',
            // url: 'https://github.com/mouse0270/bootstrap-notify',
            // target: '_blank'
        }, {
            // settings
            element: 'body',
            // position: null,
            type: "info",
            // allow_dismiss: true,
            // newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 9999,
            delay: 3500,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutRight'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            // template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            //     '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            //     '<span data-notify="icon"></span> ' +
            //     '<span data-notify="title">{1}</span> ' +
            //     '<span data-notify="message">{2}</span>' +
            //     '<div class="progress" data-notify="progressbar">' +
            //     '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            //     '</div>' +
            //     '<a href="{3}" target="{4}" data-notify="url"></a>' +
            //     '</div>'
        });
    }
})

/* Header Fixed ***********************************************/
if ($("#myHeader").length) {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

/* Header Intro | Swiper ***********************************************/
if ($(".introSwiper").length) {
    let swiper = new Swiper(".introSwiper", {
        loop: "infinite",
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
    });
};

/* PRODUCTS FILTER | MIXITUP ===============*/
let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */
mixerProducts.filter('.personal')

/* Link active products */
const linkProducts = document.querySelectorAll('.products__item')

function activeProducts(){
    linkProducts.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkProducts.forEach(l=> l.addEventListener('click', activeProducts))

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)