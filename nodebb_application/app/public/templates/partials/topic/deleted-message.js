!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function e(e,n,t,l,s){e=e.__escape;return'<div component="topic/deleted/message" class="alert alert-warning'+(t(n&&n.deleted)?"":" hidden")+' clearfix">\n    <span class="pull-left">[[topic:deleted_message]]</span>\n    <span class="pull-right">\n        '+(t(n&&n.deleter)?'\n        <a href="'+e(t(n&&n.config&&n.config.relative_path))+"/user/"+e(t(n&&n.deleter&&n.deleter.userslug))+'">\n            <strong>'+e(t(n&&n.deleter&&n.deleter.username))+'</strong>\n        </a>\n        <small class="timeago" title="'+e(t(n&&n.deletedTimestampISO))+'"></small>\n        ':"")+"\n    </span>\n</div>"}return e.blocks={},e});