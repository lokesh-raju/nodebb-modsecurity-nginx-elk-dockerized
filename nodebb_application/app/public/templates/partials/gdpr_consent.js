!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function e(e,t,n,r,s){e=e.__escape;return'<div class="form-group">\n\t<p class="lead">[[user:consent.lead]]</p>\n\t<p>[[user:consent.intro]]</p>\n\t<div class="checkbox">\n\t\t<label>\n\t\t\t<input type="checkbox" name="gdpr_agree_data" id="gdpr_agree_data"> <strong>[[register:gdpr_agree_data]]</strong>\n\t\t</label>\n\t</div>\n\t<p>\n\t\t[[user:consent.email_intro]]\n\t\t'+(n(t&&t.digestEnabled)?"\n\t\t[[user:consent.digest_frequency, "+e(n(t&&t.digestFrequency))+"]]\n\t\t":"\n\t\t[[user:consent.digest_off]]\n\t\t")+'\n\t</p>\n\t\n\t<div class="checkbox">\n\t\t<label>\n\t\t\t<input type="checkbox" name="gdpr_agree_email" id="gdpr_agree_email"> <strong>[[register:gdpr_agree_email]]</strong>\n\t\t</label>\n\t</div>\n</div>'}return e.blocks={},e});