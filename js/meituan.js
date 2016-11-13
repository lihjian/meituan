$(function(){
	//食品页下拉菜单
	var $main = $('.main');
	var $itemList = $('.item-list');
	$itemList.eq(0).css('display','none');
	$main.on('click','.classify',function(event){
		event.stopPropagation();
		var index = $(this).index();
		$itemList.eq(index).slideToggle();
		($itemList).not($itemList.eq(index)).slideUp();
	});

	//阻止事件冒泡
	($itemList).on('click',function(event){
		event.stopPropagation();
	});
	$('body').on('click',function(){
		$itemList.slideUp();
	});

	//全城商区/地铁站
	var $itemList2 = $('.item-list-2');
	var $itemList2Ul = $itemList2.find('ul');
	$itemList2.on('click','strong',function(event){
		event.stopPropagation();
		var index = $(this).index();
		$(this).css({background:'#666',color:'#fff'}).siblings().css({background:'#fff',color:'#333'});
		$itemList2Ul.eq(index).slideToggle();
		$itemList2Ul.not($itemList2Ul.eq(index)).slideUp();
	});

	//回到顶部的显示与隐藏
$(window).on('scroll',function(){

    var $scrollTop = $(window).scrollTop();
    
    if ($scrollTop>=500) {
        $('#gotop').slideDown();

    }else if($scrollTop<500){
        $('#gotop').slideUp();
    }
});

    //回到顶部
$('#gotop').click(function(){
    $('html,body').animate({
        scrollTop:0
    });
});



});