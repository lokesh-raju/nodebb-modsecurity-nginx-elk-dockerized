!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function i(s,n,o,t,a){var e=s.__escape;return(o(n&&n.posts&&n.posts.display_moderator_tools)?'\n<li class="dropdown-header">[[topic:tools]]</li>\n<li>\n\t<a component="post/edit" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-pencil"></i></span> [[topic:edit]]\n\t</a>\n</li>\n<li '+(o(n&&n.posts&&n.posts.deleted)?"hidden":"")+'>\n\t<a component="post/delete" role="menuitem" tabindex="-1" href="#" class="'+(o(n&&n.posts&&n.posts.deleted)?"hidden":"")+'">\n\t\t<div class="inline menu-icon"><i class="fa fa-fw fa-trash-o"></i></div> <span>[[topic:delete]]</span>\n\t</a>\n</li>\n<li '+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'>\n\t<a component="post/restore" role="menuitem" tabindex="-1" href="#" class="'+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'">\n\t\t<div class="inline menu-icon"><i class="fa fa-fw fa-history"></i></div> <span>[[topic:restore]]</span>\n\t</a>\n</li>\n'+(o(n&&n.posts&&n.posts.display_purge_tools)?"\n<li "+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'>\n\t<a component="post/purge" role="menuitem" tabindex="-1" href="#" class="'+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-eraser"></i></span> [[topic:purge]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.display_history)?'\n<li>\n\t<a component="post/view-history" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-history"></i></span> [[topic:view-history]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.display_move_tools)?'\n<li>\n\t<a component="post/move" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-arrows"></i></span> [[topic:move]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.display_change_owner_tools)?'\n<li>\n\t<a component="post/change-owner" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-user"></i></span> [[topic:change-owner]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.ip)?'\n<li>\n\t<a component="post/copy-ip" role="menuitem" tabindex="-1" href="#" data-clipboard-text="'+e(o(n&&n.posts&&n.posts.ip))+'">\n\t\t<span class="menu-icon" ><i class="fa fa-fw fa-copy"></i></span> [[topic:copy-ip]] '+e(o(n&&n.posts&&n.posts.ip))+"\n\t</a>\n</li>\n"+(o(n&&n.posts&&n.posts.display_ip_ban)?'\n<li>\n\t<a component="post/ban-ip" role="menuitem" tabindex="-1" href="#" data-ip="'+e(o(n&&n.posts&&n.posts.ip))+'">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-ban"></i></span> [[topic:ban-ip]] '+e(o(n&&n.posts&&n.posts.ip))+"\n\t</a>\n</li>\n":"")+"\n":"")+"\n":"")+"\n\n"+i.blocks["posts.tools"](s,n,o,t,a)+"\n"+(o(n&&n.posts&&n.posts.toolsVisible)?'\n<li class="divider"></li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.deleted)?"":"\n"+(o(n&&n.config&&n.config.loggedIn)?'\n<li>\n\t<a component="post/bookmark" role="menuitem" tabindex="-1" href="#" data-bookmarked="'+e(o(n&&n.posts&&n.posts.bookmarked))+'">\n\n\t\t<span class="bookmark-text">[[topic:bookmark]]</span>\n\t\t<span component="post/bookmark-count" class="bookmarkCount" data-bookmarks="'+e(o(n&&n.posts&&n.posts.bookmarks))+'">'+e(o(n&&n.posts&&n.posts.bookmarks))+'</span>&nbsp;\n\n\t\t<i component="post/bookmark/on" class="fa fa-fw fa-heart '+(o(n&&n.posts&&n.posts.bookmarked)?"":"hidden")+'"></i>\n\t\t<i component="post/bookmark/off" class="fa fa-fw fa-heart-o '+(o(n&&n.posts&&n.posts.bookmarked)?"hidden":"")+'"></i>\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.postSharing&&n.postSharing.length)?'\n<li class="divider"></li>\n<li class="dropdown-header">[[topic:share_this_post]]</li>\n':"")+"\n"+i.blocks.postSharing(s,n,o,t,a)+"\n\n"+(o(n&&n.posts&&n.posts.display_flag_tools)?'\n<li class="divider"></li>\n<li><a component="post/flag" role="menuitem" tabindex="-1" href="#"><i class="fa fa-fw fa-flag"></i> [[topic:flag_post]]</a></li>\n<li><a component="post/flagUser" role="menuitem" tabindex="-1" href="#"><i class="fa fa-fw fa-flag"></i> [[topic:flag_user]]</a></li>\n':"")+"\n")}return i.blocks={"posts.tools":function(s,n,o,t){var a=s.__escape;return t(o(n&&n.posts&&n.posts.tools),function(s){return'\n<li>\n\t<a component="'+a(o(n&&n.posts&&n.posts.tools&&n.posts.tools[s]&&n.posts.tools[s].action))+'" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw '+a(o(n&&n.posts&&n.posts.tools&&n.posts.tools[s]&&n.posts.tools[s].icon))+'"></i></span> '+o(n&&n.posts&&n.posts.tools&&n.posts.tools[s]&&n.posts.tools[s].html)+"\n\t</a>\n</li>\n"},function(){return""})},postSharing:function(s,n,o,t){var a=s.__escape;return t(o(n&&n.postSharing),function(s){return'\n\t<li>\n\t\t<a role="menuitem" component="share/'+a(o(n&&n.postSharing&&n.postSharing[s]&&n.postSharing[s].id))+'" tabindex="-1" href="#"><span class="menu-icon"><i class="fa fa-fw '+a(o(n&&n.postSharing&&n.postSharing[s]&&n.postSharing[s].class))+'"></i></span> '+a(o(n&&n.postSharing&&n.postSharing[s]&&n.postSharing[s].name))+"</a>\n\t</li>\n"},function(){return""})}},i});