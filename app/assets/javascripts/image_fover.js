$(document).on("turbolinks:load",function(){
  //左
  $(".top-image-left").mouseover(function(){
    $(".top-image-left--title").css("display","block")
    $(".top-image-left--text").css("display","block")
  })
  $(".top-image-left").mouseout(function(){
    $(".top-image-left--title").css("display","none")
    $(".top-image-left--text").css("display","none")
  })
  //中央
  $(".top-image-center").mouseover(function(){
    $(".top-image-center--title").css("display","block")
    $(".top-image-center--text").css("display","block")
  })
  $(".top-image-center").mouseout(function(){
    $(".top-image-center--title").css("display","none")
    $(".top-image-center--text").css("display","none")
  })
  //右
  $(".top-image-right").mouseover(function(){
    $(".top-image-right--title").css("display","block")
    $(".top-image-right--text").css("display","block")
  })
  $(".top-image-right").mouseout(function(){
    $(".top-image-right--title").css("display","none")
    $(".top-image-right--text").css("display","none")
  })
})
