(self["webpackChunkvue_responsive_video_background_player"]=self["webpackChunkvue_responsive_video_background_player"]||[]).push([[286],{52286:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Home"},[n("HomePage",{tag:"component"})],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"HomePage"},[n("div",{staticClass:"videobgoutbox"},[n("video-background",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.videoSrc1}},[n("h1",{staticStyle:{color:"white"}},[e._v("Hello welcome!")])])],1),n("div",{staticClass:"ContentOutbox"},[n("div",{staticClass:"fontColorText iconfont icon-kuaijin fontfamily_PangMenZhengDaoBiaoTiTi"},[e._v(" HomePage"+e._s(e.GetPlanType)+"123456789 ")]),n("div",{staticClass:"themeListSelectbox"},e._l(e.themeList,(function(t,i){return n("el-button",{key:i,staticClass:"Itembox",attrs:{type:"primary"},on:{click:function(n){return e.setTheme(t.Key)}}},[e._v(e._s(t.Name))])})),1)])])},a=[],s=n(93019),l=(n(91742),n(34665)),c=n(88694),u=n(40553),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gifComponents"},[n("div",{staticClass:"imgbox"},[n("img",{attrs:{id:"example1",src:e.imgUrl,"rel:animated_src":e.imgUrlGIF,"rel:auto_play":"0",width:"467",height:"375"}})]),n("div",{staticClass:"Buttonbox"},e._l(e.tabrooms,(function(t,i){return n("div",{key:i,staticClass:"itembox",on:{click:function(n){return e.tabClickfun(t,i)}}},[e._v(" "+e._s(t)+" ")])})),0)])},h=[],f=n(67906),p=n(16198),g=n(30105),v=n.n(g),m={name:"gifComponents",data:function(){return{tabrooms:["Pause","Play","Restart","Step forward","Step back"],imgUrl:n(37090),imgUrlGIF:n(95265),sup1:null}},mounted:function(){var e=this;return(0,p.Z)((0,f.Z)().mark((function t(){return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.$nextTick((function(){e.InitSuperGif()}))}catch(n){}case 1:case"end":return t.stop()}}),t)})))()},methods:{InitSuperGif:function(){var e=new(v())({gif:document.getElementById("example1"),progressbar_foreground_color:"#9254de",progressbar_background_color:"#ebeef5",progressbar_height:10});e.load(),this.sup1=e},tabClickfun:function(e,t){"Pause"===e?this.sup1.pause():"Play"===e?this.sup1.play():"Restart"===e?this.sup1.move_to(0):"Step forward"===e?this.sup1.move_relative(1):"Step back"===e&&this.sup1.move_relative(-1)}}},_=m,y=n(43736),w=(0,y.Z)(_,d,h,!1,null,"1cb2709e",null),b=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"VideoBg"},[n("video",{ref:"video",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},e._l(e.sources,(function(t){return n("source",{attrs:{src:t,type:e.getMediaType(t)}})})),0),n("div",{staticClass:"VideoBg__content"},[e._t("default")],2)])},C=[],P=(n(74916),n(23123),{props:{sources:{type:Array,required:!0},img:{type:String}},data:function(){return{videoRatio:null}},mounted:function(){var e=this;this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=function(){e.$refs.video&&(e.videoRatio=e.$refs.video.videoWidth/e.$refs.video.videoHeight,e.setVideoSize(),e.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$refs.video.canPlayType},setImageUrl:function(){this.img&&(this.$el.style.backgroundImage="url(".concat(this.img,")"))},setContainerHeight:function(){this.$el.style.height="".concat(window.innerHeight,"px")},setVideoSize:function(){var e,t,n=this.$el.offsetWidth/this.$el.offsetHeight;n>this.videoRatio?e=this.$el.offsetWidth:t=this.$el.offsetHeight,this.$refs.video.style.width=e?"".concat(e,"px"):"auto",this.$refs.video.style.height=t?"".concat(t,"px"):"auto"},getMediaType:function(e){return"video/"+e.split(".").pop()}}}),k=P,T=(0,y.Z)(k,x,C,!1,null,null,null),S=T.exports,B={name:"HomePage",components:{gifComponents:b,VideoBg:S},computed:(0,s.Z)({},(0,l.Se)({GetPlanType:"HomePageModule/GetPlanType"})),data:function(){return{themeList:u.Z,setTheme:u.D,videoSrc1:n(37977),topImg:n(14639),imgUrl:n(37090),imgUrlGIF:n(95265)}},mounted:function(){},methods:{GetData:function(){this.$axios.post(c.Z.HomePageUrlPath+"GetPredictData").then((function(e){}))}}},E=B,I=(0,y.Z)(E,o,a,!1,null,"5f169ae8",null),U=I.exports,H={name:"Home",components:{HomePage:U}},$=H,A=(0,y.Z)($,i,r,!1,null,"32278232",null),z=A.exports},30105:function(e,t,n){var i,r,o;n(17964)["default"];n(41539),n(21703),n(82472),n(48675),n(92990),n(18927),n(33105),n(35035),n(74345),n(7174),n(32846),n(44731),n(77209),n(96319),n(58867),n(37789),n(33739),n(29368),n(14483),n(12056),n(3462),n(30678),n(27462),n(33824),n(55021),n(12974),n(15016),n(37380),n(1118),n(92222),n(40561),n(47042),n(39714),n(54747),n(69600),n(21249),function(n,a){r=[],i=a,o="function"===typeof i?i.apply(t,r):i,void 0===o||(e.exports=o)}(0,(function(){var e=function(e){return e.reduce((function(e,t){return 2*e+t}),0)},t=function(e){for(var t=[],n=7;n>=0;n--)t.push(!!(e&1<<n));return t},n=function(e){this.data=e,this.len=this.data.length,this.pos=0,this.readByte=function(){if(this.pos>=this.data.length)throw new Error("Attempted to read past end of stream.");return e instanceof Uint8Array?e[this.pos++]:255&e.charCodeAt(this.pos++)},this.readBytes=function(e){for(var t=[],n=0;n<e;n++)t.push(this.readByte());return t},this.read=function(e){for(var t="",n=0;n<e;n++)t+=String.fromCharCode(this.readByte());return t},this.readUnsigned=function(){var e=this.readBytes(2);return(e[1]<<8)+e[0]}},i=function(e,t){var n,i,r=0,o=function(e){for(var n=0,i=0;i<e;i++)t.charCodeAt(r>>3)&1<<(7&r)&&(n|=1<<i),r++;return n},a=[],s=1<<e,l=s+1,c=e+1,u=[],d=function(){u=[],c=e+1;for(var t=0;t<s;t++)u[t]=[t];u[s]=[],u[l]=null};while(1)if(i=n,n=o(c),n!==s){if(n===l)break;if(n<u.length)i!==s&&u.push(u[i].concat(u[n][0]));else{if(n!==u.length)throw new Error("Invalid LZW code.");u.push(u[i].concat(u[i][0]))}a.push.apply(a,u[n]),u.length===1<<c&&c<12&&c++}else d();return a},r=function(n,r){r||(r={});var o=function(e){for(var t=[],i=0;i<e;i++)t.push(n.readBytes(3));return t},a=function(){var e,t;t="";do{e=n.readByte(),t+=n.read(e)}while(0!==e);return t},s=function(){var i={};if(i.sig=n.read(3),i.ver=n.read(3),"GIF"!==i.sig)throw new Error("Not a GIF file.");i.width=n.readUnsigned(),i.height=n.readUnsigned();var a=t(n.readByte());i.gctFlag=a.shift(),i.colorRes=e(a.splice(0,3)),i.sorted=a.shift(),i.gctSize=e(a.splice(0,3)),i.bgColor=n.readByte(),i.pixelAspectRatio=n.readByte(),i.gctFlag&&(i.gct=o(1<<i.gctSize+1)),r.hdr&&r.hdr(i)},l=function(i){var o=function(i){n.readByte();var o=t(n.readByte());i.reserved=o.splice(0,3),i.disposalMethod=e(o.splice(0,3)),i.userInput=o.shift(),i.transparencyGiven=o.shift(),i.delayTime=n.readUnsigned(),i.transparencyIndex=n.readByte(),i.terminator=n.readByte(),r.gce&&r.gce(i)},s=function(e){e.comment=a(),r.com&&r.com(e)},l=function(e){n.readByte();e.ptHeader=n.readBytes(12),e.ptData=a(),r.pte&&r.pte(e)},c=function(e){var t=function(e){n.readByte();e.unknown=n.readByte(),e.iterations=n.readUnsigned(),e.terminator=n.readByte(),r.app&&r.app.NETSCAPE&&r.app.NETSCAPE(e)},i=function(e){e.appData=a(),r.app&&r.app[e.identifier]&&r.app[e.identifier](e)};n.readByte();switch(e.identifier=n.read(8),e.authCode=n.read(3),e.identifier){case"NETSCAPE":t(e);break;default:i(e);break}},u=function(e){e.data=a(),r.unknown&&r.unknown(e)};switch(i.label=n.readByte(),i.label){case 249:i.extType="gce",o(i);break;case 254:i.extType="com",s(i);break;case 1:i.extType="pte",l(i);break;case 255:i.extType="app",c(i);break;default:i.extType="unknown",u(i);break}},c=function(s){var l=function(e,t){for(var n=new Array(e.length),i=e.length/t,r=function(i,r){var o=e.slice(r*t,(r+1)*t);n.splice.apply(n,[i*t,t].concat(o))},o=[0,4,2,1],a=[8,8,4,2],s=0,l=0;l<4;l++)for(var c=o[l];c<i;c+=a[l])r(c,s),s++;return n};s.leftPos=n.readUnsigned(),s.topPos=n.readUnsigned(),s.width=n.readUnsigned(),s.height=n.readUnsigned();var c=t(n.readByte());s.lctFlag=c.shift(),s.interlaced=c.shift(),s.sorted=c.shift(),s.reserved=c.splice(0,2),s.lctSize=e(c.splice(0,3)),s.lctFlag&&(s.lct=o(1<<s.lctSize+1)),s.lzwMinCodeSize=n.readByte();var u=a();s.pixels=i(s.lzwMinCodeSize,u),s.interlaced&&(s.pixels=l(s.pixels,s.width)),r.img&&r.img(s)},u=function e(){var t={};switch(t.sentinel=n.readByte(),String.fromCharCode(t.sentinel)){case"!":t.type="ext",l(t);break;case",":t.type="img",c(t);break;case";":t.type="eof",r.eof&&r.eof(t);break;default:throw new Error("Unknown block: 0x"+t.sentinel.toString(16))}"eof"!==t.type&&setTimeout(e,0)},d=function(){s(),setTimeout(u,0)};d()},o=function(e){var t,i,o={vp_l:0,vp_t:0,vp_w:null,vp_h:null,c_w:null,c_h:null};for(var a in e)o[a]=e[a];o.vp_w&&o.vp_h&&(o.is_vp=!0);var s=null,l=!1,c=null,u=null,d=null,h=null,f=null,p=null,g=null,v=!0,m=!0,_=!1,y=[],w=[],b=o.gif;"undefined"==typeof o.auto_play&&(o.auto_play=!b.getAttribute("rel:auto_play")||"1"==b.getAttribute("rel:auto_play"));var x,C,P,k,T=o.hasOwnProperty("on_end")?o.on_end:null,S=o.hasOwnProperty("loop_delay")?o.loop_delay:0,B=o.hasOwnProperty("loop_mode")?o.loop_mode:"auto",E=!o.hasOwnProperty("draw_while_loading")||o.draw_while_loading,I=!!E&&(!o.hasOwnProperty("show_progress_bar")||o.show_progress_bar),U=o.hasOwnProperty("progressbar_height")?o.progressbar_height:25,H=o.hasOwnProperty("progressbar_background_color")?o.progressbar_background_color:"rgba(255,255,255,0.4)",$=o.hasOwnProperty("progressbar_foreground_color")?o.progressbar_foreground_color:"rgba(255,0,22,.8)",A=function(){c=null,u=null,f=d,d=null,p=null},z=function(){try{r(t,q)}catch(e){Z("parse")}},G=function(e,t){x.width=e*X(),x.height=t*X(),P.style.minWidth=e*X()+"px",k.width=e,k.height=t,k.style.width=e+"px",k.style.height=t+"px",k.getContext("2d").setTransform(1,0,0,1,0,0)},R=function(e,t){w[e]?("undefined"!==typeof t.x&&(w[e].x=t.x),"undefined"!==typeof t.y&&(w[e].y=t.y)):w[e]=t},D=function(e,t,n){if(n&&I){var i,r,a,s,l=U;if(o.is_vp)_?(a=(o.vp_t+o.vp_h-l)/X(),l/=X(),i=o.vp_l/X(),r=i+e/t*(o.vp_w/X()),s=x.width/X()):(a=o.vp_t+o.vp_h-l,i=o.vp_l,r=i+e/t*o.vp_w,s=x.width);else a=(x.height-l)/(_?X():1),r=e/t*x.width/(_?X():1),s=x.width/(_?X():1),l/=_?X():1;C.fillStyle=H,C.fillRect(r,a,s-r,l),C.fillStyle=$,C.fillRect(0,a,r,l)}},Z=function(e){var t=function(){C.fillStyle="black",C.fillRect(0,0,o.c_w?o.c_w:i.width,o.c_h?o.c_h:i.height),C.strokeStyle="red",C.lineWidth=3,C.moveTo(0,0),C.lineTo(o.c_w?o.c_w:i.width,o.c_h?o.c_h:i.height),C.moveTo(0,o.c_h?o.c_h:i.height),C.lineTo(o.c_w?o.c_w:i.width,0),C.stroke()};s=e,i={width:b.width,height:b.height},y=[],t()},M=function(e){i=e,G(i.width,i.height)},O=function(e){F(),A(),c=e.transparencyGiven?e.transparencyIndex:null,u=e.delayTime,d=e.disposalMethod},F=function(){p&&(y.push({data:p.getImageData(0,0,i.width,i.height),delay:u}),w.push({x:0,y:0}))},N=function(e){p||(p=k.getContext("2d"));var t=y.length,n=e.lctFlag?e.lct:i.gct;t>0&&(3===f?null!==h?p.putImageData(y[h].data,0,0):p.clearRect(g.leftPos,g.topPos,g.width,g.height):h=t-1,2===f&&p.clearRect(g.leftPos,g.topPos,g.width,g.height));var r=p.getImageData(e.leftPos,e.topPos,e.width,e.height);e.pixels.forEach((function(e,t){e!==c&&(r.data[4*t+0]=n[e][0],r.data[4*t+1]=n[e][1],r.data[4*t+2]=n[e][2],r.data[4*t+3]=255)})),p.putImageData(r,e.leftPos,e.topPos),_||(C.scale(X(),X()),_=!0),E&&(C.drawImage(k,0,0),E=o.auto_play),g=e},L=function(){var e=-1,t=0,n=function(){var t=m?1:-1;return(e+t+y.length)%y.length},i=function(t){e+=t,a()},r=function(){var r=!1,o=function(){null!==T&&T(b),t++,!1!==B||t<0?a():(r=!1,v=!1)},a=function t(){if(r=v,r){i(1);var a=10*y[e].delay;a||(a=100);var s=n();0===s?(a+=S,setTimeout(o,a)):setTimeout(t,a)}};return function(){r||setTimeout(a,0)}}(),a=function(){var t;e=parseInt(e,10),e>y.length-1&&(e=0),e<0&&(e=0),t=w[e],k.getContext("2d").putImageData(y[e].data,t.x,t.y),C.globalCompositeOperation="copy",C.drawImage(k,0,0)},l=function(){v=!0,r()},c=function(){v=!1};return{init:function(){s||(o.c_w&&o.c_h||C.scale(X(),X()),o.auto_play?r():(e=0,a()))},step:r,play:l,pause:c,playing:v,move_relative:i,current_frame:function(){return e},length:function(){return y.length},move_to:function(t){e=t,a()}}}(),V=function(e){D(t.pos,t.data.length,e)},W=function(){},j=function(e,t){return function(n){e(n),V(t)}},q={hdr:j(M),gce:j(O),com:j(W),app:{NETSCAPE:j(W)},img:j(N,!0),eof:function(e){F(),V(!1),o.c_w&&o.c_h||(x.width=i.width*X(),x.height=i.height*X()),L.init(),l=!1,Q&&Q(b)}},K=function(){var e=b.parentNode,t=document.createElement("div");x=document.createElement("canvas"),C=x.getContext("2d"),P=document.createElement("div"),k=document.createElement("canvas"),t.width=x.width=b.width,t.height=x.height=b.height,P.style.minWidth=b.width+"px",t.className="jsgif",P.className="jsgif_toolbar",t.appendChild(x),t.appendChild(P),e.insertBefore(t,b),e.removeChild(b),o.c_w&&o.c_h&&G(o.c_w,o.c_h),J=!0},X=function(){var e;return e=o.max_width&&i&&i.width>o.max_width?o.max_width/i.width:1,e},J=!1,Q=!1,Y=function(e){return!l&&(Q=e||!1,l=!0,y=[],A(),h=null,f=null,p=null,g=null,!0)};return{play:L.play,pause:L.pause,move_relative:L.move_relative,move_to:L.move_to,get_playing:function(){return v},get_canvas:function(){return x},get_canvas_scale:function(){return X()},get_loading:function(){return l},get_auto_play:function(){return o.auto_play},get_length:function(){return L.length()},get_current_frame:function(){return L.current_frame()},load_url:function(e,i){if(Y(i)){var r=new XMLHttpRequest;r.open("GET",e,!0),"overrideMimeType"in r?r.overrideMimeType("text/plain; charset=x-user-defined"):"responseType"in r?r.responseType="arraybuffer":r.setRequestHeader("Accept-Charset","x-user-defined"),r.onloadstart=function(){J||K()},r.onload=function(e){200!=this.status&&Z("xhr - response"),"response"in this||(this.response=new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));var i=this.response;i.toString().indexOf("ArrayBuffer")>0&&(i=new Uint8Array(i)),t=new n(i),setTimeout(z,0)},r.onprogress=function(e){e.lengthComputable&&D(e.loaded,e.total,!0)},r.onerror=function(){Z("xhr")},r.send()}},load:function(e){this.load_url(b.getAttribute("rel:animated_src")||b.src,e)},load_raw:function(e,i){Y(i)&&(J||K(),t=new n(e),setTimeout(z,0))},set_frame_offset:R}};return o}))},91742:function(e,t,n){"use strict";var i=n(28935);new i["default"]},95265:function(e,t,n){"use strict";e.exports=n.p+"static/img/fish.575c62c5.gif"},37090:function(e,t,n){"use strict";e.exports=n.p+"static/img/fish.83fb6da9.png"},37977:function(e,t,n){"use strict";e.exports=n.p+"static/media/bg.f39faafb.mp4"},14639:function(e,t,n){"use strict";e.exports=n.p+"static/img/bgpng.0a7aa569.png"}}]);