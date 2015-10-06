jQuery(document).ready(function() {
    "use strict";
    /*jQuery('ul.collections-menu li').hide();
    jQuery(".collections-menu-wrap").hover(function() {
        jQuery('ul.collections-menu li', jQuery(".collections-menu-wrap")).stop().animate({
            width : 'toggle',
            opacity : 'toggle'
        }, 250, function() {
        });
    });*/
    //jQuery(".collections-navigation").find(".menu").hide( "slow" );
   /* jQuery("body").on('hover',".collections-navigation",function() {
        console.log("COLLECTIONS-NAVIGATION")
        $(this).find(".menu").animate({
            width : 'toggle',
            opacity : 'toggle'
        }, 250, function() {});
    });*/
   /*$("body").find('.collections-navigation').on({
        mouseenter: function () {
            //stuff to do on mouse enter.
            console.log("COLLECTIONS-NAVIGATION-mouseenter")
            $(this).find(".menu").animate({
            width : 'toggle',
            opacity : 'toggle'
        }, 250, function() {});
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            console.log("COLLECTIONS-NAVIGATION-mouseleave")
            $(this).find(".menu").animate({
            width : 'toggle',
            opacity : 'toggle'
        }, 250, function() {});
        }
    });*/
	/*var mouseenterActive = false;
    $("body").on('mouseenter','.collections-navigation',function () {
        if (!mouseenterActive) {
            mouseenterActive = true;
            console.log("COLLECTIONS-NAVIGATION-mouseenter")
            $(this).find(".menu").animate({width : 'toggle',opacity : 'toggle'}, 2000, function() {});
            mouseenterActive=false
        }
        return;
    });
    var mouseleaveActive = false;
    $("body").on('mouseleave','.collections-navigation',function () {
        if (!mouseleaveActive) {
            mouseleaveActive = true;
            console.log("COLLECTIONS-NAVIGATION-mouseleave")
            $(this).find(".menu").animate({width : 'toggle',opacity : 'toggle'}, 2000, function() {});
            mouseleaveActive=false
        }
        return;
    });*/
    $(document).on('mouseenter',".collections-navigation",function() {
        console.log("hover");
        //if(jQuery(this).find('.menu').position().left == 0)
        jQuery(this).find('.menu').animate({
            opacity : 'toggle',
            left:'85'
        }, 1500, function() {
        });
        //else
    }).on('mouseleave',".collections-navigation",function() {
    	jQuery(this).find('.menu').animate({
            opacity : 'toggle',
            left:'-90'
        }, 500, function() {
        });
    });
    jQuery("body").on("click", ".lbox-img", function(a) {
        jQuery.backstretch([jQuery(this).attr('src')], {
            speed : 1500
        });
    });
    jQuery("body").on("click", "img.close", function(a) {
        jQuery(this).parents('div.transparant-bg-content').css('visibility', 'hidden');
    });
    jQuery("body").on("click", "a", function(e){
        e.preventDefault();
        if(jQuery(this).attr('href').substring(0, 1)!="#"&&!jQuery(this).hasClass('no-ajax-loading')&&!jQuery(this).attr('no-ajax-loading')){
            jQuery("body").addClass("loading");
            console.log("<-------------------------------------------->");
            console.log("<AJAX LOADING>");
            var pageurl = $(this).attr('href');
            $.ajax({
                url:pageurl+'?rel=ajax',
                success: function(data){
                    $('#content').html(data);
                    var title=$('#content').find('.title.hide').length>0?$('#content').find('.title.hide').html():"";
                    console.log(title);
                    //to change the browser URL to the given link location
                    //if(pageurl!=window.location){
                      changeUrl(title, pageurl);
                    //}
                    performCallback();
                },
                error:function(){
                    performCallback();
                    alert("Error in Loading Content");
                }
            });
            console.log("<-------------------------------------------->");
        }else{
            window.location.href=jQuery(this).attr('href');
        }
    });
    $('body').on('keyup',' #interact-search-form input',function(e){
        e.preventDefault();
        var q=$(this).val();
        var i=0;
        $('body').find('#location-list li').each(function(){
            if($(this).find('a').html().toUpperCase().indexOf(q.toUpperCase())>=0){
                i++;
                if(i>=2){
                    i=0;
                    return false; 
                }
                $(this).removeClass('hide');
                
            }else{
                $(this).addClass('hide');
            }
            console.log($(this).find('a').html().toUpperCase().indexOf(q.toUpperCase()));
        });
    });
    $('body').on('keyup','#search-form input',function(e){
        e.preventDefault();
        var q=$(this).val();
        $('body').find('#location-list li').each(function(){
            $(this).find('a').html().toUpperCase().indexOf(q.toUpperCase())>=0?
            $(this).removeClass('hide'):
            $(this).addClass('hide');
            console.log($(this).find('a').html().toUpperCase().indexOf(q.toUpperCase()));
        });
    });
});
function changeUrl(title, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Title: title, Url: url };
        console.log(obj);
        history.pushState(obj, obj.Title, obj.Url);
        top.document.title=obj.Title;
    } else {
        console.log("Browser does not support HTML5.");
    }
};
function getScrollBarWidth () {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return (w1 - w2);
};
function performCallback() {
    console.log("<-------------------------------------------->");
    console.log("<BEGIN PERFORM CALLBACK >");
    var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log("WINDOW HEIGHT : ");
    console.log(winHeight);
    var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log("WINDOW WIDTH : ");
    console.log(winWidth);
    var fixedHeaderHeight=(jQuery('header').height()==0?jQuery('header').find('.header-wrap').height():0);
    console.log("FIXED HEADER HEIGHT : ");
    console.log(fixedHeaderHeight);
    var fixedFooterHeight=jQuery('footer .navbar-fixed-bottom').height();
    console.log("FIXED FOOTER HEIGHT : ");
    console.log(fixedFooterHeight);
    var scroolBarWidth=getScrollBarWidth();
    console.log("SCROOL BAR WIDTH : ");
    console.log(scroolBarWidth);
    var minPageHeight=winHeight-(fixedHeaderHeight+fixedFooterHeight);
    console.log("MIN PAGE HEIGHT : ");
    console.log(minPageHeight);
    var minPageWidth=($("body").height() > $(window).height())?winWidth-scroolBarWidth:winWidth;
    console.log("MIN PAGE WIDTH : ");
    console.log(minPageWidth);
    if (jQuery(".locate-store-content").length) {
        console.log("<-------------------------------------------->");
        console.log("< LOCATE STORE PAGE >");
        jQuery('.collections-menu-wrap').parents('.row').addClass('hide');
        
        if(jQuery('#content-wrap').innerHeight()>(minPageHeight))
            jQuery('#content-wrap').css('padding-bottom', fixedHeaderHeight);
        jQuery('#content-wrap').css('min-height', minPageHeight);
        jQuery('#content-wrap').css('margin-top', fixedHeaderHeight);
        
        jQuery(".locate-store-sidebar").css({
            "height" : minPageHeight,
            "float":"left",
        }); 
        jQuery("#locateStoreImg").css({
            "height" : minPageHeight,
            "width" : minPageWidth-250-scroolBarWidth,
            "float":"left",
        });
        jQuery("#locateStoreImg .contentBox img").css({
            "height" : minPageHeight,
            "width" : minPageWidth / 5
        });
        jQuery("#locateStoreImg .contentBox").css({
            "height" : minPageHeight,
            "width" : minPageWidth / 5
        });

        jQuery("#locateStoreImg").smoothDivScroll({
            autoScrollingMode: "always", 
            autoScrollingDirection: "endlessLoopRight", 
            autoScrollingStep: 1, 
            autoScrollingInterval: 25 
        });
        jQuery("#locateStoreImg").bind("mouseover", function() {
            jQuery(this).smoothDivScroll("stopAutoScrolling");
        }).bind("mouseout", function() {
            jQuery(this).smoothDivScroll("startAutoScrolling");
        });
        
        jQuery("body").css({
            'background' : '#000',
        });
        jQuery('.backstretch').remove();
    } else {
        console.log("<-------------------------------------------->");
        console.log("<BEGIN ANY PAGE>");
        jQuery('.collections-menu-wrap').parents('.row').removeClass('hide');
        jQuery('div.row:not(#content)').removeClass('hide');
        if(jQuery('#content-wrap').innerHeight()>(minPageHeight))
            jQuery('#content-wrap').css('padding-bottom', fixedHeaderHeight);
        jQuery('#content-wrap').css('min-height', minPageHeight);
        jQuery('#content-wrap').css('margin-top', fixedHeaderHeight+10);
        jQuery('#content-wrap').backstretch([jQuery('.bg-image').attr('src')], {
            speed : 1500
        });
        console.log("<END ANY PAGE>");
        console.log("<-------------------------------------------->");
    }
    jQuery("body").removeClass("loading");
    console.log("<END PERFORM CALLBACK >");
    console.log("<-------------------------------------------->");
}

performCallback();
