
if(JSON.parse(sessionStorage.isArabic) == null){
    sessionStorage.isArabic = true;
}
$("#language-choice").click(() => {
    if (JSON.parse(sessionStorage.isArabic)) {
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['en'] || "N/A");
        });
        $("#suggestion-title-placeholder").attr("placeholder", "Title Suggestion");
        $("#language-choice").html("العربية")
        $(".flex-row-reverse").css("flex-direction", "row");
        $(".user-info").removeClass("user-info").addClass("user-info-en");
        $(".user-role").removeClass("user-role-h4").addClass("user-role-en-h4").removeClass("user-role-h3").addClass("user-role-en-h3");
        $(".hyperlink-decoration a").css("direction", "ltr");
        $(".dropdown-content").css({
            "direction": "ltr",
            "right": "",
            "left": "calc(1px + -3%)"
        });
        $(".dropdown-content a").css("text-align", "left");
        $(".icon-text").css("direction", "ltr");
        $(".c-container").css("direction", "ltr");
        $(" .item-align").css("padding", "0 0 0 2vw");
        $(" .ml25").css({
            "margin-left": "0px",
            "margin-right": "2.5vw"
        });
        $("#slider-arrow").css({
            "left": "",
            "right": "1.4vw"
        }).addClass( "right" ).removeClass("left");
        $("#slider-arrow").html('<i class="fas fa-chevron-right C0C0C0"></i>');
        $("select").css("background-position-x", "13.25vw");
        $(".input-border").css("padding-left", "10px");
        $(".file-placeholder").css("padding-left", "15px");
        $('#minimize').removeClass("minimize-left").addClass("minimize-right");
        $(".sticker").css({"left":"unset","right":"45px" })
        sessionStorage.isArabic= false;
    } else {
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['ar'] || "N/A");
        });
        $("#language-choice").html("English");
        $("#suggestion-title-placeholder").attr("placeholder", "عنوان المقترح");
        $(".flex-row-reverse").css("flex-direction", "row-reverse");
        $(".c-container").css("direction", "rtl");
        $(".user-info").removeClass("user-info-en").addClass("user-info");
        $(".user-role").removeClass("user-role-en-h4").addClass("user-role-h4").removeClass("user-role-en-h3").addClass("user-role-h3");
        $(".hyperlink-decoration a").css("direction", "rtl");
        $(".dropdown-content").css({
            "direction": "rtl",
            "right": "calc(1px + -3%)",
            "left": ""
        });
        $(".dropdown-content a").css("text-align", "right");
        $(".icon-text").css("direction", "rtl");
        $(" .item-align").css("padding", "0 2vw 0 0");
        $(" .ml25").css({
            "margin-left": "2.5vw",
            "margin-right": "0px"
        });
        $("#slider-arrow").css({
            "left": "1.4vw",
            "right": ""
        }).addClass( "left" ).removeClass("right");;
        $("#slider-arrow").html('<i class="fas fa-chevron-left C0C0C0"></i>');
        $("select").css("background-position-x", "10px");
        $(".input-border").css({
            "padding-left": "0px",
            "padding-right": "10px"
        });
        $(".file-placeholder").css("padding-left", "0px");
        $('#minimize').removeClass("minimize-right").addClass("minimize-left");
        $(".sticker").css({"left":"45px","right":"" })
        sessionStorage.isArabic= true;
    }
});

var dictionary = {
    'welcome': {
        'ar': 'اهلا بك',
        'en': 'Welcome',
    },
    'meeting': {
        'ar': 'الإجتماعات',
        'en': 'Meetings',
    },
    'task': {
        'ar': 'المهام',
        'en': 'Tasks',
    },
    'order-status': {
        'ar': 'حالة الطلب',
        'en': 'Order Status',
    },
    'administration': {
        'ar': 'إدارة النظام',
        'en': 'Sys Config',
    },
    'other': {
        'ar': 'أخرى',
        'en': 'Others',
    },
    'report': {
        'ar': 'تقرير',
        'en': 'Reports',
    },
    'setting': {
        'ar': 'الاعدادات',
        'en': 'Settings',
    },
    'title': {
        'ar': 'خدماتي',
        'en': 'My Services',
    },
    'title-child': {
        'ar': 'لوريم إيبسوم هو ببساطة نص شكلي',
        'en': 'My Lorim Ipsum is simply a config text',
    },
    'contact': {
        'ar': 'التحويلات',
        'en': 'Contacts',
    },
    'note': {
        'ar': 'ملاحظاتي',
        'en': 'My Notes',
    },
    'decision': {
        'ar': 'قرارات داخلية جديدة',
        'en': 'New internal decisions',
    },
    'suggestion': {
        'ar': 'تقديم مقترح',
        'en': 'Submit a Suggestion',
    },
    'suggested-title': {
        'ar': 'عنوان المقترح',
        'en': 'Title Suggestion',
    },
    'suggested-title-placeholder': {
        'ar': 'عنوان المقترح',
        'en': 'Title Suggestion',
    },
    'suggestion-origin': {
        'ar': 'مصدر الاقتراح',
        'en': 'Suggestion Origin',
    },
    'suggestion-origin-option-1': {
        'ar': 'فكرة شخصية',
        'en': 'Personal Idea',
    },
    'suggestion-origin-placeholder': {
        'ar': 'مصدر الاقتراح',
        'en': 'Suggestion Origin',
    },
    'attachemnt': {
        'ar': 'المرفقات',
        'en': 'Attachemnts',
    },
    'send-btn': {
        'ar': 'ارسال',
        'en': 'Send',
    },
    'read-more': {
        'ar': 'اقرأ المزيد',
        'en': 'Read More',
    },
    'select': {
        'ar': 'اختيار',
        'en': 'Option',
    },
    'element-description': {
        'ar': 'تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..',
        'en': 'Includes Stationery requests, office maintenance and others...',
    },
    'my-office': {
        'ar': 'مكتبي',
        'en': 'My Office',
    },
    'status-requests': {
        'ar': 'حالة طلباتي',
        'en': 'My Requests Status',
    },
    'varied-requests': {
        'ar': 'طلبات متنوعة ',
        'en': 'Varied Requests',
    },
    'office-requests': {
        'ar': 'طلبات من مكتب التطوير المؤسسي',
        'en': 'Institutional Development Office Requests',
    },
    'communication-requests': {
        'ar': 'طلبات من قسم الاتصال المؤسسي',
        'en': 'Institutional Communication Department Requests',
    },
    'human-requests': {
        'ar': 'طلبات من إدارة الموارد البشرية',
        'en': 'Human Resources Department Requests',
    },
    'administrative-requests': {
        'ar': 'طلبات من قسم الخدمات الإدارية',
        'en': 'Department of Administrative Services Requests',
    },
    'support-box': {
        'ar': 'مؤشر السعادة',
        'en': 'Happiness Meter',
    },
    'happiness-box': {
        'ar': 'الدعم الفني',
        'en': 'Support',
    }


};
if(JSON.parse(  sessionStorage.getItem("isArabic")) == null){
    sessionStorage.setItem("isArabic", true);
}
if (!JSON.parse(sessionStorage.isArabic)) {
    $("[data-translate]").each(function () {
        var key = $(this).data('translate');
        $(this).html(dictionary[key]['en'] || "N/A");
    });
    $("#suggestion-title-placeholder").attr("placeholder", "Title Suggestion");
    $("#language-choice").html("العربية")
    $(".flex-row-reverse").css("flex-direction", "row");
    $(".user-info").removeClass("user-info").addClass("user-info-en");
    $(".user-role").removeClass("user-role-h4").addClass("user-role-en-h4").removeClass("user-role-h3").addClass("user-role-en-h3");
    $(".hyperlink-decoration a").css("direction", "ltr");
    $(".dropdown-content").css({
        "direction": "ltr",
        "right": "",
        "left": "calc(1px + -3%)"
    });
    $(".dropdown-content a").css("text-align", "left");
    $(".icon-text").css("direction", "ltr");
    $(".c-container").css("direction", "ltr");
    $(" .item-align").css("padding", "0 0 0 2vw");
    $(" .ml25").css({
        "margin-left": "0px",
        "margin-right": "2.5vw"
    });
    $("#slider-arrow").css({
        "left": "",
        "right": "1.4vw"
    }).addClass( "right" ).removeClass("left");
    $("#slider-arrow").html('<i class="fas fa-chevron-right C0C0C0"></i>');
    $("select").css("background-position-x", "13.25vw");
    $(".input-border").css("padding-left", "10px");
    $(".file-placeholder").css("padding-left", "15px");
    $('#minimize').removeClass("minimize-left").addClass("minimize-right");
    $(".sticker").css({"left":"unset","right":"45px" })
    sessionStorage.isArabic= false;
} else {
    $("[data-translate]").each(function () {
        var key = $(this).data('translate');
        $(this).html(dictionary[key]['ar'] || "N/A");
    });
    $("#language-choice").html("English");
    $("#suggestion-title-placeholder").attr("placeholder", "عنوان المقترح");
    $(".flex-row-reverse").css("flex-direction", "row-reverse");
    $(".c-container").css("direction", "rtl");
    $(".user-info").removeClass("user-info-en").addClass("user-info");
    $(".user-role").removeClass("user-role-en-h4").addClass("user-role-h4").removeClass("user-role-en-h3").addClass("user-role-h3");
    $(".hyperlink-decoration a").css("direction", "rtl");
    $(".dropdown-content").css({
        "direction": "rtl",
        "right": "calc(1px + -3%)",
        "left": ""
    });
    $(".dropdown-content a").css("text-align", "right");
    $(".icon-text").css("direction", "rtl");
    $(" .item-align").css("padding", "0 2vw 0 0");
    $(" .ml25").css({
        "margin-left": "2.5vw",
        "margin-right": "0px"
    });
    $("#slider-arrow").css({
        "left": "1.4vw",
        "right": ""
    }).addClass( "left" ).removeClass("right");;
    $("#slider-arrow").html('<i class="fas fa-chevron-left C0C0C0"></i>');
    $("select").css("background-position-x", "10px");
    $(".input-border").css({
        "padding-left": "0px",
        "padding-right": "10px"
    });
    $(".file-placeholder").css("padding-left", "0px");
    $('#minimize').removeClass("minimize-right").addClass("minimize-left");
    $(".sticker").css({"left":"45px","right":"" })
    sessionStorage.isArabic= true;
}