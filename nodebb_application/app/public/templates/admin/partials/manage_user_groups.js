!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function n(s,r,u,e,o){s.__escape;return n.blocks.users(s,r,u,e,o)}return n.blocks={users:function(s,u,e,o){var n=s.__escape;return o(e(u&&u.users),function(r){return'\n<div data-uid="'+n(e(u&&u.users&&u.users[r]&&u.users[r].uid))+'">\n    <h5>'+n(e(u&&u.users&&u.users[r]&&u.users[r].username))+'</h5>\n    <div class="group-area">\n        '+(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups)?o(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups),function(s){return'\n        <div class="group-card pull-left" data-group-name="'+n(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups&&u.users[r].users.groups[s]&&u.users[r].users.groups[s].nameEscaped))+'">\n            <a href="'+n(e(u&&u.config&&u.config.relative_path))+"/admin/manage/groups/"+n(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups&&u.users[r].users.groups[s]&&u.users[r].users.groups[s].nameEncoded))+'"><span class="label label-default" style="color:'+n(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups&&u.users[r].users.groups[s]&&u.users[r].users.groups[s].textColor))+"; background-color: "+n(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups&&u.users[r].users.groups[s]&&u.users[r].users.groups[s].labelColor))+';">'+(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups&&u.users[r].users.groups[s]&&u.users[r].users.groups[s].icon)?'<i class="fa '+n(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups&&u.users[r].users.groups[s]&&u.users[r].users.groups[s].icon))+'"></i> ':"")+n(e(u&&u.users&&u.users[r]&&u.users[r].users&&u.users[r].users.groups&&u.users[r].users.groups[s]&&u.users[r].users.groups[s].displayName))+' <i class="remove-group-icon fa fa-times" role="button"></i></span></a>\n        </div>\n        '},function(){return""}):o(e(u&&u.users&&u.users[r]&&u.users[r].groups),function(s){return'\n        <div class="group-card pull-left" data-group-name="'+n(e(u&&u.users&&u.users[r]&&u.users[r].groups&&u.users[r].groups[s]&&u.users[r].groups[s].nameEscaped))+'">\n            <a href="'+n(e(u&&u.config&&u.config.relative_path))+"/admin/manage/groups/"+n(e(u&&u.users&&u.users[r]&&u.users[r].groups&&u.users[r].groups[s]&&u.users[r].groups[s].nameEncoded))+'"><span class="label label-default" style="color:'+n(e(u&&u.users&&u.users[r]&&u.users[r].groups&&u.users[r].groups[s]&&u.users[r].groups[s].textColor))+"; background-color: "+n(e(u&&u.users&&u.users[r]&&u.users[r].groups&&u.users[r].groups[s]&&u.users[r].groups[s].labelColor))+';">'+(e(u&&u.users&&u.users[r]&&u.users[r].groups&&u.users[r].groups[s]&&u.users[r].groups[s].icon)?'<i class="fa '+n(e(u&&u.users&&u.users[r]&&u.users[r].groups&&u.users[r].groups[s]&&u.users[r].groups[s].icon))+'"></i> ':"")+n(e(u&&u.users&&u.users[r]&&u.users[r].groups&&u.users[r].groups[s]&&u.users[r].groups[s].displayName))+' <i class="remove-group-icon fa fa-times" role="button"></i></span></a>\n        </div>\n        '},function(){return""}))+'\n    </div>\n    <input data-uid="'+n(e(u&&u.users&&u.users[r]&&u.users[r].uid))+'" class="form-control group-search" placeholder="[[admin/manage/users:add-group]]" />\n</div>\n'},function(){return""})}},n});