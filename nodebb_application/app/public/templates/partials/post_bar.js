!function(n){"object"==typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd&&define(n)}(function(){function e(n,s,t,i,o){var a=n.__escape;return'<div class="clearfix">\n\t<div class="tags pull-left">\n\t\t'+e.blocks.tags(n,s,t,i,o)+'\n\t</div>\n\n\t<div component="topic/browsing-users">\n\t'+e.blocks.browsingUsers(n,s,t,i,o)+'\n</div>\n\n\t<div class="topic-main-buttons pull-right">\n\t\t<span class="loading-indicator btn pull-left hidden" done="0">\n\t\t\t<span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>\n\t\t</span>\n\n\t\t<div class="stats hidden-xs">\n\t<span component="topic/post-count" class="human-readable-number" title="'+a(t(s&&s.postcount))+'">'+a(t(s&&s.postcount))+'</span><br />\n\t<small>[[global:posts]]</small>\n</div>\n<div class="stats hidden-xs">\n\t<span class="human-readable-number" title="'+a(t(s&&s.viewcount))+'">'+a(t(s&&s.viewcount))+'</span><br />\n\t<small>[[global:views]]</small>\n</div>\n\n\t\t<div component="topic/reply/container" class="btn-group action-bar bottom-sheet '+(t(s&&s.privileges&&s.privileges["topics:reply"])?"":"hidden")+'">\n\t<a href="'+a(t(s&&s.config&&s.config.relative_path))+"/compose?tid="+a(t(s&&s.tid))+"&title="+a(t(s&&s.title))+'" class="btn btn-primary" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply visible-xs-inline"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:reply]]</span></a>\n\t<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu pull-right" role="menu">\n\t\t<li><a href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n'+(t(s&&s.loggedIn)?"\n"+(t(s&&s.privileges&&s.privileges["topics:reply"])?"":"\n"+(t(s&&s.locked)?'\n<a component="topic/reply/locked" class="btn btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>\n':"")+"\n")+"\n\n"+(t(s&&s.locked)?"":'\n<a component="topic/reply/locked" class="btn btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>\n')+"\n\n":"\n\n"+(t(s&&s.privileges&&s.privileges["topics:reply"])?"":'\n<a component="topic/reply/guest" href="'+a(t(s&&s.config&&s.config.relative_path))+'/login" class="btn btn-primary">[[topic:guest-login-reply]]</a>\n')+"\n")+"\n\n\t\t"+(t(s&&s.loggedIn)?'\n\t\t<button component="topic/mark-unread" class="btn btn-default">\n\t\t\t<i class="fa fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:mark_unread]]</span>\n\t\t</button>\n\t\t':"")+"\n\n\t\t"+(t(s&&s.config&&s.config.loggedIn)?'\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t<span component="topic/following/menu" '+(t(s&&s.isFollowing)?"":'class="hidden"')+'><i class="fa fa-fw fa-bell-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:watching]]</span></span>\n\n\t\t<span component="topic/not-following/menu" '+(t(s&&s.isNotFollowing)?"":'class="hidden"')+'><i class="fa fa-fw fa-bell-slash-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:not-watching]]</span></span>\n\n\t\t<span component="topic/ignoring/menu" '+(t(s&&s.isIgnoring)?"":'class="hidden"')+'><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:ignoring]]</span></span>\n\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" component="topic/following"><i component="topic/following/check" class="fa fa-fw '+(t(s&&s.isFollowing)?"fa-check":"")+'"></i><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]<p class="help-text hidden-xs"><small>[[topic:watching.description]]</small></p></a></li>\n\t\t<li><a href="#" component="topic/not-following"><i component="topic/not-following/check" class="fa fa-fw '+(t(s&&s.isNotFollowing)?"fa-check":"")+'"></i><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]<p class="help-text hidden-xs"><small>[[topic:not-watching.description]]</small></p></a></li>\n\t\t<li><a href="#" component="topic/ignoring"><i component="topic/ignoring/check" class="fa fa-fw '+(t(s&&s.isIgnoring)?"fa-check":"")+'"></i><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]<p class="help-text hidden-xs"><small>[[topic:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n':"")+"\n\n\t\t"+(t(s&&s.config&&s.config.loggedIn)?'\n<div class="btn-group bottom-sheet" component="thread/sort">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button"><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:sort_by]]</span>\n\t<span class="visible-xs-inline"><i class="fa fa-fw fa-sort"></i></span> <span class="caret"></span></button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>\n\t\t<li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>\n\t\t<li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>\n\t</ul>\n</div>\n':"")+'\n\n\t\t<div class="pull-right">&nbsp;\n\t\t'+(t(s&&s.privileges&&s.privileges.view_thread_tools)?'\n<div class="btn-group thread-tools bottom-sheet">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>\n\t\t<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right"></ul>\n</div>\n':"")+"\n\t\t</div>\n\t</div>\n</div>\n<hr/>"}return e.blocks={tags:function(n,s,t,i){var o=n.__escape;return i(t(s&&s.tags),function(n){return'\n<a href="'+o(t(s&&s.config&&s.config.relative_path))+"/tags/"+o(t(s&&s.tags&&s.tags[n]&&s.tags[n].value))+'">\n    <span class="tag-item" data-tag="'+o(t(s&&s.tags&&s.tags[n]&&s.tags[n].value))+'" style="'+(t(s&&s.tags&&s.tags[n]&&s.tags[n].color)?"color: "+o(t(s&&s.tags&&s.tags[n]&&s.tags[n].color))+";":"")+(t(s&&s.tags&&s.tags[n]&&s.tags[n].bgColor)?"background-color: "+o(t(s&&s.tags&&s.tags[n]&&s.tags[n].bgColor))+";":"")+'">'+o(t(s&&s.tags&&s.tags[n]&&s.tags[n].valueEscaped))+'</span>\n    <span class="tag-topic-count human-readable-number" title="'+o(t(s&&s.tags&&s.tags[n]&&s.tags[n].score))+'">'+o(t(s&&s.tags&&s.tags[n]&&s.tags[n].score))+"</span>\n</a>\n"},function(){return""})},browsingUsers:function(n,s,t,i){var o=n.__escape;return i(t(s&&s.browsingUsers),function(n){return'\n\t<div class="pull-left">\n\t\t<a href="'+(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].userslug)?o(t(s&&s.config&&s.config.relative_path))+"/user/"+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].userslug)):"#")+'">\n\t\t\t'+(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].picture)?'\n\t\t\t<img class="avatar avatar-sm avatar-rounded" component="user/picture" data-uid="'+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].uid))+'" src="'+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].picture))+'" align="left" itemprop="image" title="'+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].username))+'"/>\n\t\t\t':'\n\t\t\t<div class="avatar avatar-sm avatar-rounded" component="user/picture" data-uid="'+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].uid))+'" title="'+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n].username))+'" style="background-color: '+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n]["icon:bgColor"]))+';">'+o(t(s&&s.browsingUsers&&s.browsingUsers[n]&&s.browsingUsers[n]["icon:text"]))+"</div>\n\t\t\t")+"\n\t\t</a>\n\t</div>\n\t"},function(){return""})}},e});