!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function n(t,e,s,i,r){var l=t.__escape;return'\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t'+n.blocks["privileges.labels.groups"](t,e,s,i,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+n.blocks["privileges.groups"](t,e,s,i,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+l(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="help-block">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="15"></th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t'+n.blocks["privileges.labels.users"](t,e,s,i,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+(s(e&&e.privileges&&e.privileges.users&&e.privileges.users.length)?"\n\t\t\t\t\t\t\t"+n.blocks["privileges.users"](t,e,s,i,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+l(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+l(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/privileges:global.no-users]]\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t')+"\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n"}return n.blocks={"privileges.labels.groups":function(t,e,s,i){var r=t.__escape;return i(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.groups),function(t){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+r(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.groups&&e.privileges.labels.groups[t]&&e.privileges.labels.groups[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.groups":function(e,s,i,t,r){var l=e.__escape;return t(i(s&&s.privileges&&s.privileges.groups),function(t){return'\n\t\t\t\t\t\t\t<tr data-group-name="'+l(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].nameEscaped))+'" data-private="'+(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].isPrivate)?"1":"0")+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].isPrivate)?'\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\n\t\t\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t\t\t"+l(i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].name))+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t"+l(r(s,e,"spawnPrivilegeStates",[i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].name),i(s&&s.privileges&&s.privileges.groups&&s.privileges.groups[t]&&s.privileges.groups[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})},"privileges.labels.users":function(t,e,s,i){var r=t.__escape;return i(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.users),function(t){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+r(s(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.users&&e.privileges.labels.users[t]&&e.privileges.labels.users[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.users":function(e,s,i,t,r){var l=e.__escape;return t(i(s&&s.privileges&&s.privileges.users),function(t){return'\n\t\t\t\t\t\t\t<tr data-uid="'+l(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].uid))+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].picture)?'\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+l(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].picture))+'" title="'+l(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username))+'" />\n\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+l(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t]["icon:bgColor"]))+';">'+l(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>"+l(i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username))+"</td>\n\t\t\t\t\t\t\t\t"+l(r(s,e,"spawnPrivilegeStates",[i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].username),i(s&&s.privileges&&s.privileges.users&&s.privileges.users[t]&&s.privileges.users[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})}},n});