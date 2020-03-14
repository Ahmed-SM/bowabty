// //feedback script
// $("#feedback-form").submit(function (event) {
//     alert("called.");
//     event.preventDefault();
// });

// const WindowWidth = {"Large":1200, "Medium":700, "Small":700,};
//   Object.freeze(WindowWidth);
  
// const States = {"EmptySlider":0, "CardsLimit":5, "DCardsLimit":6};
// Object.freeze(States);

// //carousel script
// $('.carousel[data-type="multi"] .item').each(function () {
//     var next = $(this).next();
//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));

//     for (var i = 0; i < States.CardsLimit; i++) {
//         next = next.next();
//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }

//         next.children(':first-child').clone().appendTo($(this));
//     }
// });

// //New internal decisions
// $(document).ready(function () {
//     if ($(window).width() > WindowWidth.Large) {
//         $("#d-card").clone().appendTo($("#slider").children());
//     } else {
//         var item = document.createElement("div");
//         item.setAttribute("class", "item item-align")
//         var container = document.createElement("div");
//         container.setAttribute("class", "slider-inner");
//         let card = document.getElementById("d-card");
//         let d_card = card.cloneNode(true);
//         container.appendChild(d_card);
//         item.appendChild(container);
//         document.getElementById("d-content").appendChild(item)
//     }
// });


// language script
var isArabic = true;
$("#language-choice").click(() => {
    if (isArabic) {
        // console.log($(".item-align").children().length);
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['en'] || "N/A");
        });
        $("#suggestion-title-placeholder").attr("placeholder", "Title Suggestion");
        $("#language-choice").html("العربية")
        $(".flex-row-reverse").css("flex-direction", "row");
        $(".nav-left-side").css({
            "margin-left": "0px",
            "margin-right": "150px",
        });
        $(".nav-right-side").css({
            "margin-right": "0px",
        });
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
        isArabic = false;
    } else {
        //alert("clicked")
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key]['ar'] || "N/A");
        });
        $("#language-choice").html("Englsih");
        $("#suggestion-title-placeholder").attr("placeholder", "عنوان المقترح");
        $(".flex-row-reverse").css("flex-direction", "row-reverse");
        $(".nav-left-side").css({
            "margin-left": "150px",
            "margin-right": "0px",
        });
        $(".nav-right-side").css({
            "margin-right": "2vw",
            "margin-left": "0px",
        });
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

// // file upload script
// // changes the default placeholder of the attachemnt ito the the attached file name 
// $('#file').change(function() {
//     var file = $('#file')[0].files[0].name;
//     $('.file-placeholder').text(file);
//   });


//   // New internal decisions widthFiters

// var DCardsInserter = (dCard) => {
//     var item = document.createElement("div");
//     item.setAttribute("class", "item item-align");
//     var container = document.createElement("div");
//     container.setAttribute("style", "display: inline-flex; width: 80%;");
//     container.setAttribute("class", "slider-inner");
//     dCard.appendTo(container);
//     item.appendChild(container);
//     document.getElementById("d-content").appendChild(item)
// };

// var DCardsFiter = (item, sliderLimit) => {
    
//     if($("#d-content").children().length == States.EmptySlider){
//         DCardsInserter(item);
//         //console.log(" new old ")
//     }
//     else if ($(".item-align").children().last().children().length <= sliderLimit) {
//         //console.log($(".item-align").children().children().length)
//         //console.log(" old ")
//         item.appendTo($(".item-align").children().last());
//     } 
//     else {
//         //console.log(" new ")
//         DCardsInserter(item);
//     }
// }

// var DCardCreator = (defaultHeader, defaultContent, defaultDate)=>{
//     //  ...langSpecific={lang:"N/A", text:""}
//   //     // if (langSpecific){
//   //     //     dictionary.
  
//   //     // }
//       let card  = document.createElement("div");
//       card.setAttribute("class", "d-card");
//       let card_header_container  = document.createElement("div");
//       card_header_container.setAttribute("class", "d-card-header");
//       let card_header  = document.createElement("h6");
//       card_header.innerHTML=defaultHeader;
//       card_header.setAttribute("dir", "auto");
//       let card_content_container  = document.createElement("div");
     
//       let card_content  = document.createElement("p");
//       card_content.setAttribute("class", "justified");
//       card_content.setAttribute("dir", "auto");
//       card_content.innerHTML=defaultContent;
  
//       let card_date_container  = document.createElement("div");
  
//       let card_date  = document.createElement("p");
//       card_date.setAttribute("class", "d-card-date");
//       card_date.setAttribute("dir", "auto");
//       card_date.innerHTML=defaultDate;
  
//       let d_card_line  = document.createElement("hr");
//       d_card_line.setAttribute("class", "d-card-line");
//       let card_more_container  = document.createElement("div");
//       card_more_container.setAttribute("class", "text-center");
//       let card_more  = document.createElement("a");
//       card_more.innerHTML="اقرأ المزيد";
//       card_more.setAttribute("data-translate", "read-more");
//       card_more.setAttribute("href", "#");
  
//       card_date_container.appendChild(card_date);
//       card_more_container.appendChild(card_more);
//       card_content_container.appendChild(card_content);
//       card_header_container.appendChild(card_header);
//       card.appendChild(card_header_container);
//       card.appendChild(card_content_container);
//       card.appendChild(card_date_container);
//       card.appendChild(d_card_line);
//       card.appendChild(card_more_container);
  
//       return card;
//   }


//   var DCardList =[];

// for (let index = 0; index < States.DCardsLimit; index++) {
//     //DCardList.push($("#d-card").clone());
//     // Converted to jquary object to avoid error when the object is passed to line 272  dCard.appendTo.
//     // when cards are dynamically generated appendTo should be changed to appendChild
//    DCardList.push($(DCardCreator(
//        "اليوم العالمي للعدالة الاجتماعية",
//         "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. ",
//         "الأربعاء 20 , فبراير 2019")));
// }


// $(window).on('resize', function () {
//     $(".item-align").remove();
    
//     if ($(window).width() > WindowWidth.Large) {
//         //console.log(" ---1 ")
//         DCardList.forEach(element => {
//             // 2 additional cards means 3 cards to display in total
//             DCardsFiter(element, 2);
//         });
//     }
//     // check th length of the first slide if 1 insert one more to the exsiting slide
//     // if 2 create a new slide and insert two elements  to the last one
//     else if ($(window).width() > WindowWidth.Medium) {
//         //console.log(" ---2 ")

//         DCardList.forEach(element => {
//              // 1 additional card means  2 cards to display in total
//             DCardsFiter(element, 1);
//         });
        
//     }
//     // check the length of the first slide if 0 insert one more to the exsiting slide
//     // create a new slide for each new element to the last one 
//     else if ($(window).width() < WindowWidth.Medium) {
//         //console.log(" ---3")

//         DCardList.forEach(element => {
//              // 0 additional cards means 2 cards to display in total
//             DCardsFiter(element, 0);
//         });
//     }
//     // set an active group otherwise the slider will look empty
//     $('.item-align').first().addClass("active")
// });

// // carousel script
// $(function() {
//     $('#minimize').click(function() {
//         if ( $('#carousel').is(":hidden")){
//             $('.b-container').css({'height': '250px', 'padding':'', 'border-radius': ''});
//             setTimeout(
//                 function() 
//                 {
//                     $('#carousel').show();
//                     $('#minimize').html('<i class="fas fa-level-up-alt"></i>')
//                 }, 300);
//         }else{
//             $('.b-container').css({'height': '35px', 'padding':'0', 'border-radius': '10px'});
//             $('#carousel').delay(150).hide(0);
//             $('#minimize').html('<i class="fas fa-level-down-alt"></i>')
//         }
//     });
//   });