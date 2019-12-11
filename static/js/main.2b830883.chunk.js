(this["webpackJsonpmoster-calculator"]=this["webpackJsonpmoster-calculator"]||[]).push([[0],{18:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(4),C=a(5),o=a(7),s=a(6),i=a(1),u=a(8),c=a(0),R=a.n(c),p=a(14),B=a.n(p),A=a(17),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleValUpdate=a.handleValUpdate.bind(Object(i.a)(a)),a}return Object(u.a)(t,e),Object(C.a)(t,[{key:"handleValUpdate",value:function(e){this.props.handleUpdate(e.target.value,this.props.name)}},{key:"render",value:function(){return R.a.createElement(R.a.Fragment,null,R.a.createElement("label",null,this.props.name," "),R.a.createElement("input",{defaultValue:"0",min:"0",type:"number",name:this.props.name,onChange:this.handleValUpdate}))}}]),t}(R.a.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return R.a.createElement(R.a.Fragment,null,R.a.createElement("input",{readOnly:!0,value:this.props.value}))}}]),t}(R.a.Component),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(u.a)(t,e),Object(C.a)(t,[{key:"handleChange",value:function(e){this.props.handleChange(e.target.value,this.props.side)}},{key:"render",value:function(){return R.a.createElement("select",{onChange:this.handleChange},R.a.createElement("option",{value:"0"},"0"),R.a.createElement("option",{value:"1"},"0.125"),R.a.createElement("option",{value:"2"},"0.25"),R.a.createElement("option",{value:"3"},"0.5"),R.a.createElement("option",{value:"4"},"1"),R.a.createElement("option",{value:"5"},"2"),R.a.createElement("option",{value:"6"},"3"),R.a.createElement("option",{value:"7"},"4"),R.a.createElement("option",{value:"8"},"5"),R.a.createElement("option",{value:"9"},"6"),R.a.createElement("option",{value:"10"},"7"),R.a.createElement("option",{value:"11"},"8"),R.a.createElement("option",{value:"12"},"9"),R.a.createElement("option",{value:"13"},"10"),R.a.createElement("option",{value:"14"},"11"),R.a.createElement("option",{value:"15"},"12"),R.a.createElement("option",{value:"16"},"13"),R.a.createElement("option",{value:"17"},"14"),R.a.createElement("option",{value:"18"},"15"),R.a.createElement("option",{value:"19"},"16"),R.a.createElement("option",{value:"20"},"17"),R.a.createElement("option",{value:"21"},"18"),R.a.createElement("option",{value:"22"},"19"),R.a.createElement("option",{value:"23"},"20"),R.a.createElement("option",{value:"24"},"21"),R.a.createElement("option",{value:"25"},"22"),R.a.createElement("option",{value:"26"},"23"),R.a.createElement("option",{value:"27"},"24"),R.a.createElement("option",{value:"28"},"25"),R.a.createElement("option",{value:"29"},"26"),R.a.createElement("option",{value:"30"},"27"),R.a.createElement("option",{value:"31"},"28"),R.a.createElement("option",{value:"32"},"29"),R.a.createElement("option",{value:"33"},"30"))}}]),t}(R.a.Component),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleValUpdate=function(e,t){var n,r,C,o,s,i,u,c,R;return l.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return n=a.state,r="PB"===t?parseFloat(e):n.inStats.PB,C="AC"===t?parseFloat(e):n.inStats.AC,o="HP"===t?parseFloat(e):n.inStats.HP,s="AB"===t?parseFloat(e):n.inStats.AB,i="DR"===t?parseFloat(e):n.inStats.DR,u="DC"===t?parseFloat(e):n.inStats.DC,c=n.inStats.CR,R=n.outStats.CR,p.next=11,l.a.awrap(a.setState({inStats:{PB:r,AC:C,HP:o,AB:s,DR:i,DC:u,CR:c},outStats:{PB:r,AC:C,HP:o,AB:s,DR:i,DC:u,CR:R}}));case 11:a.doTheMath();case 12:case"end":return p.stop()}}))},a.handleCRUpdate=function(e,t){var n,r,C;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=a.state,r="in"===t?parseInt(e):n.inStats.CR,C="out"===t?parseInt(e):n.outStats.CR,o.next=5,l.a.awrap(a.setState((function(e,t){return{inStats:{PB:n.inStats.PB,AC:n.inStats.AC,HP:n.inStats.HP,AB:n.inStats.AB,DR:n.inStats.DR,DC:n.inStats.DC,CR:r},outStats:{PB:n.outStats.PB,AC:n.outStats.AC,HP:n.outStats.HP,AB:n.outStats.AB,DR:n.outStats.DR,DC:n.outStats.DC,CR:C}}})));case 5:a.doTheMath();case 6:case"end":return o.stop()}}))},a.doTheMath=function(){var e,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.state,t={inStats:{PB:e.inStats.PB,AC:e.inStats.AC,HP:e.inStats.HP,AB:e.inStats.AB,DR:e.inStats.DR,DC:e.inStats.DC,CR:e.inStats.CR},outStats:{PB:E(parseFloat(e.inStats.PB),d[e.inStats.CR].PB,d[e.outStats.CR].PB),AC:E(parseFloat(e.inStats.AC),d[e.inStats.CR].AC,d[e.outStats.CR].AC),HP:E(parseFloat(e.inStats.HP),d[e.inStats.CR].HP,d[e.outStats.CR].HP),AB:E(parseFloat(e.inStats.AB),d[e.inStats.CR].AB,d[e.outStats.CR].AB),DR:E(parseFloat(e.inStats.DR),d[e.inStats.CR].DR,d[e.outStats.CR].DR),DC:E(parseFloat(e.inStats.DC),d[e.inStats.CR].DC,d[e.outStats.CR].DC),CR:e.outStats.CR}},n.next=4,l.a.awrap(a.setState((function(e,a){return t})));case 4:case"end":return n.stop()}}))},a.state={inStats:{PB:0,AC:0,HP:0,AB:0,DR:0,DC:0,CR:0},outStats:{PB:0,AC:0,HP:0,AB:0,DR:0,DC:0,CR:0}},a.handleValUpdate=a.handleValUpdate.bind(Object(i.a)(a)),a.handleCRUpdate=a.handleCRUpdate.bind(Object(i.a)(a)),a.doTheMath=a.doTheMath.bind(Object(i.a)(a)),a}return Object(u.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return R.a.createElement(R.a.Fragment,null,R.a.createElement("label",null,"CR "),R.a.createElement(h,{side:"in",handleChange:this.handleCRUpdate})," ",R.a.createElement(h,{side:"out",handleChange:this.handleCRUpdate})," ",R.a.createElement("br",null),R.a.createElement(D,{name:"PB",handleUpdate:this.handleValUpdate})," ",R.a.createElement(P,{value:this.state.outStats.PB})," ",R.a.createElement("br",null),R.a.createElement(D,{name:"AC",handleUpdate:this.handleValUpdate})," ",R.a.createElement(P,{value:this.state.outStats.AC})," ",R.a.createElement("br",null),R.a.createElement(D,{name:"HP",handleUpdate:this.handleValUpdate})," ",R.a.createElement(P,{value:this.state.outStats.HP})," ",R.a.createElement("br",null),R.a.createElement(D,{name:"AB",handleUpdate:this.handleValUpdate})," ",R.a.createElement(P,{value:this.state.outStats.AB})," ",R.a.createElement("br",null),R.a.createElement(D,{name:"DR",handleUpdate:this.handleValUpdate})," ",R.a.createElement(P,{value:this.state.outStats.DR})," ",R.a.createElement("br",null),R.a.createElement(D,{name:"DC",handleUpdate:this.handleValUpdate})," ",R.a.createElement(P,{value:this.state.outStats.DC})," ",R.a.createElement("br",null))}}]),t}(R.a.Component);B.a.render(R.a.createElement(A.a,{basename:"/MonsterCalculator"},R.a.createElement(m,null)),document.getElementById("root"));var d=[{CR:0,PB:2,AC:13,HP:6,AB:3,DR:1,DC:13},{CR:.125,PB:2,AC:13,HP:35,AB:3,DR:3,DC:13},{CR:.25,PB:2,AC:13,HP:49,AB:3,DR:5,DC:13},{CR:.5,PB:2,AC:13,HP:70,AB:3,DR:8,DC:13},{CR:1,PB:2,AC:13,HP:85,AB:3,DR:14,DC:13},{CR:2,PB:2,AC:13,HP:100,AB:3,DR:20,DC:13},{CR:3,PB:2,AC:13,HP:115,AB:4,DR:26,DC:13},{CR:4,PB:2,AC:14,HP:130,AB:5,DR:32,DC:14},{CR:5,PB:3,AC:15,HP:145,AB:6,DR:28,DC:15},{CR:6,PB:3,AC:15,HP:160,AB:6,DR:44,DC:15},{CR:7,PB:3,AC:15,HP:175,AB:6,DR:50,DC:15},{CR:8,PB:3,AC:16,HP:190,AB:7,DR:56,DC:16},{CR:9,PB:4,AC:16,HP:205,AB:7,DR:62,DC:16},{CR:10,PB:4,AC:17,HP:220,AB:7,DR:68,DC:16},{CR:11,PB:4,AC:17,HP:235,AB:8,DR:74,DC:17},{CR:12,PB:4,AC:17,HP:250,AB:8,DR:80,DC:17},{CR:13,PB:5,AC:18,HP:265,AB:8,DR:86,DC:18},{CR:14,PB:5,AC:18,HP:280,AB:8,DR:92,DC:18},{CR:15,PB:5,AC:18,HP:295,AB:8,DR:98,DC:18},{CR:16,PB:5,AC:18,HP:310,AB:9,DR:104,DC:18},{CR:17,PB:6,AC:19,HP:325,AB:10,DR:110,DC:19},{CR:18,PB:6,AC:19,HP:340,AB:10,DR:116,DC:19},{CR:19,PB:6,AC:19,HP:355,AB:10,DR:122,DC:19},{CR:20,PB:6,AC:19,HP:400,AB:10,DR:140,DC:19},{CR:21,PB:7,AC:19,HP:445,AB:11,DR:158,DC:20},{CR:22,PB:7,AC:19,HP:490,AB:11,DR:176,DC:20},{CR:23,PB:7,AC:19,HP:535,AB:11,DR:194,DC:20},{CR:24,PB:7,AC:19,HP:580,AB:12,DR:212,DC:21},{CR:25,PB:8,AC:19,HP:625,AB:12,DR:230,DC:21},{CR:26,PB:8,AC:19,HP:670,AB:12,DR:248,DC:21},{CR:27,PB:8,AC:19,HP:715,AB:13,DR:266,DC:22},{CR:28,PB:8,AC:19,HP:760,AB:13,DR:284,DC:22},{CR:29,PB:9,AC:19,HP:805,AB:13,DR:302,DC:22},{CR:30,PB:9,AC:19,HP:850,AB:14,DR:320,DC:23}];function E(e,t,a){return Math.floor(e/t*a)}}},[[18,1,2]]]);
//# sourceMappingURL=main.2b830883.chunk.js.map