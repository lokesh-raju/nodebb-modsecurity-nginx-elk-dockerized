!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,e,o,n,a){t.__escape;return'<form type="form">\n\t<div class="form-group">\n\t\t<div component="category-selector" class="btn-group">\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t<span component="category-selector-selected">[[topic:thread_tools.select_category]]</span> <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<div component="category-selector-search" class="hidden">\n\t\t\t\t<input type="text" class="form-control" autocomplete="off">\n\t\t\t</div>\n\t\t\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t\t\t<li component="category/no-matches" role="presentation" class="category hidden">\n\t\t\t\t\t<a role="menu-item">[[search:no-matches]]</a>\n\t\t\t\t</li>\n\t\t\t\t'+c.blocks.categories(t,e,o,n,a)+'\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</form>\n<div class="form-group">\n    <label for="copyParent">\n        <input id="copyParent" name="copyParent" type="checkbox">\n        <strong>[[admin/manage/categories:copy-parent]]</strong>\n    </label>\n</div>'}return c.blocks={categories:function(a,c,r,t,s){var i=a.__escape;return t(r(c&&c.categories),function(t,e,o,n){return'\n\t\t\t\t<li role="presentation" class="category" data-cid="'+i(r(c&&c.categories&&c.categories[t]&&c.categories[t].cid))+'" data-name="'+i(r(c&&c.categories&&c.categories[t]&&c.categories[t].name))+'">\n\t\t\t\t\t<a role="menu-item">'+i(r(c&&c.categories&&c.categories[t]&&c.categories[t].level))+'<span component="category-markup">'+(r(c&&c.categories&&c.categories[t]&&c.categories[t].icon)?'<span class="fa-stack" style="'+i(s(c,a,"generateCategoryBackground",[r(n)]))+'"><i style="color: '+i(r(c&&c.categories&&c.categories[t]&&c.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+i(r(c&&c.categories&&c.categories[t]&&c.categories[t].icon))+'"></i></span>':"")+" "+i(r(c&&c.categories&&c.categories[t]&&c.categories[t].name))+"</span></a>\n\t\t\t\t</li>\n\t\t\t\t"},function(){return""})}},c});