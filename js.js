$("#feedback-form").submit(function (event) {
    alert("called.");
    event.preventDefault();
});

$('.carousel[data-type="multi"] .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 5; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
$(document).ready(function () {
    if ($(window).width() > 1200) {
        $("#d-card").clone().appendTo($("#slider").children());
    } else {
        var item = document.createElement("div");
        item.setAttribute("class", "item item-alig")
        var container = document.createElement("div");
        container.setAttribute("style", "display: inline-flex; width: 80%;")
        let card = document.getElementById("d-card");
        let d_card = card.cloneNode(true);
        container.appendChild(d_card);
        item.appendChild(container);
        document.getElementById("d-content").appendChild(item)
    }
});
var isArabic = true;
$("#language-choice").click(() => {
    if (isArabic) {
        alert("clicked")
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['en'] || "N/A");
        });
        $("#suggestion-title-placeholder").attr("placeholder", "Title Suggestion");
        $("#language-choice").html("العربية")
        $(".nav-header").css("flex-direction", "row");
        $(".nav-left-side").css({
            "margin-left": "0px",
            "margin-right": "150px",
            "flex-direction": "row"
        });
        $(".nav-right-side").css({
            "margin-right": "0px",
            "flex-direction": "row"
        });
        $(".hyperlink-decoration a").css("direction", "ltr");
        $(".a-container").css("flex-direction", "row");
        $(".c-container").css("direction", "ltr");
        $(".user-details").css("flex-direction", "row");
        $(".side-btns").css("flex-direction", "row");
        $(".social-box").css("flex-direction", "row");
        $(".dropdown-content").css({
            "direction": "ltr",
            "right": "0px",
            "left": "calc(1px + -3%)"
        });
        $(".dropdown-content a").css("text-align", "left");
        $(".icon-text").css("direction", "ltr");
        $(" .item-align").css("padding", "0 0 0 2vw");
        $(" .ml25").css({
            "margin-left": "0px",
            "margin-right": "2.5vw"
        });
        $("#slider-arrow").css({
            "left": "",
            "right": "1.4vw"
        }).addClass( "right" );
        $("#slider-arrow").html('<i class="fas fa-chevron-right C0C0C0"></i>');
        $("select").css("background-position-x", "13.25vw");
        $(".input-border").css("padding-left", "10px");
        $(".file-placeholder").css("padding-left", "15px");
        isArabic = false;
    } else {
        alert("clicked")
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['ar'] || "N/A");
        });
        $("#language-choice").html("Englsih");
        $("#suggestion-title-placeholder").attr("placeholder", "عنوان المقترح");
        $(".nav-header").css("flex-direction", "row-reverse");
        $(".nav-left-side").css({
            "margin-left": "150px",
            "margin-right": "0px",
            "flex-direction": "row-reverse"
        });
        $(".nav-right-side").css({
            "margin-right": "40px",
            "margin-left": "0px",
            "flex-direction": "row-reverse"
        });
        $(".a-container").css("flex-direction", "row-reverse");
        $(".user-details").css("flex-direction", "row-reverse");
        $(".side-btns").css("flex-direction", "row-reverse");
        $(".social-box").css("flex-direction", "row-reverse");
        $(".c-container").css("direction", "rtl");
        $(".hyperlink-decoration a").css("direction", "rtl");
        $(".dropdown-content").css({
            "direction": "rtl",
            "right": "calc(-3px + -15%)",
            "left": "0px"
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
        }).removeClass( "left" );
        $("#slider-arrow").html('<i class="fas fa-chevron-right C0C0C0"></i>');
        $("select").css("background-position-x", "10px");
        $(".input-border").css({
            "padding-left": "0px",
            "padding-right": "10px"
        });
        $(".file-placeholder").css("padding-left", "0px");
        isArabic = true;
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
    }


};

// var width = $(window).width();
// $(window).on('resize', function() {
// if ($(this).width() < 1200) {
// //    console.log($(this).width())
//     var allDCard = $(".d-card");
//     if (allDCard.length >2){
//         for (let index = 0; index < allDCard.length; index++) {
//             const element = allDCard[index];
//             if (index/2 > 2){
//                 var item = document.createElement("div");
//                 item.setAttribute("class", "item item-alig")
//                 var container = document.createElement("div");
//                 container.setAttribute("style", "display: inline-flex; width: 80%;")
//                 let card = document.getElementById("d-card");
//                 let d_card = card.cloneNode(true);
//                 container.appendChild(d_card);
//                 item.appendChild(container);
//                 document.getElementById("d-content").appendChild(item)
//             }
//             else{
//                 // var container = document.createElement("div");
//                 // container.setAttribute("style", "display: inline-flex; width: 80%;")
//                 // let card = document.getElementById("d-card");
//                 // let d_card = card.cloneNode(true);
//                 // container.appendChild(d_card);
//                 // let item = document.getElementById("d-content").lastChild.lastChild;
//                 // item.appendChild(container);
//             }


//         }
//     }
// }
// });