!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,e,r,n,s){var o=t.__escape;return'<div class="row">\n\t'+(r(e&&e.group&&e.group.isOwner)?'\n\t<div class="col-lg-2">\n\t\t<button component="groups/members/add" type="button" class="btn btn-primary" title="[[groups:details.add-member]]"><i class="fa fa-user-plus"></i></button>\n\t</div>\n\t':"")+'\n\t<div class="'+(r(e&&e.group&&e.group.isOwner)?"col-lg-10":"col-lg-12")+'">\n\t\t<div class="input-group">\n\t\t\t<input class="form-control" type="text" component="groups/members/search" placeholder="[[global:search]]"/>\n\t\t\t<span class="input-group-addon search-button"><i class="fa fa-search"></i></span>\n\t\t</div>\n\t</div>\n</div>\n\n<table component="groups/members" class="table table-striped table-hover" data-nextstart="'+o(r(e&&e.group&&e.group.membersNextStart))+'">\n\t<tbody>\n\t'+a.blocks["group.members"](t,e,r,n,s)+"\n\t</tbody>\n</table>"}return a.blocks={"group.members":function(e,r,n,t,s){var o=e.__escape;return t(n(r&&r.group&&r.group.members),function(t){return'\n\t<tr data-uid="'+o(n(r&&r.group&&r.group.members&&r.group.members[t]&&r.group.members[t].uid))+'">\n\t\t<td>\n\t\t\t<a href="'+o(n(r&&r.config&&r.config.relative_path))+"/user/"+o(n(r&&r.group&&r.group.members&&r.group.members[t]&&r.group.members[t].userslug))+'">'+o(s(r,e,"buildAvatar",[n(r&&r.group&&r.group.members&&r.group.members[t]),"sm",n(r&&r.true)]))+'</a>\n\t\t</td>\n\t\t<td class="member-name">\n\t\t\t<a href="'+o(n(r&&r.config&&r.config.relative_path))+"/user/"+o(n(r&&r.group&&r.group.members&&r.group.members[t]&&r.group.members[t].userslug))+'">'+o(n(r&&r.group&&r.group.members&&r.group.members[t]&&r.group.members[t].username))+'</a> <i title="[[groups:owner]]" class="fa fa-star text-warning '+(n(r&&r.group&&r.group.members&&r.group.members[t]&&r.group.members[t].isOwner)?"":"invisible")+'"></i>\n\n\t\t\t'+(n(r&&r.group&&r.group.isOwner)?'\n\t\t\t<div class="owner-controls btn-group pull-right">\n\t\t\t\t<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="toggleOwnership" title="[[groups:details.grant]]">\n\t\t\t\t\t<i class="fa fa-star"></i>\n\t\t\t\t</a>\n\n\t\t\t\t<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="kick" title="[[groups:details.kick]]">\n\t\t\t\t\t<i class="fa fa-ban"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t':"")+"\n\t\t</td>\n\t</tr>\n\t"},function(){return""})}},a});