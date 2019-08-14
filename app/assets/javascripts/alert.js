$(document).on("turbolinks:load",function(){
  //新規登録
  $(".logout-link").click(function(e){
    var result = window.confirm( 'ログアウトしてもよろしいですか？');
    alert(result);
    if(result == false){
      return false;
      e.preventDefault();
    }
  })
})
