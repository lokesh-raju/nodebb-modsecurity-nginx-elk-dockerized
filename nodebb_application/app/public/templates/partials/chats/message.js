!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function s(s,e,t,a,n){var r=s.__escape;return'<li component="chat/message" class="chat-message clear'+(t(e&&e.deleted)?" deleted":"")+'" data-index="'+r(t(e&&e.messages&&e.messages.index))+'" data-mid="'+r(t(e&&e.messages&&e.messages.messageId))+'" data-uid="'+r(t(e&&e.messages&&e.messages.fromuid))+'" data-self="'+r(t(e&&e.messages&&e.messages.self))+'" data-break="'+r(t(e&&e.messages&&e.messages.newSet))+'" data-timestamp="'+r(t(e&&e.messages&&e.messages.timestamp))+'">\r\n\t<div class="message-header">\r\n\t\t<a href="'+r(t(e&&e.config&&e.config.relative_path))+"/user/"+r(t(e&&e.messages&&e.messages.fromUser&&e.messages.fromUser.userslug))+'">'+r(n(e,s,"buildAvatar",[t(e&&e.messages&&e.messages.fromUser),"md",t(e&&e.true),"not-responsive"]))+'</a>\r\n\t\t<strong><span class="chat-user"><a href="'+r(t(e&&e.config&&e.config.relative_path))+"/user/"+r(t(e&&e.messages&&e.messages.fromUser&&e.messages.fromUser.userslug))+'">'+r(t(e&&e.messages&&e.messages.fromUser&&e.messages.fromUser.username))+"</a></span></strong>\r\n\t\t"+(t(e&&e.fromUser&&e.fromUser.banned)?'\r\n\t\t<span class="label label-danger">[[user:banned]]</span>\r\n\t\t':"")+"\r\n\t\t"+(t(e&&e.fromUser&&e.fromUser.deleted)?'\r\n\t\t<span class="label label-danger">[[user:deleted]]</span>\r\n\t\t':"")+'\r\n\t\t<span class="chat-timestamp timeago" title="'+r(t(e&&e.messages&&e.messages.timestampISO))+'"></span>\r\n\t\t'+(t(e&&e.messages&&e.messages.edited)?'\r\n\t\t<div class="text-muted pull-right" title="[[global:edited]] '+r(t(e&&e.messages&&e.messages.editedISO))+'"><i class="fa fa-edit"></i></span></div>\r\n\t\t':"")+'\r\n\t</div>\r\n\t<div class="message-body-wrapper">\r\n\t\t<div component="chat/message/body" class="message-body">\r\n\t\t\t'+r(t(e&&e.messages&&e.messages.content))+"\r\n\t\t</div>\r\n\r\n\t\t"+(t(e&&e.config&&e.config.disableChatMessageEditing)?"":"\r\n\t\t"+(t(e&&e.messages&&e.messages.self)?'\r\n\t\t<div class="btn-group controls">\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>\r\n\t\t\t'+(t(e&&e.isAdminOrGlobalMod)?'\r\n\t\t\t<button class="btn btn-xs btn-link chat-ip" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle chat-ip-button"></i></button>\r\n\t\t\t':"")+"\r\n\t\t</div>\r\n\t\t":"")+"\r\n\t\t")+"\r\n\t</div>\r\n</li>"}return s.blocks={},s});