!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function d(t,n,l,a,i){var e=t.__escape;return'<ul class="nav nav-pills">\n\t<li class="active"><a href="#installed" data-toggle="tab">\n\t\t[[admin/extend/plugins:installed]]\n\t\t<span class="badge">'+e(l(n&&n.installedCount))+'</span>\n\t</a></li>\n\t<li><a href="#active" data-toggle="tab">\n\t\t[[admin/extend/plugins:active]]\n\t\t<span class="badge">'+e(l(n&&n.activeCount))+'</span>\n\t</a></li>\n\t<li><a href="#deactive" data-toggle="tab">\n\t\t[[admin/extend/plugins:inactive]]\n\t\t<span class="badge">'+e(l(n&&n.inactiveCount))+'</span>\n\t</a></li>\n\t<li><a href="#upgrade" data-toggle="tab">\n\t\t[[admin/extend/plugins:out-of-date]]\n\t\t<span class="badge">'+e(l(n&&n.upgradeCount))+'</span>\n\t</a></li>\n\t<li><a href="#download" data-toggle="tab">[[admin/extend/plugins:find-plugins]]</a></li>\n</ul>\n<br />\n\n<div class="plugins row">\n\t<div class="acp-sidebar col-lg-3 col-lg-push-9">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/extend/plugins:plugin-search]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<input autofocus class="form-control" type="text" id="plugin-search" placeholder="[[admin/extend/plugins:plugin-search-placeholder]]"/><br/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t<input id="plugin-submit-usage" class="mdl-switch__input" type="checkbox" data-field="submitPluginUsage" '+(l(n&&n.submitPluginUsage)?"checked":"")+'/>\n\t\t\t\t\t\t<span class="mdl-switch__label">[[admin/extend/plugins:submit-anonymous-usage]]</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/extend/plugins:reorder-plugins]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<button class="btn btn-default btn-block" id="plugin-order"><i class="fa fa-exchange"></i> [[admin/extend/plugins:order-active]]</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/extend/plugins:dev-interested]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/extend/plugins:docs-info]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="col-lg-9 col-lg-pull-3">\n\t\t<div class="tab-content">\n\t\t\t<div class="tab-pane fade active in" id="installed">\n\t\t\t\t<ul class="installed">\n\t\t\t\t\t'+d.blocks.installed(t,n,l,a,i)+'\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="tab-pane fade" id="active">\n\t\t\t\t<ul class="active"></ul>\n\t\t\t</div>\n\t\t\t<div class="tab-pane fade" id="deactive">\n\t\t\t\t<ul class="deactive"></ul>\n\t\t\t</div>\n\t\t\t<div class="tab-pane fade" id="upgrade">\n\t\t\t\t<ul class="upgrade"></ul>\n\t\t\t</div>\n\t\t\t<div class="tab-pane fade" id="download">\n\t\t\t\t<ul class="download">\n\t\t\t\t\t'+d.blocks.download(t,n,l,a,i)+'\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="modal fade" id="order-active-plugins-modal">\n\t\t<div class="modal-dialog">\n\t\t\t<div class="modal-content">\n\t\t\t\t<div class="modal-header">\n\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n\t\t\t\t\t<h4 class="modal-title">[[admin/extend/plugins:order-active]]</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class="modal-body">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t[[admin/extend/plugins:order.description]]\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t[[admin/extend/plugins:order.explanation]]\n\t\t\t\t\t</p>\n\t\t\t\t\t<ul class="plugin-list"></ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal">[[global:buttons.close]]</button>\n\t\t\t\t\t<button type="button" class="btn btn-primary" id="save-plugin-order">[[global:save]]</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</div>\n\n\n'}return d.blocks={installed:function(t,l,a,n){var i=t.__escape;return n(a(l&&l.installed),function(t,n){return"\n\t\t\t\t\t\t\t\t\t\t"+(a(l&&l.installed&&l.installed[t]&&l.installed[t].error)?"":'\n\t\t\t\t\t<li id="'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].id))+'" data-plugin-index="'+i(n)+'" data-plugin-id="'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].id))+'" data-version="'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].version))+'" class="clearfix '+(a(l&&l.installed&&l.installed[t]&&l.installed[t].active)?"active":"")+'">\n\t\t\t\t\t\t<div class="pull-right controls">\n\t\t\t\t\t\t\t'+(a(l&&l.installed&&l.installed[t]&&l.installed[t].isTheme)?'\n\t\t\t\t\t\t\t<a href="'+i(a(l&&l.config&&l.config.relative_path))+'/admin/appearance/themes" class="btn btn-info">[[admin/extend/plugins:plugin-item.themes]]</a>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<button data-action="toggleActive" class="btn '+(a(l&&l.installed&&l.installed[t]&&l.installed[t].active)?" btn-warning":" btn-success")+'">\n\t\t\t\t\t\t\t<i class="fa fa-power-off"></i> '+(a(l&&l.installed&&l.installed[t]&&l.installed[t].active)?"[[admin/extend/plugins:plugin-item.deactivate]]":"[[admin/extend/plugins:plugin-item.activate]]")+"</button>\n\t\t\t\t\t\t\t")+'\n\n\t\t\t\t\t\t\t<button data-action="toggleInstall" data-installed="1" class="btn btn-danger"><i class="fa fa-trash-o"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n\t\t\t\t\t\t\t'+(a(l&&l.installed&&l.installed[t]&&l.installed[t].active)?"\n\t\t\t\t\t\t\t"+(a(l&&l.installed&&l.installed[t]&&l.installed[t].settingsRoute)?'\n\t\t\t\t\t\t\t<a href="'+i(a(l&&l.config&&l.config.relative_path))+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].settingsRoute))+'" class="btn btn-primary"><i class="fa fa-wrench"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t":"")+"\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>"+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].name))+"</strong></h2>\n\n\t\t\t\t\t\t"+(a(l&&l.installed&&l.installed[t]&&l.installed[t].description)?"\n\t\t\t\t\t\t<p>"+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].description))+"</p>\n\t\t\t\t\t\t":"")+"\n\t\t\t\t\t\t"+(a(l&&l.installed&&l.installed[t]&&l.installed[t].outdated)?'<i class="fa fa-exclamation-triangle text-danger"></i> ':"")+'\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].version))+'</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].latest))+"</strong></small>\n\n\t\t\t\t\t\t"+(a(l&&l.installed&&l.installed[t]&&l.installed[t].outdated)?'\n\t\t\t\t\t\t<button data-action="upgrade" class="btn btn-success btn-xs"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t'+(a(l&&l.installed&&l.installed[t]&&l.installed[t].isCompatible)?'\n\t\t\t\t\t\t\t<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, '+i(a(l&&l.version))+"]]\n\t\t\t\t\t\t\t":'\n\t\t\t\t\t\t\t<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t":"")+"\n\n\t\t\t\t\t\t"+(a(l&&l.installed&&l.installed[t]&&l.installed[t].url)?'\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].url))+'">'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].url))+"</a></p>\n\t\t\t\t\t\t":"")+"\n\t\t\t\t\t</li>\n\t\t\t\t\t")+"\n\t\t\t\t\t"+(a(l&&l.installed&&l.installed[t]&&l.installed[t].error)?'\n\t\t\t\t\t<li data-plugin-id="'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].id))+'" class="clearfix">\n\t\t\t\t\t\t<div class="pull-right">\n\t\t\t\t\t\t\t<button class="btn btn-default disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n\t\t\t\t\t\t\t<button data-action="toggleInstall" data-installed="1" class="btn btn-danger"><i class="fa fa-trash-o"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>'+i(a(l&&l.installed&&l.installed[t]&&l.installed[t].id))+"</strong></h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t":"")+"\n\n\t\t\t\t\t"},function(){return""})},download:function(t,n,l,a){var i=t.__escape;return a(l(n&&n.download),function(t){return'\n\t\t\t\t\t\t\t\t\t\t<li id="'+i(l(n&&n.download&&n.download[t]&&n.download[t].id))+'" data-plugin-id="'+i(l(n&&n.download&&n.download[t]&&n.download[t].id))+'" class="clearfix">\n\t\t\t\t\t\t<div class="pull-right">\n\t\t\t\t\t\t\t<button data-action="toggleActive" class="btn btn-success hidden"><i class="fa fa-power-off"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\n\t\t\t\t\t\t\t<button data-action="toggleInstall" data-installed="0" class="btn btn-success"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>'+i(l(n&&n.download&&n.download[t]&&n.download[t].name))+"</strong></h2>\n\n\t\t\t\t\t\t"+(l(n&&n.download&&n.download[t]&&n.download[t].description)?"\n\t\t\t\t\t\t<p>"+i(l(n&&n.download&&n.download[t]&&n.download[t].description))+"</p>\n\t\t\t\t\t\t":"")+'\n\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">'+i(l(n&&n.download&&n.download[t]&&n.download[t].latest))+"</strong></small>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t"+(l(n&&n.download&&n.download[t]&&n.download[t].isCompatible)?'\n\t\t\t\t\t\t\t<i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, '+i(l(n&&n.version))+"]]\n\t\t\t\t\t\t\t":'\n\t\t\t\t\t\t\t<i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t"+(l(n&&n.download&&n.download[t]&&n.download[t].url)?'\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="'+i(l(n&&n.download&&n.download[t]&&n.download[t].url))+'">'+i(l(n&&n.download&&n.download[t]&&n.download[t].url))+"</a></p>\n\t\t\t\t\t\t":"")+"\n\t\t\t\t\t</li>\n\n\t\t\t\t\t"},function(){return""})}},d});