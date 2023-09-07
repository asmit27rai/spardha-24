"use strict";(self.webpackChunkspardha23=self.webpackChunkspardha23||[]).push([[616],{616:function(e,s,a){a.r(s);var n=a(885),r=a(4569),l=a.n(r),o=a(2791),c=a(9135),t=a(1087),i=a(5725),d=a(2987),u=a(6046),g=a.n(u),m=a(1784),h=a(7689),f=a(184);s.default=function(){var e=(0,o.useRef)();(0,o.useEffect)((function(){var e=document.getElementById("loginDiv").offsetTop;window.scrollTo({top:e+600,behavior:"smooth"})}),[]);var s=(0,h.s0)(),a=(0,o.useReducer)((function(e,s){var a="";return""===s?a="This field is required.":s.includes("@")?g()(s)||(a="Please enter a valid email address."):s.length<6||s.length>30?a="Username must be of length 6 - 30.":(0,d.ZP)(s,void 0,{ignore:" ._-"})||(a="Please use only alphabets, numbers or _, - and ."),{value:s,warning:a,valid:""===a&&""!==s}}),{value:"",warning:"",valid:!1}),r=(0,n.Z)(a,2),u=r[0],p=r[1],x=(0,o.useReducer)((function(e,s){var a="";return""===s?a="This field is required.":(s.length<6||s.length>30)&&(a="Password must be of length 6 - 30."),{value:s,warning:a,valid:""===a&&""!==s}}),{value:"",warning:"",valid:!1}),v=(0,n.Z)(x,2),_=v[0],j=v[1],w=(0,o.useReducer)((function(e,s){return{color:s.color,message:s.message}}),{color:"primary",message:""}),b=(0,n.Z)(w,2),y=b[0],N=b[1];return(0,f.jsxs)("div",{id:"loginDiv",ref:e,children:[(0,f.jsx)("h3",{className:"".concat(m.Z.heading),children:" LOGIN "}),(0,f.jsx)("hr",{}),(0,f.jsxs)(i.bZ,{color:"success",style:{fontSize:"14px",fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif"},className:"py-2",children:[(0,f.jsx)("strong",{children:" Account not activated? "}),"Click"," ",(0,f.jsxs)(t.rU,{to:"/register/verify",style:{textDecoration:"none"},children:[" ","here"," "]}),"to verify your account.",(0,f.jsx)("br",{}),(0,f.jsx)("strong",{children:"Forgot Password? "}),"Click"," ",(0,f.jsx)(t.rU,{to:"/register/forgot",className:"text-decoration-none",children:"here"})]}),(0,f.jsx)("div",{class:"col-sm-12 text-end",children:(0,f.jsx)("span",{style:{color:"red",fontSize:"14px",fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif"},children:"*\xa0Mandatory"})}),(0,f.jsx)(i.l0,{className:"".concat(m.Z["form-horizontal"]),children:(0,f.jsxs)("div",{className:"col-sm-12 justify-content-center fw-bold d-flex flex-column",style:{marginTop:"12px"},children:[(0,f.jsxs)("div",{className:"".concat(m.Z.panel),children:[(0,f.jsx)("div",{className:"".concat(m.Z["panel-heading"]),children:(0,f.jsxs)("h4",{className:"".concat(m.Z["panel-title"]," text-center"),style:{color:"#59ba00"},children:[(0,f.jsx)(c.Xws,{})," Login Details"]})}),(0,f.jsxs)(i.cw,{className:"".concat(m.Z["form-group"]),children:[(0,f.jsx)("div",{className:"col-sm-12",children:(0,f.jsxs)(i.cw,{className:"".concat(m.Z["form-group"]),children:[(0,f.jsxs)(i.__,{for:"username",className:"".concat(m.Z.label),children:["Username/Email:\xa0",(0,f.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,f.jsxs)(i.BZ,{className:"".concat(m.Z["input-group"]),children:[(0,f.jsx)(i.O3,{className:"".concat(m.Z["form-text"]," ").concat(u.valid&&" text-success border-success"," ").concat(""!==u.warning&&" text-danger border-danger"),children:(0,f.jsx)(c.LzR,{})}),(0,f.jsx)(i.II,{name:"username",id:"username",type:"text",placeholder:"Enter your username or email",value:u.value,valid:""===u.warning&&""!==u.value,invalid:""!==u.warning,onChange:function(e){p(e.target.value)},bsSize:"sm",className:"".concat(m.Z["form-control"]),required:!0})]}),""!==u.warning&&(0,f.jsx)(i.AG,{className:"text-danger d-block fw-bold",style:{fontSize:"12px"},children:u.warning})]})}),(0,f.jsx)("div",{className:"col-sm-12",children:(0,f.jsxs)(i.cw,{className:"".concat(m.Z["form-group"]),children:[(0,f.jsxs)(i.__,{for:"password",className:"".concat(m.Z.label),children:["Password:\xa0",(0,f.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,f.jsxs)(i.BZ,{className:"".concat(m.Z["input-group"]),children:[(0,f.jsx)(i.O3,{className:"".concat(m.Z["form-text"]," ").concat(_.valid&&" text-success border-success"," ").concat(""!==_.warning&&" text-danger border-danger"),children:(0,f.jsx)(c.q2z,{})}),(0,f.jsx)(i.II,{name:"password",id:"password",type:"password",placeholder:"Enter the Password",value:_.value,valid:""===_.warning&&""!==_.value,invalid:""!==_.warning,onChange:function(e){j(e.target.value)},bsSize:"sm",className:"".concat(m.Z["form-control"]),required:!0})]}),""!==_.warning&&(0,f.jsx)(i.AG,{className:"text-danger d-block fw-bold",style:{fontSize:"12px"},children:_.warning})]})})]})]}),""!==y.message&&(0,f.jsx)(i.bZ,{color:y.color,style:{fontSize:"15px",fontFamily:"Helvetica Neue,Helvetica,Arial,sans-serif"},className:"my-1 py-2",children:y.message}),(0,f.jsxs)(i.zx,{color:"success",className:"".concat(m.Z["btn-block"]),onClick:function(e){if(e.preventDefault(),N({color:"primary",message:"Please wait while your request is being processed."}),u.valid&&_.valid){var a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL;l().post("".concat(a,"auth/login/"),{username:u.value,password:_.value}).then((function(e){localStorage.setItem("token",e.data.token),N({color:"success",message:"Logged in Successfully! Redirecting..."}),setTimeout((function(){s("/dashboard/home")}),2e3)})).catch((function(e){var s=e.response;N({color:"danger",message:s.data[Object.keys(s.data)[0]].toString()})}))}else N({color:"danger",message:"Please fill out all the fields correctly"})},children:[(0,f.jsx)(c.Y2X,{color:"white",className:"me-1"}),"LOGIN"]}),(0,f.jsxs)("b",{style:{fontSize:"10px",textAlign:"center",fontWeight:"normal"},children:["Don't have an account? ",(0,f.jsx)(t.rU,{to:"/register/Signup",style:{textDecoration:"none"},children:"Sign up "})]})]})})]})}},1784:function(e,s){s.Z={heading:"Signup_heading__qlnaq","form-horizontal":"Signup_form-horizontal__BMgDE","form-group":"Signup_form-group__KDF2n","btn-block":"Signup_btn-block__Ww6GB",panel:"Signup_panel__B9zlT","panel-heading":"Signup_panel-heading__z3qja","panel-title":"Signup_panel-title__aCNJB",label:"Signup_label__gkJMm","form-control":"Signup_form-control__JYCNy","form-text":"Signup_form-text__kzXjf","input-group":"Signup_input-group__ELM7w"}}}]);
//# sourceMappingURL=616.b8ecc54e.chunk.js.map