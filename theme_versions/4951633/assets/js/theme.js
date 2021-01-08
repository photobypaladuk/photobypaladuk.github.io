$(function(){"use strict";window.Amazon={init:function(){this._listingResize(),this._initLazyLoad(),this._bindArrowUp(),this._bindAnchors(),this._initMenu(),this._initMobileMenu(),this._constructorSlick(),this._initGalleryBinds(),this._initGalleryHash(),this._fitVids(),this._turboPageLoad(),this._viewportUnits(),this._fastClick(),this._slideHeightCheck(),this._parallaxTitle()},settings:{document:$(document),loadTimeout:500,body:"body",GalleryHideTimer:1800,slickGallery:".gallery-overlay-items-container",mobileMenu:".mobile-menu",mobileMenuHeader:".header-mobile",mobileMenuScrollThrottle:10,upArrow:"#up-arrow",MAXIMUM_MOBILE_VIEWPORT_WIDTH:1024,mobile:window.matchMedia("only screen and (max-width: 767px)")},_listingResize:function(){if("listing"==_4ORMAT_DATA.page.type){$(document).on("lazybeforeunveil",function(e){$(e.target).on("load",function(){$(this).parents(".image-wrap").addClass("image-loaded")})});var e,i=$(".masonry, .grid"),a=["two-columns","two-columns","three-columns","four-columns","five-columns"],n=a.join(" "),t=["Extra Large","Large","Medium","Small","Auto"],o=[0,0,600,750,900],s=t.indexOf(_4ORMAT_DATA.theme.listing_thumbnail_size)+1,l=i.width(),r=e;if(l>o[s])e=s;else for(var d=0;d<3;d++)if(l>=o[d]&&l<=o[d+1]){e=d;break}r!=e&&(i.removeClass(n),i.addClass(a[e]),r=e)}},_viewportUnits:function(){window.viewportUnitsBuggyfill.init()},_fitVids:function(){$("body.gallery, body.blog").fitVids()},_overlayResize:function(){var e=$(window).height();$(".video-container").each(function(){var i=$(this).data("ratio");$(this).css("max-width",e*i)})},_fastClick:function(){FastClick.attach(document.body)},_bindAnchors:function(){$(".social-button a").on("click",function(){_4ORMAT.Share.show()}),$("a").on("click",function(e){var i;i=$(e.currentTarget),i.hasClass("category-name")&&e.preventDefault()})},_initMenu:function(){var e=function(){var e=[];$(".menu-item").each(function(i){$(this).removeClass("undotted");var a=$(this).offset().top;e.push(a),i===e.indexOf(a)&&($(".menu-item").eq(i).addClass("undotted"),$(this).addClass(i))})};e(),_4ORMAT_DATA.theme.menu_fixed&&$(window).scroll(function(){$(window).scrollTop()>$(".default-menu .menu").offset().top-25?$(".header").hasClass("fixed-menu")||($(".header").addClass("fixed-menu"),e()):$(".header").removeClass("fixed-menu")}),$(".footer .category").hover(function(){var e=$(this).outerHeight(!0),i=$(this).find(".category-item"),a=i.height();i.css("margin-top",-1*(a+e+10))})},_initMobileMenuPosition:function(){var e=$(".header-mobile-logo-trigger").outerHeight();$(window.Amazon.settings.mobileMenu).css("top",e)},_initMobileMenu:function(){window.Amazon._initMobileMenuPosition(),$(".mobile-menu-trigger").off().on("click",function(){$(this).toggleClass("active"),$(window.Amazon.settings.mobileMenu).toggleClass("active").removeClass("scrolled"),$("body").toggleClass("mobile-menu-open"),$("html").toggleClass("lock-scroll")}),$(window.Amazon.settings.mobileMenu).scroll(function(e){e.currentTarget.scrollTop>0?$(this).addClass("scrolled"):$(this).removeClass("scrolled")})},_bindArrowUp:function(){if($(window.Amazon.settings.upArrow).length){var e=$("#assets").offset().top;$(window.Amazon.settings.upArrow).click(function(e){e.preventDefault(),$("body, html").stop().animate({scrollTop:0},800)}),$(window).scroll(function(){$(this).scrollTop()>e?$(window.Amazon.settings.upArrow).addClass("active"):$(window.Amazon.settings.upArrow).removeClass("active")})}},_initMasonry:function(){var e=$(".masonry"),i=function(){var e={isFitWidth:!1,percentPosition:!0};return("gallery"==_4ORMAT_DATA.page.type&&("Fit to Screen"==_4ORMAT_DATA.theme.gallery_thumbnails_grid||_4ORMAT_DATA.page.assets.length<parseInt(_4ORMAT_DATA.theme.gallery_thumbnails_grid))||"listing"==_4ORMAT_DATA.page.type&&("Auto"==_4ORMAT_DATA.theme.listing_thumbnail_size||_4ORMAT_DATA.page.assets.length<parseInt(_4ORMAT_DATA.theme.gallery_thumbnails_grid)))&&(e.isFitWidth=!0,e.percentPosition=!1),e};if(e.length){new Masonry(".masonry",{percentPosition:i().percentPosition,isFitWidth:i().isFitWidth}).on("layoutComplete",function(){e.addClass("gallery-loaded")}),1===$(".asset").length&&e.addClass("gallery-loaded")}},_initGalleryUITimer:function(){var e,i=2,a=$(".gallery-control"),n=$(".gallery-social"),t=$(".gallery-overlay-items-container"),o=$(".image-caption-wrapper");$(".gallery-overlay").on("mousemove",function(e){s(e)}),$(".gallery-overlay").on("touchstart",function(e){s(e)});var s=function(i){var s=$(i.target);a.addClass("active"),n.addClass("active"),t.removeClass("gradient-hidden"),o.removeClass("hidden"),s.hasClass("image-caption-wrapper")||s.parent().hasClass("image-caption-wrapper")?o.addClass("fixed-visible"):o.removeClass("fixed-visible"),s.parent().hasClass("gallery-control")?(a.addClass("active"),n.addClass("active"),t.removeClass("gradient-hidden"),o.removeClass("hidden"),clearInterval(e)):(clearInterval(e),e=setInterval(l,window.Amazon.settings.GalleryHideTimer))},l=function(){_4ORMAT.Share.isOpen()||--i<=0&&(clearInterval(e),t.addClass("gradient-hidden"),a.removeClass("active"),n.removeClass("active"),o.addClass("hidden"),_4ORMAT.Share.hide())}},_initGalleryBinds:function(){$(".gallery-overlay-close").on("click",function(){$("#loading-spinner").hide()}),$(".gallery-item-link").on("click",function(e){window.Amazon._constructorGallery($(this).data("id")),e.preventDefault()}),window.Amazon._initGalleryUITimer()},_initGalleryHash:function(){var e=window.location.hash,i=e.split("-")[1];isNaN(i)||""===i||window.Amazon._constructorGallery(i)},_constructorGallery:function(e){var i=$(".gallery-overlay"),a=$(".gallery-overlay-close");$("html").addClass("lock-scroll"),history.pushState("","","#e-"+e),a.on("click",window.Amazon._destroyerGallery),i.addClass("active"),$("body").addClass("gallery-open"),window.Amazon._scrollPane(),$(".captioned").length&&$(".captioned").scrollTop(0),setTimeout(function(){$(window).trigger("resize")},0);var n=$(".gallery-overlay").data("flexslider"),t=n.vars.animationSpeed;n.vars.animationSpeed=0,i.flexslider(e),n.vars.animationSpeed=t,$(n.slides[n.currentSlide]).find("img").length&&setTimeout(function(){lazySizes.loader.unveil($(n.slides[n.currentSlide]).find("img")[0])})},_animationCascade:function(e,i){null===i&&(i=500),$(".asset, .page-asset").not(".disable-transitions").each(function(a){var n=$(this);setTimeout(function(){"forward"===e?(n.addClass("asset-loaded"),n.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$(this).delay(i).queue(function(){$(this).addClass("disable-transitions").dequeue()})})):"backwards"===e&&n.removeClass("asset-loaded disable-transitions")},100*a)})},_reinit:function(){$.hasData($(".gallery-overlay")[0])&&($.removeData($(".gallery-overlay")[0]),$(window.Amazon.settings.slickGallery).empty(),$(window.Amazon.settings.slickGallery).removeClass("loaded"),window.Amazon.init())},_getSlideHtml:function(e){for(var i=[],a=0;a<e.length;a++){var n="",t="",o="";null!==e[a].alt_text&&(o=e[a].alt_text),null!==e[a].copy&&(t="captioned",n='<div class="image-caption-wrapper"><div class="image-caption">'+e[a].copy+"</div></div>"),"video"==e[a].type?i.push('<div class="gallery-item video"><div class="gallery-item-inner '+t+'"><div class="video-container" style="max-width:'+e[a].video_width+'px" data-ratio="'+e[a].video_ratio+'"><div class="video-overlay"><span class="video-overlay-message">Tap to activate player</span></div>'+e[a].embed_dimensions+"</div>"+n+"</div></div>"):"text"==e[a].type?i.push('<div class="gallery-item text"><div class="gallery-item-inner"><div class="text-container-outter"><div class="text-container">'+e[a].copy+"</div></div></div></div>"):"title"==e[a].type?i.push('<div class="gallery-item text"><div class="gallery-item-inner"><div class="text-container-outter"><div class="text-container">'+e[a].copy+"</div></div></div></div>"):!0===_4ORMAT_DATA.theme.gallery_preview_fullscreen?$("body").hasClass("ie")||window.navigator.userAgent.indexOf("Edge")>-1?i.push('<div class="gallery-item image"><div class="gallery-item-inner '+t+'"><div class="image-container" style="background-image: url('+e[a].image_url_1600x1200+');"></div>'+n+"</div></div>"):i.push('<div class="gallery-item image"><div class="gallery-item-inner '+t+'"><div class="image-container"><img width="'+e[a].image_dimensions_1600x1200[0]+'" height="'+e[a].image_dimensions_1600x1200[1]+'" data-src="'+e[a].image_url_1600x1200+'" alt="'+o+'" /></div>'+n+"</div></div>"):i.push('<div class="gallery-item image"><div class="gallery-item-inner '+t+'"><div class="image-container"><img width="'+e[a].image_dimensions_1600x1200[0]+'" height="'+e[a].image_dimensions_1600x1200[1]+'" data-src="'+e[a].image_url_1600x1200+'" alt="'+o+'" />'+n+"</div></div></div>")}return i},_constructorGallerySlides:function(e){function i(){return window.matchMedia("(min-width: 1024px)").matches?"Fade"===_4ORMAT_DATA.theme.gallery_preview_transition_type?"fade":"Slide"===_4ORMAT_DATA.theme.gallery_preview_transition_type?"slide":void 0:"slide"}function a(){return"None"===_4ORMAT_DATA.theme.gallery_preview_transition_type?0:"Normal"===_4ORMAT_DATA.theme.gallery_preview_change_image_speed?700:"Slow"===_4ORMAT_DATA.theme.gallery_preview_change_image_speed?1500:"Fast"===_4ORMAT_DATA.theme.gallery_preview_change_image_speed?200:void 0}function n(e){m=e.touches[0].clientX,g=e.touches[0].clientY}function t(e){if(!window.Amazon._isZoomActive()&&m&&g&&!(e.touches.length>=2)){var i=e.touches[0].clientX,a=e.touches[0].clientY,n=m-i,t=g-a;Math.abs(n)>Math.abs(t)&&(n>0?$(".gallery-overlay").flexslider("next"):$(".gallery-overlay").flexslider("prev")),m=null,g=null}}var o=$(window.Amazon.settings.slickGallery);if(!o.hasClass("loaded")&&e&&"gallery"==_4ORMAT_DATA.page.type){for(var s=window.Amazon._getSlideHtml(e),l=0;l<s.length;l++)o.append(s[l]);var r=window.location.hash,d=r.split("-")[1],c=0;isNaN(d)||""===d||(c=d),$(".gallery-overlay").flexslider({slideshow:!1,startAt:c,selector:".gallery-overlay-items-container > .gallery-item",customDirectionNav:$(".gallery-overlay .gallery-overlay-navigation"),controlNav:!1,touch:!1,animation:i(),animationSpeed:a(),start:function(i){var a=i.slides.eq(i.currentSlide);window.location.hash.length&&$(a).find("img").length&&lazySizes.loader.unveil($(a).find("img")[0]),$(a).hasClass("image")&&!$(a).find(".image-placeholder").length&&($("body").hasClass("ie")||~window.navigator.userAgent.indexOf("Edge")&&!0===_4ORMAT_DATA.theme.gallery_preview_fullscreen?$(a).find("img").after('<canvas class="image-placeholder" width="'+e[i.currentSlide].image_dimensions_1600x1200[0]+'" height="'+e[i.currentSlide].image_dimensions_1600x1200[1]+'"></canvas>'):$(a).find("img").before('<canvas class="image-placeholder" width="'+e[i.currentSlide].image_dimensions_1600x1200[0]+'" height="'+e[i.currentSlide].image_dimensions_1600x1200[1]+'"></canvas>')),window.Amazon.settings.mobile.matches&&(document.addEventListener("touchstart",n,!1),document.addEventListener("touchmove",t,!1))},after:function(e){var i=e.slides.eq(e.currentSlide);$(i).find("img").length&&lazySizes.loader.unveil($(i).find("img")[0]);var a=e.slides.eq(e.getTarget("next")),n=e.slides.eq(e.getTarget("previous"));if($(a).addClass("flex-adjacent-slide"),$(a).find("img").length&&lazySizes.loader.unveil($(a).find("img")[0]),$(n).addClass("flex-adjacent-slide"),history.pushState?window.history.pushState("","","#e-"+e.currentSlide):window.location.hash="e-"+e.currentSlide,_4ORMAT_DATA.page.last_asset_position>0){var t=$(".gallery-item").length,o=e.currentSlide+1;_4ORMAT_DATA.page.last_asset_position==o&&t<=_4ORMAT_DATA.page.last_asset_position&&($("#loading-spinner").show(),$(".gallery-overlay-navigation").attr("disabled",!0),window.GalleryPagination.ajaxCall())}setTimeout(function(){if(i.find("iframe").length){var e=i.find("iframe").first();null==e[0].contentWindow&&(e[0].src+="")}},0)},before:function(i){var a=i.slides.eq(i.currentSlide),n=i.slides.eq(i.animatingTo),t=i.slides.eq(i.getTarget("next")+1),o=i.slides.eq(i.getTarget("previous")-1);$(t).removeClass("flex-adjacent-slide"),$(o).removeClass("flex-adjacent-slide"),$(n).hasClass("image")&&!$(n).find(".image-placeholder").length&&($("body").hasClass("ie")||~window.navigator.userAgent.indexOf("Edge")&&!0===_4ORMAT_DATA.theme.gallery_preview_fullscreen?$(n).find("img").after('<canvas class="image-placeholder" width="'+e[i.animatingTo].image_dimensions_1600x1200[0]+'" height="'+e[i.animatingTo].image_dimensions_1600x1200[1]+'"></canvas>'):$(n).find("img").before('<canvas class="image-placeholder" width="'+e[i.animatingTo].image_dimensions_1600x1200[0]+'" height="'+e[i.animatingTo].image_dimensions_1600x1200[1]+'"></canvas>')),$(a).find("iframe").each(function(){$(this)[0].contentWindow&&($(this)[0].contentWindow.postMessage('{"method":"pause","value":""}',"*"),$(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"))}),$(".video-overlay").removeClass("active")}})}$(".gallery-overlay iframe").length&&$("iframe").load(function(){window.Amazon._videoPauser(),window.Amazon._fitVids(),$(".video-overlay").on("click",function(){$(this).addClass("active")})});var m=null,g=null},_slideHeightCheck:function(){var e=window.outerHeight;0===e&&(e=window.innerHeight),$(".captioned .image-container").outerHeight()>e?$(".image .captioned").addClass("flex-start"):$(".image .captioned").removeClass("flex-start")},_videoPauser:function(e){$(".vimeo_cont iframe")[0],$(".youtube_cont iframe")[0];"overlay"===e&&$(window.Amazon.settings.slickGallery).find("iframe").each(function(){$(this)[0].contentWindow&&($(this)[0].contentWindow.postMessage('{"method":"pause","value":""}',"*"),$(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"))})},_constructorSlick:function(){window.Amazon._constructorGallerySlides(_4ORMAT_DATA.page.assets)},_destroyerGallery:function(){history.replaceState("",document.title,window.location.pathname),$(".gallery-overlay").removeClass("active"),$("body").removeClass("gallery-open"),$("html").removeClass("lock-scroll"),$(".gallery-overlay iframe").length&&window.Amazon._videoPauser("overlay"),window.Amazon.settings.mobile.matches&&(document.removeEventListener("touchstart",touchStartHandler,!1),document.removeEventListener("touchmove",touchMoveHandler,!1))},_initLazyLoad:function(){$("#masonry-gallery").length&&0===$("#masonry-gallery img").length&&$("#masonry-gallery").addClass("gallery-loaded"),window.Amazon._initMasonry(),$(document).on("lazybeforeunveil",function(e){$(e.target).on("load",function(e){var i;$(this).parent().addClass("loaded"),($("body").hasClass("ie")||$("html").hasClass("safari6"))&&$(this).parents("#masonry-gallery").length&&(i=$(this).prev(".image-placeholder"),i.css("height",$(e.target).height()),$("#masonry-gallery").masonry())})})},_scrollPane:function(){$(".text-container").length&&($(".text-container").jScrollPane(),$(".text-container").each(function(){var e,i=$(this).data("jsp");$(window).bind("resize",function(){e||(e=setTimeout(function(){i.reinitialise(),e=null},50))})}))},_parallaxTitle:function(){$(window).on("scroll",function(){var e=$(window).scrollTop(),i=(e/8).toFixed(0),a=1-.003*e;$("body").height()-$(window).height()>280&&$(".fade-header .title-element .text").css({transform:"translate(0%,"+i+"%)",opacity:a})})},_turboPageLoad:function(){window.Amazon.settings.document.on("page:load",function(){window.Amazon._bindAnchors(),window.Amazon._listingResize(),window.Amazon._initMasonry(),window.Amazon._initMenu(),window.Amazon._initGalleryBinds(),window.Amazon._initMobileMenu(),window.Amazon._fitVids(),window.Amazon._bindArrowUp(),window.Amazon._viewportUnits(),$(window.Amazon.settings.body).removeClass("lock-click"),$("main").removeClass("ajax-hide"),window.Amazon._animationCascade("forward"),window.Amazon._constructorSlick()})},_isZoomActive:function(){return window.detectZoom.zoom()>1}},$(document).on("lazybeforeunveil",function(e){$(e.target).on("load",function(){var i;($("body").hasClass("ie")||$("html").hasClass("safari6"))&&$(this).parents("#masonry-gallery").length&&(i=$(this).prev(".image-placeholder"),i.css("height",$(e.target).height()))})}),$(window).on("scrolldelta",function(e){var i=e.scrollTopDelta;$(window.Amazon.settings.mobileMenu).hasClass("active")||(i>1&&i>=window.Amazon.settings.mobileMenuScrollThrottle&&e.scrollTop>0?$(window.Amazon.settings.mobileMenuHeader).addClass("hidden"):i<1&&i<=-1*window.Amazon.settings.mobileMenuScrollThrottle&&$(window.Amazon.settings.mobileMenuHeader).removeClass("hidden"),0===e.scrollTop&&$(window.Amazon.settings.mobileMenuHeader).removeClass("hidden"))}),window.onpopstate=function(){history.pushState&&$("body").hasClass("gallery")&&$("html").hasClass("lock-scroll")&&window.Amazon._destroyerGallery()},$("main").removeClass("ajax-hide"),$(".asset").is(".video")&&(window.Amazon._animationCascade("forward"),$("#loading-spinner").hide()),$(window).load(function(){window.Amazon._initMenu(),window.Amazon._animationCascade("forward"),window.Amazon._slideHeightCheck(),window.Amazon._initMasonry(),$(window.Amazon.settings.body).removeClass("lock-click"),$(window.Amazon.settings.slickGallery).on("click",".gallery-item-inner",function(e){if($(e.target).hasClass("video-overlay")||window.Amazon._isZoomActive())return!1;$(this).parent().hasClass("video")&&"DIV"==e.target.tagName||"IMG"==e.target.tagName?$(".gallery-overlay").flexslider("next"):$(this).parent().hasClass("text")&&"gallery-item-inner"==e.target.className&&$(".gallery-overlay").flexslider("next")})}),$(document).on("page:before-change",function(){return $(window.Amazon.settings.body).addClass("lock-click"),$("main").addClass("ajax-hide"),window.Amazon._animationCascade("backwards"),$(window.Amazon.settings.mobileMenu).removeClass("active"),$(".mobile-menu-trigger").removeClass("active"),$("html").removeClass("lock-scroll"),$(".gallery-overlay").flexslider("destroy"),$("html,body").animate({scrollTop:0},200)}),$(document).on("page:restore page:receive",function(){return window.Amazon._initMasonry(),window.Amazon._animationCascade("forward"),$("body").removeClass("lock-click"),$("main").removeClass("ajax-hide")}),$(document).on("page:load",function(){window.Amazon._initMasonry(),$("#masonry-gallery").length&&0===$("#masonry-gallery img").length&&$("#masonry-gallery").addClass("gallery-loaded"),$("body").hasClass("ie")&&"content"===_4ORMAT_DATA.page.type&&(window.resizeTo(window.outerWidth+1,window.outerHeight),setTimeout(function(){return function(){return window.resizeTo(window.outerWidth-1,window.outerHeight)}}(),0))}),$(window).on("resize",function(i){window.Amazon._initMenu(),window.Amazon._initMobileMenuPosition(),window.Amazon._slideHeightCheck(),window.Amazon._listingResize(),$(window).width()<669&&window.Amazon._overlayResize();var a;($("body").hasClass("ie")||$("html").hasClass("safari6"))&&$(i).parents("#masonry-gallery").length&&(a=$(i).prev(".image-placeholder"),a.css("height",$(e.target).height()),$("#masonry-gallery").masonry())}),$(document).keydown(function(e){$(".gallery-overlay").hasClass("active")&&27===e.keyCode&&window.Amazon._destroyerGallery()}),window.Amazon.init()});