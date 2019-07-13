$(document).on("turbolinks:load",function(){
  // 電話番号認証、認証番号の入力のバリデーション
  $(".vote-btn").click(function(e){
    var judge = 0;
    // 電話番号認証、認証番号入力
    var titleFrom = $(".vote-form--title-field").val()
    if(titleFrom.length == 0 ) {
      $(".vote-form--title-field").css("background-color","#FA8072");
      // $(".vote-form--title-field").css("border","2px solid #ea352d ");
      judge += 1;
    } else {
      $(".vote-form--title-field").css("border","1px solid #ccc ");
    }
    var describeFrom = $(".vote-form--title-field").val()
    if(describeFrom.length == 0 ) {
      $(".vote-form--describe-field").css("background-color","#FA8072 ");
      // $(".vote-form--describe-field").css("border","2px solid #ea352d ");
      judge += 1;
    } else {
      $(".vote-form--describe-field").css("border","1px solid #ccc ");
    }
    if(judge != 0) {
      e.preventDefault();
    }
  })
})
