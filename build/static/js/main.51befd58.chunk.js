(this["webpackJsonpyoutube-api"]=this["webpackJsonpyoutube-api"]||[]).push([[0],{47:function(e){e.exports=JSON.parse('{"youtubeKeys":{"apiKey":"AIzaSyAPvYi-OyDU55vz7r4c4Z_DgWBqbr7_-L8"}}')},51:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=a(28),o=a.n(l),s=a(41),u=a(20),m=a(21),p=a(26),d=a(25),h=a(111),v=a(106),b=a(112),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.handleChange=function(t){e.setState({searchTerm:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchTerm;(0,e.props.onFormSubmit)(a)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(b.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),a}(r.a.Component),y=a(110),E=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(v.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(y.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle2"},t.snippet.description)))},g=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(v.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(y.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return r.a.createElement(g,{onVideoSelect:a,key:t,video:e})}));return r.a.createElement(h.a,{container:!0,spacing:10},n)},w=a(46),x=a.n(w).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),O=a(47).youtubeKeys.apiKey,V=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n,r,i,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("search",{params:{part:"snippet",maxResults:5,key:"".concat(O),q:a}});case 2:for(n=t.sent,r=n.data.items,i=[],c=0;c<r.length;c++)"youtube#channel"!==r[c].id.kind&&i.push(r[c]);e.setState({videos:i,selectedVideo:i[0]});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit("nashville software school")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return r.a.createElement(h.a,{justify:"center",container:!0,spacing:10},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(h.a,{container:!0,spacing:10},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(f,{onFormSubmit:this.handleSubmit})),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(E,{video:t})),r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(S,{videos:a,onVideoSelect:this.onVideoSelect})))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(V,null),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.51befd58.chunk.js.map