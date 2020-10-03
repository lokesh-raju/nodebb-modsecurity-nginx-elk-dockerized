!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(e,s,i,t,r){var n=e.__escape;return'<div class="row">\n\t<form role="form" class="category">\n\t\t<div class="">\n\t\t\t<p>\n\t\t\t\t[[admin/manage/categories:privileges.description]]\n\t\t\t</p>\n\n\t\t\t<div class="lead">\n\t\t\t\t[[admin/manage/categories:privileges.category-selector]]\n\t\t\t\t<div component="category-selector" class="btn-group '+(i(s&&s.pullRight)?"pull-right":"")+'">\n\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t<span component="category-selector-selected">'+(i(s&&s.selectedCategory)?'<span class="fa-stack" style="'+n(r(s,e,"generateCategoryBackground",[i(s&&s.selectedCategory)]))+'"><i class="fa fa-fw fa-stack-1x '+n(i(s&&s.selectedCategory&&s.selectedCategory.icon))+'" style="color: '+n(i(s&&s.selectedCategory&&s.selectedCategory.color))+';"></i></span> '+n(i(s&&s.selectedCategory&&s.selectedCategory.name)):"\n\t\t[[topic:thread_tools.select_category]]")+'</span> <span class="caret"></span>\n\t</button>\n\t<div component="category-selector-search" class="hidden">\n\t\t<input type="text" class="form-control" autocomplete="off">\n\t</div>\n\t<ul component="category/list" class="dropdown-menu category-dropdown-menu '+(i(s&&s.pullRight)?"dropdown-menu-right":"")+'" role="menu">\n\t\t<li component="category/no-matches" role="presentation" class="category hidden">\n\t\t\t<a role="menu-item">[[search:no-matches]]</a>\n\t\t</li>\n\t\t'+a.blocks.categories(e,s,i,t,r)+'\n\t</ul>\n</div>\n\t\t\t</div>\n\n\t\t\t<div class="privilege-table-container">\n\t\t\t\t'+(i(s&&s.cid)?'\n\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.columnCountGroupOther)?'\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="'+n(i(s&&s.privileges&&s.privileges.columnCountGroupOther))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t':"")+'\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t'+a.blocks["privileges.labels.groups"](e,s,i,t,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+a.blocks["privileges.groups"](e,s,i,t,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(i(s&&s.privileges&&s.privileges.columnCountGroup))+'">\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyPrivilegesFrom">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToChildren">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToAll">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="help-block">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.columnCountUserOther)?'\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="'+n(i(s&&s.privileges&&s.privileges.columnCountUserOther))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t':"")+'\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t'+a.blocks["privileges.labels.users"](e,s,i,t,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+(i(s&&s.privileges&&s.privileges.users&&s.privileges.users.length)?"\n\t\t\t\t\t\t\t"+a.blocks["privileges.users"](e,s,i,t,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(i(s&&s.privileges&&s.privileges.columnCountUser))+'">\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(i(s&&s.privileges&&s.privileges.columnCountUser))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.no-users]]\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t":'\n\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t'+t(i(s&&s.privileges&&s.privileges.labels&&s.privileges.labels.groups),function(t){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+n(i(s&&s.privileges&&s.privileges.labels&&s.privileges.labels.groups&&s.privileges.labels.groups[t]&&s.privileges.labels.groups[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+t(i(s&&s.privileges&&s.privileges.groups),function(t){return'\n\t\t\t\t\t\t\t<tr data-group-name="'+n(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].nameEscaped))+'" data-private="'+(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].isPrivate)?"1":"0")+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].isPrivate)?'\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\n\t\t\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t\t\t"+n(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].name))+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t"+n(r(s,e,"spawnPrivilegeStates",[i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].name),i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(i(s&&s.privileges&&s.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="help-block">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="15"></th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t'+t(i(s&&s.privileges&&s.privileges.labels&&s.privileges.labels.users),function(t){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+n(i(s&&s.privileges&&s.privileges.labels&&s.privileges.labels.users&&s.privileges.labels.users[t]&&s.privileges.labels.users[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+(i(s&&s.privileges&&s.privileges.users&&s.privileges.users.length)?"\n\t\t\t\t\t\t\t"+t(i(s&&s.privileges&&s.privileges.users),function(t){return'\n\t\t\t\t\t\t\t<tr data-uid="'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].uid))+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].picture)?'\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].picture))+'" title="'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username))+'" />\n\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t]["icon:bgColor"]))+';">'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>"+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username))+"</td>\n\t\t\t\t\t\t\t\t"+n(r(s,e,"spawnPrivilegeStates",[i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username),i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(i(s&&s.privileges&&s.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(i(s&&s.privileges&&s.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/privileges:global.no-users]]\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t")+"\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n"}return a.blocks={categories:function(r,n,a,t,l){var g=r.__escape;return t(a(n&&n.categories),function(t,e,s,i){return'\n\t\t<li role="presentation" class="category '+(a(n&&n.categories&&n.categories[t]&&n.categories[t].disabledClass)?"disabled":"")+'" data-cid="'+g(a(n&&n.categories&&n.categories[t]&&n.categories[t].cid))+'" data-name="'+g(a(n&&n.categories&&n.categories[t]&&n.categories[t].name))+'" data-parent-cid="'+g(a(n&&n.categories&&n.categories[t]&&n.categories[t].parentCid))+'">\n\t\t\t<a role="menu-item">'+g(a(n&&n.categories&&n.categories[t]&&n.categories[t].level))+'<span component="category-markup">'+(a(n&&n.categories&&n.categories[t]&&n.categories[t].icon)?'<span class="fa-stack" style="'+g(l(n,r,"generateCategoryBackground",[a(i)]))+'"><i style="color: '+g(a(n&&n.categories&&n.categories[t]&&n.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+g(a(n&&n.categories&&n.categories[t]&&n.categories[t].icon))+'"></i></span>':"")+" "+g(a(n&&n.categories&&n.categories[t]&&n.categories[t].name))+"</span></a>\n\t\t</li>\n\t\t"},function(){return""})},"privileges.labels.groups":function(t,e,s,i){var r=t.__escape;return i(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.groups),function(t){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+r(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.groups&&e.privileges.labels.groups[t]&&e.privileges.labels.groups[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.groups":function(e,s,i,t,r){var n=e.__escape;return t(i(s&&s.privileges&&s.privileges.groups),function(t){return'\n\t\t\t\t\t\t\t<tr data-group-name="'+n(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].nameEscaped))+'" data-private="'+(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].isPrivate)?"1":"0")+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].isPrivate)?'\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\n\t\t\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t\t\t"+n(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].name))+'\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class="dropdown">\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-copy"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n\t\t\t\t\t\t\t\t\t\t\t<li data-action="copyToAllGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action="copyToChildrenGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action="copyPrivilegesFromGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t'+n(r(s,e,"spawnPrivilegeStates",[i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].name),i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})},"privileges.labels.users":function(t,e,s,i){var r=t.__escape;return i(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.users),function(t){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+r(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.users&&e.privileges.labels.users[t]&&e.privileges.labels.users[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.users":function(e,s,i,t,r){var n=e.__escape;return t(i(s&&s.privileges&&s.privileges.users),function(t){return'\n\t\t\t\t\t\t\t<tr data-uid="'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].uid))+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].picture)?'\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].picture))+'" title="'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username))+'" />\n\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t]["icon:bgColor"]))+';">'+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>"+n(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username))+"</td>\n\t\t\t\t\t\t\t\t"+n(r(s,e,"spawnPrivilegeStates",[i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username),i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})}},a});