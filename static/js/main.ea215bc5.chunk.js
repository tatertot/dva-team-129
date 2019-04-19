(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(23)},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),l=a.n(i),s=(a(20),a(3)),o=a(4),c=a(7),u=a(5),h=a(6),p=a(9),m=a(1),f=a(2),d=a.n(f),y=(a(22),a(8)),g=function(e){return{code:e.code,id:Number(e.id),name:e.name}},S=a(14),v=a(10),b=["rgb(222,235,247)","rgb(198,219,239)","rgb(158,202,225)","rgb(107,174,214)","rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)"],E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).pRef=r.a.createRef(),a.updateUSstateFilter=function(e,t){a.setState({USstateFilter:function(t){return t.State_Name===e},USstate:e},function(){return a.notifyUpdate()})},a.selectUSstate=function(e,t){var n=d.a.find(a.props.USstateNames,{id:parseInt(a.pRef.current.attributes.title.value)}).name;a.updateUSstateFilter(n)},a.state={USstateFilter:function(){return!0},USstate:"*"},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componenetDidMount",value:function(){var e=window.location.hash.replace("#","").split("-"),t=Object(y.a)(e,1)[0];"*"!==t&&t&&this.updateUSstateFilter(t)}},{key:"notifyUpdate",value:function(){var e;window.location.hash=[this.state.USstate||"*"].join("-"),this.props.updateDataFilter((e=this.state,function(t){return e.USstateFilter(t)}),{USstate:this.state.USstate})}},{key:"shouldComponentUpdate",value:function(e,t){var a=this.props,n=a.zoomToState,r=a.value;return n!==e.zoomToState||r!==e.value}},{key:"getStateName",value:function(){return d.a.find(this.props.USstateNames,{id:parseInt(this.pRef.current.attributes.title.value)}).name}},{key:"render",value:function(){var e=this,t=this.props,a=t.value,n=t.geoPath,i=t.feature,l=t.quantize,s=t.statePerCapitaValues,o=t.phiPerEnrolleeValues,c="rgb(198,219,239)";a&&(c=b[l(a)]);return r.a.createElement("path",{d:n(i),style:{fill:c},title:i.id,className:"state-borders",onMouseOver:function(){var t=d.a.find(e.props.USstateNames,{id:parseInt(e.pRef.current.attributes.title.value)}).name,a=d.a.find(s,{state:t}).percentChange,n=d.a.find(s,{state:t}).years,r=[];d.a.each(n,function(e,t){r.push({year:e})});var i=m.i(r,function(e){return e.year}),l=d.a.find(o,{state:t}).percentChange,c=d.a.find(o,{state:t}).years,u=[];d.a.each(c,function(e,t){u.push({year:e})});var h=m.i(u,function(e){return e.year});e.props.onHover(t,a,i.toFixed(2),l,h.toFixed(2))}.bind(this),onClick:this.selectUSstate.bind(this),ref:this.pRef})}}]),t}(n.Component);function x(e){return function(t){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).anchor=r.a.createRef(),t}return Object(h.a)(a,t),Object(o.a)(a,[{key:"componentDidMount",value:function(){e.call(this)}},{key:"componentDidUpdate",value:function(){e.call(this)}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y;return r.a.createElement("g",{transform:"translate(".concat(t,", ").concat(a,")"),ref:this.anchor})}}]),a}(r.a.Component)}m.m().domain(m.j(1,10)).range(m.n[9]);var k=["rgb(247,251,255)","rgb(222,235,247)","rgb(198,219,239)","rgb(158,202,225)","rgb(107,174,214)","rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)"],j=m.k().domain([1,10]).rangeRound([1,10]),U=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("g",null,r.a.createElement("rect",{x:0,y:360,fill:"white",opacity:.5,height:70,width:500}),k.map(function(e,t){return null==e[0]&&(e[0]=j.domain()[0]),null==e[1]&&(e[1]=j.domain()[1]),r.a.createElement("g",{key:t},r.a.createElement("rect",{style:{fill:k[t],width:20,height:20,stroke:"black"},x:170+20*t,y:370,title:null}),r.a.createElement("text",{fontSize:10,x:175+20*t,y:400},t,"%"))}),";",r.a.createElement("text",{x:110,y:415,fontSize:11,fontWeight:"bold"},"Annual Avg. Growth From Medicaid Enrollment 2000-2017"))}}]),t}(n.Component),C=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=m.e().scale([1e3]);return a.state={geoPath:m.f().projection(n),quantize:m.l().range(m.j(9)),projection:n},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getValue",value:function(e){var t=d.a.find(this.props.statePerCapita,{stateId:e});return t?t.percentChange:null}},{key:"getDollarValue",value:function(e){var t=d.a.find(this.props.USstateNames,{stateId:e}).name,a=d.a.find(this.props.sortedCapitas,{name:t});return a?a.mean:null}},{key:"render",value:function(){var e=this,t=this.state,a=t.geoPath,n=t.quantize,i=t.hover,l=this.props,s=l.usTopoJson,o=l.values,c=l.zoomToState,u=l.updateDataFilter,h=l.onHover,p=l.statePerCapitaValues,m=l.phiPerEnrolleeValues,f=l.sortedCapitas;if(s){var y=s,g=v.b(y,y.objects.states,function(e,t){return e!==t}),S=v.a(y,y.objects.states).features,b=(d.a.fromPairs(o.map(function(e){return[e.stateId,e.percentChange]})),d.a.fromPairs(p.map(function(e){return[e.stateId,e.percentChange]})));d.a.fromPairs(f.map(function(e){return[e.id,e.mean]}));return r.a.createElement("g",{className:"states"},S.map(function(t){return r.a.createElement(E,{geoPath:a,feature:t,zoomToState:c,key:t.id,value:b[t.id],quantize:n,updateDataFilter:u,stateName:t.id,USstateNames:e.props.USstateNames,hover:i,onHover:h,statePerCapitaValues:p,phiPerEnrolleeValues:m})}),";",r.a.createElement("path",{d:a(g),style:{fill:"none",stroke:"#023446",strokeLineJoin:"round"}}),r.a.createElement(U,{x:0,y:0}))}return null}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.projection,n=t.quantize,r=t.geoPath;if(a.translate([e.width/2+20,e.height/2]).scale(1.2*e.width),"all"==e.zoomToState)a.scale(1.2*e.width);else if(e.zoomToState&&e.usTopoJson){var i=e.usTopoJson,l=v.a(i,i.objects.states).features,s=d.a.find(e.USstateNames,{name:e.zoomToState}).id;a.scale(4.5*e.width);var o=r.centroid(d.a.find(l,{id:s})),c=a.translate();a.translate([c[0]-o[0]+e.width/2+20,c[1]-o[1]+e.height/2+50])}return e.values&&n.domain([0,9]),Object(S.a)({},t,{projection:a,quantize:n})}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).selectUSstate=function(e,t){var n=e.target.value;console.log("selected->",e.target.value,n,t),a.props.updateDataFilter(n,!t)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"_addOption",value:function(e){if(""!==e){var t="toggle-".concat(e),a=e;return this.props.capitalize&&(a=a.toUpperCase()),r.a.createElement("option",{label:a,name:e,key:t,value:e},e)}}},{key:"render",value:function(){var e=this,t=this.props.toggleNames;return r.a.createElement("div",{id:"stateDropDown"},r.a.createElement("select",{onChange:this.selectUSstate},r.a.createElement("option",{value:"all"},"Select State"),r.a.createElement("option",{value:"all"},"Show All States"),t.map(function(t){return e._addOption(t)})))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={USstateFilter:function(){return!0},USstate:"*"},a.updateUSstateFilter=function(e,t){a.setState({USstateFilter:function(t){return t.State_Name===e},USstate:e},function(){return a.notifyUpdate()})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componenetDidMount",value:function(){var e=window.location.hash.replace("#","").split("-"),t=Object(y.a)(e,1)[0];"*"!==t&&t&&this.updateUSstateFilter(t)}},{key:"notifyUpdate",value:function(){var e;window.location.hash=[this.state.USstate||"*"].join("-"),this.props.updateDataFilter((e=this.state,function(t){return e.USstateFilter(t)}),{USstate:this.state.USstate})}},{key:"render",value:function(){var e=this.props.data,t=new Set(e.map(function(e){return e.State_Name}));return r.a.createElement("div",null,r.a.createElement(P,{data:e,toggleNames:Array.from(t.values()),selectedUSstate:this.state.USstate,updateDataFilter:this.updateUSstateFilter}))}}]),t}(r.a.Component),w=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.zoomToState;e.values;return r.a.createElement("g",null,r.a.createElement("text",{x:520,y:30,className:"stateTitle"},t))}}]),t}(n.Component),I=function(e){e.value;var t=e.width,a=e.height,n=(e.x,e.y),i=e.bottomMargin,l=e.mean,s=e.lineColor,o=m.k().domain([0,30]).range([a-n-i,0]),c=m.h()([[0,5],[t,5]]),u="translate(".concat(20,", ",o(l),")");"US avg: ".concat(l);return r.a.createElement("g",{className:"avgLine",transform:u},r.a.createElement("path",{d:c,fill:"none",stroke:s}))},D=x(function(){var e=m.k().domain([2011,2017]).range([0,400]),t=m.a(e).tickFormat(m.d("d")).ticks(7);m.o(this.anchor.current).call(t)}),N=x(function(){var e=m.k().domain([31,0]).range([0,250]),t=m.b(e).tickFormat(m.d("d")).ticks(6);m.o(this.anchor.current).call(t)}),z=["purple","magenta"],H=["Mental Health","Physical Health"],M=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("g",null,z.map(function(e,t){return r.a.createElement("g",{key:t},r.a.createElement("circle",{style:{fill:z[t],width:20,height:20,stroke:"gray"},cx:210+110*t,cy:20,title:H[t],r:4}),r.a.createElement("text",{fontSize:12,x:219+110*t,y:25},H[t]),r.a.createElement("text",{fontSize:12,x:205+110*t,y:40,style:{fill:z[t]}},r.a.createElement("tspan",{fontSize:14},"--- "),"US Avg"))}),";",r.a.createElement("circle",{style:{fill:"darksalmon",width:20,height:20,stroke:"gray"},cx:30,cy:237,title:"Per Capita Spending",r:4}),r.a.createElement("text",{fontSize:12,x:39,y:242},"Per Capita Spending"))}}]),t}(n.Component),Y=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"yearValue",value:function(e,t){return{year:parseInt(t),days:parseInt(e)}}},{key:"dollarValue",value:function(e,t){return{year:parseInt(t),amount:parseInt(e)}}},{key:"scoreValue",value:function(e,t){return{year:parseInt(t),score:e}}},{key:"circleMark",value:function(e,t){return r.a.createElement("circle",{key:e,style:{fill:"white",width:2,height:2,stroke:"gray"},cx:e+20,cy:t,title:null,r:3})}},{key:"label",value:function(e,t,a){return r.a.createElement("text",{key:e,style:{fill:"black",width:2,height:2,stroke:"none",fontSize:"10"},x:e+22,y:147+t,title:null,r:3},"$",a.toLocaleString())}},{key:"render",value:function(){var e=this,t=this.props,a=t.zoomToState,n=(t.values,t.mentalHealthDays),i=t.physHealthDays,l=t.genHealthScore,s=t.statePerCapitaValues,o=t.USmentalMean,c=t.USphysicalMean,u=m.k().domain([2011,2017]).range([0,400]),h=m.k().domain([0,14e3]).range([120,0]),p=m.k().domain([0,31]).range([250,0]),f=m.h().x(function(e){return u(e.year)+20}).y(function(e){return p(e.days)}),y=m.h().x(function(e){return u(e.year)+20}).y(function(e){return h(e.amount)}),g=d.a.find(n,{state:a}),S=d.a.find(i,{state:a}),v=d.a.find(l,{state:a}),b=d.a.find(s,{state:a}),E=d.a.map(g.numDaysPerYear,function(t,a){return e.yearValue(t,a)}),x=d.a.map(S.numDaysPerYear,function(t,a){return e.yearValue(t,a)}),k=d.a.map(v.scorePerYear,function(t,a){return e.scoreValue(t,a)}),j=d.a.map(b.years,function(t,a){return e.dollarValue(t,a)}).slice(10,18),U=m.i(k,function(e){return e.score});return r.a.createElement("g",null,r.a.createElement("text",{x:575,y:65,fontWeight:"bold",fill:"rgb(63, 59, 54)"},"Mental and Physical Healthy Days Per Month"),r.a.createElement("svg",{x:520,y:80},r.a.createElement(M,null),r.a.createElement(I,{x:520,y:10,width:400,height:250,bottomMargin:5,mean:o,lineColor:"purple"}),r.a.createElement(I,{x:520,y:10,width:400,height:250,bottomMargin:5,mean:c,lineColor:"magenta"}),r.a.createElement("path",{className:"line",d:f(E),fill:"none",stroke:"purple",strokeWidth:2}),r.a.createElement("path",{className:"line",d:f(x),fill:"none",stroke:"magenta",strokeWidth:2}),r.a.createElement("svg",{y:135},r.a.createElement("path",{className:"line",d:y(j),fill:"none",stroke:"darksalmon",strokeWidth:2}),d.a.map(j,function(t){return e.circleMark(u(t.year),h(t.amount))})),d.a.map(j,function(t){return e.label(u(t.year),h(t.amount),t.amount)}),d.a.map(E,function(t){return e.circleMark(u(t.year),p(t.days))}),d.a.map(x,function(t){return e.circleMark(u(t.year),p(t.days))}),r.a.createElement("text",{x:30,y:35,transform:"rotate(-90 30 30)",className:"axisLabel",fill:"rgb(111, 106, 101)"},"Days"),r.a.createElement("text",{x:388,y:245,className:"axisLabel",fill:"rgb(111, 106, 101)"},"Years"),r.a.createElement(D,{x:20,y:250}),r.a.createElement(N,{x:20,y:0}),r.a.createElement("circle",{cx:80,cy:330,r:30,fill:"#a4bec8"}),r.a.createElement("text",{x:65,y:335,fontWeight:"bold"},U.toFixed(2)),r.a.createElement("text",{x:120,y:327,fontWeight:"bold"},"Avg. general health indicator "),r.a.createElement("text",{x:120,y:343,fontSize:12,wordSpacing:2},"1=Very Good 2=Good 3=Ok 4=Poor 5=Very Poor"),r.a.createElement("text",{x:20,y:390,dy:0,width:200,height:50,fontSize:12},r.a.createElement("tspan",{x:20,dy:"1.2em"},"Respondants answered a series of questions which were distilled into general,"),r.a.createElement("tspan",{x:20,dy:"1.2em"},"physical and mental health scores.  For a summary on the analysis, take a"),r.a.createElement("tspan",{x:20,dy:"1.2em"},"look at our",r.a.createElement("tspan",{className:"datalink"}," ",r.a.createElement("a",{href:"https://github.gatech.edu/Team129/BRFSSProject/blob/master/models/brfss_data_lib.ipynb"},"BRFSS Survey Questions Analysis")),"."))))}}]),t}(n.Component),F=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.zoomToState,a=e.values,n=e.mentalHealthDays,i=e.physHealthDays,l=e.genHealthScore,s=e.statePerCapitaValues,o=e.USperCapitaMean,c=e.phiPerCapitaMean,u=e.sortedCapitas,h=e.USmentalMean,p=e.USphysicalMean,m=e.capitaMeanPercentage,f=e.phiMeanPercentage,d=0;o>0&&(d=parseInt(o.toFixed(2)).toLocaleString());var y=0;c>0&&(y=parseInt(c).toLocaleString());var g=0;f>0&&(g=f.toFixed(2));var S,v,b,E,x,k,j,U,C,P,O,I,D=0;return m>0&&(D=m.toFixed(2)),S=v=b=E=x=k=j=U=C=P=O=I="--",u.length>0&&(j=u[50].state,U=u[49].state,C=u[48].state,P=u[2].state,O=u[1].state,I=u[0].state,S=parseInt(u[50].mean).toLocaleString(),v=parseInt(u[49].mean).toLocaleString(),b=parseInt(u[48].mean).toLocaleString(),E=parseInt(u[2].mean).toLocaleString(),x=parseInt(u[1].mean).toLocaleString(),k=parseInt(u[0].mean).toLocaleString()),"all"!==t?r.a.createElement("g",null,r.a.createElement(w,{zoomToState:t,values:a}),r.a.createElement(Y,{zoomToState:t,mentalHealthDays:n,physHealthDays:i,genHealthScore:l,statePerCapitaValues:s,USmentalMean:h,USphysicalMean:p})):r.a.createElement("g",null,r.a.createElement("text",{x:530,y:60,fontSize:24,fontWeight:"bold",fill:"#045775"},"Overall US Healthcare Spending",r.a.createElement("tspan",{fontSize:14}," (2000-2017)")),r.a.createElement("text",{x:530,y:100,fontSize:18,fontWeight:"bold",fill:"#023446"},"Average Percent Increase"),r.a.createElement("text",{x:530,y:130,fontSize:16,fill:"rgb(8, 48, 107)"},r.a.createElement("tspan",{className:"spending"},D,"%")," Medicaid"),r.a.createElement("text",{x:530,y:160,fontSize:16,fill:"rgb(8, 48, 107)"},r.a.createElement("tspan",{className:"spending"},g,"%")," Private Health Insurance"),r.a.createElement("text",{x:530,y:210,fontSize:18,fontWeight:"bold"},"Average Spending"),r.a.createElement("text",{x:530,y:240,fontSize:16,fill:"rgb(8, 48, 107)"},r.a.createElement("tspan",{className:"spending"},"$",d)," per capita"),r.a.createElement("text",{x:530,y:270,fontSize:16,fill:"rgb(8, 48, 107)"},r.a.createElement("tspan",{className:"spending"},"$",y)," per enrollee (private health insurance)"),r.a.createElement("text",{x:530,y:320,fontSize:18,fontWeight:"bold"},"States with highest per capita spending"),r.a.createElement("text",{x:530,y:350,fontSize:16,fill:"rgb(8, 48, 107)"},"1. ",j,": $",S),r.a.createElement("text",{x:530,y:370,fontSize:16,fill:"rgb(8, 48, 107)"},"2. ",U,": $",v),r.a.createElement("text",{x:530,y:390,fontSize:16,fill:"rgb(8, 48, 107)"},"3. ",C,": $",b),r.a.createElement("text",{x:530,y:430,fontSize:18,fontWeight:"bold"},"States with lowest per capita spending"),r.a.createElement("text",{x:530,y:460,fontSize:16,fill:"rgb(8, 48, 107)"},"1. ",I,": $",k),r.a.createElement("text",{x:530,y:480,fontSize:16,fill:"rgb(8, 48, 107)"},"2. ",O,": $",x),r.a.createElement("text",{x:530,y:500,fontSize:16,fill:"rgb(8, 48, 107)"},"3. ",P,": $",E))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateDataFilter=function(e,t){a.setState({USstateFilter:e,filteredBy:t})},a.onHover=function(e,t,n,r,i){a.setState({stateLabel:e,perCapitaChange:t,perCapitaMean:n,phiPerEnrolleeChange:r,phiPerEnrolleeMean:i})},a.onStatUpdate=function(e){a.setState({USperCapitaMean:e})},a.state={sampleData:[],mentalHealth:[],physHealth:[],genHealth:[],USstateNames:[],statePerCapita:[],phiPerEnrollee:[],USstateFilter:function(){return!0},filteredBy:{USstate:"*"},USperCapitaMean:null,stateLabel:"Pick State",perCapitaChange:"--",perCapitaMean:"--",phiPerEnrolleeChange:"--",phiPerEnrolleeMean:"--"},a.onHover=a.onHover.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a.noop;Promise.all([m.g("data/us.json"),m.c("data/sample.csv"),m.c("data/state_ment_health.csv"),m.c("data/state_phys_health.csv"),m.c("data/state_gen_health.csv"),m.c("data/state_per_capita.csv"),m.c("data/phi_per_enrollee.csv"),m.p("data/us-state-names.tsv",g)]).then(function(t){var a=Object(y.a)(t,8),n=a[0],r=a[1],i=a[2],l=a[3],s=a[4],o=a[5],c=a[6],u=a[7];console.log("hello data"),e({usTopoJson:n,sampleData:r,mentalHealth:i,physHealth:l,genHealth:s,statePerCapita:o,phiPerEnrollee:c,USstateNames:u})})}(function(t){return e.setState(t)})}},{key:"getStateId",value:function(e){return""!=e?d.a.find(this.state.USstateNames,{name:e}).id:null}},{key:"getStateName",value:function(e){if(""!=e)return d.a.find(this.state.USstateNames,{id:parseInt(e.stateId)}).name}},{key:"stateValue",value:function(e){return{stateId:this.getStateId(e.State_Name),state:e.State_Name,percentChange:e.Average_Annual_Percent_Growth}}},{key:"statePerCapitaValue",value:function(e){return{stateId:this.getStateId(e.State_Name),state:e.State_Name,years:{2001:parseInt(e.Y2001),2002:parseInt(e.Y2002),2003:parseInt(e.Y2003),2004:parseInt(e.Y2004),2005:parseInt(e.Y2005),2006:parseInt(e.Y2006),2007:parseInt(e.Y2007),2008:parseInt(e.Y2008),2009:parseInt(e.Y2009),2010:parseInt(e.Y2010),2011:parseInt(e.Y2011),2012:parseInt(e.Y2012),2013:parseInt(e.Y2013),2014:parseInt(e.Y2014),2015:parseInt(e.Y2015),2016:parseInt(e.Y2016),2017:parseInt(e.Y2017)},percentChange:e.Average_Annual_Percent_Growth}}},{key:"phiPerEnrolleeValue",value:function(e){return{stateId:this.getStateId(e.State_Name),state:e.State_Name,years:{2001:e.Y2001,2002:e.Y2002,2003:e.Y2003,2004:e.Y2004,2005:e.Y2005,2006:e.Y2006,2007:e.Y2007,2008:e.Y2008,2009:e.Y2009,2010:e.Y2010,2011:e.Y2011,2012:e.Y2012,2013:e.Y2013,2014:e.Y2014,2015:e.Y2015,2016:e.Y2016,2017:e.Y2017},percentChange:e.Average_Annual_Percent_Growth}}},{key:"mentalHealthDays",value:function(e){return{stateId:e.stateId,state:this.getStateName(e),numDaysPerYear:{2011:e[2011],2012:e[2012],2013:e[2013],2014:e[2014],2015:e[2015],2016:e[2016],2017:e[2017]}}}},{key:"physHealthDays",value:function(e){return{stateId:e.stateId,state:this.getStateName(e),numDaysPerYear:{2011:e[2011],2012:e[2012],2013:e[2013],2014:e[2014],2015:e[2015],2016:e[2016],2017:e[2017]}}}},{key:"genHealthDays",value:function(e){return{stateId:e.stateId,state:this.getStateName(e),scorePerYear:{2011:e[2011],2012:e[2012],2013:e[2013],2014:e[2014],2015:e[2015],2016:e[2016],2017:e[2017]}}}},{key:"render",value:function(){var e=this,t=this.state,a=t.usTopoJson,n=t.sampleData,i=t.mentalHealth,l=t.physHealth,s=t.genHealth,o=t.statePerCapita,c=t.phiPerEnrollee,u=t.USstateNames,h=t.filteredBy,p=i.slice(0,51).map(function(t){return e.mentalHealthDays(t)}).filter(function(e){return""!==e.state}),f=l.slice(0,51).map(function(t){return e.physHealthDays(t)}).filter(function(e){return""!==e.state}),y=s.slice(0,51).map(function(t){return e.genHealthDays(t)}).filter(function(e){return""!==e.state}),g=n.map(function(t){return e.stateValue(t)}).filter(function(e){return""!==e.state}),S=o.map(function(t){return e.statePerCapitaValue(t)}).filter(function(e){return""!==e.state}),v=c.map(function(t){return e.phiPerEnrolleeValue(t)}).filter(function(e){return""!==e.state}),b="all";"*"!==h.USstate&&(b=this.state.filteredBy.USstate);var E=[],x=(S.map(function(e){return d.a.each(e.years,function(e){E.push({year:e})})}),[]);d.a.map(S,function(e){var t=Object.values(e.years),a=m.i(t,function(e){return e});x.push({state:e.state,mean:a})});var k=d.a.sortBy(x,["mean","state"]),j=m.i(E,function(e){return e.year}),U=[],P=(v.map(function(e){return d.a.each(e.years,function(e,t){U.push({year:e,test:t})})}),m.i(U,function(e){return e.year})),w=[];d.a.map(p,function(e){var t=Object.values(e.numDaysPerYear),a=m.i(t,function(e){return e});w.push({state:e.state,mean:a})});var I=0;I=m.i(w,function(e){return e.mean});var D=[];d.a.map(f,function(e){var t=Object.values(e.numDaysPerYear),a=m.i(t,function(e){return e});D.push({state:e.state,mean:a})});var N=0;N=m.i(D,function(e){return e.mean});var z=m.i(S,function(e){return e.percentChange}),H=m.i(v,function(e){return e.percentChange});return r.a.createElement("div",{className:"App container",id:"main"},r.a.createElement("h1",{style:{marginBottom:"15px"}},"Health Care Spending and Healthiness in the US"),r.a.createElement("p",{style:{marginTop:"15px",width:"1000px"}},r.a.createElement("strong",null,"Project Summary: "),"The project attempts to show the relationship between health care spending and overall healthiness using data from the Behavioral Risk Factor Surveillance System (BRFSS) and from the Centers for Medicare and Medicaid Services (CMS). The visualization shows the comparison of health and spending across the US and for each state."),r.a.createElement(O,{data:n,updateDataFilter:this.updateDataFilter}),r.a.createElement("svg",{width:"1000",height:"550"},r.a.createElement("rect",{x:0,y:0,width:1e3,height:550,fill:"#fcf8f5"}),r.a.createElement(C,{usTopoJson:a,USstateNames:u,x:0,y:50,width:500,height:400,zoomToState:b,values:g,updateDataFilter:this.updateDataFilter,onHover:this.onHover,stateData:this.state.label,statePerCapitaValues:S,phiPerEnrolleeValues:v,sortedCapitas:k}),r.a.createElement("rect",{x:0,y:425,width:500,height:125,fill:"#dae3df"}),r.a.createElement("rect",{x:"500",y:"0",width:"500",height:"600",style:{fill:"#f6f0ea"}}),r.a.createElement(F,{zoomToState:b,values:g,mentalHealthDays:p,physHealthDays:f,genHealthScore:y,statePerCapitaValues:S,onStatUpdate:this.onStatUpdate,USperCapitaMean:j,USmentalMean:I>0?I.toFixed(2):I,USphysicalMean:N>0?N.toFixed(2):0,phiPerCapitaMean:P,sortedCapitas:k,phiMeanPercentage:H,capitaMeanPercentage:z}),r.a.createElement("rect",{x:1,y:1,width:500,height:40,fill:"#023446"}),r.a.createElement("text",{x:15,y:28,fill:"#abe2c9",fontSize:20,fontWeight:"500"},"Healthcare Spending in the US"),r.a.createElement("rect",{x:0,y:0,width:1e3,height:550,fill:"none",stroke:"black"}),r.a.createElement("text",{x:15,y:450,className:"stateData",fontWeight:"bold"},"Health Care Spending by State (2000-2017)"),r.a.createElement("text",{x:15,y:472,className:"stateData"},"State: ",this.state.stateLabel),r.a.createElement("text",{x:15,y:495,className:"stateData",fontWeight:"bold",fontSize:13},"State Medicaid"),r.a.createElement("text",{x:15,y:515,className:"stateData"},"Ave. Yearly Increase: ",this.state.perCapitaChange,"%"),r.a.createElement("text",{x:15,y:535,className:"stateData"},"Per Capita: $",this.state.perCapitaMean),r.a.createElement("text",{x:250,y:495,className:"stateData",fontWeight:"bold",fontSize:13},"Private Health Insurance"),r.a.createElement("text",{x:250,y:515,className:"stateData"},"Ave. Yearly Increase: ",this.state.phiPerEnrolleeChange,"%"),r.a.createElement("text",{x:250,y:535,className:"stateData"},"Per Capita: $",this.state.phiPerEnrolleeMean)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.ea215bc5.chunk.js.map