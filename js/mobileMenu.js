$(function(){
	$("#menuBtn").on("click", function(){
		if($("header > div").hasClass("open")){
			$("header > div").removeClass("open");
		}else{
			$("header > div").addClass("open");
		}
	})
})