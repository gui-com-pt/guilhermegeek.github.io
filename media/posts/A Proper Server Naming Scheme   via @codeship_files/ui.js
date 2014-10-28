(function(){var t=function(t,n){return function(){return t.apply(n,arguments)}};$(function(){var n;return n=function(){function t(){}return t}(),n.Watcher=function(){function n(){this.init=t(this.init,this),this.init()}return n.prototype.init=function(){return $('[data-watch="input"]').length>0&&this._watchInputs($('[data-watch="input"]')),$('[data-watch="textarea"]').length>0&&this._watchInputs($('[data-watch="textarea"]'),"textarea"),this._calculateFooterHeight(),this._setTitleImage(),this._handleMobileMenu(),this._uiPreperations()},n.prototype._calculateFooterHeight=function(){var t;return t=$(".widgetArea").outerHeight(),$(".pageContent").css("min-height",t+"px")},n.prototype._setTitleImage=function(){var t,n;return t=$(".titleImg"),n=t.data("bg-src"),t.css("background-image","url("+n+")")},n.prototype._watchInputs=function(t,n){return null==n&&(n="input"),t.each(function(){return""!==$(this).find(n).val()||$(this).find(n).is(":focus")?$(this).addClass("has-content"):void 0}),$(n,'[data-watch="'+n+'"]').on("focus",function(){return $(this).parent().addClass("has-focus")}),$(n,'[data-watch="'+n+'"]').on("blur",function(){return""!==$(this).val().trim()?$(this).parent().addClass("has-content"):$(this).parent().removeClass("has-content"),$(this).parent().removeClass("has-focus")})},n.prototype._handleMobileMenu=function(){return $(".js-mobileMenu").on("click",function(t){var n;return t.preventDefault(),n=$(".nav--mobileMenu"),n.hasClass("is-visible")?n.removeClass("is-visible").velocity("slideUp",{duration:200}):n.addClass("is-visible").velocity("slideDown",{duration:200})})},n.prototype._uiPreperations=function(){var t,n,e,i,a,r,s,o;return t=$(".widget").last(),n=$("aside").offset().top,i=$(".pageHeader").height(),r=t.offset().top-i,e=n-i,s=0,a=function(n){return t.css({position:"fixed"})},o=function(){return t.removeAttr("style")},$(window).on("scroll",function(){var n;if(n=$(window).scrollTop(),n>=r){if(t.css("top",n-e),0===s)return s=1,a(n)}else if(1===s)return s=0,o()})},n}(),new n.Watcher})}).call(this);