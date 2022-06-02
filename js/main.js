function video1(click) {
      click.innerHTML =
            '<div class="embed-responsive embed-responsive-16by9">\n' +
            '\t\t\t\t\t\t<iframe width="100%" height="315" src="https://www.youtube.com/embed/c54FlGshNd0?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
            "\t\t\t\t\t</div>";
};

$(function () {

      /*---Scroll to top---*/

      $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                  $('#toTop').fadeIn();
            } else {
                  $('#toTop').fadeOut();
            }
      });

      $('.toTop').click(function () {
            $('body,html').animate({
                  scrollTop: 0
            }, 800);
      });

      /*---Scroll to block---*/

      // $(".link").on("click", function (event) {
      //       event.preventDefault();
      //       var id = $(this).attr("href"),
      //             top = $(id).offset().top - 60;
      //       $("body,html").animate({
      //             scrollTop: top
      //       }, 700);
      // });

      $('.slider').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev slick-prev1"><i class="fa fa-angle-left"></button>',
            nextArrow: '<button type="button" class="slick-next slick-next1"><i class="fa fa-angle-right"></button>'
      });

      $('.slider-two').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev slick-prev2"><i class="fa fa-angle-left"></button>',
            nextArrow: '<button type="button" class="slick-next slick-next2"><i class="fa fa-angle-right"></button>',
            responsive: [
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              infinite: true,
                              adaptiveHeight: true,
                              dots: false
                        }
                  }
            ]
      });

      $('.slider2').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev slick-prev3"><i class="fa fa-angle-left"></button>',
            nextArrow: '<button type="button" class="slick-next slick-next3"><i class="fa fa-angle-right"></button>'
      });

});

$(function () {
      /*---Scroll to block---*/

      $(".link").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr("href"),
                  top = $(id).offset().top - 60;
            $("body,html").animate({
                  scrollTop: top
            }, 700);
      });
});

$(".tema").on("click", function () {
      if ($(this).val() !== 'Вопрос по оплате продукта') {
            $(".product-js").addClass('modal-hidden');
      } else {
            $(".product-js").removeClass('modal-hidden');
      }
});

$(".my-forms").submit(function () {
      $.ajax({
            type: "POST",
            url: "send/send.php",
            data: $(this).serialize()
      }).done(function () {
            $(this).find("input").val("");
            //alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#exampleModal-2").removeAttr("style");
            $(".my-forms").trigger("reset");
            $(".my-forms-modal").addClass("show");
            $(".my-forms-modal").attr("style",
                  "display: block; background: rgba(0,0,0,0.5);");
            //$("#exampleModal-2").removeClass("show");
            $(".modal-backdrop").removeClass("show");
            $(".modal-backdrop").attr("style", "display: none;");

            $(".my-forms-modal .close").click(function () {
                  $("body").removeAttr("style");
                  $(".my-forms-modal").attr("style", "display: none;");
                  $(".my-forms-modal").removeClass("show");
                  $("body").removeClass("modal-open");
                  //&(".modal-backdrop").removeClass("show");
            });
      });
      return false;
});

$(document).ready(function () {



      //---------------------------------------------------------------------
      // Вася купил
      var elemArr = [
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Вера Иванова,<br> г. Санкт-Петербург,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Людмила Сорокина,<br> г. Нижний-Новгород,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Наталья Сергеева,<br> г. Новосибирск,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Нина Кузнецова,<br> г. Москва,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Светлана Синцова,<br> г. Алматы,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Алевтина Богданова,<br> г. Тюмень,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Таисия Сергеева,<br> г. Барнаул,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Гульмира Базилевич,<br> г. Москва,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Тамара Полякова,<br> г. Киев,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Светлана Пирогова,<br> г. Ростов на Дону,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Елена Кейн,<br> г. Уфа,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Рамиля Валеева,<br> г. Воронеж,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Гульнара Досумбаева,<br> г. Астана (Нур-Султан),<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Сергей Шац,<br> г. Владивосток,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Марина Иванова,<br> г. Заринск,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Наталья Азарченко,<br> г. Челябинск,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Галина Кирилова,<br> г. Сыктывкар,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Ольга Любимова,<br> г. Пермь,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
            '<div class="yved yvedf1"> <div class="d-flex"><div class = "yvedvt" ><div class = "yvedt s16" >Екатерина Федорова,<br> г. Москва,<br> <span class="bold">только что оставила заявку на курс "Будь Здоров"</span></div> </div> </div></div>',
      ]
      function shuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
                  var j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
            }
      }
      shuffle(elemArr)
      var elements = '';
      elemArr.forEach(function (item) {
            elements += item;
      })
      $('.yvedw').html(elements)
      var i = 0;
      function yved() {
            i = 1;
            $('.yved:nth-child(' + i + ')').fadeIn(500).delay(5000).fadeOut(500);
      }
      setTimeout(function () {
            setInterval(
                  function () {
                        i = i + 1;
                        if (i > 10) i = 1;
                        $('.yved:nth-child(' + i + ')').fadeIn(500).delay(5000).fadeOut(500);
                  }, 35000);
            yved();
      }, 10000);

});