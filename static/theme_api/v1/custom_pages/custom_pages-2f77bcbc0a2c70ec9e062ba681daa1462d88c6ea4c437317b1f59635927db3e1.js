_4ORMAT.$(function(){var s=_4ORMAT.$,o=function(){s("._4ORMAT_content_page_row").each(function(){var o=s(this).offset().top,t=o+s(this).outerHeight(),i=s(window).scrollTop(),n=i+s(window).height();i<t&&(o<n||n==document.body.scrollHeight)&&(s(this).hasClass("in-viewport")||s(this).addClass("in-viewport"))})};o(),s([window,document.body]).on("scroll",function(){o()})});