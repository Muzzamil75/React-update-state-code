(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(14),n(16),n(21),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),p=n(6),h=function(e){return r.a.createElement("div",{className:"tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"rootbs",src:"https://robohash.org/".concat(e.id,"?200*200")}),r.a.createElement("div",null,e.id,r.a.createElement("p",null,e.name)))},b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={robots:[]},e.fetch=e.fetch.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})}).catch(function(e){return console.log(e)})})},{key:"render",value:function(){var e=this.state.robots;return r.a.createElement("div",{style:{height:"inherit",alignItems:"center",justifyContent:"center",display:"flex"}},!e.length>0&&r.a.createElement("button",{onClick:this.fetch,className:"btn btn-primary"},"Click to fetch Robots"),r.a.createElement("div",null,e.length>0&&e.map(function(e){return r.a.createElement(h,{name:e.name,key:e,email:e.email,id:e.id})})))}}]),t}(a.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jombotron"},r.a.createElement("li",null,this.props.pArr.title," - ",this.props.pArr.category))}}]),t}(a.Component),d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){""===e.refs.title.value?alert("title is required !!"):e.setState({newprojects:{title:e.refs.title.value,category:e.refs.category.value}},function(){this.props.addProject(this.state.newprojects)}),t.preventDefault()},e.state={newprojects:{}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.categories.map(function(e){return r.a.createElement("option",{key:e,value:e}," ",e)});return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",ref:"title"}),r.a.createElement("label",null,"Title"),r.a.createElement("select",{ref:"category"},e),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),t}(a.Component);d.defaultProps={categories:["web","samsung","opppo"]};var j=d;a.Component;i.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.b4217bca.chunk.js.map