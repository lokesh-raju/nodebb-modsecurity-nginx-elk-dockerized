!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,s,o,c,a){t.__escape;return o(s&&s.topics&&s.topics.tags&&s.topics.tags.length)?"\n\t"+i.blocks.tags(t,s,o,c,a)+"\n":""}return i.blocks={tags:function(t,s,o,c){var a=t.__escape;return c(o(s&&s.tags),function(){return'\n\t\t<a href="'+a(o(s&&s.config&&s.config.relative_path))+"/tags/"+a(o(s&&s.topics&&s.topics.tags&&s.topics.tags.value))+'"><span class="tag-item" data-tag="'+a(o(s&&s.topics&&s.topics.tags&&s.topics.tags.value))+'" style="'+(o(s&&s.topics&&s.topics.tags&&s.topics.tags.color)?"color: "+a(o(s&&s.topics&&s.topics.tags&&s.topics.tags.color))+";":"")+(o(s&&s.topics&&s.topics.tags&&s.topics.tags.bgColor)?"background-color: "+a(o(s&&s.topics&&s.topics.tags&&s.topics.tags.bgColor))+";":"")+'">'+a(o(s&&s.topics&&s.topics.tags&&s.topics.tags.value))+'</span><span class="tag-topic-count human-readable-number" title="'+a(o(s&&s.topics&&s.topics.tags&&s.topics.tags.score))+'">'+a(o(s&&s.topics&&s.topics.tags&&s.topics.tags.score))+"</span></a>\n\t"},function(){return""})}},i});