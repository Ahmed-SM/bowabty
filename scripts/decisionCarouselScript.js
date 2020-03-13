
const WindowWidth = {"Large":1200, "Medium":700, "Small":700,};
Object.freeze(WindowWidth);

const States = {"EmptySlider":0, "CardsLimit":5, "DCardsLimit":6};
Object.freeze(States);

$(document).ready(function () {
    if ($(window).width() > WindowWidth.Large) {
        $("#d-card").clone().appendTo($("#slider").children());
    } else {
        var item = document.createElement("div");
        item.setAttribute("class", "item item-align")
        var container = document.createElement("div");
        container.setAttribute("class", "slider-inner");
        let card = document.getElementById("d-card");
        let d_card = card.cloneNode(true);
        container.appendChild(d_card);
        item.appendChild(container);
        document.getElementById("d-content").appendChild(item)
    }
});

var DCardsInserter = (dCard) => {
    var item = document.createElement("div");
    item.setAttribute("class", "item item-align");
    var container = document.createElement("div");
    container.setAttribute("style", "display: inline-flex; width: 80%;");
    container.setAttribute("class", "slider-inner");
    dCard.appendTo(container);
    item.appendChild(container);
    document.getElementById("d-content").appendChild(item)
};

var DCardsFiter = (item, sliderLimit) => {
    
    if($("#d-content").children().length == States.EmptySlider){
        DCardsInserter(item);
        //console.log(" new old ")
    }
    else if ($(".item-align").children().last().children().length <= sliderLimit) {
        //console.log($(".item-align").children().children().length)
        //console.log(" old ")
        item.appendTo($(".item-align").children().last());
    } 
    else {
        //console.log(" new ")
        DCardsInserter(item);
    }
}

var DCardCreator = (defaultHeader, defaultContent, defaultDate)=>{
    //  ...langSpecific={lang:"N/A", text:""}
  //     // if (langSpecific){
  //     //     dictionary.
  
  //     // }
      let card  = document.createElement("div");
      card.setAttribute("class", "d-card");
      let card_header_container  = document.createElement("div");
      card_header_container.setAttribute("class", "d-card-header");
      let card_header  = document.createElement("h6");
      card_header.innerHTML=defaultHeader;
      card_header.setAttribute("dir", "auto");
      let card_content_container  = document.createElement("div");
      card_content_container .setAttribute("class", "justified-container");
    
     
      let card_content  = document.createElement("p");
      card_content.setAttribute("class", "justified");
      card_content.setAttribute("dir", "auto");
      card_content.innerHTML=defaultContent;
  
      let card_date_container  = document.createElement("div");
  
      let card_date  = document.createElement("p");
      card_date.setAttribute("class", "d-card-date");
      card_date.setAttribute("dir", "auto");
      card_date.innerHTML=defaultDate;
  
      let d_card_line  = document.createElement("hr");
      d_card_line.setAttribute("class", "d-card-line");
      let card_more_container  = document.createElement("div");
      card_more_container.setAttribute("class", "text-center");
      let card_more  = document.createElement("a");
      card_more.innerHTML="اقرأ المزيد";
      card_more.setAttribute("data-translate", "read-more");
      card_more.setAttribute("href", "#");
  
      card_date_container.appendChild(card_date);
      card_more_container.appendChild(card_more);
      card_content_container.appendChild(card_content);
      card_header_container.appendChild(card_header);
      card.appendChild(card_header_container);
      card.appendChild(card_content_container);
      card.appendChild(card_date_container);
      card.appendChild(d_card_line);
      card.appendChild(card_more_container);
  
      return card;
  }


  var DCardList =[];

for (let index = 0; index < States.DCardsLimit; index++) {
    //DCardList.push($("#d-card").clone());
    // Converted to jquary object to avoid error when the object is passed to line 272  dCard.appendTo.
    // when cards are dynamically generated appendTo should be changed to appendChild
   DCardList.push($(DCardCreator(
       "اليوم العالمي للعدالة الاجتماعية",
        "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. ",
        "الأربعاء 20 , فبراير 2019")));
}


$(window).on('resize', function () {
    $(".item-align").remove();
    
    if ($(window).width() > WindowWidth.Large) {
        //console.log(" ---1 ")
        DCardList.forEach(element => {
            // 2 additional cards means 3 cards to display in total
            DCardsFiter(element, 2);
        });
    }
    // check th length of the first slide if 1 insert one more to the exsiting slide
    // if 2 create a new slide and insert two elements  to the last one
    else if ($(window).width() > WindowWidth.Medium) {
        //console.log(" ---2 ")

        DCardList.forEach(element => {
             // 1 additional card means  2 cards to display in total
            DCardsFiter(element, 1);
        });
        
    }
    // check the length of the first slide if 0 insert one more to the exsiting slide
    // create a new slide for each new element to the last one 
    else if ($(window).width() < WindowWidth.Medium) {
        //console.log(" ---3")

        DCardList.forEach(element => {
             // 0 additional cards means 2 cards to display in total
            DCardsFiter(element, 0);
        });
    }
    // set an active group otherwise the slider will look empty
    $('.item-align').first().addClass("active")
});
