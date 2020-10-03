!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,i,n,r,e){var a=t.__escape;return'<div component="composer" class="composer'+(n(i&&i.resizable)?" resizable":"")+(n(i&&i.isTopicOrMain)?"":" reply")+'">\r\n\r\n\t<div class="composer-container">\r\n\t\t<nav class="navbar navbar-fixed-top mobile-navbar hidden-md hidden-lg">\r\n\t\t\t<div class="btn-group">\r\n\t\t\t\t<button class="btn btn-sm btn-primary composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i></button>\r\n\t\t\t\t<button class="btn btn-sm btn-primary composer-minimize" data-action="minimize" tabindex="-1"><i class="fa fa-minus"></i></button>\r\n\t\t\t</div>\r\n\t\t\t'+(n(i&&i.isTopic)?'\r\n\t\t\t<div class="category-name-container">\r\n\t\t\t\t<span class="category-name"></span> <i class="fa fa-sort"></i>\r\n\t\t\t</div>\r\n\t\t\t':"")+"\r\n\t\t\t"+(n(i&&i.isTopicOrMain)?"":'\r\n\t\t\t<h4 class="title">[[topic:composer.replying_to, "'+a(n(i&&i.title))+'"]]</h4>\r\n\t\t\t')+'\r\n\t\t\t<div class="btn-group">\r\n\t\t\t\t<button class="btn btn-sm btn-primary composer-submit" data-action="post" tabindex="-1"><i class="fa fa-chevron-right"></i></button>\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\t\t<div class="row title-container">\r\n\t\t\t'+(n(i&&i.isTopic)?'\r\n\t\t\t<div class="category-list-container hidden-sm hidden-xs"></div>\r\n\t\t\t':"")+"\r\n\r\n\t\t\t"+(n(i&&i.showHandleInput)?'\r\n\t\t\t<div data-component="composer/handle">\r\n\t\t\t\t<input class="handle form-control" type="text" tabindex="1" placeholder="[[topic:composer.handle_placeholder]]" value="'+a(n(i&&i.handle))+'" />\r\n\t\t\t</div>\r\n\t\t\t':"")+'\r\n\t\t\t<div data-component="composer/title">\r\n\t\t\t\t'+(n(i&&i.isTopicOrMain)?'\r\n\t\t\t\t<input class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="'+a(n(i&&i.title))+'"/>\r\n\t\t\t\t':'\r\n\t\t\t\t<span class="title form-control">[[topic:composer.replying_to, "'+a(n(i&&i.title))+'"]]</span>\r\n\t\t\t\t')+'\r\n\t\t\t\t<div id="quick-search-container" class="quick-search-container hidden">\r\n\t\t\t\t\t<div class="quick-search-results-container"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="pull-right draft-icon hidden-xs hidden-sm"></div>\r\n\r\n\t\t\t<div class="btn-group pull-right action-bar hidden-sm hidden-xs">\r\n\t\t\t\t<button class="btn btn-default composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i> [[topic:composer.discard]]</button>\r\n\r\n\t\t\t\t<button class="btn btn-primary composer-submit" data-action="post" tabindex="6"><i class="fa fa-check"></i> [[topic:composer.submit]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="category-tag-row">\r\n\t\t\t<div class="btn-toolbar formatting-bar">\r\n\t\t\t\t<ul class="formatting-group">\r\n\t\t\t\t\t'+s.blocks.formatting(t,i,n,r,e)+"\r\n\r\n\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\r\n\t\t\t\t\t\t"+(n(i&&i.privileges&&i.privileges["upload:post:image"])?'\r\n\t\t\t\t\t\t<li class="img-upload-btn hide" data-format="picture" tabindex="-1" title="[[modules:composer.upload-picture]]">\r\n\t\t\t\t\t\t\t<i class="fa fa-file-image-o"></i>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t':"")+"\r\n\t\t\t\t\t\t"+(n(i&&i.privileges&&i.privileges["upload:post:file"])?'\r\n\t\t\t\t\t\t<li class="file-upload-btn hide" data-format="upload" tabindex="-1" title="[[modules:composer.upload-file]]">\r\n\t\t\t\t\t\t\t<span class="fa-stack">\r\n\t\t\t\t\t\t\t\t<i class="fa fa-file-o fa-stack-1x"></i>\r\n\t\t\t\t\t\t\t\t<i class="fa fa-arrow-up fa-stack-1x"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t':"")+"\r\n\t\t\t\t\t\x3c!--<![endif]--\x3e\r\n\r\n\t\t\t\t\t"+(n(i&&i.allowTopicsThumbnail)?'\r\n\t\t\t\t\t<li tabindex="-1">\r\n\t\t\t\t\t\t<i class="fa fa-th-large topic-thumb-btn topic-thumb-toggle-btn hide" title="[[topic:composer.thumb_title]]"></i>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<div class="topic-thumb-container center-block hide">\r\n\t\t\t\t\t\t<form id="thumbForm" method="post" class="topic-thumb-form form-inline" enctype="multipart/form-data">\r\n\t\t\t\t\t\t\t<img class="topic-thumb-preview"></img>\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label for="topic-thumb-url">[[topic:composer.thumb_url_label]]</label>\r\n\t\t\t\t\t\t\t\t<input type="text" id="topic-thumb-url" class="form-control" placeholder="[[topic:composer.thumb_url_placeholder]]" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label for="topic-thumb-file">[[topic:composer.thumb_file_label]]</label>\r\n\t\t\t\t\t\t\t\t<input type="file" id="topic-thumb-file" class="form-control" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="form-group topic-thumb-ctrl">\r\n\t\t\t\t\t\t\t\t<i class="fa fa-spinner fa-spin hide topic-thumb-spinner" title="[[topic:composer.uploading]]"></i>\r\n\t\t\t\t\t\t\t\t<i class="fa fa-times topic-thumb-btn hide topic-thumb-clear-btn" title="[[topic:composer.thumb_remove]]"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t':"")+'\r\n\r\n\t\t\t\t\t<form id="fileForm" method="post" enctype="multipart/form-data">\r\n\t\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\r\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" multiple class="gte-ie9 hide"/>\r\n\t\t\t\t\t\t\x3c!--<![endif]--\x3e\r\n\t\t\t\t\t\t\x3c!--[if lt IE 9]>\r\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" class="lt-ie9 hide" value="Upload"/>\r\n\t\t\t\t\t\t<![endif]--\x3e\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row write-preview-container">\r\n\t\t\t<div class="write-container">\r\n\t\t\t\t<div class="help-text">\r\n\t\t\t\t\t<span class="help hidden">[[modules:composer.compose]] <i class="fa fa-question-circle"></i></span>\r\n\t\t\t\t\t<span class="toggle-preview hide">[[modules:composer.show_preview]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="pull-right draft-icon hidden-md hidden-lg"></div>\r\n\t\t\t\t<textarea class="write" tabindex="4" placeholder="[[modules:composer.textarea.placeholder]]"></textarea>\r\n\t\t\t</div>\r\n\t\t\t<div class="hidden-sm hidden-xs preview-container">\r\n\t\t\t\t<div class="help-text">\r\n\t\t\t\t\t<span class="toggle-preview">[[modules:composer.hide_preview]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="preview well"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t'+(n(i&&i.isTopicOrMain)?'\r\n\t\t<div class="tag-row">\r\n\t\t\t<div class="tags-container">\r\n\t\t\t\t<div class="btn-group dropup '+(n(i&&i.tagWhitelist&&i.tagWhitelist.length)?"":"hidden")+'" component="composer/tag/dropdown">\r\n\t\t\t\t\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\r\n\t\t\t\t\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline"><i class="fa fa-tags"></i></span>\r\n\t\t\t\t\t\t[[tags:select_tags]]\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<ul class="dropdown-menu">\r\n\t\t\t\t\t\t'+s.blocks.tagWhitelist(t,i,n,r,e)+'\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<input class="tags" type="text" class="form-control" placeholder="[[tags:enter_tags_here, '+a(n(i&&i.minimumTagLength))+", "+a(n(i&&i.maximumTagLength))+']]" tabindex="5"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t':"")+"\r\n\r\n\t\t"+(n(i&&i.isTopic)?'\r\n\t\t<ul class="category-selector visible-xs visible-sm">\r\n\r\n\t\t</ul>\r\n\t\t':"")+'\r\n\r\n\t\t<div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>\r\n\r\n\t\t<div class="resizer"><div class="trigger text-center"><i class="fa"></i></div></div>\r\n\t</div>\r\n</div>\r\n'}return s.blocks={formatting:function(t,i,n,r){var e=t.__escape;return r(n(i&&i.formatting),function(t){return"\r\n\t\t\t\t\t\t"+(n(i&&i.formatting&&i.formatting[t]&&i.formatting[t].spacer)?'\r\n\t\t\t\t\t\t<li class="spacer"></li>\r\n\t\t\t\t\t\t':"\r\n\t\t\t\t\t\t"+(n(i&&i.formatting&&i.formatting[t]&&i.formatting[t].mobile)?"":'\r\n\t\t\t\t\t\t<li tabindex="-1" data-format="'+e(n(i&&i.formatting&&i.formatting[t]&&i.formatting[t].name))+'" title="'+e(n(i&&i.formatting&&i.formatting[t]&&i.formatting[t].title))+'"><i class="'+e(n(i&&i.formatting&&i.formatting[t]&&i.formatting[t].className))+'"></i></li>\r\n\t\t\t\t\t\t')+"\r\n\t\t\t\t\t\t")+"\r\n\t\t\t\t\t"},function(){return""})},tagWhitelist:function(t,i,e,n){var a=t.__escape;return n(e(i&&i.tagWhitelist),function(t,i,n,r){return'\r\n\t\t\t\t\t\t<li data-tag="'+a(e(r))+'"><a href="#">'+a(e(r))+"</a></li>\r\n\t\t\t\t\t\t"},function(){return""})}},s});