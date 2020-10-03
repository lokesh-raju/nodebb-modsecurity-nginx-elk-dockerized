"use strict";define("composer",["taskbar","translator","composer/controls","composer/uploads","composer/formatting","composer/drafts","composer/tags","composer/categoryList","composer/preview","composer/resize","composer/autocomplete","scrollStop"],function(e,t,i,o,n,a,r,s,d,c,l,p){var f={active:undefined,posts:{},bsEnvironment:undefined,formatting:undefined};$(window).off("resize",m).on("resize",m);m();$(window).on("action:composer.topics.post",function(e,t){localStorage.removeItem("category:"+t.data.cid+":bookmark");localStorage.removeItem("category:"+t.data.cid+":bookmark:clicked")});$(window).on("popstate",function(){var e=utils.findBootstrapEnvironment();if(f.active&&(e==="xs"||e==="sm")){if(!f.posts[f.active].modified){f.discard(f.active);if(f.discardConfirm&&f.discardConfirm.length){f.discardConfirm.modal("hide");delete f.discardConfirm}return}t.translate("[[modules:composer.discard]]",function(e){f.discardConfirm=bootbox.confirm(e,function(e){if(e){f.discard(f.active)}else{f.posts[f.active].modified=true}});f.posts[f.active].modified=false})}});function u(){var e=f.bsEnvironment;if(ajaxify.data.template.compose===true||e==="xs"||e==="sm"){history.back()}}function m(){var e=utils.findBootstrapEnvironment();var t=e==="xs"||e==="sm";if(d.toggle){if(d.env!==e&&t){d.env=e;d.toggle(false)}d.env=e}if(f.active!==undefined){c.reposition($('.composer[data-uuid="'+f.active+'"]'));if(!t&&window.location.pathname.startsWith(config.relative_path+"/compose")){history.back()}else if(t&&!window.location.pathname.startsWith(config.relative_path+"/compose")){w()}}f.bsEnvironment=e}function g(e){var t,i;if(e.hasOwnProperty("cid")){t="cid"}else if(e.hasOwnProperty("tid")){t="tid"}else if(e.hasOwnProperty("pid")){t="pid"}i=e[t];for(var o in f.posts){if(f.posts[o].hasOwnProperty(t)&&i===f.posts[o][t]){return o}}return false}function v(i){var o=utils.generateUUID(),n=g(i);if(n){e.updateActive(n);return f.load(n)}var a="[[topic:composer.new_topic]]";if(i.action==="posts.reply"){a="[[topic:composer.replying_to]]"}else if(i.action==="posts.edit"){a="[[topic:composer.editing]]"}t.translate(a,function(t){e.push("composer",o,{title:t.replace("%1",'"'+i.title+'"')})});if(i.hasOwnProperty("cid")){i.save_id=["composer",app.user.uid,"cid",i.cid].join(":")}else if(i.hasOwnProperty("tid")){i.save_id=["composer",app.user.uid,"tid",i.tid].join(":")}else if(i.hasOwnProperty("pid")){i.save_id=["composer",app.user.uid,"pid",i.pid].join(":")}f.posts[o]=i;f.load(o)}function h(e,t){$('.composer[data-uuid="'+e+'"]').find(".composer-submit").removeAttr("disabled");app.alert({type:"danger",timeout:3e3,title:"",message:t,alert_id:"post_error"})}f.findByTid=function(e){for(var t in f.posts){if(f.posts.hasOwnProperty(t)&&f.posts[t].hasOwnProperty("tid")&&parseInt(f.posts[t].tid,10)===parseInt(e,10)){return t}}return null};f.addButton=function(e,t,i){n.addButton(e,t,i)};f.newTopic=function(e){var t={action:"topics.post",cid:e.cid,title:e.title||"",body:e.body||"",tags:e.tags||[],modified:e.title&&e.title.length||e.body&&e.body.length?true:false,isMain:true};$(window).trigger("filter:composer.topic.push",{data:e,pushData:t});v(t)};f.addQuote=function(e,i,o,n,a,r,s){s=s||f.active;var c=(n||"").replace(/([\\`*_{}\[\]()#+\-.!])/g,"\\$1").replace(/\[/g,"&#91;").replace(/\]/g,"&#93;").replace(/%/g,"&#37;").replace(/,/g,"&#44;");if(r){r="> "+r.replace(/\n/g,"\n> ")+"\n\n"}var l="["+c+"]("+config.relative_path+"/post/"+(o||i)+")";if(s===undefined){if(n&&(o||i)){f.newReply(e,i,n,"[[modules:composer.user_said_in, "+a+", "+l+"]]\n"+r)}else{f.newReply(e,i,n,"[[modules:composer.user_said, "+a+"]]\n"+r)}return}else if(s!==f.active){f.load(s)}var p=$('.composer[data-uuid="'+s+'"]');var u=p.find("textarea");var m=u.val();if(n&&(o||i)){t.translate("[[modules:composer.user_said_in, "+a+", "+l+"]]\n",config.defaultLang,g)}else{t.translate("[[modules:composer.user_said, "+a+"]]\n",config.defaultLang,g)}function g(e){f.posts[s].body=(m.length?m+"\n\n":"")+e+r;u.val(f.posts[s].body);_(p);d.render(p)}};f.newReply=function(e,i,o,n){t.translate(n,config.defaultLang,function(t){v({action:"posts.reply",tid:e,toPid:i,title:o,body:t,modified:o&&o.length||t&&t.length?true:false,isMain:false})})};f.editPost=function(e){socket.emit("plugins.composer.push",e,function(t,i){if(t){return app.alertError(t.message)}i.action="posts.edit";i.pid=e;i.modified=false;v(i)})};f.load=function(e){var t=$('.composer[data-uuid="'+e+'"]');if(t.length){E(e);c.reposition(t);_(t);P()}else{if(f.formatting){b(e)}else{socket.emit("plugins.composer.getFormattingOptions",function(t,i){f.formatting=i;b(e)})}}};f.enhance=function(e,i,c){if(!i&&!c){i=utils.generateUUID();f.posts[i]=c=ajaxify.data;e.attr("data-uuid",i)}var p=e.find("input.title");var m=e.find("input.handle");var g=e.find("input.tags");var v=e.find("textarea");var h=e.find(".composer-submit");s.init(e,f.posts[i]);n.addHandler(e);n.addComposerButtons();d.handleToggler(e);e.find(".img-upload-btn").removeClass("hide");e.find("#files.lt-ie9").removeClass("hide");if(app.user.privileges["upload:post:file"]){e.find(".file-upload-btn").removeClass("hide");e.find("#files.lt-ie9").removeClass("hide")}o.initialize(i);if(config.allowTopicsThumbnail&&c.isMain){o.toggleThumbEls(e,f.posts[i].thumb||"")}r.init(e,f.posts[i]);l.init(e,i);e.on("change","input, textarea",function(){f.posts[i].modified=true;a.updateVisibility("available",f.posts[i].save_id,true);a.updateVisibility("open",f.posts[i].save_id,true)});h.on("click",function(e){e.preventDefault();e.stopPropagation();$(this).attr("disabled",true);T(i)});e.keypress(function(e){var t=e.which?e.which:e.keyCode;if((t===10||t==13)&&e.ctrlKey){h.attr("disabled",true);T(i);return false}return true});e.find(".composer-discard").on("click",function(e){e.preventDefault();if(!f.posts[i].modified){f.discard(i);return u()}var o=$(this).prop("disabled",true);t.translate("[[modules:composer.discard]]",function(e){bootbox.confirm(e,function(e){if(e){f.discard(i);u()}o.prop("disabled",false)})})});e.find(".composer-minimize").on("click",function(e){e.preventDefault();e.stopPropagation();f.minimize(i)});v.on("input propertychange",function(){d.render(e)});v.on("scroll",function(){d.matchScroll(e)});d.render(e,function(){d.matchScroll(e)});a.init(e,c);var b=a.get(c.save_id);if(b&&b.title){p.val(b.title)}if(b&&b.handle){m.val(b.handle)}if(b&&b.tags){const e=b.tags.split(",");e.forEach(function(e){g.tagsinput("add",e)})}v.val(b.text?b.text:c.body);y(e);x(e);_(e);if(typeof screenfull!=="undefined"&&!screenfull.enabled){$('[data-format="zen"]').addClass("hidden")}$(window).trigger("action:composer.enhanced",{postContainer:e,postData:c,draft:b})};function b(i){var o=f.posts[i];var n=config.allowTopicsThumbnail&&o.isMain,a=o?o.hasOwnProperty("cid"):false,r=o?!!o.isMain:false,s=o?!!o.pid:false,d=o?parseInt(o.uid,10)===0:false;var l=o.title.replace(/%/g,"&#37;").replace(/,/g,"&#44;");var u={title:l,mobile:f.bsEnvironment==="xs"||f.bsEnvironment==="sm",resizable:true,allowTopicsThumbnail:n,isTopicOrMain:a||r,minimumTagLength:config.minimumTagLength,maximumTagLength:config.maximumTagLength,isTopic:a,isEditing:s,showHandleInput:config.allowGuestHandles&&(app.user.uid===0||s&&d&&app.user.isAdmin),handle:o?o.handle||"":undefined,formatting:f.formatting,tagWhitelist:ajaxify.data.tagWhitelist,privileges:app.user.privileges};if(u.mobile){w();app.toggleNavbar(false)}o.mobile=f.bsEnvironment==="xs"||f.bsEnvironment==="sm";$(window).trigger("filter:composer.create",{postData:o,createData:u});app.parseAndTranslate("composer",u,function(n){if($('.composer.composer[data-uuid="'+i+'"]').length){return}n=$(n);n.find(".title").each(function(){$(this).text(t.unescape($(this).text()))});n.attr("data-uuid",i);$(document.body).append(n);var a=$(n[0]);c.reposition(a);f.enhance(a,i,o);E(i);a.on("click",function(){if(!e.isActive(i)){e.updateActive(i)}});c.handleResize(a);if(f.bsEnvironment==="xs"||f.bsEnvironment==="sm"){var r=a.find(".composer-submit"),s=a.find(".mobile-navbar .composer-submit"),d=a.find(".write"),l=d.attr("tabindex");r.removeAttr("tabindex");s.attr("tabindex",parseInt(l,10)+1);$(".category-name-container").on("click",function(){$(".category-selector").toggleClass("open")})}$(window).trigger("action:composer.loaded",{post_uuid:i,composerData:f.posts[i],formatting:f.formatting});p.apply(a.find(".write"));_(a);P()})}function w(){var e="compose?p="+window.location.pathname,t=window.location.pathname.slice(1);if(t.startsWith(config.relative_path.slice(1))){t=t.slice(config.relative_path.length)}window.history.replaceState({url:null,returnPath:t},t,config.relative_path+"/"+t);window.history.pushState({url:e},e,config.relative_path+"/"+e)}function y(e){var t=e.find(".help");socket.emit("plugins.composer.renderHelp",function(e,i){if(!e&&i&&i.length>0){t.removeClass("hidden");t.on("click",function(){bootbox.alert(i)})}})}function x(e){var t=e.attr("data-uuid");var i=f.posts[t]&&f.posts[t].action==="posts.edit";var o=utils.findBootstrapEnvironment();var n=o==="xs"||o==="sm";if(i||n){return}app.enableTopicSearch({searchElements:{inputEl:e.find("input.title"),resultEl:e.find(".quick-search-container")},hideOnNoMatches:true})}function E(e){if(f.active&&f.active!==e){f.minimize(f.active)}f.active=e}function _(e){setTimeout(function(){var t=e.find("input.title");if(t.length){t.focus()}else{e.find("textarea").focus().putCursorAtEnd()}},20)}function T(e){var t=f.posts[e];var i=$('.composer[data-uuid="'+e+'"]');var n=i.find(".handle");var d=i.find(".title");var c=i.find("textarea");var l=i.find("input#topic-thumb-url");var p=t.hasOwnProperty("template")&&t.template.compose===true;d.val(d.val().trim());c.val(utils.rtrim(c.val()));if(l.length){l.val(l.val().trim())}var m=t.action;var g=(t.hasOwnProperty("cid")||parseInt(t.pid,10))&&i.find("input.title").length;var v=!g||g&&parseInt(t.cid,10);var b={post_uuid:e,postData:t,postContainer:i,titleEl:d,titleLen:d.val().length,bodyEl:c,bodyLen:c.val().length};$(window).trigger("action:composer.check",b);if(o.inProgress[e]&&o.inProgress[e].length){return h(e,"[[error:still-uploading]]")}else if(g&&b.titleLen<parseInt(config.minimumTitleLength,10)){return h(e,"[[error:title-too-short, "+config.minimumTitleLength+"]]")}else if(g&&b.titleLen>parseInt(config.maximumTitleLength,10)){return h(e,"[[error:title-too-long, "+config.maximumTitleLength+"]]")}else if(m==="topics.post"&&!v){return h(e,"[[error:category-not-selected]]")}else if(b.bodyLen<parseInt(config.minimumPostLength,10)){return h(e,"[[error:content-too-short, "+config.minimumPostLength+"]]")}else if(b.bodyLen>parseInt(config.maximumPostLength,10)){return h(e,"[[error:content-too-long, "+config.maximumPostLength+"]]")}else if(g&&!r.isEnoughTags(e)){return h(e,"[[error:not-enough-tags, "+r.minTagCount()+"]]")}var w={};if(m==="topics.post"){w={handle:n?n.val():undefined,title:d.val(),content:c.val(),thumb:l.val()||"",cid:s.getSelectedCid(),tags:r.getTags(e)}}else if(m==="posts.reply"){w={tid:t.tid,handle:n?n.val():undefined,content:c.val(),toPid:t.toPid}}else if(m==="posts.edit"){w={pid:t.pid,handle:n?n.val():undefined,content:c.val(),title:d.val(),thumb:l.val()||"",tags:r.getTags(e)}}var y={composerEl:i,action:m,composerData:w,postData:t,redirect:true};$(window).trigger("action:composer.submit",y);var x=$('#taskbar .composer[data-uuid="'+e+'"] i');var E=i.find(".write");x.removeClass("fa-plus").addClass("fa-circle-o-notch fa-spin");f.minimize(e);E.prop("readonly",true);socket.emit(m,w,function(o,n){i.find(".composer-submit").removeAttr("disabled");if(o){f.load(e);E.prop("readonly",false);if(o.message==="[[error:email-not-confirmed]]"){return app.showEmailConfirmWarning(o)}return app.alertError(o.message)}f.discard(e);a.removeDraft(t.save_id);if(n.queued){bootbox.alert(n.message)}else{if(m==="topics.post"){if(y.redirect){ajaxify.go("topic/"+n.slug,undefined,p||f.bsEnvironment==="xs"||f.bsEnvironment==="sm"?true:false)}}else if(m==="posts.reply"){if(p||f.bsEnvironment==="xs"||f.bsEnvironment==="sm"){window.history.back()}else if(y.redirect&&(ajaxify.data.template.name!=="topic"||ajaxify.data.template.topic&&parseInt(t.tid,10)!==parseInt(ajaxify.data.tid,10))){ajaxify.go("post/"+n.pid)}}else{u()}}$(window).trigger("action:composer."+m,{composerData:w,data:n})})}function P(){$("html").addClass("composing")}function k(){$("body").css({paddingBottom:0});$("html").removeClass("composing");app.toggleNavbar(true)}f.discard=function(t){if(f.posts[t]){var i=$('.composer[data-uuid="'+t+'"]');i.remove();a.removeDraft(f.posts[t].save_id);delete f.posts[t];f.active=undefined;e.discard("composer",t);$('[data-action="post"]').removeAttr("disabled");$(window).trigger("action:composer.discard",{post_uuid:t})}k()};f.close=f.discard;f.minimize=function(t){var i=$('.composer[data-uuid="'+t+'"]');i.css("visibility","hidden");f.active=undefined;e.minimize("composer",t);$(window).trigger("action:composer.minimize",{post_uuid:t});k()};return f});
//# sourceMappingURL=composer.js.map