"use strict";define("forum/topic/move-post",["components","postSelect"],function(t,i){var n={};var o;var e;n.init=function(t){if(o){return}app.parseAndTranslate("partials/move_post_modal",{},function(n){o=n;e=o.find("#move_posts_confirm");$("body").append(o);o.find(".close,#move_posts_cancel").on("click",f);o.find("#topicId").on("keyup",d);i.init(p);s();if(t){i.togglePostSelection(t,t.attr("data-pid"))}e.on("click",function(){c()})})};function s(){if(i.pids.length){o.find("#pids").translateHtml("[[topic:fork_pid_count, "+i.pids.length+"]]")}else{o.find("#pids").translateHtml("[[topic:fork_no_pids]]")}}function d(){if(o.find("#topicId").val().length&&i.pids.length){e.removeAttr("disabled")}else{e.attr("disabled",true)}}function p(){d();s()}function c(){var n=o.find("#topicId").val();socket.emit("posts.movePosts",{pids:i.pids,tid:n},function(n){if(n){return app.alertError(n.message)}i.pids.forEach(function(i){t.get("post","pid",i).fadeOut(500,function(){$(this).remove()})});f()})}function f(){if(o){o.remove();o=null;i.disable()}}return n});
//# sourceMappingURL=move-post.js.map