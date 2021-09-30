$(window).mousemove(function(e){
    let x = e.pageX;
    let y = e.pageY;
    $("#circle").offset({top: y, left: x});
});
$(window).scroll(function() {
  // top
  if($(this).scrollTop() > 800) {
    $(".top_btn").removeClass("hidden_btn");
  } else {
    $(".top_btn").addClass("hidden_btn");
  }
  // news
  //距離最新消息500px
  if($("#news").length > 0) {
    if($(this).scrollTop() > $("#news").offset().top - 500) {
      $("#news .visible").each(function (i) {
        //讓所有 visible delay 並刪除，加上 fadeInUp
        $(this).delay(i * 300).queue(function() {
          $(this).removeClass("visible").addClass("fadeInUp");
        });
      });
    }
  }
  // recommend
  if($("#recommend").length > 0) {
    if($(this).scrollTop() > $("#recommend").offset().top - 450) {
      $("#recommend .visible").queue(function() {
          $(this).removeClass("visible").addClass("fadeInUp");
        });
    }
  }
});
$(function() {
  $(".header img").removeClass("size");
});
var mobile_view1100 = window.matchMedia("(max-width: 1100px)");
if(mobile_view1100.matches) {
  $(function() {
    $("#news .visible").each(function (i){
      $(this).delay(i * 300).queue(function() {
        $(this).removeClass("visible").addClass("fadeInUp");
      });
    });
  });
} 