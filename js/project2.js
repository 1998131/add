$(function(){
	$('.ios_a').click(function(){
		$('.ios_download').css({display:'block'});
	});
	$('.close_btn').click(function(){
		$('.ios_download').css({display:'none'});
	});
	$('.and_a').click(function(){
		$('.android_download').css({display:'block'});
	});
	$('.close_btn').click(function(){
		$('.android_download').css({display:'none'});
	});
	$('.wx_a').click(function(){
		$('.wx_download').css({display:'block'});
	});
	$('.close_btn').click(function(){
		$('.wx_download').css({display:'none'});
	});
});