var $ = (function(){
  var jakeWeary = function(selector){
    if(selector.nodeName){
      var els = [selector]
    }else{
      var els = document.querySelectorAll(selector)
    }
    els.on = function(eventName, callback){
      for(var i = 0; i < els.length; i++){
	els[i].addEventListener(eventName, callback)
      }
    }
    els.css = function(props){
      for(var i = 0; i < els.length; i++){
        for(var key in props){
	  els[i].style[key] = props[key]
	}
      }
    }
    els.html = function(){
      for(var i = 0; i < els.length; i++){
        return els[i].innerHTML 
      }
    }
    return els
  }

  return jakeWeary

  function each(collection, callback){
    for(var i = 0; i < collection.length; i++){
      callback(collection[i])
    }
  }

})()


$(".box").on("click", function(){
  $(this).css({'background':'red'})
  console.log($(this).html())
})