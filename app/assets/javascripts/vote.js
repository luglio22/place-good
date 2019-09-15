$(document).on("turbolinks:load",function(){
  // 電話番号認証、認証番号の入力のバリデーション
  $(".vote-btn").click(function(e){
    var judge = 0;
    // 電話番号認証、認証番号入力
    var titleFrom = $(".ef").val()
    if(titleFrom.length == 0 ) {
      $(".ef").css("background-color","#FA8072");
      //エラーテキスト表示
      $(".errorTextTitle").css("display","block");
      // $(".vote-form--title-field").css("border","2px solid #ea352d ");
      judge += 1;
    } else {
      $(".ef").css("border","1px solid #ccc ");
      //エラーテキスト非表示
      $(".errorTextTitle").css("display","none");
    }
    var describeFrom = $(".efw").val()
    if(describeFrom.length == 0 ) {
      $(".efw").css("background-color","#333 ");
      //エラーテキスト表示
      $(".errorTextDescribe").css("display","block");
      // $(".vote-form--describe-field").css("border","2px solid #ea352d ");
      judge += 1;
    } else {
      $(".efw").css("border","1px solid #ccc ");
      //エラーテキスト非表示
      $(".errorTextDescribe").css("display","none");
    }
    if(judge != 0) {
      $('html, body').animate({scrollTop:$('.products-top').offset().top});
      e.preventDefault();
    }
  })
})
