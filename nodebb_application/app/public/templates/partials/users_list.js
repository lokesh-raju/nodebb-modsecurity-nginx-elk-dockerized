!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function u(s,t,e,n,r){s.__escape;return u.blocks.users(s,t,e,n,r)}return u.blocks={users:function(t,e,n,s,r){var u=t.__escape;return s(n(e&&e.users),function(s){return'\n<li class="users-box registered-user" data-uid="'+u(n(e&&e.users&&e.users[s]&&e.users[s].uid))+'">\n\t<a href="'+u(n(e&&e.config&&e.config.relative_path))+"/user/"+u(n(e&&e.users&&e.users[s]&&e.users[s].userslug))+'">'+u(r(e,t,"buildAvatar",[n(e&&e.users&&e.users[s]),"80",n(e&&e.true)]))+'</a>\n\t<br/>\n\t<div class="user-info">\n\t\t<span>\n\t\t\t<i component="user/status" class="fa fa-circle status '+u(n(e&&e.users&&e.users[s]&&e.users[s].status))+'" title="[[global:'+u(n(e&&e.users&&e.users[s]&&e.users[s].status))+']]"></i>\n\t\t\t<a href="'+u(n(e&&e.config&&e.config.relative_path))+"/user/"+u(n(e&&e.users&&e.users[s]&&e.users[s].userslug))+'">'+u(n(e&&e.users&&e.users[s]&&e.users[s].username))+"</a>\n\t\t</span>\n\t\t<br/>\n\n\t\t"+(n(e&&e.section_joindate)?'\n\t\t<div title="joindate" class="joindate">\n\t\t\t<span class="timeago" title="'+u(n(e&&e.users&&e.users[s]&&e.users[s].joindateISO))+'"></span>\n\t\t</div>\n\t\t':"")+"\n\n\t\t"+(n(e&&e["section_sort-reputation"])?'\n\t\t<div title="reputation" class="reputation">\n\t\t\t<i class="fa fa-star"></i>\n\t\t\t<span class="formatted-number">'+u(n(e&&e.users&&e.users[s]&&e.users[s].reputation))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(n(e&&e["section_sort-posts"])?'\n\t\t<div title="post count" class="post-count">\n\t\t\t<i class="fa fa-pencil"></i>\n\t\t\t<span class="formatted-number">'+u(n(e&&e.users&&e.users[s]&&e.users[s].postcount))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(n(e&&e.section_flagged)?'\n\t\t<div title="flag count" class="flag-count">\n\t\t\t<i class="fa fa-flag"></i>\n\t\t\t<span><a class="formatted-number" href="'+u(n(e&&e.config&&e.config.relative_path))+"/flags?targetUid="+u(n(e&&e.users&&e.users[s]&&e.users[s].uid))+'">'+u(n(e&&e.users&&e.users[s]&&e.users[s].flags))+"</a></span>\n\t\t</div>\n\t\t":"")+"\n\t</div>\n</li>\n"},function(){return""})}},u});