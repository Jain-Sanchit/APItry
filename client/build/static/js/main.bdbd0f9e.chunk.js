(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),o=(a(46),a(3)),c=a(2),i=a(23),m=a.n(i),u=a(18),p=a.n(u),d=function(e){e?p.a.defaults.headers.common.Authorization=e:delete p.a.defaults.headers.common.Authorization},h=function(e){return{type:"SET_CURRENT_USER",payload:e}},E=function(){return function(e){localStorage.removeItem("jwtToken"),d(!1),e(h({}))}},b=a(11),v=a(14),f=a(39),g=a(20),w=a(70),N={isAuthenticated:!1,user:{},loading:!1},y={},O=Object(v.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(g.a)(Object(g.a)({},e),{},{isAuthenticated:!w(t.payload),user:t.payload});case"USER_LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),x=[f.a],j=Object(v.e)(O,{},Object(v.d)(v.a.apply(void 0,x),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),k=(a(71),a(9)),S=a(10),R=a(13),C=a(12),_=function(e){Object(R.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"z-depth-0"},r.a.createElement("div",{className:"nav-wrapper white"},r.a.createElement(o.b,{to:"/",style:{fontFamily:"monospace"},className:"col s5 brand-logo center black-text"},r.a.createElement("i",{className:"material-icons"},"code"),"MERN"))))}}]),a}(n.Component),T=function(e){Object(R.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Build")," a login/auth app with the"," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," stack from scratch"),r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Create a (minimal) full-stack app with user authentication via passport and JWTs"),r.a.createElement("br",null),r.a.createElement("div",{className:"col s6"},r.a.createElement(o.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Register")),r.a.createElement("div",{className:"col s6"},r.a.createElement(o.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text"},"Log In")))))}}]),a}(n.Component),L=a(17),U=a(15),A=a.n(U),D=function(e){Object(R.a)(a,e);var t=Object(C.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(o.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:A()("",{invalid:e.name})}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:A()("",{invalid:e.email})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",className:A()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:A()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),a}(n.Component),F=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){p.a.post("/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(c.g)(D)),I=function(e){Object(R.a)(a,e);var t=Object(C.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(o.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(o.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:A()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:A()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}]),a}(n.Component),M=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){p.a.post("/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),d(a);var n=m()(a);t(h(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(I),B=a(40),P=Object(b.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(B.a)(e,["component","auth"]);return r.a.createElement(c.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(c.a,{to:"/login"})}}))})),W=function(e){Object(R.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into a full-stack"," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," app \ud83d\udc4f")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"))))}}]),a}(n.Component),G=Object(b.b)((function(e){return{auth:e.auth}}),{logoutUser:E})(W);if(localStorage.jwtToken){var V=localStorage.jwtToken;d(V);var X=m()(V);j.dispatch(h(X));var z=Date.now()/1e3;X.exp<z&&(j.dispatch(E()),window.location.href="./login")}var J=function(){return r.a.createElement(b.a,{store:j},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(c.b,{exact:!0,path:"/",component:T}),r.a.createElement(c.b,{exact:!0,path:"/register",component:F}),r.a.createElement(c.b,{exact:!0,path:"/login",component:M}),r.a.createElement(c.d,null,r.a.createElement(P,{exact:!0,path:"/dashboard",component:G})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.bdbd0f9e.chunk.js.map