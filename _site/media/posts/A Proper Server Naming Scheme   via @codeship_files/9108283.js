/* =====================================================================
 * Drip Client Library
 * https://www.getdrip.com/
 * Copyright (c) 2013 Drip
 * ===================================================================== */
var _dcqi=window._dcq||[];window.dc=function(e,t,i,n){var r={hostname:"www.getdrip.com",debug:!1},a={},o={},s={},c=[],u={},l=[],d=850;Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(this===n||null===this)throw new TypeError('"this" is null or not defined');var i=this.length>>>0;for(t=+t||0,1/0===Math.abs(t)&&(t=0),0>t&&(t+=i,0>t&&(t=0));i>t;t++)if(this[t]===e)return t;return-1});var f=Date.now||function(){return(new Date).getTime()},p=function(e,t,i){var n,r,a,o,s,c=function(){var u=f()-o;t>u?n=setTimeout(c,t-u):(n=null,i||(s=e.apply(a,r),a=r=null))};return function(){a=this,r=arguments,o=f();var u=i&&!n;return n||(n=setTimeout(c,t)),u&&(s=e.apply(a,r),a=r=null),s}},m=function(e){this._done=[],this._fail=[],this._always=[],this.options=e||{}};m.prototype={execute:function(e,t){var i=e.length;for(t=Array.prototype.slice.call(t);i--;)e[i].apply(null,t)},resolve:function(){this.execute(this._done,arguments),this.execute(this._always,arguments),this.options.resolved=!0},reject:function(){this.execute(this._fail,arguments),this.execute(this._always,arguments),this.options.rejected=!0},done:function(e){return this.options.resolved?e.apply(null):this._done.push(e),this},fail:function(e){return this.options.rejected?e.apply(null):this._fail.push(e),this},always:function(e){return this.options.resolved?e.apply(null):this.options.rejected?e.apply(null):this._always.push(e),this}};var h=function(){var t=[],i=new m({resolved:!0});t.push(i);var n=function(i){var n=new m;t.push(n),t[t.length-2].always(function(){var t=e.dc[i.shift()].apply(null,i);t&&t.done?t.always(function(){n.resolve()}):n.resolve()})};return{initialize:function(e){if(e)for(var t=0;t<e.length;t++)n(e[t])},push:function(e){n(e)}}}();!function(){function e(e,t){this.lock=t||0,this.func=e}e.prototype.v=function(){this.lock++},e.prototype.p=function(){this.lock--,0==this.lock&&this.func&&this.func()}}();var g=function(){function e(e,t,i){this.location=e,this.pattern=t,this.options=i||{}}return e.prototype.extractHost=function(e){if("/"==e[0])return n;var t,i=e.indexOf("//");t=-1==i?0:i+2;var r=e.indexOf("/",t);return r=r>=0?r:e.length,e.substring(t,r)},e.prototype.extractQS=function(e){var t=e.split("?");return t.length>1?"?"+t[1].split("#")[0]:""},e.prototype.extractPath=function(e){var t=e.split("?")[0].split("#")[0];if("/"==t[0])return t;var i=t.indexOf("//");if(-1==i){var n=t.indexOf("/");return-1==n?"/"+t:t.substring(n)}var r=t.indexOf("/",i+2);return t.substring(r)},e.prototype.parseHost=function(e){return e===n?n:e.split(".")},e.prototype.parseQS=function(e){var t={};if(e.length>1)for(var i,n=0,r=e.substr(1).split("&");n<r.length;n++)i=r[n].split("="),t[unescape(i[0])]=i.length>1?unescape(i[1]):"";return t},e.prototype.parsePath=function(e){for(var t=e.split("/"),i=0;i<t.length;i++)""==t[i]&&(t.splice(i,1),i--);return t},e.prototype.matchHost=function(){var e=this.parseHost(this.extractHost(this.location)),t=this.parseHost(this.extractHost(this.pattern));return t?this.matchParts(e,t):!0},e.prototype.matchQS=function(){var e=this.parseQS(this.extractQS(this.location)),t=this.parseQS(this.extractQS(this.pattern));for(var i in t)if(t.hasOwnProperty(i)){if(!e.hasOwnProperty(i))return!1;if("*"!==t[i]&&e[i]!==t[i])return!1}return!0},e.prototype.matchPath=function(){var e=this.parsePath(this.extractPath(this.location)),t=this.parsePath(this.extractPath(this.pattern));return this.matchParts(e,t)},e.prototype.matchParts=function(e,t){for(var i,r,a=!1;;)if(a||(r=t.shift()),"**"!=r){if(i=e.shift(),i==n)break;if(r!=i&&"*"!=r){if(1!=a)return!1}else a=!1}else a=!0,r=t.shift();return r==n&&i==n},e.prototype.matchRegex=function(){var e=this.pattern.match(/^\[(.*)\]$/)[1],t=new RegExp(e);return t.test(this.location)},e.prototype.isRegexPattern=function(){return/^\[.*\]$/.test(this.pattern)},e.prototype.match=function(){return this.isRegexPattern()?this.matchRegex():this.matchHost()&&this.matchPath()&&this.matchQS()},e}(),v=function(e){function t(){}return t.prototype.isMobile=function(){var t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},t}(navigator.userAgent||navigator.vendor||e.opera),y={getItem:function(e){return unescape(t.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*)|.*"),"$1"))||null},setItem:function(e,i,n,r,a,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=1/0===n?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toGMTString()}return t.cookie=escape(e)+"="+escape(i)+s+(a?"; domain="+a:"")+(r?"; path="+r:"")+(o?"; secure":""),!0},removeItem:function(e,i){return e&&this.hasItem(e)?(t.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(i?"; path="+i:""),!0):!1},hasItem:function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(t.cookie)},keys:function(){for(var e=t.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),i=0;i<e.length;i++)e[i]=unescape(e[i]);return e}},b=function(){"use strict";var e="s",t=function(e){var t=-e.getTimezoneOffset();return null!==t?t:0},i=function(e,t,i){var r=new Date;return e!==n&&r.setFullYear(e),r.setMonth(t),r.setDate(i),r},r=function(e){return t(i(e,0,2))},a=function(e){return t(i(e,5,2))},o=function(e){var i=e.getMonth()>7,n=i?a(e.getFullYear()):r(e.getFullYear()),o=t(e),s=0>n,c=n-o;return s||i?0!==c:0>c},s=function(){var t=r(),i=a(),n=t-i;return 0>n?t+",1":n>0?i+",1,"+e:t+",0"},c=function(){var e=s();return new b.TimeZone(b.olson.timezones[e])},u=function(e){var t=new Date(2010,6,15,1,0,0,0),i={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"America/Asuncion":new Date(2012,9,7,3,0,0,0),"America/Santiago":new Date(2012,9,3,3,0,0,0),"America/Campo_Grande":new Date(2012,9,21,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2012,2,10,2,0,0,0),"America/New_York":new Date(2012,2,10,7,0,0,0),"Europe/Helsinki":new Date(2013,2,31,5,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0),"Europe/Moscow":t,"Asia/Amman":new Date(2013,2,29,1,0,0,0),"Asia/Beirut":new Date(2013,2,31,2,0,0,0),"Asia/Damascus":new Date(2013,3,6,2,0,0,0),"Asia/Jerusalem":new Date(2013,2,29,5,0,0,0),"Asia/Yekaterinburg":t,"Asia/Omsk":t,"Asia/Krasnoyarsk":t,"Asia/Irkutsk":t,"Asia/Yakutsk":t,"Asia/Vladivostok":t,"Asia/Baku":new Date(2013,2,31,4,0,0),"Asia/Yerevan":new Date(2013,2,31,3,0,0),"Asia/Kamchatka":t,"Asia/Gaza":new Date(2010,2,27,4,0,0),"Africa/Cairo":new Date(2010,4,1,3,0,0),"Europe/Minsk":t,"Pacific/Apia":new Date(2010,10,1,1,0,0,0),"Pacific/Fiji":new Date(2010,11,1,0,0,0),"Australia/Perth":new Date(2008,10,1,1,0,0,0)};return i[e]};return{determine:c,date_is_dst:o,dst_start_for:u}}();b.TimeZone=function(e){"use strict";var t={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Santiago":["America/Santiago","America/Asuncion","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Amman","Asia/Jerusalem","Asia/Beirut","Europe/Helsinki","Asia/Damascus"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"],"Asia/Dubai":["Europe/Moscow"],"Asia/Dhaka":["Asia/Yekaterinburg"],"Asia/Jakarta":["Asia/Omsk"],"Asia/Shanghai":["Asia/Krasnoyarsk","Australia/Perth"],"Asia/Tokyo":["Asia/Irkutsk"],"Australia/Brisbane":["Asia/Yakutsk"],"Pacific/Noumea":["Asia/Vladivostok"],"Pacific/Tarawa":["Asia/Kamchatka","Pacific/Fiji"],"Pacific/Tongatapu":["Pacific/Apia"],"Asia/Baghdad":["Europe/Minsk"],"Asia/Baku":["Asia/Yerevan","Asia/Baku"],"Africa/Johannesburg":["Asia/Gaza","Africa/Cairo"]},i=e,n=function(){for(var e=t[i],n=e.length,r=0,a=e[0];n>r;r+=1)if(a=e[r],b.date_is_dst(b.dst_start_for(a)))return i=a,void 0},r=function(){return"undefined"!=typeof t[i]};return r()&&n(),{name:function(){return i}}},b.olson={},b.olson.timezones={"-720,0":"Pacific/Majuro","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Santiago","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"America/Noronha","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,0":"Asia/Baghdad","180,1":"Europe/Moscow","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Baku","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"},e.console||(e.console={});var w=function(t,i,n){(a.debug||n)&&(i||(i="info"),e.console[i]||(i="log"),e.console[i]("DC: "+t))},A=function(e,t){for(var i in t)t.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&(e[i]=t[i])},_=function(e,t){return"object"==typeof e?-1!=e.indexOf(t):void 0},k=function(e,t,i){return i=i||e.length,i-=t.length,e.lastIndexOf(t)===i},x=function(e){return today=new Date,new Date(today.getFullYear()+e,today.getMonth(),today.getDate())},P=function(e){if("object"!=typeof e)return"";var t,i,n=[];for(var r in e)if(e.hasOwnProperty(r))if(t=encodeURIComponent(r),e[r]instanceof Array)for(var a=0;a<e[r].length;a++)i=encodeURIComponent(e[r][a]),n.push(t+"[]="+i);else i=encodeURIComponent(e[r]),n.push(t+"="+i);return"?"+n.join("&")},I=function(t){for(var i=e.location.search.substring(1),n=i.split("&"),r=0;r<n.length;r++){var a=n[r].split("=");if(decodeURIComponent(a[0])==t)return decodeURIComponent(a[1])}return null},S=function(e,t){t||(t={});var i={};for(var n in t)t.hasOwnProperty(n)&&(i[e+"["+n+"]"]=t[n]);return i},D=function(e,t,n){return i?(i(e).trigger(t,n),void 0):!1},E=function(){return"https:"==t.location.protocol?"https:":"http:"},T=function(e){return E()+"//"+a.hostname+"/client/"+e},O=function(i){if("object"!=typeof i)return null;i.data||(i.data={});var r=Math.floor(1e9*Math.random()).toString(),a="Drip_"+r;i.data.callback=a,e[a]=function(t){e[a]=n,i.success(t)};var o=t.createElement("script"),s=i.url+P(i.data);o.type="text/javascript",o.src=s;var c=t.getElementsByTagName("head")[0];c.insertBefore(o,c.firstChild),w("Initiating JSONP request to "+s),e.setTimeout(function(){"function"==typeof e[a]&&(e[a]=function(){e[a]=n},"function"==typeof i.error&&i.error({reason:"timeout"}),e.setTimeout(function(){"function"==typeof e[a]&&(e[a]=n)},6e4))},i.timeout||1e4)},B=function(){var e,t="_drip_client_"+a.account,i=function(e){return decodeURIComponent(e.replace(/\+/g," "))},n=function(e){for(var t={},i=e.split("&"),n=0,r=i.length;r>n;n++){var a=i[n].split("=");t[a[0]]=a[1]}return t},r=y.getItem(t);return e=null!==r?n(i(r)):{}},C=function(t){var i="_drip_client_"+a.account,r=function(e){return encodeURIComponent(e)},s=function(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(i+"="+e[i]);return t.join("&")};domain=o.domain,domain=domain&&k(e.location.hostname,domain)?"."+domain:n,y.setItem(i,r(s(t)),x(2),"/",domain)},H=function(e){e||(e={}),O({url:T("config"),data:{account_id:a.account},success:function(t){w("Config data received"),o=t,"function"==typeof e.success&&e.success(t)},error:function(){w("An error occurred receiving config data","warn"),"function"==typeof e.error&&e.error()}})},M=function(e){o.campaigns||(o.campaigns=[]);for(var t=0,i=o.campaigns.length;i>t;t++)if(o.campaigns[t].id==e||o.campaigns[t].public_id==e)return o.campaigns[t];return null},z=function(e){o.goals||(o.goals=[]);for(var t=0,i=o.goals.length;i>t;t++)if(o.goals[t].id==e||o.goals[t].public_id==e)return o.goals[t];return null},j=function(e){o.forms||(o.forms=[]);for(var t=0,i=o.forms.length;i>t;t++)if(o.forms[t].id==e||o.forms[t].public_id==e)return o.forms[t];return null},N=function(){var t,i;o.goals||(o.goals=[]);for(var n=0,r=o.goals.length;r>n;n++)t=o.goals[n],i=new g(e.location.href,t.url),i.match()&&R({_action:t.name,value:t.default_value})},F=function(){var t,i;o.url_triggers||(o.url_triggers=[]);for(var n=0,r=o.url_triggers.length;r>n;n++)t=o.url_triggers[n],i=new g(e.location.href,t.properties.url),i.match()&&R({_action:t.action,url:t.properties.url,actual_url:e.location.href})},q=function(){for(var e,i=/^http:\/\/drip.la/,n=t.getElementsByTagName("a"),r=0,a=n.length;a>r;r++)e=n[r].getAttribute("href"),i.test(e)&&n[r].setAttribute("href",e+"?v="+s.vid)},G=function(e){e||(e={});var t=new m,i={account_id:a.account,utc_offset:W(),time_zone:Z()};s.vid&&(i.visitor_uuid=s.vid);for(var n in e)e.hasOwnProperty(n)&&"success"!=n&&"failure"!=n&&(i[n]=e[n]);return O({url:T("identify"),data:i,success:function(i){w("Identify recorded"),i.success&&i.visitor_uuid&&(s.vid=i.visitor_uuid,C(s)),"function"==typeof e.success&&e.success(i),"function"==typeof e.ensure&&e.ensure(i),t.resolve()},error:function(i){w("An error occurred recording identify","warn"),"function"==typeof e.error&&e.error(),"function"==typeof e.ensure&&e.ensure(i),t.reject()}}),t},R=function(t){t||(t={});var i=new m,n={account_id:a.account,url:e.location.href};s.vid&&(n.visitor_uuid=s.vid);for(var r in t)t.hasOwnProperty(r)&&"success"!=r&&"failure"!=r&&(n[r]=t[r]);return O({url:T("track"),data:n,success:function(e){w("Track event recorded"),e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof t.success&&t.success(e),"function"==typeof t.ensure&&t.ensure(e),i.resolve()},error:function(e){w("An error occurred tracking event","warn"),"function"==typeof t.error&&t.error(e),"function"==typeof t.ensure&&t.ensure(e),i.reject()}}),i},Y=function(i){i||(i={});var n={account_id:a.account,referrer:t.referrer,url:e.location.href,domain:e.location.hostname,utc_offset:W(),time_zone:Z(),enable_third_party_cookies:o.enable_third_party_cookies?"t":"f"};O({url:T("events/visit"),data:n,success:function(e){w("Visit event recorded"),e.success&&e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof i.success&&i.success(e),"function"==typeof i.ensure&&i.ensure(e)},error:function(e){w("An error occurred recording visit","warn"),"function"==typeof i.error&&i.error(),"function"==typeof i.ensure&&i.ensure(e)}})},L=function(t){if(t||(t={}),t.accountId!=n&&t.formId!=n&&t.action!=n){var i={};s.vid&&(i.visitor_uuid=s.vid),i.account_id=t.accountId,i.form_id=t.formId,i._action=t.action,i.url=e.location.href,s["form["+t.formId+"]["+t.action+"]"]=X(),C(s),"submit"!=t.action&&O({url:T("events/form"),data:i,success:function(e){w("Form action '"+t.action+"' recorded"),e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof t.success&&t.success(e),"function"==typeof t.ensure&&t.ensure(e)},error:function(e){w("An error occurred recording form event","warn"),"function"==typeof t.error&&t.error(e),"function"==typeof t.ensure&&t.ensure(e)}}),"submit"==t.action&&t.sendGaEvent&&(e._gaq&&e._gaq.push(["_trackEvent","Drip Opt-in Form","Submit",String(t.formId)]),"function"==typeof e.ga&&e.ga("send","event","Drip Opt-in Form","Submit",String(t.formId)))}},J=function(i){i||(i={});var r=new m;if(i.accountId!=n&&i.campaignId!=n){var a=S(u),o=i.fields||{};return i.namespaced||(o=S("fields",o)),A(o,a),s.vid&&(o.visitor_uuid=s.vid),o.account_id=i.accountId,o.campaign_id=i.campaignId,o.time_zone=Z(),o.url=e.location.href,o.page_title=t.title,i.double_optin!=n&&(o.double_optin=i.double_optin),O({url:T("events/subscribe"),data:o,success:function(e){w("Subscription recorded"),e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof i.success&&i.success(e),"function"==typeof i.ensure&&i.ensure(e),r.resolve()},error:function(e){w("An error occurred recording subscription","warn"),"function"==typeof i.error&&i.error(e),"function"==typeof i.ensure&&i.ensure(e),r.reject()}}),r}},K=function(e){e||(e={});var t=new m;if(e.accountId!=n&&e.email!=n){var i={};return i.account_id=e.accountId,i.email=e.email,e.campaignId!=n&&(i.campaign_id=e.campaignId),O({url:T("events/unsubscribe"),data:i,success:function(i){w("Unsubscribe recorded"),i.visitor_uuid&&(s.vid=i.visitor_uuid,C(s)),"function"==typeof e.success&&e.success(i),"function"==typeof e.ensure&&e.ensure(i),t.resolve()},error:function(i){w("An error occurred recording unsubscribe","warn"),"function"==typeof e.error&&e.error(),"function"==typeof e.ensure&&e.ensure(i),t.reject()}}),t}},Q=function(e,t){w("Identifying "+e+"="+t),u[e]=t,o.forms||(o.forms=[]);for(var n=0,r=o.forms.length;r>n;n++){var a=o.forms[n];if(a.el&&a.el.form)for(var s=a.el.form,n=0,r=s.length;r>n;n++)s[n].name=="fields["+e+"]"&&(s[n].value=t)}i&&i(function(){for(var i=0,n=l.length;n>i;i++)l[i].find("[name='fields["+e+"]']").val(t)})},U=function(e){for(var t,i,n={},r=0,a=e.length;a>r;r++)t=e[r].name,i=e[r].value,n[t]=i;return n},$=function(e){if(_(c,e))return new m({resolved:[]});var t=null,i=new m,n={api_key:"pubkey-8rki0u2qo14pwefei20u8d1ywxdsoii7"};return O({url:"https://api.mailgun.net/v2/address/validate",data:{address:e,api_key:n.api_key},success:function(n){n.did_you_mean?(t="Did you mean: <b>"+n.did_you_mean+"</b>? If not, just hit submit again.",n.is_valid&&c.push(e)):0==n.is_valid&&(t="Email address is invalid"),t?i.reject(t):i.resolve()},error:function(){i.resolve()}}),i},V=function(i){if(i.isSubmitting)return w("Form submission cancelled");var n=U(t.forms["drip-form-"+i.id]),r=S(u);A(n,r),s.vid&&(n.visitor_uuid=s.vid),n.account_id=i.account_id,n.form_id=i.id,n.time_zone=Z(),n.url=e.location.href,n.page_title=t.title,i.isSubmitting=!0,bt(i),vt(i),D(t,"submitting.drip",n),w("Submitting: "+JSON.stringify(n)),$(n["fields[email]"]).fail(function(e){i.isSubmitting=!1,gt(i,{email:e},{prefix:!1}),D(t,"submitFailed.drip",n)}).done(function(){O({url:T("forms/submit"),data:n,success:function(r){w("Subscription recorded"),r.visitor_uuid&&(s.vid=r.visitor_uuid,C(s)),i.isSubmitting=!1,r.errors?(gt(i,r.errors),w("Errors: "+JSON.stringify(r)),D(t,"submitFailed.drip",n)):(D(t,"submitted.drip",n),L({accountId:i.account_id,formId:i.id,sendGaEvent:i.send_ga_event,action:"submit"}),r.send_to_confirmation_page?e.location=r.confirmation_url:(i.showSuccess=!0,yt(i),bt(i)))},error:function(){w("An error occurred recording subscription","warn"),i.isSubmitting=!1,bt(i),D(t,"submitFailed.drip",n)}})})},W=function(){return(-(new Date).getTimezoneOffset()).toString()},Z=function(){return b.determine().name()},X=function(){return Math.round((new Date).getTime()/1e3)},et=function(e){var t=X();return e=parseInt(e),Math.round(100*(t-e)/86400)/100},tt=function(t,i,n){function r(e){var t=n.apply(this,arguments);return t===!1&&(e.stopPropagation(),e.preventDefault()),t}function a(){var i=n.call(t,e.event);return i===!1&&(e.event.returnValue=!1,e.event.cancelBubble=!0),i}t.addEventListener?t.addEventListener(i,r,!1):t.attachEvent("on"+i,a)},it=function(e){var i=t.getElementsByTagName("head")[0],r=t.createElement("style");r.type="text/css",openingTag='<style type="text/css" media="screen">',closingTag="</style>",e=e.replace(openingTag,"").replace(closingTag,""),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),i!==n?i.appendChild(r):t.body.appendChild(r)},nt=function(e){var i=t.createDocumentFragment(),n=t.createElement("div");n.innerHTML=e,i.appendChild(n.firstChild),t.body.appendChild(i)},rt=function(e,t){var i=e.className,n=new RegExp("(?:^|\\s)"+t+"(?!\\S)");i.match(n)||(e.className=i+" "+t)},at=function(e,t){var i=e.className,n=new RegExp("(?:^|\\s)"+t+"(?!\\S)","g");e.className=i.replace(n,"")},ot=function(t){var i=t?t:e.event;return i.preventDefault&&i.preventDefault(),i.stopPropagation&&i.stopPropagation(),i.returnValue=!1,!1},st=function(){return o.forms?i==n?w("Unable to render embedded forms because jQuery is not installed","warn"):(i(function(){for(var e=i("[data-drip-embedded-form]"),t=0,n=o.forms.length;n>t;t++)e.each(function(e,n){ct(o.forms[t],i(n))})}),void 0):void 0},ct=function(r,a){if(a.attr("data-drip-id")===n){var o=a.attr("data-drip-embedded-form");(""===o||o===String(r.id))&&(w("Rendering embeddable form #"+r.id),a.attr("data-drip-id",r.id),a.attr("method","post"),a.find("[data-drip-attribute='headline']").html(r.headline),a.find("[data-drip-attribute='teaser']").html(r.teaser),a.find("[data-drip-attribute='description']").html(r.description),a.find("[data-drip-attribute='sign-up-button']").val(r.button_text),a.append("<input type='hidden' name='time_zone' value='"+Z()+"' />"),a.append("<input type='hidden' name='url' value='"+e.location.href+"' />"),a.append("<input type='hidden' name='page_title' value='"+t.title+"' />"),a.submit(function(){return $this=i(this),$this.append("<input type='hidden' name='visitor_uuid' value='"+s.vid+"' />"),!0}),l.push(a))}},ut=function(){if(o.forms)for(var e=0,t=o.forms.length;t>e;e++)pt(o.forms[e])},lt=function(e){it(e.css),nt(e.html)},dt=function(e){switch(e.el={container:t.getElementById("drip-"+e.id),form:t.getElementById("drip-form-"+e.id),toggle:t.getElementById("drip-toggle-"+e.id),close:t.getElementById("drip-close-"+e.id),hide:t.getElementById("drip-hide-"+e.id),teaser:t.getElementById("drip-teaser-"+e.id),content:t.getElementById("drip-content-"+e.id),formPanel:t.getElementById("drip-form-panel-"+e.id),successPanel:t.getElementById("drip-success-panel-"+e.id),submitButton:t.getElementById("drip-submit-"+e.id),scroll:t.getElementById("drip-scroll-"+e.id),contentHeader:t.getElementById("drip-content-header-"+e.id)},e.category){case"tab":e.el.header=t.getElementById("drip-header-"+e.id),e.el.upArrow=t.getElementById("drip-tab-up-"+e.id),e.el.downArrow=t.getElementById("drip-tab-down-"+e.id);case"lightbox":e.el.backdrop=t.getElementById("drip-backdrop-"+e.id)}},ft=function(t){var i;if(!t.is_widget_enabled)return!1;if((new v).isMobile()&&t.hide_on_mobile)return!1;if(s["form["+t.id+"][submit]"])return!1;if(t.is_blacklist_enabled)for(var n=0,r=t.blacklist.length;r>n;n++)if(i=new g(e.location.href,t.blacklist[n]),i.match())return!1;if(t.is_whitelist_enabled){for(var a=0,r=t.whitelist.length;r>a;a++)if(i=new g(e.location.href,t.whitelist[a]),i.match())return!0;return!1}return!0},pt=function(t){if(ft(t)){if(t.isOpen=!1,t.triggered=!1,t.showTeaser=!1,t.showSuccess=!1,t.manuallyOpened=!1,t.isSubmitting=!1,lt(t),dt(t),bt(t),setTimeout(function(){t.showTeaser=!0,bt(t)},200),t.seconds_before_popup)var i=1e3*parseInt(t.seconds_before_popup);else var i=6e3;"tab"==t.category&&t.el.toggle&&(t.el.toggle.onclick=function(e){return ht(t,!0),ot(e)}),t.el.form&&tt(t.el.form,"submit",function(){return V(t),!1}),t.el.close&&(t.el.close.onclick=function(e){return ht(t,!0),ot(e)}),t.el.hide&&(t.el.hide.onclick=function(e){return t.isOpen=!1,t.showTeaser=!1,bt(t),ot(e)});var n=p(bt,100,!0);tt(e,"resize",function(){n(t)}),mt(t)&&setTimeout(function(){0==t.triggered&&ht(t)},i)}},mt=function(e){if(s["form["+e.id+"][submit]"])return!1;if((new v).isMobile())return!1;var t=s["form["+e.id+"][manual_close]"];if(t&&et(t)<e.days_between_popup_after_close)return!1;var i=s["form["+e.id+"][auto_open]"];return i&&et(i)<e.days_between_popup?!1:!0},ht=function(e,t){var i;e.triggered=!0,e.isOpen=!e.isOpen,bt(e),t&&e.isOpen&&(e.manuallyOpened=!0),i=t?e.isOpen?"manual_open":"manual_close":e.isOpen?"auto_open":"auto_close",L({accountId:e.account_id,formId:e.id,action:i})},gt=function(e,i,n){var r,a,o;if("object"==typeof i){n||(n={}),A(n,{prefix:!0});for(var s in i)i.hasOwnProperty(s)&&(r=s.replace(/\.|_/gi,"-"),r="drip-errors-for-"+r+"-"+e.id,a=t.getElementById(r),a&&(o=i[s],a.innerHTML=n.prefix?"This "+o:o));bt(e,!1)}},vt=function(e){for(var t=e.el.content.querySelectorAll("div.drip-errors"),i=0,n=t.length;n>i;i++)t[i].innerHTML="";bt(e)},yt=function(e){var i=t.forms["drip-form-"+e.id];if(i!=n){for(var r=0,a=i.length;a>r;r++)"input"==i[r].tagName&&"text"==i[r].type&&(i[r].value="");bt(e)}},bt=function(t){var i=t.el,n=.66*e.innerHeight;if(t.isSubmitting?(i.submitButton.disabled="disabled",i.submitButton.value=t.submit_text||"Submitting..."):(i.submitButton.disabled="",i.submitButton.value=t.button_text),t.showSuccess?(i.formPanel.style.display="none",i.successPanel.style.display="block"):(i.formPanel.style.display="block",i.successPanel.style.display="none"),("bottom"==t.region||"side"==t.region)&&(t.isOpen?rt(i.header,"hide"):at(i.header,"hide")),"side"==t.region&&e.innerWidth>d)var r=0;else var r=i.header?i.header.scrollHeight||0:0;i.scroll.style.height="auto";for(var a=0,o=i.content.childNodes,s=0,c=o.length;c>s;s++)o[s].style&&"none"!==o[s].style.display&&(a+=o[s].scrollHeight||0);var u=r+a+10;"bottom"==this.region&&u>n?(u=n,a=u-r-10,contentHeaderHeight=i.contentHeader.scrollHeight,scrollContainerHeight=a-contentHeaderHeight-60,rt(t.el.scroll,"scroll"),i.scroll.style.height=scrollContainerHeight.toString()+"px"):(at(t.el.scroll,"scroll"),scrollContainerHeight=i.scroll.style.height),"tab"==t.category&&(t.isOpen?(i.downArrow.style.display="block",i.upArrow.style.display="none"):(i.downArrow.style.display="none",i.upArrow.style.display="block")),"lightbox"==t.category&&(t.isOpen?(at(i.backdrop,"hide"),at(i.container,"hide"),setTimeout(function(){rt(i.backdrop,"in"),rt(i.container,"in");for(var e=0,t=i.content.childNodes,n=0,a=t.length;a>n;n++)t[n].style&&"none"!==t[n].style.display&&(e+=t[n].scrollHeight||0);var o=r+e+10;i.container.style.height=o.toString()+"px"},0)):(at(i.backdrop,"in"),at(i.container,"in"),setTimeout(function(){rt(i.backdrop,"hide"),rt(i.container,"hide")},200))),e.innerWidth<d?wt(t,u,a):At(t,u,a)},wt=function(e,t,i){var n=e.el;at(n.container,"side"),at(n.container,"bottom"),at(n.container,"left"),at(n.container,"right"),rt(n.container,"mobile"),n.container.style.height=t.toString()+"px",n.container.style.left=0,"tab"==e.category&&(n.container.style.top="inherit",n.container.style.bottom=0,n.container.style.bottom=e.isOpen?"0":e.showTeaser?"-"+i.toString()+"px":"-"+t.toString()+"px")},At=function(e,t,i){var n=e.el;switch(at(n.container,"mobile"),at(n.scroll,"mobile"),e.region&&rt(n.container,e.region),e.side&&rt(n.container,e.side),e.region){case"bottom":n.container.style.height=t.toString()+"px","left"==e.side?n.container.style.left="40px":(n.container.style.right="40px",n.container.style.left="inherit");break;case"side":n.container.style.height=(i+10).toString()+"px",n.container.style.top="15%",n.teaser.style.width=(i-20).toString()+"px",n.teaser.style.top=(i/2).toString()+"px",n.teaser.style.left=(30-i/2).toString()+"px"}if("tab"==e.category)switch(e.region){case"bottom":n.container.style.bottom=e.isOpen?"0":e.showTeaser?"-"+i.toString()+"px":"-"+t.toString()+"px";break;case"side":e.isOpen?(n.container.style.width="350px","right"==e.side?(n.container.style.left="inherit",n.container.style.right="0",n.content.style.left="0"):n.container.style.left="0"):(n.container.style.width="390px","right"==e.side?(n.container.style.left="inherit",n.content.style.left="40px",n.container.style.right=e.showTeaser?"-350px":"-390px"):n.container.style.left=e.showTeaser?"-350px":"-390px")}"lightbox"==e.category&&(n.container.style.left="50%",n.container.style.height=t.toString()+"px")},_t=function(t){kt.vid=s.vid,ut(),st(),N(),F(),q(),e._dcq=h,e._dcq.initialize(t)},kt={};return kt.initialize=function(e,t){return a=e||{},A(a,r),a.account?(s=B(),H({success:function(e){if(e.success){var i=I("__vid");if(i&&32==i.length&&s.vid!=i&&(s.vid=i,C(s)),s.vid)return _t(t);Y({success:function(){_t(t)}})}}}),void 0):w("No account specified","warn")},kt.identify=function(e){e||(e={});for(var t in e)e.hasOwnProperty(t)&&Q(t,e[t]);return G(e)},kt.track=function(e,t){var i;if("string"==typeof e)i=t||{},i._action=e;else{var n,i=e||{};if(i.id&&!i.action){if(n=z(i.id),!n)return w("Goal not found","warn");i._action=n.name,delete i.id}else{if(!i.action)return w("Action is required","warn");i._action=i.action,delete i.action,delete i.id}}return R(i)},kt.trackConversion=function(e,t){return kt.track(e,t)},kt.subscribe=function(e){var t=e.campaign_id||e.id,i=M(t);return i?J({accountId:i.account_id,campaignId:i.id,double_optin:e.double_optin,fields:e.fields,namespaced:!1,success:e.success,error:e.error}):w("Campaign not found","warn")},kt.unsubscribe=function(e){var t=e.campaign_id||e.id,i=M(t);return i?K({accountId:a.account,email:e.email,campaignId:t,success:e.success,error:e.error}):w("Campaign not found","warn")},kt.showForm=function(e){var t=j(e.id);return null==t?w("Form not found: "+e.id,"warn"):(t.isOpen||ht(t,!0),void 0)},kt.hideForm=function(e){var t=j(e.id);return null==t?w("Form not found: "+e.id,"warn"):(t.isOpen&&ht(t,!0),void 0)},kt.Location=g,kt.Browser=v,kt}(window,document,window.jQuery),window.dc.initialize(window._dcs,window._dcq);