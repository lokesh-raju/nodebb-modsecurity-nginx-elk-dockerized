!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(t,n,s,e,i){return'<div class="settings">\n\t<div class="row">\n\t\t<div class="col-sm-2 col-xs-12 content-header">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class="col-sm-10 col-xs-12">\n\t\t\t<nav class="section-content">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class="row">\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/web-crawler:crawlability-settings]]</div>\n\t<div class="col-sm-10 col-xs-12">\n\t\t<form>\n\t\t\t<strong>[[admin/settings/web-crawler:robots-txt]]</strong><br />\n\t\t\t<textarea class="form-control" data-field="robots:txt"></textarea>\n\t\t</form>\n\t</div>\n</div>\n\n<div class="row">\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/web-crawler:sitemap-feed-settings]]</div>\n\t<div class="col-sm-10 col-xs-12">\n\t\t<form>\n\t\t\t<div class="checkbox">\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="feeds:disableRSS">\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/web-crawler:disable-rss-feeds]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class="checkbox">\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="feeds:disableSitemap">\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/web-crawler:disable-sitemap-xml]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label>[[admin/settings/web-crawler:sitemap-topics]]</label>\n\t\t\t\t<input class="form-control" type="text" data-field="sitemapTopics" />\n\t\t\t</div>\n\n\t\t\t<br />\n\t\t\t<p>\n\t\t\t\t<button id="clear-sitemap-cache" class="btn btn-warning">[[admin/settings/web-crawler:clear-sitemap-cache]]</button>\n\t\t\t\t<a href="'+(0,t.__escape)(s(n&&n.config&&n.config.relative_path))+'/sitemap.xml" target="_blank" class="btn btn-link">[[admin/settings/web-crawler:view-sitemap]]</a>\n\t\t\t</p>\n\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>\n\n<script>\n\trequire([\'admin/settings\'], function(Settings) {\n\t\tSettings.prepare();\n\t\tSettings.populateTOC();\n\t});\n<\/script>\n'}return t.blocks={},t});