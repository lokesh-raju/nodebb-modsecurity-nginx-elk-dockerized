"use strict";define("forum/topic/votes",["components","translator","benchpress"],function(t,o,e){var n={};n.addVoteHandler=function(){t.get("topic").on("mouseenter",'[data-pid] [component="post/vote-count"]',r);t.get("topic").on("mouseout",'[data-pid] [component="post/vote-count"]',function(){var t=$(this).parent();t.on("shown.bs.tooltip",function(){$(".tooltip").tooltip("destroy");t.off("shown.bs.tooltip")});$(".tooltip").tooltip("destroy")})};function r(t){t.stopPropagation();var o=$(this);var e=o.parent();var n=e.parents("[data-pid]").attr("data-pid");$(".tooltip").tooltip("destroy");o.off("mouseenter",r);socket.emit("posts.getUpvoters",[n],function(t,n){if(t){return app.alertError(t.message)}if(n.length){i(e,n[0])}o.off("mouseenter").on("mouseenter",r)});return false}function i(t,e){function n(o){t.attr("title",o).tooltip("fixTitle").tooltip("show")}var r=e.usernames;if(!r.length){return}if(r.length+e.otherCount>6){r=r.join(", ").replace(/,/g,"|");o.translate("[[topic:users_and_others, "+r+", "+e.otherCount+"]]",function(t){t=t.replace(/\|/g,",");n(t)})}else{r=r.join(", ");n(r)}}n.toggleVote=function(t,o,e){var n=t.closest("[data-pid]");var r=n.find(o).length;socket.emit(r?"posts.unvote":e,{pid:n.attr("data-pid"),room_id:"topic_"+ajaxify.data.tid},function(t){if(t){app.alertError(t.message)}if(t&&t.message==="[[error:not-logged-in]]"){ajaxify.go("login")}});return false};n.showVotes=function(t){socket.emit("posts.getVoters",{pid:t,cid:ajaxify.data.cid},function(t,n){if(t){if(t.message==="[[error:no-privileges]]"){return}return app.alertError(t.message)}e.parse("partials/modals/votes_modal",n,function(t){o.translate(t,function(t){var o=bootbox.dialog({title:"[[global:voters]]",message:t,className:"vote-modal",show:true});o.on("click",function(){o.modal("hide")})})})})};return n});
//# sourceMappingURL=votes.js.map