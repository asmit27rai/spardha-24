"use strict";(self.webpackChunkspardha23=self.webpackChunkspardha23||[]).push([[102],{6450:function(e,t,s){s.d(t,{Z:function(){return l}});var n=s(885),r=s(2791),i=s.p+"static/media/IMG-20230924-WA0009.c4b26618b6bda608a082.jpg",a=s.p+"static/media/IMG-20230924-WA0010.d61bdb9573e9dd0271ad.jpg",c=s(184);var l=function(){var e=(0,r.useState)(0),t=(0,n.Z)(e,2),s=t[0],l=t[1],o=[i,a];return(0,r.useEffect)((function(){var e=setInterval((function(){l((function(e){return(e+1)%o.length}))}),3e3);return function(){clearInterval(e)}}),[s,o.length]),(0,c.jsx)("div",{className:"carousel-home",children:(0,c.jsx)("img",{className:"carousel-image-home",src:o[s],alt:"Slide ".concat(s+1)})})}},6048:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var n=s(2791),r=s(3495),i=s.p+"static/media/whatsappimage3.3ee141299e4dce3f9736.png",a=s(184);var c=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"container-home",children:[(0,a.jsxs)("div",{className:"left-box",children:[(0,a.jsxs)("div",{className:"heading1",children:["SPARDHA 2024 ",(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"subheading1",children:"MOULDING CHAMPIONS"})]}),(0,a.jsx)("div",{className:"description",children:"Annual sports festival of IIT (BHU) under the Games and Sports Council."}),(0,a.jsxs)("div",{className:"button-container",children:[(0,a.jsx)(r.LM,{to:"/register/signup#register",children:(0,a.jsx)("button",{className:"btn1",children:"LOGIN\xa0/\xa0SIGNUP"})}),(0,a.jsxs)(r.LM,{to:"/matches",children:[" ",(0,a.jsx)("button",{className:"btn2",children:"MATCHES"})]})]})]}),(0,a.jsx)("div",{className:"right-box",children:(0,a.jsx)("div",{className:"card",children:(0,a.jsx)("div",{className:"cdate",children:(0,a.jsx)("img",{src:i,className:"day_remaining_image",alt:"Day_remaining"})})})})]})})},l=s(6450),o=s(5671),u=s(3144),d=s(136),h=s(7277),m=function(e){(0,d.Z)(s,e);var t=(0,h.Z)(s);function s(e){var n;return(0,o.Z)(this,s),(n=t.call(this,e)).calculateTimeDifference=function(){var e=new Date,t=n.targetDate-e,s=Math.floor(t/864e5);return{days:s,hours:Math.floor(t%864e5/36e5+24*s-24),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}},n.updateTime=function(){var e=n.calculateTimeDifference(),t=e.hours,s=e.minutes,r=e.seconds;0===t&&0===s&&0===r?clearInterval(n.timer):n.setState({hours:t,minutes:s,seconds:r})},n.targetDate=new Date("2024-10-18T00:00:00Z"),n.targetDate.setHours(n.targetDate.getHours()-5,n.targetDate.getMinutes()-30),n.state=n.calculateTimeDifference(),n.timer=setInterval(n.updateTime,1e3),n}return(0,u.Z)(s,[{key:"render",value:function(){var e=this.state,t=e.hours,s=e.minutes,n=e.seconds;return(0,a.jsx)("div",{class:"countdowntimer",children:(0,a.jsxs)("div",{class:"countdown",children:[(0,a.jsxs)("span",{class:"hours",children:[(0,a.jsxs)("div",{class:"time",children:[(0,a.jsxs)("div",{children:[Math.floor((t<10?"0".concat(this.state.hours):this.state.hours)/100)," "]}),(0,a.jsxs)("div",{children:[Math.floor((t<10?"0".concat(this.state.hours):this.state.hours)/10%10)," "]}),(0,a.jsxs)("div",{children:[(t<10?"0".concat(this.state.hours):this.state.hours)%10," "]})]}),(0,a.jsx)("div",{class:"value",children:"HOURS"})]}),(0,a.jsx)("span",{class:"colon",children:":"}),(0,a.jsxs)("span",{class:"minutes",children:[(0,a.jsxs)("div",{class:"time",children:[(0,a.jsx)("div",{children:Math.floor((s<10?"0".concat(this.state.minutes):this.state.minutes)/10)}),(0,a.jsx)("div",{children:(s<10?"0".concat(this.state.minutes):this.state.minutes)%10})]}),(0,a.jsx)("div",{class:"value",children:"MINUTES"})]}),(0,a.jsx)("span",{className:"colon",children:":"}),(0,a.jsxs)("span",{class:"seconds",children:[(0,a.jsxs)("div",{class:"time",children:[(0,a.jsx)("div",{children:Math.floor((n<10?"0".concat(this.state.seconds):this.state.seconds)/10)}),(0,a.jsx)("div",{children:(n<10?"0".concat(this.state.seconds):this.state.seconds)%10})]}),(0,a.jsx)("div",{class:"value",children:"SECONDS"})]})]})})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}}]),s}(n.Component);var f=function(){return(0,a.jsxs)("div",{className:"sctn",children:[(0,a.jsx)("div",{className:"bg",children:(0,a.jsx)(l.Z,{})}),(0,a.jsxs)("div",{className:"hehe",children:[(0,a.jsx)("div",{children:(0,a.jsx)(c,{})}),(0,a.jsx)("div",{children:(0,a.jsx)(m,{})})]})]})}},3495:function(e,t,s){s.d(t,{LM:function(){return f}});var n=s(2791),r=s(1087),i=function(){return i=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};var a="",c=null,l=null,o=null;function u(){a="",null!==c&&c.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function d(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function h(){var e=null;if("#"===a)e=document.body;else{var t=a.replace("#","");null===(e=document.getElementById(t))&&"#top"===a&&(e=document.body)}if(null!==e){o(e);var s=e.getAttribute("tabindex");return null!==s||d(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==s||d(e)||(e.blur(),e.removeAttribute("tabindex")),u(),!0}return!1}function m(e){return n.forwardRef((function(t,s){var d="";"string"===typeof t.to&&t.to.includes("#")?d="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(d=t.to.hash);var m={};e===r.OL&&(m.isActive=function(e,t){return e&&e.isExact&&t.hash===d});var f=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]])}return s}(t,["scroll","smooth","timeout","elementId"]);return n.createElement(e,i({},m,f,{onClick:function(e){var s;u(),a=t.elementId?"#"+t.elementId:d,t.onClick&&t.onClick(e),""===a||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(o=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},s=t.timeout,window.setTimeout((function(){!1===h()&&(null===c&&(c=new MutationObserver(h)),c.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){u()}),s||1e4))}),0))},ref:s}),t.children)}))}m(r.rU);var f=m(r.OL)}}]);
//# sourceMappingURL=102.77e3ea5f.chunk.js.map