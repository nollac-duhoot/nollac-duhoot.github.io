$(document).ready(function() {
  $(".form_select, .city").select2();
});

(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);


$(document).ready(function(){
    $(".offer_tabs").lightTabs();
});

// MAP
$('.map').on('click', function() {
	$(this).toggleClass('map_active');
});

// FILTER
$('.all_filter').on('click', function() {
	$(this).toggleClass('active');
	$('.filter_link').not(this).removeClass('active');
	$('.content_block_sm, .content_block_big').removeClass('active');
});

$('.living').on('click', function() {
	$(this).toggleClass('active');
	$('.content_living, .content_living_big').toggleClass('active');
	$('.all_filter, .content_amusement, .content_amusement_big, .content_travel').removeClass('active');
	$('.filter_link').not(this).removeClass('active');
});


$('.guests').on('click', function() {
	$(this).toggleClass('active');
	$('.all_filter').removeClass('active');
	$('.filter_link').not(this).removeClass('active');
});

$('.education').on('click', function() {
	$(this).toggleClass('active');
	$('.all_filter').removeClass('active');
	$('.filter_link').not(this).removeClass('active');
});

$('.amusement').on('click', function() {
	$(this).toggleClass('active');
	$('.content_amusement, .content_amusement_big').toggleClass('active');
	$('.all_filter, .content_living, .content_living_big, .content_travel').removeClass('active');
	$('.filter_link').not(this).removeClass('active');
});

$('.travel').on('click', function() {
	$(this).toggleClass('active');
	$('.content_travel').toggleClass('active');
	$('.all_filter, .content_amusement, .content_amusement_big, .content_living, .content_living_big').removeClass('active');
	$('.filter_link').not(this).removeClass('active');
});

// TABS
$('.tabs_item').on('click',function(){
	$(this).each(function(){$(this).removeClass('active')});
	$(this).addClass('active');
});

// DEFAULT LINK
$('.logo_link, .content_pic, .mail_btn, .form_btn, .footer_menu_link, .footer_title_link').on('click', function(e) {
	e.preventDefault();
});

$('.popular_link').on('click', function(e) {
	e.preventDefault();
	$('.popular_link').not(this).removeClass('active');
	$(this).addClass('active');
});

// CONTENT BLOCK STARS
$('.content_pic_stars .fa').on('click',function(){
	$(this).each(function(){$(this).toggleClass('fa-star-o')});
	$(this).addClass('fa-star')
});

// MOB MENU
$('.mob_menu').on('click',function(){
	$('.header_menu').toggleClass('active');
});