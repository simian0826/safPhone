//提示框弹出
function alertMessage(type, content, callback){

  var clazz = "alert alert-success";
  if (type == "success") {
    clazz = "alert alert-success";
  }else if (type == "danger") {
    clazz = "alert alert-danger";
  }else if (type == "warning") {
    clazz = "alert alert-warning";
  }else if (type == "info") {
    clazz = "alert alert-info";
  }

  $("body").append('<div id="alert" class="' + clazz + '"><a href="#" class="close" data-dismiss="alert">&times;</a><strong></strong></div>')
  $("#alert strong").text(content);
  $("#alert").fadeIn(500);
  setTimeout(function(){
    $("#alert").fadeOut(500,function(){
        $("#alert").remove();
    });
    if(typeof callback == "function") {
      callback();
    }
  },1500);




}
