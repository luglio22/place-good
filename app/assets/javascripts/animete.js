$(document).on("turbolinks:load",function(){
  //新規登録
  $(".favorite-link").click(function(e){
    $('html, body').animate({scrollTop:$('.products-top').offset().top});
    return false;
  })
  //投稿 アニメーション
  //投稿　表示
  $(".vote-link").click(function(){
    $(".product-vote").css("display","block")
  })
  $(".vote-link").click(function(e){
    $('html, body').animate({scrollTop:$('.product-vote').offset().top});
    e.preventDefault();
    return false;
  })
  $(".scrollTop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
  $(".scrollDown").click(function () {
        $('body,html').animate({scrollTop:$(document).height()}, 1000);
        return false;
    });
  $(".products-top").click(function () {
        $(".product-vote").css("display","none");
    });
})
