!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function r(t,n,a,d,e){return'<div class="row">\n\t<div class="col-lg-9">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6 text-center">\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div><canvas id="not-found" height="250"></canvas></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-footer"><small>\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 1]]</strong> &ndash; \n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.404]]]]\n\t\t\t\t\t</small></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6 text-center">\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div><canvas id="toobusy" height="250"></canvas></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-footer"><small>\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 2]]</strong> &ndash; \n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.503]]]]\n\t\t\t\t\t</small></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="col-lg-3 acp-sidebar">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/advanced/errors:manage-error-log]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="btn-group-vertical btn-block" role="group">\n\t\t\t\t\t<a class="btn btn-info" target="_top" href="'+(0,t.__escape)(a(n&&n.config&&n.config.relative_path))+'/admin/advanced/errors/export">\n\t\t\t\t\t\t<i class="fa fa-download"></i> [[admin/advanced/errors:export-error-log]]\n\t\t\t\t\t</a>\n\t\t\t\t\t<button class="btn btn-danger" data-action="clear">\n\t\t\t\t\t\t<i class="fa fa-trash"></i> [[admin/advanced/errors:clear-error-log]]\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class="row">\n\t<div class="col-xs-12">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">\n\t\t\t\t<i class="fa fa-exclamation-triangle"></i> [[admin/advanced/errors:error.404]]\n\t\t\t</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<table class="table table-striped">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th>[[admin/advanced/errors:route]]</th>\n\t\t\t\t\t\t<th>[[admin/advanced/errors:count]]</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t'+r.blocks["not-found"](t,n,a,d,e)+"\n\t\t\t\t\t\t"+(a(n&&n["not-found"]&&n["not-found"].length)?"":'\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan="2">\n\t\t\t\t\t\t\t\t<div class="alert alert-success">\n\t\t\t\t\t\t\t\t\t[[admin/advanced/errors:no-routes-not-found]]\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t')+"\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}return r.blocks={"not-found":function(t,n,a,d){var e=t.__escape;return d(a(n&&n["not-found"]),function(t){return"\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>"+e(a(n&&n["not-found"]&&n["not-found"][t]&&n["not-found"][t].value))+"</td>\n\t\t\t\t\t\t\t<td>"+e(a(n&&n["not-found"]&&n["not-found"][t]&&n["not-found"][t].score))+"</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t"},function(){return""})}},r});