!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(t,e,n,s,i){t=t.__escape;return'<div id="'+t(n(e&&e.alert_id))+'" class="alert alert-dismissable alert-'+t(n(e&&e.type))+' clearfix" component="toaster/toast">\n\t<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n\n\t'+(n(e&&e.image)?'\n\t<img src="'+t(n(e&&e.image))+'">\n\t':"")+"\n\n\t"+(n(e&&e.title)?"\n\t<strong>"+t(n(e&&e.title))+"</strong>\n\t":"")+"\n\n\t"+(n(e&&e.message)?"\n\t<p>"+t(n(e&&e.message))+"</p>\n\t":"")+"\n</div>\n"}return t.blocks={},t});