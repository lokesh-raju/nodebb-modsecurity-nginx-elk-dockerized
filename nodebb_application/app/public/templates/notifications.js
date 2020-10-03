!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,i,a,e){var o=t.__escape;return'\n<div class="notifications">\n\n\t'+(i(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+s.blocks.breadcrumbs(t,n,i,a,e)+"\n</ol>\n":"")+'\n\n\n\t<div class="btn-toolbar">\n\t\t<div class="dropdown pull-right">\n\t\t\t<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">\n\t\t\t\t<i class="fa fa-eye"></i>\n\t\t\t\t<span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">\n\t\t\t\t<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-ajaxify="false" component="notifications/mark_all">[[notifications:mark_all_read]]</a></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class="dropdown pull-right">\n\t\t\t<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">\n\t\t\t\t'+(i(n&&n.selectedFilter)?o(i(n&&n.selectedFilter&&n.selectedFilter.name)):"")+' <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t'+s.blocks.filters(t,n,i,a,e)+'\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<hr />\n\n\t<div class="alert alert-info '+(i(n&&n.notifications&&n.notifications.length)?"hidden":"")+'">\n\t\t[[notifications:no_notifs]]\n\t</div>\n\n\t<ul class="notifications-list" data-nextstart="'+o(i(n&&n.nextStart))+'">\n\t'+s.blocks.notifications(t,n,i,a,e)+'\n\t</ul>\n\t<div component="pagination" class="text-center pagination-container'+(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(i(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+o(i(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+o(i(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+s.blocks["pagination.pages"](t,n,i,a,e)+'\n\n\t\t<li class="next pull-right'+(i(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+o(i(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+o(i(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(i(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+o(i(n&&n.pagination&&n.pagination.first&&n.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(i(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+o(i(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+o(i(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+o(i(n&&n.pagination&&n.pagination.currentPage))+" / "+o(i(n&&n.pagination&&n.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(i(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+o(i(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+o(i(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(i(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+o(i(n&&n.pagination&&n.pagination.last&&n.pagination.last.qs))+'" data-page="'+o(i(n&&n.pagination&&n.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n</div>\n\n\n'}return s.blocks={breadcrumbs:function(t,a,e,n){var o=t.__escape;return n(e(a&&a.breadcrumbs),function(t,n,i){return"\n\t<li"+(n===i-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(n===i-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+o(n)+'" />\n\t\t'+(n===i-1?"":'<a href="'+o(e(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="item">')+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+o(e(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===i-1?"\n\t\t\t\t"+(e(a&&a["feeds:disableRSS"])?"":"\n\t\t\t\t"+(e(a&&a.rssFeedUrl)?'<a target="_blank" href="'+o(e(a&&a.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n===i-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},filters:function(t,n,i,a){var e=t.__escape;return a(i(n&&n.filters),function(t){return"\n\t\t\t\t"+(i(n&&n.filters&&n.filters[t]&&n.filters[t].separator)?'\n\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t':'\n\t\t\t\t<li role="presentation" class="category">\n\t\t\t\t\t<a role="menu-item" href="'+e(i(n&&n.config&&n.config.relative_path))+"/notifications?filter="+e(i(n&&n.filters&&n.filters[t]&&n.filters[t].filter))+'"><i class="fa fa-fw '+(i(n&&n.filters&&n.filters[t]&&n.filters[t].selected)?"fa-check":"")+'"></i> '+e(i(n&&n.filters&&n.filters[t]&&n.filters[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t")+"\n\t\t\t\t"},function(){return""})},notifications:function(t,n,i,a){var e=t.__escape;return a(i(n&&n.notifications),function(t){return'\n\t\t<li data-nid="'+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].nid))+'" class="'+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].readClass))+'" component="notifications/item">\n\t\t\t'+(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].image)?"\n\t\t\t"+(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].from)?'\n\t\t\t<a class="pull-left" href="'+e(i(n&&n.config&&n.config.relative_path))+"/user/"+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].user&&n.notifications[t].user.userslug))+'"><img class="user-img" src="'+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].image))+'" /></a>\n\t\t\t':"")+"\n\t\t\t":'\n\t\t\t<a class="pull-left" href="'+e(i(n&&n.config&&n.config.relative_path))+"/user/"+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].user&&n.notifications[t].user.userslug))+'"><div class="pull-left user-icon user-img" style="background-color: '+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].user&&n.notifications[t].user["icon:bgColor"]))+';">'+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].user&&n.notifications[t].user["icon:text"]))+"</div></a>\n\t\t\t")+'\n\n\t\t\t<p>\n\t\t\t\t<a component="notifications/item/link" href="'+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].path))+'">'+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].bodyShort))+'</a>\n\t\t\t</p>\n\t\t\t<p class="timestamp">\n\t\t\t\t<span class="timeago" title="'+e(i(n&&n.notifications&&n.notifications[t]&&n.notifications[t].datetimeISO))+'"></span>\n\t\t\t</p>\n\t\t</li>\n\t'},function(){return""})},"pagination.pages":function(t,n,i,a){var e=t.__escape;return a(i(n&&n.pagination&&n.pagination.pages),function(t){return"\n\t\t\t"+(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+e(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].qs))+'" data-page="'+e(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+'">'+e(i(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"},function(){return""})}},s});