$(function(){
  var video = $("#myvideo")[0];
  // video.addEventListener("loadeddata",function(){
  //   console.log("loadeddata下载完成！");
  //   $(".mask1").fadeIn(200);
  // });
  // video.addEventListener("canplay",function(){
  //   console.log("canplay下载完成！");
  //   $(".mask1").fadeIn(200);
  // });
  // video.addEventListener("play",function(){
  //   console.log("play下载完成！");
  //   $(".mask1").fadeIn(200);
  // });
  // $("#myvideo").load(function(){
  //   console.log("onload下载完成！");
  //   alert('document');
  //   $(".mask1").fadeIn(200);
  // });
  setTimeout(function(){
    $(".mask1").fadeIn(200);
  },3000);
  $(".star").click(function(){
    $(".wrap1").hide();
    $("#myvideo").show();
    video.play();
  });
  video.addEventListener("ended",function(){
    console.log("播放完成！");
    $("#myvideo").hide();
    $(".wrap2").show();
    setTimeout(function(){
      $(".mask2").fadeIn(200);
    },2000);
  });
});