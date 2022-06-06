(function(){"use strict";var e={6623:function(e,a,s){var t=s(9242),l=s(3396);function i(e,a,s,t,i,n){const c=(0,l.up)("Virtual_keyboard");return(0,l.wg)(),(0,l.j4)(c,{title:"Virtual keyboard",engKeys:i.engKeys,ruKeys:i.ruKeys},null,8,["engKeys","ruKeys"])}const n=[{id:1,name:"Backquote",value:"`",class:"key"},{id:2,name:"Digit1",value:"1",class:"key"},{id:3,name:"Digit2",value:"2",class:"key"},{id:4,name:"Digit3",value:"3",class:"key"},{id:5,name:"Digit4",value:"4",class:"key"},{id:6,name:"Digit5",value:"5",class:"key"},{id:7,name:"Digit6",value:"6",class:"key"},{id:8,name:"Digit7",value:"7",class:"key"},{id:9,name:"Digit8",value:"8",class:"key"},{id:10,name:"Digit9",value:"9",class:"key"},{id:11,name:"Digit0",value:"0",class:"key"},{id:12,name:"Minus",value:"-",class:"key"},{id:13,name:"Equal",value:"=",class:"key"},{id:65,name:"Backspace",value:"Backspace",class:"key double"},{id:14,name:"Tab",value:"Tab",class:"key double"},{id:15,name:"KeyQ",value:"Q",class:"key"},{id:16,name:"KeyW",value:"W",class:"key"},{id:17,name:"KeyE",value:"E",class:"key"},{id:18,name:"KeyR",value:"R",class:"key"},{id:19,name:"KeyT",value:"T",class:"key"},{id:20,name:"KeyY",value:"Y",class:"key"},{id:21,name:"KeyU",value:"U",class:"key"},{id:22,name:"KeyI",value:"I",class:"key"},{id:23,name:"KeyO",value:"O",class:"key"},{id:24,name:"KeyP",value:"P",class:"key"},{id:25,name:"BracketLeft",value:"[",class:"key"},{id:26,name:"BracketRight",value:"]",class:"key"},{id:27,name:"Delete",value:"Delete",class:"key"},{id:28,name:"CapsLock",value:"CapsLock",class:"key double"},{id:29,name:"KeyA",value:"A",class:"key"},{id:30,name:"KeyS",value:"S",class:"key"},{id:31,name:"KeyD",value:"D",class:"key"},{id:32,name:"KeyF",value:"F",class:"key"},{id:33,name:"KeyG",value:"G",class:"key"},{id:34,name:"KeyH",value:"H",class:"key"},{id:35,name:"KeyJ",value:"J",class:"key"},{id:36,name:"KeyK",value:"K",class:"key"},{id:37,name:"KeyL",value:"L",class:"key"},{id:38,name:"Semicolon",value:";",class:"key"},{id:40,name:"Quote",value:"'",class:"key"},{id:41,name:"Backslash",value:"\\",class:"key"},{id:42,name:"Enter",value:"Enter",class:"key double"},{id:43,name:"ShiftLeft",value:"Shift",class:"key double"},{id:44,name:"KeyZ",value:"Z",class:"key"},{id:45,name:"KeyX",value:"X",class:"key"},{id:56,name:"KeyC",value:"C",class:"key"},{id:47,name:"KeyV",value:"V",class:"key"},{id:48,name:"KeyB",value:"B",class:"key"},{id:49,name:"KeyN",value:"N",class:"key"},{id:50,name:"KeyM",value:"M",class:"key"},{id:51,name:"Comma",value:",",class:"key"},{id:52,name:"Period",value:".",class:"key"},{id:53,name:"Slash",value:"/",class:"key"},{id:54,name:"ArrowUp",value:"Up",class:"key"},{id:55,name:"ShiftRight",value:"Shift",class:"key double"},{id:56,name:"ControlLeft",value:"Ctrl",class:"key double"},{id:57,name:"MetaLeft",value:"Win",class:"key"},{id:58,name:"AltLeft",value:"Alt",class:"key"},{id:59,name:"Space",value:"Space",class:"key space-button"},{id:60,name:"AltRight",value:"Alt",class:"key"},{id:61,name:"ControlRight",value:"Ctrl",class:"key double"},{id:62,name:"ArrowLeft",value:"Left",class:"key"},{id:63,name:"ArrowDown",value:"Down",class:"key"},{id:64,name:"ArrowRight",value:"Right",class:"key"}],c=[{id:1,name:"Backquote",value:"`",class:"key"},{id:2,name:"Digit1",value:"1",class:"key"},{id:3,name:"Digit2",value:"2",class:"key"},{id:4,name:"Digit3",value:"3",class:"key"},{id:5,name:"Digit4",value:"4",class:"key"},{id:6,name:"Digit5",value:"5",class:"key"},{id:7,name:"Digit6",value:"6",class:"key"},{id:8,name:"Digit7",value:"7",class:"key"},{id:9,name:"Digit8",value:"8",class:"key"},{id:10,name:"Digit9",value:"9",class:"key"},{id:11,name:"Digit0",value:"0",class:"key"},{id:12,name:"Minus",value:"-",class:"key"},{id:13,name:"Equal",value:"=",class:"key"},{id:65,name:"Backspace",value:"Backspace",class:"key double"},{id:14,name:"Tab",value:"Tab",class:"key double"},{id:15,name:"KeyQ",value:"Й",class:"key"},{id:16,name:"KeyW",value:"Ц",class:"key"},{id:17,name:"KeyE",value:"У",class:"key"},{id:18,name:"KeyR",value:"К",class:"key"},{id:19,name:"KeyT",value:"Е",class:"key"},{id:20,name:"KeyY",value:"Н",class:"key"},{id:21,name:"KeyU",value:"Г",class:"key"},{id:22,name:"KeyI",value:"Ш",class:"key"},{id:23,name:"KeyO",value:"Щ",class:"key"},{id:24,name:"KeyP",value:"З",class:"key"},{id:25,name:"BracketLeft",value:"Х",class:"key"},{id:26,name:"BracketRight",value:"Ъ",class:"key"},{id:27,name:"Delete",value:"Delete",class:"key"},{id:28,name:"CapsLock",value:"CapsLock",class:"key double"},{id:29,name:"KeyA",value:"Ф",class:"key"},{id:30,name:"KeyS",value:"Ы",class:"key"},{id:31,name:"KeyD",value:"В",class:"key"},{id:32,name:"KeyF",value:"А",class:"key"},{id:33,name:"KeyG",value:"П",class:"key"},{id:34,name:"KeyH",value:"Р",class:"key"},{id:35,name:"KeyJ",value:"О",class:"key"},{id:36,name:"KeyK",value:"Л",class:"key"},{id:37,name:"KeyL",value:"Д",class:"key"},{id:38,name:"Semicolon",value:"Ж",class:"key"},{id:40,name:"Quote",value:"Э",class:"key"},{id:41,name:"Backslash",value:"\\",class:"key"},{id:42,name:"Enter",value:"Enter",class:"key double"},{id:43,name:"ShiftLeft",value:"Shift",class:"key double"},{id:44,name:"KeyZ",value:"Я",class:"key"},{id:45,name:"KeyX",value:"Ч",class:"key"},{id:56,name:"KeyC",value:"С",class:"key"},{id:47,name:"KeyV",value:"М",class:"key"},{id:48,name:"KeyB",value:"И",class:"key"},{id:49,name:"KeyN",value:"Т",class:"key"},{id:50,name:"KeyM",value:"Ь",class:"key"},{id:51,name:"Comma",value:"Б",class:"key"},{id:52,name:"Period",value:"Ю",class:"key"},{id:53,name:"Slash",value:".",class:"key"},{id:54,name:"ArrowUp",value:"Up",class:"key"},{id:55,name:"ShiftRight",value:"Shift",class:"key double"},{id:56,name:"ControlLeft",value:"Ctrl",class:"key double"},{id:57,name:"MetaLeft",value:"Win",class:"key"},{id:58,name:"AltLeft",value:"Alt",class:"key"},{id:59,name:"Space",value:"Space",class:"key space-button"},{id:60,name:"AltRight",value:"Alt",class:"key"},{id:61,name:"ControlRight",value:"Ctrl",class:"key double"},{id:62,name:"ArrowLeft",value:"Left",class:"key"},{id:63,name:"ArrowDown",value:"Down",class:"key"},{id:64,name:"ArrowRight",value:"Right",class:"key"}];var u=s(7139);const r=e=>((0,l.dD)("data-v-141dabd7"),e=e(),(0,l.Cn)(),e),d=r((()=>(0,l._)("h6",null,"Нажмите Alt+Shift для смены языка",-1))),y={class:"keyboard"},o=["id","data-key","onMousedown","onMouseup"];function k(e,a,s,t,i,n){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("h1",null,(0,u.zw)(s.title),1),d,((0,l.wg)(),(0,l.iD)("textarea",{key:i.textarea,class:"textarea"},(0,u.zw)(i.textarea),1)),(0,l._)("ul",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.currentKeys,(e=>((0,l.wg)(),(0,l.iD)("li",{id:e.id,key:e.id,"data-key":e.key,class:(0,u.C_)(e.class),onMousedown:()=>n.mouseDownHandler(e),onMouseup:()=>n.mouseUpHandler(e)},(0,u.zw)(e.value),43,o)))),128))])],64)}s(6699);var m={name:"Virtual_keyboard",data(){return{textarea:"",currentKeys:this.engKeys}},created(){document.addEventListener("keydown",(e=>this.keyDownHandler(e))),document.addEventListener("keyup",(()=>this.keyUpHandler()))},props:{engKeys:Object,ruKeys:Object,title:String},methods:{mouseDownHandler(e){const a=document.getElementById(e.id);switch(a.classList.add("press"),e.name){case"Space":this.textarea+=" ";break;case"Backspace":case"Delete":this.textarea=this.textarea.slice(0,-1);break;case"Enter":this.textarea+="\n";break;case"Tab":this.textarea+="\t";break;case"ControlRight":case"ControlLeft":case"AltRight":case"AltLeft":case"ShiftLeft":case"ShiftRight":this.textarea=this.textarea;break;case"CapsLock":this.$store.commit("changeCapsLock");break;default:this.$store.state.CapsLock?this.textarea+=e.value.toUpperCase():this.textarea+=e.value.toLowerCase();break}return this.textarea},mouseUpHandler(e){const a=document.getElementById(e.id);a.classList.remove("press")},keyDownHandler(e){if(this.$store.commit("addPressedButtons",e.code),2===this.$store.state.pressedButtons.length)if(e.altKey&&e.shiftKey){if(!this.$store.state.pressedButtons.includes("ShiftLeft")||!this.$store.state.pressedButtons.includes("AltLeft"))return;console.log("CHANGE LANG"),this.$store.commit("changeLang"),!0===this.$store.state.ru?this.currentKeys=this.ruKeys:this.currentKeys=this.engKeys}else e.shiftKey&&"ShiftLeft"!==this.$store.state.pressedButtons[1]&&this.currentKeys.map((e=>{if(e.name===this.$store.state.pressedButtons[1]){let a=e.value;return this.textarea+=a.toUpperCase()}}));else if(1===this.$store.state.pressedButtons.length)switch(e.code){case"Space":e.preventDefault(),this.textarea+=" ";break;case"Backspace":case"Delete":this.textarea=this.textarea.slice(0,-1);break;case"Enter":this.textarea+="\n";break;case"Tab":this.textarea+="\t";break;case"ControlRight":case"ControlLeft":case"AltRight":case"AltLeft":case"ShiftRight":case"ShiftLeft":this.textarea=this.textarea;break;case"CapsLock":this.$store.commit("changeCapsLock");break;default:return this.$store.state.CapsLock?this.textarea+=e.key.toUpperCase():this.textarea+=e.key.toLowerCase()}return this.textarea},keyUpHandler(){this.$store.commit("cleanPressedButtons")}}},v=s(89);const h=(0,v.Z)(m,[["render",k],["__scopeId","data-v-141dabd7"]]);var f=h,p={name:"App",components:{Virtual_keyboard:f},data(){return{engKeys:{},ruKeys:{}}},created(){this.engKeys=n,this.ruKeys=c},methods:{}};const K=(0,v.Z)(p,[["render",i]]);var g=K,b=s(65),L=(0,b.MT)({state:{CapsLock:!1,ru:!1,pressedButtons:[]},getters:{},mutations:{changeLang(e){e.ru=!e.ru},changeCapsLock(e){e.CapsLock=!e.CapsLock},addPressedButtons(e,a){e.pressedButtons.push(a)},cleanPressedButtons(e){e.pressedButtons=[]}},actions:{},modules:{}});(0,t.ri)(g).use(L).mount("#app")}},a={};function s(t){var l=a[t];if(void 0!==l)return l.exports;var i=a[t]={exports:{}};return e[t](i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(a,t,l,i){if(!t){var n=1/0;for(d=0;d<e.length;d++){t=e[d][0],l=e[d][1],i=e[d][2];for(var c=!0,u=0;u<t.length;u++)(!1&i||n>=i)&&Object.keys(s.O).every((function(e){return s.O[e](t[u])}))?t.splice(u--,1):(c=!1,i<n&&(n=i));if(c){e.splice(d--,1);var r=l();void 0!==r&&(a=r)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,l,i]}}(),function(){s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,{a:a}),a}}(),function(){s.d=function(e,a){for(var t in a)s.o(a,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};s.O.j=function(a){return 0===e[a]};var a=function(a,t){var l,i,n=t[0],c=t[1],u=t[2],r=0;if(n.some((function(a){return 0!==e[a]}))){for(l in c)s.o(c,l)&&(s.m[l]=c[l]);if(u)var d=u(s)}for(a&&a(t);r<n.length;r++)i=n[r],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},t=self["webpackChunkvue_keyboard"]=self["webpackChunkvue_keyboard"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(6623)}));t=s.O(t)})();
//# sourceMappingURL=app.5d0e190b.js.map