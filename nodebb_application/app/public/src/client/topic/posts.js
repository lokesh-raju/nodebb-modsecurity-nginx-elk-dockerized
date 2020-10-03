"use strict";define("forum/topic/posts",["forum/pagination","forum/infinitescroll","forum/topic/postTools","forum/topic/images","navigator","components","translator"],function(t,o,e,i,a,s,n){var r={};r.onNewPost=function(t){if(!t||!t.posts||!t.posts.length||parseInt(t.posts[0].tid,10)!==parseInt(ajaxify.data.tid,10)){return}t.loggedIn=!!app.user.uid;t.privileges=ajaxify.data.privileges;t.posts[0].timestamp=Date.now()-1e3;t.posts[0].timestampISO=utils.toISOString(t.posts[0].timestamp);r.modifyPostsByPrivileges(t.posts);p(t.posts);d(t.posts);ajaxify.data.postcount+=1;e.updatePostCount(ajaxify.data.postcount);if(config.usePagination){f(t)}else{l(t)}require(["forum/topic/replies"],function(o){o.onNewPost(t)})};r.modifyPostsByPrivileges=function(t){t.forEach(function(t){t.selfPost=!!app.user.uid&&parseInt(t.uid,10)===parseInt(app.user.uid,10);t.display_edit_tools=ajaxify.data.privileges["posts:edit"]&&t.selfPost||ajaxify.data.privileges.isAdminOrMod;t.display_delete_tools=ajaxify.data.privileges["posts:delete"]&&t.selfPost||ajaxify.data.privileges.isAdminOrMod;t.display_moderator_tools=t.display_edit_tools||t.display_delete_tools;t.display_move_tools=ajaxify.data.privileges.isAdminOrMod;t.display_post_menu=ajaxify.data.privileges.isAdminOrMod||t.selfPost&&!ajaxify.data.locked||(app.user.uid||ajaxify.data.postSharing.length)&&!t.deleted})};function p(t){for(var o=0;o<t.length;o+=1){var e=s.get("user/postcount",t[o].uid);e.html(parseInt(e.attr("data-postcount"),10)+1);utils.addCommasToNumbers(e)}}function d(t){if(config.topicPostSort==="newest_to_oldest"){t[0].index=1;s.get("post").not("[data-index=0]").each(function(){var t=parseInt($(this).attr("data-index"),10)+1;$(this).attr("data-index",t)})}}function f(o){function e(){c(o.posts[0])}var i=o.posts;ajaxify.data.pagination.pageCount=Math.max(1,Math.ceil(i[0].topic.postcount/config.postsPerPage));var a=config.topicPostSort==="oldest_to_newest"||config.topicPostSort==="most_votes"?1:-1;var n=ajaxify.data.pagination.currentPage===ajaxify.data.pagination.pageCount&&a===1||ajaxify.data.pagination.currentPage===1&&a===-1;if(n){u(o,s.get("post").not("[data-index=0]"),a,e)}else if(ajaxify.data.scrollToMyPost&&parseInt(i[0].uid,10)===parseInt(app.user.uid,10)){setTimeout(function(){t.loadPage(ajaxify.data.pagination.pageCount,e)},250)}else{g()}}function g(){$.get(config.relative_path+"/api/topic/pagination/"+ajaxify.data.tid,{page:ajaxify.data.pagination.currentPage},function(t){app.parseAndTranslate("partials/paginator",t,function(t){$('[component="pagination"]').after(t).remove()})})}function l(t){var o=config.topicPostSort==="oldest_to_newest"||config.topicPostSort==="most_votes"?1:-1;var e=$('[component="post"][data-index="'+(t.posts[0].index-1)+'"]').length;if(!e&&(!t.posts[0].selfPost||!ajaxify.data.scrollToMyPost)){return}if(!e&&t.posts[0].selfPost){return ajaxify.go("post/"+t.posts[0].pid)}u(t,s.get("post").not("[data-index=0]"),o,function(o){if(o){o.addClass("new")}c(t.posts[0])})}function c(t){if(t.selfPost&&ajaxify.data.scrollToMyPost){a.scrollBottom(t.index)}}function u(t,e,i,a){a=a||function(){};if(!t||t.posts&&!t.posts.length){return a()}function n(){var o=$('[component="post"].new');if(o.length===t.posts.length){var e=true;o.each(function(o,i){if(parseInt($(i).attr("data-pid"),10)!==parseInt(t.posts[o].pid,10)){e=false}});if(e){o.each(function(){$(this).removeClass("new")});t.posts.length=0;return}}if(o.length&&t.posts.length>1){t.posts.forEach(function(t){var o=s.get("post","pid",t.pid);if(o.hasClass("new")){o.remove()}})}t.posts=t.posts.filter(function(t){return $('[component="post"][data-pid="'+t.pid+'"]').length===0})}n();if(!t.posts.length){return a()}var p;var d;if(i>0&&e.length){p=e.last()}else if(i<0&&e.length){d=e.first()}t.slug=ajaxify.data.slug;$(window).trigger("action:posts.loading",{posts:t.posts,after:p,before:d});app.parseAndTranslate("topic","posts",t,function(e){e=e.filter(function(){var t=$(this).attr("data-pid");return t&&$('[component="post"][data-pid="'+t+'"]').length===0});if(p){e.insertAfter(p)}else if(d){var n=$(document).height();var f=$(window).scrollTop();e.insertBefore(d);$(window).scrollTop(f+($(document).height()-n))}else{s.get("topic").append(e)}o.removeExtra($('[component="post"]'),i,Math.max(20,config.postsPerPage*2));$(window).trigger("action:posts.loaded",{posts:t.posts});r.onNewPostsAddedToDom(e);a(e)})}r.loadMorePosts=function(t){if(!s.get("topic").length||a.scrollActive){return}var e=s.get("topic").find(s.get("post").not("[data-index=0]").not(".new"));var i=t>0?e.last():e.first();var n=parseInt(i.attr("data-index"),10)||0;var r=ajaxify.data.tid;if(!utils.isNumber(r)||!utils.isNumber(n)||t<0&&s.get("post","index",0).length){return}var p=$(".loading-indicator");if(!p.is(":animated")){p.fadeIn()}o.loadMore("topics.loadMore",{tid:r,after:n,count:config.postsPerPage,direction:t,topicPostSort:config.topicPostSort},function(o,i){p.fadeOut();if(o&&o.posts&&o.posts.length){u(o,e,t,i)}else{a.update();i()}})};r.onTopicPageLoad=function(t){h(t);i.wrapImagesInLinks(t);r.showBottomPostBar();t.find('[component="post/content"] img:not(.not-responsive)').addClass("img-responsive");r.addBlockquoteEllipses(t);v(t);m()};function m(){var t=ajaxify.data.necroThreshold*24*60*60*1e3;if(!t||config.topicPostSort!=="newest_to_oldest"&&config.topicPostSort!=="oldest_to_newest"){return}$('[component="post"]').each(function(){var o=$(this);var e=o.prev('[component="post"]');if(o.is(":has(.necro-post)")||!e.length){return}if(config.topicPostSort==="newest_to_oldest"&&parseInt(e.attr("data-index"),10)===0){return}var i=o.attr("data-timestamp")-e.attr("data-timestamp");if(Math.abs(i)>=t){var a=$.timeago.settings.strings.suffixAgo;var s=$.timeago.settings.strings.prefixAgo;var n=$.timeago.settings.strings.suffixFromNow;var r=$.timeago.settings.strings.prefixFromNow;$.timeago.settings.strings.suffixAgo="";$.timeago.settings.strings.prefixAgo="";$.timeago.settings.strings.suffixFromNow="";$.timeago.settings.strings.prefixFromNow="";var p=(i>0?"[[topic:timeago_later,":"[[topic:timeago_earlier,")+$.timeago.inWords(i)+"]]";$.timeago.settings.strings.suffixAgo=a;$.timeago.settings.strings.prefixAgo=s;$.timeago.settings.strings.suffixFromNow=n;$.timeago.settings.strings.prefixFromNow=r;app.parseAndTranslate("partials/topic/necro-post",{text:p},function(t){t.prependTo(o)})}})}function h(t){if(app.user.uid||!ajaxify.data.privateUploads){return}var o=document.createElement("a");o.className="login-required";o.href=config.relative_path+"/login";n.translate("[[topic:login-to-view]]",function(e){o.appendChild(document.createTextNode(e));t.each(function(t,e){$(e).find('[component="post/content"] img').each(function(t,e){e=$(e);if(e.attr("src").startsWith(config.relative_path+config.upload_url)){e.replaceWith(o.cloneNode(true))}})})})}r.onNewPostsAddedToDom=function(t){r.onTopicPageLoad(t);app.createUserTooltips(t);utils.addCommasToNumbers(t.find(".formatted-number"));utils.makeNumbersHumanReadable(t.find(".human-readable-number"));t.find(".timeago").timeago()};r.showBottomPostBar=function(){var t=s.get("post","index",0);var o=$(".post-bar-placeholder");var e=$('[component="post"]');if(!!t.length&&e.length>1&&$(".post-bar").length<2&&o.length){$(".post-bar").clone().insertAfter(o);o.remove()}else if(t.length&&e.length<2){t.find(".post-bar").remove()}};function v(t){t.each(function(){if($(this).hasClass("deleted")){e.toggle($(this).attr("data-pid"),true)}})}r.addBlockquoteEllipses=function(t){var o=t.find('[component="post/content"] > blockquote > blockquote');o.each(function(){var t=$(this);if(t.find(":hidden:not(br)").length&&!t.find(".toggle").length){t.append('<i class="fa fa-angle-down pointer toggle"></i>')}})};return r});
//# sourceMappingURL=posts.js.map