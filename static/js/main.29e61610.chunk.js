(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(11),n(3)),l=n(5),u=n(4),s=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={active:0},t.clickHandler=function(e){return t.setState({active:e})},t.render=function(){return r.a.createElement("div",null,t.props.tabs.map((function(e,n){return r.a.createElement("button",{type:"button",className:"button",key:e.title,onClick:function(){return t.clickHandler(n)}},e.title)})),r.a.createElement("p",{className:"paragraph"},t.props.tabs[t.state.active].content))},t}return n}(r.a.Component),p=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],b=function(){return r.a.createElement(s,{tabs:p})};o.a.render(r.a.createElement(b,null),document.getElementById("root"))},6:function(t,e,n){t.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.29e61610.chunk.js.map