"use strict";define("chat",["components","taskbar"],function(t,a){var e={};var o=false;e.loadChatsDropdown=function(t){socket.emit("modules.chats.getRecentChats",{uid:app.user.uid,after:0},function(a,e){if(a){return app.alertError(a.message)}var o=e.rooms.filter(function(t){return t.teaser});app.parseAndTranslate("partials/chats/dropdown",{rooms:o},function(a){t.find("*").not(".navigation-link").remove();t.prepend(a);app.createUserTooltips(t,"right");t.off("click").on("click","[data-roomid]",function(t){if($(t.target).parents(".user-link").length){return}var a=$(this).attr("data-roomid");if(!ajaxify.currentPage.match(/^chats\//)){app.openChat(a)}else{ajaxify.go("user/"+app.user.userslug+"/chats/"+a)}});$('[component="chats/mark-all-read"]').off("click").on("click",function(){socket.emit("modules.chats.markAllRead",function(t){if(t){return app.alertError(t)}})})})})};e.onChatMessageReceived=function(t){var a=t.message.fromUser.username;var r=t.self===1;t.message.self=t.self;o=t.self===0;if(e.modalExists(t.roomId)){i(t)}else if(!ajaxify.data.template.chats){socket.emit("modules.chats.loadRoom",{roomId:t.roomId},function(o,i){if(o){return app.alertError(o.message)}i.users=i.users.filter(function(t){return t&&parseInt(t.uid,10)!==parseInt(app.user.uid,10)});i.silent=true;i.uid=app.user.uid;i.isSelf=r;e.createModal(i,function(){if(!r){n(t.message.mid,a)}})})}};function i(t){var o=e.getModal(t.roomId);var i=t.message.fromUser.username;var r=t.self===1;require(["forum/chats/messages"],function(d){if(!o.find('[data-mid="'+t.message.messageId+'"]').length){d.appendChatMessage(o.find(".chat-content"),t.message)}if(o.is(":visible")){a.updateActive(o.attr("data-uuid"));d.scrollToBottom(o.find(".chat-content"))}else if(!ajaxify.data.template.chats){e.toggleNew(o.attr("data-uuid"),true,true)}if(!r&&(!o.is(":visible")||!app.isFocused)){n(t.message.mid,i);a.push("chat",o.attr("data-uuid"),{title:"[[modules:chat.chatting_with]] "+(t.roomName||i),touid:t.message.fromUser.uid,roomId:t.roomId,isSelf:false})}})}function n(t,a){app.alternatingTitle("[[modules:chat.user_has_messaged_you, "+a+"]]");require(["sounds"],function(a){a.play("chat-incoming","chat.incoming:"+t)})}e.onUserStatusChange=function(t){var a=e.getModal(t.uid);app.updateUserStatus(a.find('[component="user/status"]'),t.status)};e.onRoomRename=function(t){var o=$("<div></div>").html(t.newName).text();var i=e.getModal(t.roomId);i.find('[component="chat/room/name"]').text(o);a.update("chat",i.attr("data-uuid"),{title:o});$(window).trigger("action:chat.renamed",Object.assign(t,{modal:i}))};e.getModal=function(t){return $("#chat-modal-"+t)};e.modalExists=function(t){return $("#chat-modal-"+t).length!==0};e.createModal=function(i,n){n=n||function(){};require(["scrollStop","forum/chats","forum/chats/messages"],function(r,d,s){app.parseAndTranslate("chat",i,function(c){if(e.modalExists(i.roomId)){return n(e.getModal(i.roomId))}var u=utils.generateUUID();var l=false;c.attr("id","chat-modal-"+i.roomId);c.attr("data-roomid",i.roomId);c.attr("intervalId",0);c.attr("data-uuid",u);c.css("position","fixed");c.appendTo($("body"));c.find(".timeago").timeago();e.center(c);app.loadJQueryUI(function(){c.find(".modal-content").resizable({handles:"n, e, s, w, se",minHeight:250,minWidth:400});c.find(".modal-content").on("resize",function(t,a){if(a.originalSize.height===a.size.height){return}c.find(".modal-body").css("height",e.calculateChatListHeight(c))});c.draggable({start:function(){a.updateActive(u)},stop:function(){c.find("#chat-message-input").focus()},distance:10,handle:".modal-header"})});r.apply(c.find('[component="chat/messages"]'));c.find("#chat-close-btn").on("click",function(){e.close(c)});function m(){var a=t.get("chat/input").val();$(window).one("action:ajaxify.end",function(){t.get("chat/input").val(a)});ajaxify.go("user/"+app.user.userslug+"/chats/"+c.attr("data-roomid"));e.close(c)}c.find(".modal-header").on("dblclick",m);c.find('button[data-action="maximize"]').on("click",m);c.find('button[data-action="minimize"]').on("click",function(){var t=c.attr("data-uuid");e.minimize(t)});c.on("click",":not(.close)",function(){a.updateActive(c.attr("data-uuid"));if(l){l=false}});c.on("mousemove",function(t){if(t.which===1){l=true}});c.on("mousemove keypress click",function(){if(o){socket.emit("modules.chats.markRead",i.roomId);o=false}});d.addActionHandlers(c.find('[component="chat/messages"]'),i.roomId);d.addRenameHandler(c.attr("data-roomid"),c.find('[data-action="rename"]'),i.roomName);d.addLeaveHandler(c.attr("data-roomid"),c.find('[data-action="leave"]'));d.addSendHandlers(c.attr("data-roomid"),c.find(".chat-input"),c.find('[data-action="send"]'));d.addMemberHandler(c.attr("data-roomid"),c.find('[data-action="members"]'));d.createAutoComplete(c.find('[component="chat/input"]'));d.addScrollHandler(c.attr("data-roomid"),i.uid,c.find(".chat-content"));d.addCharactersLeftHandler(c);d.addIPHandler(c);s.addSocketListeners();a.push("chat",c.attr("data-uuid"),{title:"[[modules:chat.chatting_with]] "+(i.roomName||(i.users.length?i.users[0].username:"")),roomId:i.roomId,icon:"fa-comment",state:"",isSelf:i.isSelf},function(){a.toggleNew(c.attr("data-uuid"),!i.isSelf);$(window).trigger("action:chat.loaded",c);if(typeof n==="function"){n(c)}})})})};e.focusInput=function(t){t.find('[component="chat/input"]').focus()};e.close=function(t){var o=t.attr("data-uuid");clearInterval(t.attr("intervalId"));t.attr("intervalId",0);t.remove();t.data("modal",null);a.discard("chat",o);if(t.attr("data-mobile")){e.disableMobileBehaviour(t)}$(window).trigger("action:chat.closed",{uuid:o,modal:t})};e.closeByUUID=function(t){var a=$('.chat-modal[data-uuid="'+t+'"]');e.close(a)};e.center=function(t){var a=false;if(t.hasClass("hide")){t.removeClass("hide");a=true}t.css("left",Math.max(0,($(window).width()-$(t).outerWidth())/2+$(window).scrollLeft())+"px");t.css("top",Math.max(0,$(window).height()/2-$(t).outerHeight()/2)+"px");if(a){t.addClass("hide")}return t};e.load=function(t){require(["forum/chats/messages"],function(o){var i=$('.chat-modal[data-uuid="'+t+'"]');i.removeClass("hide");a.updateActive(t);o.scrollToBottom(i.find(".chat-content"));e.focusInput(i);socket.emit("modules.chats.markRead",i.attr("data-roomid"));var n=utils.findBootstrapEnvironment();if(n==="xs"||n==="sm"){e.enableMobileBehaviour(i)}})};e.enableMobileBehaviour=function(t){app.toggleNavbar(false);t.attr("data-mobile","1");var a=t.find(".modal-body");a.css("height",e.calculateChatListHeight(t));function o(){a.css("height",e.calculateChatListHeight(t));require(["forum/chats/messages"],function(a){a.scrollToBottom(t.find(".chat-content"))})}$(window).on("resize",o);$(window).one("action:ajaxify.start",function(){e.close(t);$(window).off("resize",o)})};e.disableMobileBehaviour=function(){app.toggleNavbar(true)};e.calculateChatListHeight=function(t){return t.find(".modal-content").outerHeight()-t.find(".modal-header").outerHeight()};e.minimize=function(t){var e=$('.chat-modal[data-uuid="'+t+'"]');e.addClass("hide");a.minimize("chat",t);clearInterval(e.attr("intervalId"));e.attr("intervalId",0);$(window).trigger("action:chat.minimized",{uuid:t,modal:e})};e.toggleNew=a.toggleNew;return e});
//# sourceMappingURL=chat.js.map