!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function n(e,a,i,c,s){return'<ul data-cid="'+(0,e.__escape)(i(a&&a.cid))+'">\n'+n.blocks.categories(e,a,i,c,s)+'\n<li class="children-placeholder"></li>\n</ul>\n'}return n.blocks={categories:function(e,a,i,c){var s=e.__escape;return c(i(a&&a.categories),function(e){return'\n    <li data-cid="'+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].cid))+'" '+(i(a&&a.categories&&a.categories[e]&&a.categories[e].disabled)?'class="disabled"':"")+'>\n        <div class="row category-row">\n            <div class="col-md-9">\n                <div class="clearfix">\n                    <div class="toggle">\n                        <i class="fa fa-minus"></i>\n                    </div>\n                    <div class="icon" style="\n                        color: '+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].color))+";\n                        background-color: "+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].bgColor))+";\n                        "+(i(a&&a.categories&&a.categories[e]&&a.categories[e].backgroundImage)?"\n                        background-image: url('"+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].backgroundImage))+"');\n                        ":"")+'\n                    ">\n                        <i data-name="icon" value="'+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].icon))+'" class="fa '+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].icon))+'"></i>\n                    </div>\n                    <div class="information">\n                        <h5 class="category-header">'+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].name))+'</h5>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="clearfix pull-right text-right">\n                    <div class="btn-group">\n                        <button data-cid="'+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].cid))+'" data-action="toggle" data-disabled="'+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].disabled))+'" class="btn btn-sm '+(i(a&&a.categories&&a.categories[e]&&a.categories[e].disabled)?"btn-primary":"btn-danger")+'">\n                            '+(i(a&&a.categories&&a.categories[e]&&a.categories[e].disabled)?"\n                            [[admin/manage/categories:enable]]\n                            ":"\n                            [[admin/manage/categories:disable]]\n                            ")+'\n                        </button>\n                        <a href="./categories/'+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].cid))+'/analytics" class="btn btn-default btn-sm">\n                            <i class="fa fa-line-chart"></i>\n                        </a>\n                        <a href="./categories/'+s(i(a&&a.categories&&a.categories[e]&&a.categories[e].cid))+'" class="btn btn-default btn-sm">\n                            [[admin/manage/categories:edit]]\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </li>\n'},function(){return""})}},n});