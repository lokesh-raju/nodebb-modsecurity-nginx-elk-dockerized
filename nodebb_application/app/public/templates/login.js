!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,n,o,e,r){var l=t.__escape;return(o(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+i.blocks.breadcrumbs(t,n,o,e,r)+"\n</ol>\n":"")+'\n\n\n<div class="row">\n\t'+(o(n&&n.allowLocalLogin)?'\n\t<div class="'+(o(n&&n.alternate_logins)?"col-md-6":"col-md-12")+'">\n\t\t<div class="login-block">\n\t\t\t<div class="alert alert-danger" id="login-error-notify" '+(o(n&&n.error)?'style="display:block"':'style="display: none;"')+'>\n\t\t\t\t<button type="button" class="close" data-dismiss="alert">&times;</button>\n\t\t\t\t<strong>[[login:failed_login_attempt]]</strong>\n\t\t\t\t<p>'+l(o(n&&n.error))+'</p>\n\t\t\t</div>\n\n\t\t\t<form class="form-horizontal" role="form" method="post" id="login-form">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="username" class="col-lg-2 control-label">'+l(o(n&&n.allowLoginWith))+'</label>\n\t\t\t\t\t<div class="col-lg-10">\n\t\t\t\t\t\t<input class="form-control" type="text" placeholder="'+l(o(n&&n.allowLoginWith))+'" name="username" id="username" autocorrect="off" autocapitalize="off" value="'+l(o(n&&n.username))+'"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="password" class="col-lg-2 control-label">[[user:password]]</label>\n\t\t\t\t\t<div class="col-lg-10">\n\t\t\t\t\t\t<input class="form-control" type="password" placeholder="[[user:password]]" name="password" id="password" '+(o(n&&n.username)?'autocomplete="off"':"")+'/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<div class="col-lg-offset-2 col-lg-10">\n\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type="checkbox" name="remember" id="remember" checked /> [[login:remember_me]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t'+i.blocks.loginFormEntry(t,n,o,e,r)+'\n\t\t\t\t<input type="hidden" name="_csrf" value="'+l(o(n&&n.config&&n.config.csrf_token))+'" />\n\t\t\t\t<input type="hidden" name="noscript" id="noscript" value="true" />\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<div class="col-lg-offset-2 col-lg-10">\n\t\t\t\t\t\t<button class="btn btn-primary btn-lg btn-block" id="login" type="submit">[[global:login]]</button>\n\t\t\t\t\t\t'+(o(n&&n.allowRegistration)?'\n\t\t\t\t\t\t<span>[[login:dont_have_account]] <a href="'+l(o(n&&n.config&&n.config.relative_path))+'/register">[[register:register]]</a></span>\n\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t"+(o(n&&n.allowPasswordReset)?'\n\t\t\t\t\t\t&nbsp; <a id="reset-link" href="'+l(o(n&&n.config&&n.config.relative_path))+'/reset">[[login:forgot_password]]</a>\n\t\t\t\t\t\t':"")+"\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\t</div>\n\t":"")+"\n\n\t"+(o(n&&n.alternate_logins)?'\n\t<div class="'+(o(n&&n.allowLocalLogin)?"col-md-6":"col-md-12")+'">\n\t\t<div class="alt-login-block">\n\t\t\t<h4>[[login:alternative_logins]]</h4>\n\t\t\t<ul class="alt-logins">\n\t\t\t\t'+i.blocks.authentication(t,n,o,e,r)+"\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t":"")+"\n</div>\n"}return i.blocks={breadcrumbs:function(t,e,r,n){var l=t.__escape;return n(r(e&&e.breadcrumbs),function(t,n,o){return"\n\t<li"+(n===o-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(n===o-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+l(n)+'" />\n\t\t'+(n===o-1?"":'<a href="'+l(r(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].url))+'" itemprop="item">')+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+l(r(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===o-1?"\n\t\t\t\t"+(r(e&&e["feeds:disableRSS"])?"":"\n\t\t\t\t"+(r(e&&e.rssFeedUrl)?'<a target="_blank" href="'+l(r(e&&e.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n===o-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},loginFormEntry:function(t,n,o,e){var r=t.__escape;return e(o(n&&n.loginFormEntry),function(t){return'\n\t\t\t\t<div class="form-group loginFormEntry">\n\t\t\t\t\t<label for="login-'+r(o(n&&n.loginFormEntry&&n.loginFormEntry[t]&&n.loginFormEntry[t].styleName))+'" class="col-lg-4 control-label">'+r(o(n&&n.loginFormEntry&&n.loginFormEntry[t]&&n.loginFormEntry[t].label))+'</label>\n\t\t\t\t\t<div id="login-'+r(o(n&&n.loginFormEntry&&n.loginFormEntry[t]&&n.loginFormEntry[t].styleName))+'" class="col-lg-8">'+o(n&&n.loginFormEntry&&n.loginFormEntry[t]&&n.loginFormEntry[t].html)+"</div>\n\t\t\t\t</div>\n\t\t\t\t"},function(){return""})},authentication:function(t,n,o,e){var r=t.__escape;return e(o(n&&n.authentication),function(t){return'\n\t\t\t\t<li class="'+r(o(n&&n.authentication&&n.authentication[t]&&n.authentication[t].name))+'"><a rel="nofollow noopener noreferrer" target="_top" href="'+r(o(n&&n.config&&n.config.relative_path))+r(o(n&&n.authentication&&n.authentication[t]&&n.authentication[t].url))+'"><i class="fa '+r(o(n&&n.authentication&&n.authentication[t]&&n.authentication[t].icon))+' fa-3x"></i></a></li>\n\t\t\t\t'},function(){return""})}},i});