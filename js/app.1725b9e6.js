(function(t){function e(e){for(var a,o,r=e[0],s=e[1],l=e[2],b=0,m=[];b<r.length;b++)o=r[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},c={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/game-17/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05cb":function(t,e,n){"use strict";n("740a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(t,e,n,c,i,o){var r=Object(a["k"])("Home"),s=Object(a["k"])("PickAnimal"),l=Object(a["k"])("GameContainer");return Object(a["g"])(),Object(a["c"])("div",null,[Object(a["f"])(r,{onStartBtn:o.scrollPage},null,8,["onStartBtn"]),Object(a["f"])(s,{scrollPage:o.scrollPage,onChoosedanimal:o.pickedAnimal},null,8,["scrollPage","onChoosedanimal"]),Object(a["f"])(l,{animal:i.choosedAnimal,hasClick:(new Date).getTime()},null,8,["animal","hasClick"])])}var i=Object(a["m"])("data-v-1fe9a9a5");Object(a["i"])("data-v-1fe9a9a5");var o={class:"home"},r={class:"title animate__animated",ref:"title"},s=Object(a["f"])("span",null,"Catch",-1),l=Object(a["e"])(" the cute animal ");Object(a["h"])();var u=i((function(t,e,n,c,i,u){return Object(a["g"])(),Object(a["c"])("div",o,[Object(a["f"])("h1",r,[s,l],512),Object(a["f"])("button",{class:"start_btn",onClick:e[1]||(e[1]=function(e){return t.$emit("startBtn")})},"Play Game")])})),b={emits:["startBtn"],mounted:function(){var t=this;setTimeout((function(){t.$refs.title.classList.add("animate__backInDown"),t.$refs.title.style.display="block"}),1e3)}};n("05cb");b.render=u,b.__scopeId="data-v-1fe9a9a5";var m=b,d=(n("b0c0"),Object(a["m"])("data-v-3eb561d0"));Object(a["i"])("data-v-3eb561d0");var f={class:"pick_animal"},p=Object(a["f"])("h1",null,[Object(a["e"])("What is your "),Object(a["f"])("span",null,"favourite"),Object(a["e"])(" animal ?")],-1),h={class:"animal_container"};Object(a["h"])();var j=d((function(t,e,n,c,i,o){return Object(a["g"])(),Object(a["c"])("div",f,[p,Object(a["f"])("ul",h,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(i.animals,(function(t){return Object(a["g"])(),Object(a["c"])("li",{key:t.name},[Object(a["f"])("button",{class:"choose_btn",onClick:function(e){return o.startedGame(t)}},[Object(a["f"])("h3",null,Object(a["l"])(t.name),1),Object(a["f"])("img",{src:t.src,alt:t.name},null,8,["src","alt"])],8,["onClick"])])})),128))])])})),O={data:function(){return{animals:[{name:"rabbit",src:"http://pngimg.com/uploads/rabbit/rabbit_PNG96534.png"},{name:"squirrel",src:"http://pngimg.com/uploads/squirrel/squirrel_PNG96422.png"},{name:"panda",src:"http://pngimg.com/uploads/panda/panda_PNG25.png"},{name:"kitten",src:"http://pngimg.com/uploads/cat/cat_PNG111.png"}]}},emits:["choosedanimal"],props:{scrollPage:{type:Function,required:!0}},methods:{startedGame:function(t){this.$emit("choosedanimal",t),this.scrollPage()}}};n("70d2");O.render=j,O.__scopeId="data-v-3eb561d0";var v=O,g=Object(a["m"])("data-v-2677bead");Object(a["i"])("data-v-2677bead");var y={class:"game_container"},_={class:"score_container"},k={key:0,class:"play-field",ref:"playfield"},w={key:1,class:"result"},P={class:"result_score"};Object(a["h"])();var G=g((function(t,e,n,c,i,o){return Object(a["g"])(),Object(a["c"])("div",y,[Object(a["f"])("h2",{class:"time_container",ref:"time_container"},Object(a["l"])(i.time),513),Object(a["f"])("h2",_," Score : "+Object(a["l"])(i.score),1),i.continueGame?(Object(a["g"])(),Object(a["c"])("div",k,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(i.number,(function(t){return Object(a["g"])(),Object(a["c"])("div",{class:"animal",key:t,onClick:e[1]||(e[1]=function(){return o.touched&&o.touched.apply(o,arguments)}),style:i.position[t]},[Object(a["f"])("img",{src:n.animal.src,alt:n.animal.name,class:"animal_img"},null,8,["src","alt"])],4)})),128))],512)):Object(a["d"])("",!0),i.continueGame?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("div",w,[Object(a["f"])("img",{src:n.animal.src,alt:n.animal.name,class:"animal_img"},null,8,["src","alt"]),Object(a["f"])("span",P,"Score : "+Object(a["l"])(i.score),1),Object(a["f"])("button",{class:"back_home",onClick:e[2]||(e[2]=function(){return o.backHome&&o.backHome.apply(o,arguments)})},"Home")]))])})),C=(n("99af"),n("a9e3"),{data:function(){return{seconds:0,time:"Time: 00:00",number:0,score:0,position:[],controlInterval:null,continueGame:!0}},emits:["backHome"],props:{animal:{type:Object,default:function(){return{name:"rabbit",src:"http://pngimg.com/uploads/rabbit/rabbit_PNG96534.png"}}},hasClick:{type:Number}},watch:{hasClick:function(t){t&&this.startGame()},seconds:function(t){60==t&&(clearInterval(this.controlInterval),this.continueGame=!1)}},mounted:function(){for(var t=0;t<1e3;t++)this.position.push(this.givePos())},methods:{startGame:function(){this.setTime(),this.number++},setTime:function(){var t=this;this.controlInterval=setInterval((function(){t.seconds++;var e=Math.floor(t.seconds/60),n=t.seconds%60;e=e<10?"0".concat(e):e,n=n<10?"0".concat(n):n,t.time="Time: ".concat(e,":").concat(n)}),1e3)},touched:function(t){var e=this;this.xz=t.x,this.yz=t.y,"animal"!=t.target.classList.value&&"animal_img"!=t.target.classList.value||(this.score++,t.target.style.display="none",setTimeout((function(){t.target.style.display="",e.number++}),1e3))},givePos:function(){var t=Math.random()*window.innerWidth*.9,e=Math.random()*window.innerHeight*.9;return{top:e+"px",left:t+"px"}},backHome:function(){this.seconds=0,this.time="Time: 00:00",this.number=0,this.score=0,this.controlInterval=null,this.continueGame=!0,window.scrollTo({top:0,left:0,behavior:"smooth"})}}});n("a1ab");C.render=G,C.__scopeId="data-v-2677bead";var T=C,x={name:"App",data:function(){return{choosedAnimal:{name:"rabbit",src:"http://pngimg.com/uploads/rabbit/rabbit_PNG96534.png"}}},components:{Home:m,PickAnimal:v,GameContainer:T},methods:{scrollPage:function(){window.scrollBy({top:window.scrollY+window.innerHeight,left:0,behavior:"smooth"})},pickedAnimal:function(t){this.choosedAnimal=t}}};n("6871");x.render=c;var I=x;window.addEventListener("load",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),Object(a["b"])(I).mount("#app")},6871:function(t,e,n){"use strict";n("90aa")},7068:function(t,e,n){},"70d2":function(t,e,n){"use strict";n("7068")},"740a":function(t,e,n){},"90aa":function(t,e,n){},a1ab:function(t,e,n){"use strict";n("ee22")},ee22:function(t,e,n){}});
//# sourceMappingURL=app.1725b9e6.js.map