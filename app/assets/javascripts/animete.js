$(document).on("turbolinks:load",function(){
  //新規登録
  $(".favorite-link").click(function(e){
    $('html, body').animate({scrollTop:$('.favorite').offset().top});
    e.preventDefault();
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
  //about this
  $(".about-link").click(function(e){
    $('html, body').animate({scrollTop:$('.about-this').offset().top});
    e.preventDefault();
    return false;
  })
})
