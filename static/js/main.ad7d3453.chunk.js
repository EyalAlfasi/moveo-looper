(this["webpackJsonpmoveo-looper"]=this["webpackJsonpmoveo-looper"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/microphone.b2124a1d.svg"},,,,function(e,n,t){var c={"./120_future_funk_beats_25.mp3":28,"./120_stutter_breakbeats_16.mp3":29,"./Bass_Warwick_heavy_funk_groove_on_E_120_BPM.mp3":30,"./FUD_120_StompySlosh.mp3":31,"./GrooveB_120bpm_Tanggu.mp3":32,"./MazePolitics_120_Perc.mp3":33,"./PAS3GROOVE1.03B.mp3":34,"./SilentStar_120_Em_OrganSynth.mp3":35,"./electric_guitar_coutry_slide_120bpm-B.mp3":36};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id=16},,,,,,function(e,n,t){},,,,,,function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/120_future_funk_beats_25.5eb417fc.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/120_stutter_breakbeats_16.37c82282.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/Bass_Warwick_heavy_funk_groove_on_E_120_BPM.52c24c81.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/FUD_120_StompySlosh.27bdc145.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/GrooveB_120bpm_Tanggu.3e1411b4.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/MazePolitics_120_Perc.2d08c654.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/PAS3GROOVE1.03B.f77c6da4.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/SilentStar_120_Em_OrganSynth.f2d668af.mp3"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/electric_guitar_coutry_slide_120bpm-B.230fcab8.mp3"},,function(e,n,t){var c={"./bass-guitar.svg":[40,4],"./bongo.svg":[41,5],"./conga.svg":[42,6],"./dj.svg":[43,7],"./drum-set.svg":[44,8],"./electric-guitar.svg":[45,9],"./keyboard.svg":[46,10],"./microphone.svg":[12],"./music-notes.svg":[47,11],"./saxophone.svg":[48,12],"./sound-bars.svg":[49,13]};function r(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(c)},r.id=38,e.exports=r},function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(7),s=t.n(a),o=(t(22),t(6)),i=t(4),u=t(3),d=t(1),l=function(e){var n=e.onToggleLoopPause,t=e.onResetAll,c=e.onPlayAllSounds,r=e.onStartRecording,a=e.onStopRecording,s=Object(u.c)((function(e){return e.soundsReducer.isLooperRunning}));return Object(d.jsxs)("div",{className:"footer-wrapper flex column justify-center align-center",children:[Object(d.jsx)("span",{onClick:c,children:" Play all sounds"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{onClick:n,className:"icon-button fa ".concat(s?"fa-pause":"fa-play")}),Object(d.jsx)("i",{onClick:t,className:"icon-button fa fa-square"}),Object(d.jsx)("i",{onClick:r,className:"icon-button fa fa-microphone"}),Object(d.jsx)("i",{onClick:a,className:"icon-button fa fa-microphone-slash"})]})]})},f=r.a.memo(l),j=t(12),b={query:O,put:function(e,n){var t=O(e);return t.push(n),localStorage.setItem(e,JSON.stringify(t)),n}};function O(e){return JSON.parse(localStorage.getItem(e))||[]}var m=t(2),p="SET_RECORDINGS",g="SAVE_RECORDING",_={recordings:[]},v="RECORDINGS_DB";var h=function(e){var n=e.recording,r=e.idx,a=Object(c.useState)(!1),s=Object(i.a)(a,2),o=s[0],u=s[1],l=Object(c.useState)(0),f=Object(i.a)(l,2),j=f[0],b=f[1],O=Object(c.useState)(0),m=Object(i.a)(O,2),p=m[0],g=m[1],_=Object(c.useRef)(null),v=Object(c.useMemo)((function(){return n.orderOfSounds[j]}),[j,n.orderOfSounds]);return Object(c.useEffect)((function(){o?_.current=setInterval((function(){g((function(e){return(e+10)%8e3}))}),10):(clearInterval(_.current),g(0),b(0))}),[o]),Object(c.useEffect)((function(){p>=7990&&b((function(e){return e===n.orderOfSounds.length-1?0:e+1}))}),[p,n.orderOfSounds.length]),Object(c.useEffect)((function(){document.querySelectorAll(".audio_".concat(n._id)).forEach((function(e){o?(e.load(),e.loop=!0,e.play()):(e.pause(),e.currentTime=0)}))}),[o,j,n._id]),Object(d.jsxs)("div",{className:"recording-preview-wrapper flex align-center space-between",children:[Object(d.jsxs)("h3",{children:["Recording ",r]}),Object(d.jsx)("i",{onClick:function(){return u((function(e){return!e}))},className:"icon-button fa ".concat(o?"fa-pause":"fa-play")}),v.map((function(e,c){var r=t(16)("./".concat(e.fileName));return Object(d.jsx)("audio",{className:"audio_".concat(n._id),children:Object(d.jsx)("source",{src:r.default,type:"audio/mpeg"})},c)}))]})},S=function(){var e=Object(c.useState)(!1),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(u.b)(),s=Object(u.c)((function(e){return e.recordingsReducer.recordings}));return Object(c.useEffect)((function(){a(function(){var e=b.query(v);return{type:p,recordings:e}}())}),[a]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{className:"open-recordings-btn-container relative",children:[!!s.length&&Object(d.jsx)("span",{className:"badge",children:s.length}),Object(d.jsx)("button",{className:"open-recordings-btn",onClick:function(){return r(!t)},children:"Recordings"})]}),t&&Object(d.jsx)("div",{className:"dark-overlay",onClick:function(){return r(!1)}}),Object(d.jsxs)("div",{className:"recordings-wrapper",style:{transform:"translateX(".concat(t?"0":"100%")},children:[Object(d.jsx)("div",{className:"close-recordings-section",children:Object(d.jsx)("i",{className:"fa fa-arrow-left",onClick:function(){return r(!1)}})}),Object(d.jsx)("h2",{className:"recordings-list-title",children:"My recordings"}),s.length?s.map((function(e,n){return Object(d.jsx)(h,{recording:e,idx:n+1},e._id)})):Object(d.jsxs)("div",{className:"no-recordings-section",children:[Object(d.jsx)("img",{src:j.default,alt:"microphon icon"}),Object(d.jsxs)("h4",{children:["Nothing here... ",Object(d.jsx)("br",{})," Record your first session!"]})]})]})]})},y=function(){return Object(d.jsxs)("header",{className:"app-header-wrapper main-header-layout",children:[Object(d.jsxs)("div",{className:"logo flex column",children:[Object(d.jsx)("span",{children:"Moveo"}),Object(d.jsx)("span",{children:"Looper"})]}),Object(d.jsx)(S,{})]})},N=r.a.memo(y),x=t(14),P=t.n(x),E=t(17),R=[{_id:1,name:"Sound 1",fileName:"120_future_funk_beats_25.mp3",iconName:"sound-bars",isPlaying:!1},{_id:2,name:"Sound 2",fileName:"120_stutter_breakbeats_16.mp3",iconName:"music-notes",isPlaying:!1},{_id:3,name:"Sound 3",fileName:"Bass_Warwick_heavy_funk_groove_on_E_120_BPM.mp3",iconName:"bass-guitar",isPlaying:!1},{_id:4,name:"Sound 4",fileName:"electric_guitar_coutry_slide_120bpm-B.mp3",iconName:"electric-guitar",isPlaying:!1},{_id:5,name:"Sound 5",fileName:"FUD_120_StompySlosh.mp3",iconName:"drum-set",isPlaying:!1},{_id:6,name:"Sound 6",fileName:"GrooveB_120bpm_Tanggu.mp3",iconName:"bongo",isPlaying:!1},{_id:7,name:"Sound 7",fileName:"MazePolitics_120_Perc.mp3",iconName:"dj",isPlaying:!1},{_id:8,name:"Sound 8",fileName:"PAS3GROOVE1.03B.mp3",iconName:"conga",isPlaying:!1},{_id:9,name:"Sound 9",fileName:"SilentStar_120_Em_OrganSynth.mp3",iconName:"saxophone",isPlaying:!1}];var k={getSounds:function(){return R}},C=t(9),w="LOAD_SOUNDS",L="QUEUE_SOUND",I="PLAY_SOUNDS_IN_QUEUE",T="TOGGLE_LOOP_PAUSE",B="PLAY_ALL_SOUNDS",D="STOP_ALL_SOUNDS",q="RESET_LOOPER",A={isLooperRunning:!1,sounds:[],queue:{},activeSoundsCount:0};function U(){return{type:T}}var M=function(e){var n=e.sound,r=e.currentLoopTime,a=Object(u.b)(),s=Object(u.c)((function(e){return e.soundsReducer.isLooperRunning})),o=Object(u.c)((function(e){return e.soundsReducer.queue})),l=Object(u.c)((function(e){return e.soundsReducer.activeSoundsCount})),f=Object(c.useState)(""),j=Object(i.a)(f,2),b=j[0],O=j[1],m=Object(c.useRef)(null),p=Object(c.useCallback)(Object(E.a)(P.a.mark((function e(){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(38)("./".concat(n.iconName,".svg"));case 2:c=e.sent,O(c.default);case 4:case"end":return e.stop()}}),e)}))),[n.iconName]);Object(c.useEffect)((function(){var e=t(16)("./".concat(n.fileName));m.current=new Audio(e.default),m.current.load(),m.current.loop=!0,p()}),[p,n.fileName]),Object(c.useEffect)((function(){n.isPlaying&&s?m.current.play():(m.current.pause(),m.current.currentTime=0)}),[n.isPlaying,s]),Object(c.useEffect)((function(){0===r&&(m.current.currentTime=0)}),[r]);var g=o[n._id],_=Math.floor(100-100*r/8e3);return Object(d.jsxs)("div",{className:"pad-preview-wrapper ".concat(g?"pending":n.isPlaying?"active":""," ").concat(s?"":"loop-is-paused"),onClick:function(){if(!s){if(0!==l)return;a(U())}var e;a((e=n._id,{type:L,soundId:e}))},children:[g&&Object(d.jsx)("div",{className:"pending-bar",style:{height:"".concat(_,"%")}}),Object(d.jsx)("img",{src:b,alt:"Pad icon"}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})},G=function(e){var n=e.sounds,t=e.currentLoopTime;return Object(d.jsx)("div",{className:"pads-page-wrapper flex column space-between",children:Object(d.jsx)("div",{className:"pads-container",children:n&&n.map((function(e){return Object(d.jsx)(M,{sound:e,currentLoopTime:t},e._id)}))})})},F={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<e;c++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}};var J=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.soundsReducer.sounds})),t=Object(u.c)((function(e){return e.soundsReducer.isLooperRunning})),r=Object(c.useRef)(null),a=Object(c.useState)(0),s=Object(i.a)(a,2),l=s[0],j=s[1],O=Object(c.useState)(!1),m=Object(i.a)(O,2),p=m[0],_=m[1],h=Object(c.useState)([]),S=Object(i.a)(h,2),y=S[0],x=S[1];Object(c.useEffect)((function(){e(function(){var e=k.getSounds();return{type:w,sounds:e}}())}),[e]),Object(c.useEffect)((function(){return t?r.current=setInterval((function(){j((function(e){return(e+10)%8e3}))}),10):clearInterval(r.current),function(){return clearInterval(r.current)}}),[t]),Object(c.useEffect)((function(){if(l>=7990&&(e({type:I}),p)){var t=n.filter((function(e){return e.isPlaying}));x((function(e){return[].concat(Object(o.a)(e),[t])}))}}),[l,p]);return Object(d.jsxs)("div",{className:"looper-app-wrapper flex column space-between",children:[Object(d.jsx)(N,{}),Object(d.jsx)(G,{sounds:n,currentLoopTime:l}),Object(d.jsx)(f,{onToggleLoopPause:function(){clearInterval(r.current),e(U())},onResetAll:function(){e({type:q})},onPlayAllSounds:function(){t||e(U()),e({type:B})},onStartRecording:function(){return _(!0)},onStopRecording:function(){_(!1),y.length&&e(function(e){var n=b.put(v,e);return{type:g,recording:n}}({_id:F.makeId(),orderOfSounds:y})),x([])}})]})};var V=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(J,{})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))},W=t(15),Q=Object(W.a)({soundsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case w:var t=n.sounds;return Object(m.a)(Object(m.a)({},e),{},{sounds:t});case L:var c=e.sounds.find((function(e){return e._id===n.soundId}));if(c.isPlaying)return Object(m.a)(Object(m.a)({},e),{},{sounds:e.sounds.map((function(e){return e._id===n.soundId&&(e.isPlaying=!e.isPlaying),e})),activeSoundsCount:e.activeSoundsCount-1});if(e.activeSoundsCount||Object.keys(e.queue).length){if(e.queue[n.soundId]){var r=Object.assign({},e.queue);return delete r[n.soundId],Object(m.a)(Object(m.a)({},e),{},{queue:r})}return Object(m.a)(Object(m.a)({},e),{},{queue:Object(m.a)(Object(m.a)({},e.queue),{},Object(C.a)({},n.soundId,1))})}return Object(m.a)(Object(m.a)({},e),{},{sounds:e.sounds.map((function(e){return e._id===n.soundId&&(e.isPlaying=!e.isPlaying),e})),activeSoundsCount:e.activeSoundsCount+1});case I:return Object(m.a)(Object(m.a)({},e),{},{sounds:e.sounds.map((function(n){return e.queue[n._id]&&(n.isPlaying=!0),n})),queue:{},activeSoundsCount:e.activeSoundsCount+Object.keys(e.queue).length});case T:return Object(m.a)(Object(m.a)({},e),{},{isLooperRunning:!e.isLooperRunning});case B:return Object(m.a)(Object(m.a)({},e),{},{sounds:e.sounds.map((function(e){return e.isPlaying||(e.isPlaying=!0),e})),queue:{},activeSoundsCount:e.sounds.length});case D:return Object(m.a)(Object(m.a)({},e),{},{sounds:e.sounds.map((function(e){return e.isPlaying&&(e.isPlaying=!1),e}))});case q:return Object(m.a)(Object(m.a)({},e),{},{sounds:e.sounds.map((function(e){return e.isPlaying&&(e.isPlaying=!1),e})),queue:{},activeSoundsCount:0});default:return e}},recordingsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(m.a)(Object(m.a)({},e),{},{recordings:Object(o.a)(n.recordings)});case g:return Object(m.a)(Object(m.a)({},e),{},{recordings:[].concat(Object(o.a)(e.recordings),[n.recording])});default:return e}}}),Y=Object(W.b)(Q);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(u.a,{store:Y,children:Object(d.jsx)(V,{})})}),document.getElementById("root")),z()}],[[39,1,2]]]);
//# sourceMappingURL=main.ad7d3453.chunk.js.map