(this["webpackJsonpNEA-song-project"]=this["webpackJsonpNEA-song-project"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"a":[{"name":"Truth Hurts","artist":"Lizzo"},{"name":"Senorita","artist":"Shawn Mendes & Camilla Cabelo"},{"name":"No Guidance","artist":"Chris Brown featuring Drake"},{"name":"Bad Guy","artist":"Billie Eilish"},{"name":"Old Town Road","artist":"Post Malone featuring Young Thug"},{"name":"Money in the Grave","artist":"Drake featuring Rick Ross"},{"name":"You need to Calm Down","artist":"Taylor Swift"},{"name":"Dance Monkey","artist":"Tones & I"},{"name":"Outnumbered","artist":"Dermot Kennedy"},{"name":"Lights Up","artist":"Harry Styles"}]}')},17:function(e){e.exports=JSON.parse('{"a":[{"username":"a","password":"YQ=="},{"username":"nuradin","password":"bWFsYXJpYQ=="},{"username":"pebbless","password":"d2VsY29tZQ=="},{"username":"MM","password":"QmlnbWFj"},{"username":"Examiner","password":"TkVBLTIwMTk="},{"username":"uzzzy","password":"aGFsYWxicmV4aXQ="},{"username":"NaughtyBaigy","password":"dW5rbjB3bjc4Ng=="}]}')},19:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),i=n(2),s=n(4),u=n(6),l=n(5),d=n(7),h=n(18),m=n(1),g=n(3);function p(){var e=Object(m.a)(["\n    color: mediumpurple;\n    font-family: monospace;\n"]);return p=function(){return e},e}function f(){var e=Object(m.a)(["\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    background-color: aliceblue;\n    color: black;\n    margin-left: 5px;\n"]);return f=function(){return e},e}function b(){var e=Object(m.a)(["\n    margin-left: 10px;\n    background-color: lightblue;\n    padding: 3px;\n    &:focus {\n        background-color: cyan;\n        border: none;\n    }\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, 0.2)\n"]);return v=function(){return e},e}var y=Object(g.a)("h1")(v()),O=Object(g.a)("input")(b()),S=Object(g.a)("input")(f()),j=Object(g.a)("p")(p()),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null,this.props.description),a.a.createElement("hr",null),this.props.children)}}]),t}(r.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.props.handleSubmit},a.a.createElement(O,{type:"text",onChange:this.props.handleChange,value:this.props.value,ref:function(e){return e&&e.focus()}}),a.a.createElement(S,{type:"submit"})))}}]),t}(r.Component),w=n(12),x=function(e){var t=e.status;return a.a.createElement("p",null,t)},C=function e(t){Object(i.a)(this,e),this.key=void 0,this.value=void 0,this.key=t.key,this.value=t.value},T=function(){function e(){Object(i.a)(this,e),this.localStorageSupported=void 0,this.localStorageSupported="undefined"!=typeof window.localStorage&&null!=window.localStorage}return Object(s.a)(e,[{key:"add",value:function(e,t){this.localStorageSupported&&localStorage.setItem(e,t)}},{key:"getAllItems",value:function(){for(var e=new Array,t=0;t<localStorage.length;t++){var n=localStorage.key(t);if(n){var r=localStorage.getItem(n);e.push(new C({key:n,value:r}))}}return e}},{key:"get",value:function(e){return this.localStorageSupported?localStorage.getItem(e):null}},{key:"remove",value:function(e){this.localStorageSupported&&localStorage.removeItem(e)}},{key:"clear",value:function(){this.localStorageSupported&&localStorage.clear()}}]),e}(),I=function(e){function t(e,n){var r;return Object(i.a)(this,t),(r=Object(u.a)(this,Object(l.a)(t).call(this))).score=e,r.username=n,r.partialKey="highScore",r.key=void 0,r.highScore=void 0,r.getHighScore=function(){var e=r.get(r.key);return r.highScore=e?parseInt(e):0,r.score>r.highScore&&(r.add(r.key,JSON.stringify(r.score)),r.highScore=r.score),r.highScore},r.key="".concat(r.partialKey,"-").concat(r.username),r}return Object(d.a)(t,e),t}(T),U=Object(r.createContext)(void 0),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this))).currentUser=e,n.key="leaderBoard",n.register=function(){n.defaultStore();var e=JSON.parse(n.get(n.key)||"[]"),r=t.getUserIndex(e,n.currentUser);"number"===typeof r?e[r]=n.currentUser:e.push(n.currentUser);return n.add(n.key,JSON.stringify(e))},n.getUsers=function(){return JSON.parse(n.get(n.key))},n.defaultStore=function(){n.get(n.key)||n.add(n.key,JSON.stringify([]))},n}return Object(d.a)(t,e),Object(s.a)(t,null,[{key:"getUserIndex",value:function(e,t){var n=!1;return console.log(e),e.forEach((function(e,r){if(console.log(e.username,t.username),!n)return e.username===t.username?n=r:void 0})),n}}]),t}(T);function Y(){var e=Object(m.a)(["\n    border: none;\n    padding: 10px;\n    width: 100px;\n    background-color: rebeccapurple;\n    color: white;\n    border-radius: 5px;\n    border: 2px solid white;\n"]);return Y=function(){return e},e}function M(){var e=Object(m.a)(["\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 10px;\n    padding: 5px;\n"]);return M=function(){return e},e}function B(){var e=Object(m.a)(["\n    color: mediumpurple;\n"]);return B=function(){return e},e}function L(){var e=Object(m.a)(["\n    color: lightgrey;\n"]);return L=function(){return e},e}function z(){var e=Object(m.a)(["\n    color: lightslategrey;\n"]);return z=function(){return e},e}function A(){var e=Object(m.a)(["\n    color: red;\n    font-size: 100px;\n    font-family: Arial;\n"]);return A=function(){return e},e}var D=Object(g.a)("h1")(A()),J=Object(g.a)("p")(z()),F=Object(g.a)("p")(L()),R=Object(g.a)("p")(B()),P=Object(g.a)("div")(M()),W=Object(g.a)("button")(Y()),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},n.users=void 0,n.store=void 0,n.position=void 0,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getPosition",value:function(e){var n=t.sort(this.users),r=0;return n.forEach((function(t,n){if(t.username===e)return r=n})),r+1}},{key:"render",value:function(){var e=this;return a.a.createElement(P,null,a.a.createElement("h3",null,"Leaderboard"),a.a.createElement(U.Consumer,null,(function(n){var o={username:n,highScore:e.props.highScore};e.store=new N(o),e.store.register(),e.users=e.store.getUsers();var c=e.getPosition(n);return a.a.createElement(r.Fragment,null,a.a.createElement("ol",null,t.formatLeaderBoard(e.users,n)),a.a.createElement(R,null,c?"Your position is ".concat(c):null))})))}}]),t}(r.Component);H.formatLeaderBoard=function(e,t){return H.sort(e).map((function(e){return a.a.createElement("li",{key:e.username},e.username===t?a.a.createElement(r.Fragment,null,a.a.createElement("b",null,"You")," - "+e.highScore):"".concat(e.username," - ").concat(e.highScore))}))},H.sort=function(e){return e.sort((function(e,t){return t.highScore-e.highScore}))};var Q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).context=void 0,n.highScore=void 0,n.store=void 0,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.store=new I(this.props.score,this.context),this.highScore=this.store.getHighScore()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(W,{onClick:this.props.replay},"Replay"),a.a.createElement(D,null,"You lost!"),a.a.createElement(J,null,"Your score: ",this.props.score),a.a.createElement(F,null,"Your high score: ",this.highScore),a.a.createElement(H,{highScore:this.highScore}))}}]),t}(r.Component);Q.contextType=U;var G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).songs=Object(h.a)(w.a),n.getRandomSong=function(){var e=n.songs.length,t=Math.floor(e*Math.random());n.songs.length<=0&&(n.songs=w.a);var r=n.songs[t];return n.songs.splice(t,1),r},n.state={value:"",currentSong:n.getRandomSong(),secondTry:!1,status:"",lost:!1,score:0},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){if(e.preventDefault(),n.state.value.length<=0)return n.setState({status:"Value can't be empty!"});var t=n.state.currentSong.name.toLowerCase();if(n.state.value.toLowerCase()!==t)return n.state.secondTry?n.setState({lost:!0}):void n.setState({value:"",secondTry:!0,status:"Incorrect! Try Again..."});n.setState({value:"",status:"Correct! Next Try... \n Your score is "+(n.state.score+(n.state.secondTry?1:3)),score:n.state.score+(n.state.secondTry?1:3),secondTry:!1,currentSong:n.getRandomSong()})},n.replay=function(e){n.setState({value:"",currentSong:n.getRandomSong(),secondTry:!1,status:"You are trying again",lost:!1,score:0})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.lost?a.a.createElement(Q,{score:this.state.score,replay:this.replay}):a.a.createElement(r.Fragment,null,a.a.createElement(k,{description:t.generateSongInitials(this.state.currentSong)},a.a.createElement(j,null,this.state.currentSong.artist)),a.a.createElement(E,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,value:this.state.value}),a.a.createElement(x,{status:this.state.status}))}}]),t}(r.Component);G.generateSongInitials=function(e){return e.name.split(/\s/gi).map((function(e){return e.charAt(0)})).join(" ").toUpperCase()};var V=G,K=n(17),X=btoa,Z=function(e){var t=!1,n=!0,r=!1,a=void 0;try{for(var o,c=K.a[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var i=o.value;i.username===e.username&&i.password===X(e.password)&&(t=!0)}}catch(s){r=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return t};function $(){var e=Object(m.a)(["\n    background-color: rgba(255, 255, 255, 0.2);\n    border-radius: 5px;\n    padding: 10px;\n"]);return $=function(){return e},e}function q(){var e=Object(m.a)(["\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    background-color: aliceblue;\n    color: black;\n"]);return q=function(){return e},e}function _(){var e=Object(m.a)(["\n    margin-left: 10px;\n    background-color: lightblue;\n    padding: 3px;\n    border: none;\n    &:focus {\n        background-color: cyan;\n        border: none;\n    }\n"]);return _=function(){return e},e}var ee=Object(g.a)("input")(_()),te=Object(g.a)("button")(q()),ne=Object(g.a)("div")($()),re=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={authenticated:!1,username:"",password:"",description:"",outlined:!1},n.lengthLimit=15,n.handleSubmit=function(e){return e.preventDefault(),""===n.state.username||""===n.state.password?n.setState({description:"Username/Password cannot be empty."}):n.state.username.match(/^[0-9a-zA-Z]+$/)?void(Z(n.state)?n.setState({authenticated:!0}):n.setState({username:"",password:"",description:"Invalid login details! Try Again."})):n.setState({username:"",description:"Your username contains a strange character."})},n.handleUsernameOnChange=function(e){e.preventDefault(),n.setState({username:e.target.value.slice(0,n.lengthLimit),outlined:e.target.value.length>=n.lengthLimit})},n.handlePasswordOnChange=function(e){e.preventDefault(),n.setState({password:e.target.value})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.authenticated?a.a.createElement(U.Provider,{value:this.state.username},a.a.createElement(V,null)):a.a.createElement(ne,null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",null,a.a.createElement("label",null,"Username:",a.a.createElement(ee,{type:"text",name:"username",onChange:this.handleUsernameOnChange,value:this.state.username,style:{border:this.state.outlined?"5px solid red":void 0},placeholder:"enter your username"}))),a.a.createElement("div",null,a.a.createElement("label",null,"Password:",a.a.createElement(ee,{type:"password",name:"password",onChange:this.handlePasswordOnChange,value:this.state.password,placeholder:"password"}))),a.a.createElement("div",null,a.a.createElement(te,{type:"submit"},"Login"))),a.a.createElement("p",{style:{color:"red"}},this.state.description))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(10);function oe(){var e=Object(m.a)(['\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n            monospace;\n    }\n']);return oe=function(){return e},e}var ce=function(){return a.a.createElement(ae.a,{styles:Object(ae.c)(oe())})};function ie(){var e=Object(m.a)(["\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"]);return ie=function(){return e},e}function se(){var e=Object(m.a)(["\n    text-align: center;\n"]);return se=function(){return e},e}var ue=Object(g.a)("div")(se()),le=Object(g.a)("header")(ie());c.a.render(a.a.createElement((function(){return a.a.createElement(ue,null,a.a.createElement(le,null,a.a.createElement(re,null),a.a.createElement(ce,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.214ce119.chunk.js.map