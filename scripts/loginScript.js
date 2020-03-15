document.getElementById("form").onsubmit = function (e) {
    e.preventDefault();
    if (userName.validity.valid ){
        var content = document.getElementById("form");
        var text = "";
        for (var i = 0; i < content.length; i++) {
            text += content.elements[i].value + " ";
            
        }
        $(".border-bottom-black").css( "border-bottom", "6px solid #3497DB");
        
    
        document.location.href= "/index.html"
        console.log(text);
    }

}
var isArabic = true;
$("#lang-choice").click(() => {
    if (isArabic) {
        $("#language-choice").html("العربية")
        $("#username").attr("placeholder", "Username").css("direction", "ltr");
        $("#password").attr("placeholder", "Password").css("direction", "ltr");
      
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['en']);
        });
        $(".flex-row-reverse").css("flex-direction", "row");
        $(".hyperlink-decoration a").css("direction", "ltr");
        $(".dropdown-content").css({
            "direction": "ltr",
            "right": "",
            "left": "calc(1px + -3%)"
        });
        $(".dropdown-content a").css("text-align", "left");
        $(".icon-text").css("direction", "ltr");
        $(" .ml25").css({
            "margin-left": "0px",
            "margin-right": "2.5vw"
        });
        $(".sticker").css({"left":"unset","right":"45px" })
        isArabic = false;
    } else {
        $("#language-choice").html("English")
        $("#username").attr("placeholder", "اسم المستخدم").css("direction", "rtl");
        $("#password").attr("placeholder", "كلمة المرور").css("direction", "rtl");
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['ar']);
        });
        $(".flex-row-reverse").css("flex-direction", "row-reverse");
        $(".hyperlink-decoration a").css("direction", "rtl");
        $(".dropdown-content").css({
            "direction": "rtl",
            "right": "calc(-3px + -15%)",
            "left": ""
        });
        $(".dropdown-content a").css("text-align", "right");
        $(".icon-text").css("direction", "rtl");
        $(" .ml25").css({
            "margin-left": "2.5vw",
            "margin-right": "0px"
        });
        $(".sticker").css({"left":"45px","right":"" })
        isArabic = true;
    }
});
var dictionary = {
    'login-title': {
        'ar': 'تسجيل دخول',
        'en': 'Login',
    },
    'username': {
        'ar': 'اسم المستخدم',
        'en': 'Username',
    },
    'password': {
        'ar': 'كلمة المرور',
        'en': 'Password',
    },
    'forgot-password': {
        'ar': 'نسيت كلمة المرور؟',
        'en': 'Forgot Password?',
    },
    'button': {
        'ar': 'دخول',
        'en': 'Sign In',
    },
    'lang-choice': {
        'ar': 'English',
        'en': 'عربي',
    },
    'setting': {
        'ar': 'الاعدادات',
        'en': 'Settings',
    },
    'select': {
        'ar': 'اختيار',
        'en': 'Option',
    },
    'send-btn': {
        'ar': 'ارسال',
        'en': 'Send',
    },
    'support-box': {
        'ar': 'مؤشر السعادة',
        'en': 'Happiness Meter',
    },
    'happiness-box': {
        'ar': 'الدعم الفني',
        'en': 'Support',
    }
}
// const border_button = document.querySelector('.d-container');
// for (let index = 0; index < 3; index++) {
//   border_button.className='border-bottom-red d-container';
//   setTimeout(function() {
//     border_button.className='border-bottom-black d-container';
//   }, 800);
// }