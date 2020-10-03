!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,s,l,e,n){t.__escape;return'<form role="form" class="mentions-settings">\n\t<div class="row">\n\t\t<div class="col-sm-2 col-xs-12 settings-header">General</div>\n\t\t<div class="col-sm-10 col-xs-12">\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label for="autofillGroups" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="autofillGroups" name="autofillGroups" />\n\t\t\t\t\t\t<span class="mdl-switch__label">Allow mentioning User Groups</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label for="overrideIgnores" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="overrideIgnores" name="overrideIgnores" />\n\t\t\t\t\t\t<span class="mdl-switch__label">Notify recipients of mentions even if topic is explictly ignored</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="disableGroupMentions">Select groups you wish to disable mentions</label>\n\t\t\t\t<select class="form-control" id="disableGroupMentions" name="disableGroupMentions" multiple>\n\t\t\t\t\t'+i.blocks.groups(t,s,l,e,n)+'\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="display">Mentions will display ...</label>\n\t\t\t\t<select class="form-control" id="display" name="display">\n\t\t\t\t\t<option value="">... as written</option>\n\t\t\t\t\t<option value="fullname">... as user&apos;s full name (if set)</option>\n\t\t\t\t\t<option value="username">... as user&apos;s username</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="row">\n\t\t<div class="col-sm-2 col-xs-12 settings-header">Restrictions</div>\n\t\t<div class="col-sm-10 col-xs-12">\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label for="disableFollowedTopics" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="disableFollowedTopics" name="disableFollowedTopics" />\n\t\t\t\t\t\t<span class="mdl-switch__label">Disable mentions for followed topics</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label for="privilegedDirectReplies" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="privilegedDirectReplies" name="privilegedDirectReplies" />\n\t\t\t\t\t\t<span class="mdl-switch__label">Restrict mentions to privileged users (mods, global mods, administrators), unless it is a direct reply to a post</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>'}return i.blocks={groups:function(t,s,l,e){var n=t.__escape;return e(l(s&&s.groups),function(t){return'\n\t\t\t\t\t<option value="'+n(l(s&&s.groups&&s.groups[t]&&s.groups[t].displayName))+'">'+n(l(s&&s.groups&&s.groups[t]&&s.groups[t].displayName))+"</option>\n\t\t\t\t\t"},function(){return""})}},i});