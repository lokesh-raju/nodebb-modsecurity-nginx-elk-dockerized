"use strict";define("forum/account/sessions",["forum/account/header","components"],function(e,t){var a={};a.init=function(){e.init();a.prepareSessionRevocation()};a.prepareSessionRevocation=function(){t.get("user/sessions").on("click","[data-action]",function(){var e=$(this).parents("[data-uuid]");var t=e.attr("data-uuid");if(t){$.ajax({url:config.relative_path+"/api/user/"+ajaxify.data.userslug+"/session/"+t,method:"delete",headers:{"x-csrf-token":config.csrf_token}}).done(function(){e.remove()}).fail(function(e){try{var t=JSON.parse(e.responseText);if(t.loggedIn===false){window.location.href=config.relative_path+"/login?error="+t.title}app.alertError(t.title)}catch(e){app.alertError("[[error:invalid-data]]")}})}})};return a});
//# sourceMappingURL=sessions.js.map