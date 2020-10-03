!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function r(t,s,e,a,n){var m=t.__escape;return'\n<div id="chat-modal" class="chat-modal hide" tabindex="-1" role="dialog" aria-labelledby="Chat" aria-hidden="true" data-backdrop="none">\n\t<div class="modal-dialog">\n\t\t<div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t\t<button id="chat-close-btn" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t<button type="button" class="close hidden-xs hidden-sm" data-action="maximize"><span aria-hidden="true"><i class="fa fa-expand"></i></span><span class="sr-only">[[modules:chat.maximize]]</span></button>\n\t\t\t\t<button type="button" class="close hidden-xs hidden-sm" data-action="minimize"><span aria-hidden="true"><i class="fa fa-minus"></i></span><span class="sr-only">[[modules:chat.minimize]]</span></button>\n\t\t\t\t<div class="dropdown pull-right">\n\t\t\t\t\t<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>\n\t\t\t\t\t<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">\n\t\t\t\t\t\t<li class="dropdown-header">[[modules:chat.options]]</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="members"><i class="fa fa-fw fa-cog"></i> [[modules:chat.manage-room]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t'+(e(s&&s.users&&s.users.length)?'\n\t\t\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t\t\t<li class="dropdown-header">[[modules:chat.in-room]]</li>\n\t\t\t\t\t\t'+r.blocks.users(t,s,e,a,n)+"\n\t\t\t\t\t\t":"")+'\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<h4 component="chat/room/name">'+(e(s&&s.roomName)?m(e(s&&s.roomName)):m(e(s&&s.usernames)))+'</h4>\n\t\t\t</div>\n\n\t\t\t<div class="modal-body">\n\t\t\t\t<ul class="chat-content" component="chat/messages">\n\t\t\t\t\t'+r.blocks.messages(t,s,e,a,n)+'\n\t\t\t\t</ul>\n\n\t\t\t\t<div component="chat/composer">\n\t\t\t\t\t<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="1"></textarea>\n\t\t\t\t\t<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>\n\t\t\t\t\t<span component="chat/message/remaining">'+m(e(s&&s.maximumChatMessageLength))+"</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}return r.blocks={users:function(s,e,a,t,n){var m=s.__escape;return t(a(e&&e.users),function(t){return'\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="'+m(a(e&&e.config&&e.config.relative_path))+"/uid/"+m(a(e&&e.users&&e.users[t]&&e.users[t].uid))+'">'+m(n(e,s,"buildAvatar",[a(e&&e.users&&e.users[t]),"sm",a(e&&e.true)]))+" "+m(a(e&&e.users&&e.users[t]&&e.users[t].username))+"</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"},function(){return""})},messages:function(s,e,a,t,n){var m=s.__escape;return t(a(e&&e.messages),function(t){return"\n\t"+(a(e&&e.messages&&e.messages[t]&&e.messages[t].system)?'\n\t<li component="chat/system-message" class="system-message clear" data-index="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].index))+'" data-mid="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].messageId))+'" data-uid="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromuid))+'" data-self="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].self))+'" data-break="0" data-timestamp="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].timestamp))+'">\r\n\t[[modules:chat.system.'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].content))+", "+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromUser&&e.messages[t].fromUser.username))+"]]\r\n</li>\n\t":'\n\t<li component="chat/message" class="chat-message clear'+(a(e&&e.messages&&e.messages[t]&&e.messages[t].deleted)?" deleted":"")+'" data-index="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].index))+'" data-mid="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].messageId))+'" data-uid="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromuid))+'" data-self="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].self))+'" data-break="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].newSet))+'" data-timestamp="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].timestamp))+'">\r\n\t<div class="message-header">\r\n\t\t<a href="'+m(a(e&&e.config&&e.config.relative_path))+"/user/"+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromUser&&e.messages[t].fromUser.userslug))+'">'+m(n(e,s,"buildAvatar",[a(e&&e.messages&&e.messages[t]&&e.messages[t].fromUser),"md",a(e&&e.true),"not-responsive"]))+'</a>\r\n\t\t<strong><span class="chat-user"><a href="'+m(a(e&&e.config&&e.config.relative_path))+"/user/"+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromUser&&e.messages[t].fromUser.userslug))+'">'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromUser&&e.messages[t].fromUser.username))+"</a></span></strong>\r\n\t\t"+(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromUser&&e.messages[t].fromUser.banned)?'\r\n\t\t<span class="label label-danger">[[user:banned]]</span>\r\n\t\t':"")+"\r\n\t\t"+(a(e&&e.messages&&e.messages[t]&&e.messages[t].fromUser&&e.messages[t].fromUser.deleted)?'\r\n\t\t<span class="label label-danger">[[user:deleted]]</span>\r\n\t\t':"")+'\r\n\t\t<span class="chat-timestamp timeago" title="'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].timestampISO))+'"></span>\r\n\t\t'+(a(e&&e.messages&&e.messages[t]&&e.messages[t].edited)?'\r\n\t\t<div class="text-muted pull-right" title="[[global:edited]] '+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].editedISO))+'"><i class="fa fa-edit"></i></span></div>\r\n\t\t':"")+'\r\n\t</div>\r\n\t<div class="message-body-wrapper">\r\n\t\t<div component="chat/message/body" class="message-body">\r\n\t\t\t'+m(a(e&&e.messages&&e.messages[t]&&e.messages[t].content))+"\r\n\t\t</div>\r\n\r\n\t\t"+(a(e&&e.config&&e.config.disableChatMessageEditing)?"":"\r\n\t\t"+(a(e&&e.messages&&e.messages[t]&&e.messages[t].self)?'\r\n\t\t<div class="btn-group controls">\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>\r\n\t\t\t'+(a(e&&e.isAdminOrGlobalMod)?'\r\n\t\t\t<button class="btn btn-xs btn-link chat-ip" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle chat-ip-button"></i></button>\r\n\t\t\t':"")+"\r\n\t\t</div>\r\n\t\t":"")+"\r\n\t\t")+"\r\n\t</div>\r\n</li>\n\t")+"\n"},function(){return""})}},r});