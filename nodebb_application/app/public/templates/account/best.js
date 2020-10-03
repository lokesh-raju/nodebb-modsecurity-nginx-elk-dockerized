!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,n,a,i,s){var e=t.__escape;return'<div class="account">\n\t'+(a(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+o.blocks.breadcrumbs(t,n,a,i,s)+"\n</ol>\n":"")+'\n\n\n<div class="cover" component="account/cover" style="background-image: url('+e(a(n&&n["cover:url"]))+"); background-position: "+e(a(n&&n["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+e(a(n&&n.uid))+'">\n\t\t'+(a(n&&n.picture)?'\n\t\t<img src="'+e(a(n&&n.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+e(a(n&&n["icon:bgColor"]))+';" title="'+e(a(n&&n.username))+'">'+e(a(n&&n["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+e(a(n&&n.status))+'" title="[[global:'+e(a(n&&n.status))+']]"></i>\n\n\t\t'+(a(n&&n.loggedIn)?"\n\t\t"+(a(n&&n.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(a(n&&n.isFollowing)?"heart":"plus")+'" title="'+(a(n&&n.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(a(n&&n.loggedIn)?"\n\t\t"+(a(n&&n.isSelf)?"":"\n\t\t"+(a(n&&n.banned)?"":"\n\t\t"+(a(n&&n.config&&n.config.disableChat)?"":'\n\t\t<li class="'+(a(n&&n.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+e(a(n&&n.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+e(a(n&&n.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(a(n&&n.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li role="separator" class="divider"></li>\n\t\t')+"\n\t\t")+"\n\t\t":"")+'\n\t\t<li>\n\t\t\t<a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(a(n&&n.showHidden)?'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(a(n&&n.isSelf)?"":"\n\t\t"+(a(n&&n.canBan)?'\n\t\t<li role="separator" class="divider"></li>\n\t\t<li class="dropdown-header">[[user:admin_actions_label]]</li>\n\t\t<li class="'+(a(n&&n.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(a(n&&n.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(a(n&&n.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete-account" href="#" class="">[[user:delete_account_as_admin]]</a>\n\t\t\t<a component="account/delete-content" href="#" class="">[[user:delete_content]]</a>\n\t\t\t<a component="account/delete-all" href="#" class="">[[user:delete_all]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li role="separator" class="divider"></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(a(n&&n.showHidden)?'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li role="separator" class="divider"></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(a(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(a(n&&n.showHidden)?'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/categories">[[user:watched_categories]]</a></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(a(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(a(n&&n["downvote:disabled"])?"":'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+e(a(n&&n.config&&n.config.relative_path))+"/user/"+e(a(n&&n.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+o.blocks.profile_links(t,n,a,i,s)+"\n\t</ul>\n</div>\n\n\n\t\t"+(a(n&&n.allowCoverPicture)?"\n\t\t"+(a(n&&n.canEdit)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+"\n\t\t":"")+'\n\t</div>\n</div>\n\n\n\t<div class="row">\n\t\t<h1>'+e(a(n&&n.title))+"</h1>\n\n\t\t"+(a(n&&n.posts&&n.posts.length)?"":'\n\t\t\t<div class="alert alert-warning text-center">'+e(a(n&&n.noItemsFoundKey))+"</div>\n\t\t")+'\n\n\t\t<div class="col-xs-12">\n\t\t\t<ul component="posts" class="posts-list" data-nextstart="'+e(a(n&&n.nextStart))+'">\n\t'+o.blocks.posts(t,n,a,i,s)+'\n</ul>\n<div component="posts/loading" class="loading-indicator text-center hidden">\n\t<i class="fa fa-refresh fa-spin"></i>\n</div>\n\n\t\t\t'+(a(n&&n.config&&n.config.usePagination)?'\n\t\t\t\t<div component="pagination" class="text-center pagination-container'+(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+e(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+e(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+o.blocks["pagination.pages"](t,n,a,i,s)+'\n\n\t\t<li class="next pull-right'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+e(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+e(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+e(a(n&&n.pagination&&n.pagination.first&&n.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+e(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+e(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+e(a(n&&n.pagination&&n.pagination.currentPage))+" / "+e(a(n&&n.pagination&&n.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+e(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+e(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+e(a(n&&n.pagination&&n.pagination.last&&n.pagination.last.qs))+'" data-page="'+e(a(n&&n.pagination&&n.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t\t':"")+"\n\t\t</div>\n\t</div>\n</div>"}return o.blocks={breadcrumbs:function(t,i,s,n){var e=t.__escape;return n(s(i&&i.breadcrumbs),function(t,n,a){return"\n\t<li"+(n===a-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(n===a-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+e(n)+'" />\n\t\t'+(n===a-1?"":'<a href="'+e(s(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="item">')+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+e(s(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===a-1?"\n\t\t\t\t"+(s(i&&i["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(i&&i.rssFeedUrl)?'<a target="_blank" href="'+e(s(i&&i.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n===a-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},profile_links:function(t,a,i,n){var s=t.__escape;return n(i(a&&a.profile_links),function(t,n){return"\n\t\t"+(0===n?'\n\t\t<li role="separator" class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+s(i(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].id))+'" class="plugin-link '+(i(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].public)?"public":"private")+'"><a href="'+s(i(a&&a.config&&a.config.relative_path))+"/user/"+s(i(a&&a.userslug))+"/"+s(i(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].route))+'">'+(i(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].icon)?'<i class="fa fa-fw '+s(i(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].icon))+'"></i> ':"")+s(i(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].name))+"</a></li>\n\t\t"},function(){return""})},posts:function(n,a,i,t,s){var e=n.__escape;return t(i(a&&a.posts),function(t){return'\n\t<li component="post" class="posts-list-item row'+(i(a&&a.posts&&a.posts[t]&&a.posts[t].deleted)||i(a&&a.posts&&a.posts[t]&&a.posts[t].topic&&a.posts[t].topic.deleted)?" deleted":"")+'" data-pid="'+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].pid))+'" data-uid="'+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].uid))+'">\n    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">\n        <a class="topic-title" href="'+e(i(a&&a.config&&a.config.relative_path))+"/post/"+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].pid))+'">\n            '+(i(a&&a.posts&&a.posts[t]&&a.posts[t].isMainPost)?"":"RE: ")+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].topic&&a.posts[t].topic.title))+'\n        </a>\n\n        <div component="post/content" class="content">\n            '+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].content))+'\n        </div>\n\n        <small class="topic-category"><a href="'+e(i(a&&a.config&&a.config.relative_path))+"/category/"+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].category&&a.posts[t].category.slug))+'">[[global:posted_in, '+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].category&&a.posts[t].category.name))+']]</a></small>\n\n        <div class="post-info">\n            <a href="'+e(i(a&&a.config&&a.config.relative_path))+"/user/"+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.userslug))+'">'+e(s(a,n,"buildAvatar",[i(a&&a.posts&&a.posts[t]&&a.posts[t].user),"md",i(a&&a.true),"user-img"]))+'</a>\n\n            <div class="post-author">\n                <a href="'+e(i(a&&a.config&&a.config.relative_path))+"/user/"+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.userslug))+'">'+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.username))+'</a><br />\n                <span class="timeago" title="'+e(i(a&&a.posts&&a.posts[t]&&a.posts[t].timestampISO))+'"></span>\n            </div>\n        </div>\n    </div>\n</li>\n\t'},function(){return""})},"pagination.pages":function(t,n,a,i){var s=t.__escape;return i(a(n&&n.pagination&&n.pagination.pages),function(t){return"\n\t\t\t"+(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+'">'+s(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"},function(){return""})}},o});