(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["baseArticle"],{"3e73":function(e,t,i){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var r=i("1d80"),s=i("5899"),n="["+s+"]",o=RegExp("^"+n+n+"*"),a=RegExp(n+n+"*$"),l=function(e){return function(t){var i=String(r(t));return 1&e&&(i=i.replace(o,"")),2&e&&(i=i.replace(a,"")),i}};e.exports={start:l(1),end:l(2),trim:l(3)}},"5e98":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Article",class:e.className},[i("div",{staticClass:"Article-Header",class:{"ArticlePreview-Header":e.isPreview}},[i("div",{staticClass:"Article-Time",class:{"ArticlePreview-Time":e.isPreview}},[e._v(" "+e._s(e.time)+" ")]),i("div",{staticClass:"Article-Author",class:{"ArticlePreview-Author":e.isPreview}},[e._v(" "+e._s(e.author)+" ")])]),e.isPreview?i("router-link",{staticClass:"ArticlePreview-Title",attrs:{to:{name:"article",params:{id:""+e.id}}}},[e._v(" "+e._s(e.title)+" ")]):i("div",{staticClass:"Article-Title"},[e._v(" "+e._s(e.title)+" ")]),i("div",{staticClass:"Article-Text"},[e.isPreview?[e._v(" "+e._s(e._f("formatText")(e.text))+" ")]:i("span",{domProps:{innerHTML:e._s(e.htmlText)}})],2),e.forModeration||e.myPosts?i("ModerationBlock",{attrs:{className:"ArticlePreview-Moderation",id:e.id,myPosts:e.myPosts},on:{moderated:e.onModerated}}):i("div",{staticClass:"Article-Footer"},[i("SocialBlock",{attrs:{className:"Article-Social ArticlePreview-Social",isPreview:e.isPreview,likeCount:e.likes,dislikeCount:e.dislikes,commentCount:e.commentCount,viewCount:e.viewCount},on:{like:e.onLike,dislike:e.onDislike}}),e.isPreview?e._e():i("div",{staticClass:"Article-Tags"},e._l(e.tags,(function(t,r){return i("div",{key:r,staticClass:"Tag Article-Tag",on:{click:function(i){return e.onSelectTag(t)}}},[e._v(" #"+e._s(t)+" ")])})),0)],1)],1)},s=[],n=(i("a9e3"),i("d3b7"),i("ac1f"),i("5319"),i("ed08")),o=i("bc3a"),a=i.n(o),l=i("8c89"),c=function(){return i.e("socialBlock").then(i.bind(null,"4205"))},u=function(){return i.e("moderationBlock").then(i.bind(null,"32d2"))},d={components:{SocialBlock:c,ModerationBlock:u},props:{className:{type:String,required:!1},forModeration:{type:Boolean,required:!1,default:!1},myPosts:{type:Boolean,required:!1,default:!1},isPreview:{type:Boolean,required:!1},id:{type:Number,required:!0,default:0},time:{type:String,required:!0,default:""},author:{type:String,required:!0,default:""},title:{type:String,required:!0,default:""},text:{type:String,required:!0,default:""},likeCount:{type:Number,required:!0,default:0},dislikeCount:{type:Number,required:!0,default:0},commentCount:{type:Number,required:!0,default:0},viewCount:{type:Number,required:!0,default:0},tags:{type:Array,required:!1}},data:function(){return{likes:0,liked:0,dislikes:0,disliked:0}},computed:{htmlText:function(){return Object(n["formatToHtml"])(this.text)}},filters:{formatText:function(e){var t=/&lt;.*?&gt;/gi;return e.replace(t,"")}},methods:{onModerated:function(e){this.$emit("moderated",{id:this.id,status:e})},onLike:function(){var e=this;0===this.liked&&a.a.post("".concat(l["SERVER_URL"],"/api/post/like"),{post_id:this.id}).then((function(t){Object(n["handleResponseErrors"])(t),t.data.result&&(e.likes++,e.liked++,1===e.disliked&&(e.dislikes--,e.disliked=0))})).catch((function(t){return e.errors.push(t)}))},onDislike:function(){var e=this;0===this.disliked&&a.a.post("".concat(l["SERVER_URL"],"/api/post/dislike"),{post_id:this.id}).then((function(t){Object(n["handleResponseErrors"])(t),t.data.result&&(e.dislikes++,e.disliked++,1===e.liked&&(e.likes--,e.liked=0))})).catch((function(t){return e.errors.push(t)}))},onSelectTag:function(e){this.$router.push("/tag/".concat(e))}},mounted:function(){this.likes=this.likeCount,this.dislikes=this.dislikeCount}},f=d,p=(i("8256"),i("2877")),v=Object(p["a"])(f,r,s,!1,null,null,null);t["default"]=v.exports},7156:function(e,t,i){var r=i("861d"),s=i("d2bb");e.exports=function(e,t,i){var n,o;return s&&"function"==typeof(n=t.constructor)&&n!==i&&r(o=n.prototype)&&o!==i.prototype&&s(e,o),e}},8256:function(e,t,i){"use strict";var r=i("3e73"),s=i.n(r);s.a},a9e3:function(e,t,i){"use strict";var r=i("83ab"),s=i("da84"),n=i("94ca"),o=i("6eeb"),a=i("5135"),l=i("c6b6"),c=i("7156"),u=i("c04e"),d=i("d039"),f=i("7c73"),p=i("241c").f,v=i("06cf").f,k=i("9bf2").f,h=i("58a8").trim,m="Number",A=s[m],_=A.prototype,N=l(f(_))==m,b=function(e){var t,i,r,s,n,o,a,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=h(c),t=c.charCodeAt(0),43===t||45===t){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+c}for(n=c.slice(2),o=n.length,a=0;a<o;a++)if(l=n.charCodeAt(a),l<48||l>s)return NaN;return parseInt(n,r)}return+c};if(n(m,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var g,w=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof w&&(N?d((function(){_.valueOf.call(i)})):l(i)!=m)?c(new A(b(t)),i,w):b(t)},y=r?p(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)a(A,g=y[C])&&!a(w,g)&&k(w,g,v(A,g));w.prototype=_,_.constructor=w,o(s,m,w)}}}]);
//# sourceMappingURL=baseArticle.82b078ce.js.map