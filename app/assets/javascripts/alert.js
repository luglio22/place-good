$(document).on("turbolinks:load",function(){
  //新規登録
  $(".logout-link").click(function(e){
    var result = window.confirm( 'ログアウトしてもよろしいですか？');
    if(result == false){
      return false;
      e.preventDefault();
    }
  })
  $(".delete-link").click(function(e){
    var result = window.confirm( '本当によろしいですか？');
    if(result == false){
      return false;
      e.preventDefault();
    }
  })
})
