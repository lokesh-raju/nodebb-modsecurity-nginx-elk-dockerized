!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function e(e,s,a,m,t){e=e.__escape;return'<li component="chat/system-message" class="system-message clear" data-index="'+e(a(s&&s.messages&&s.messages.index))+'" data-mid="'+e(a(s&&s.messages&&s.messages.messageId))+'" data-uid="'+e(a(s&&s.messages&&s.messages.fromuid))+'" data-self="'+e(a(s&&s.messages&&s.messages.self))+'" data-break="0" data-timestamp="'+e(a(s&&s.messages&&s.messages.timestamp))+'">\r\n\t[[modules:chat.system.'+e(a(s&&s.messages&&s.messages.content))+", "+e(a(s&&s.messages&&s.messages.fromUser&&s.messages.fromUser.username))+"]]\r\n</li>"}return e.blocks={},e});