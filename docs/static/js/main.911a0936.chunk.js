(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,a,t){},24:function(e,a,t){e.exports=t(37)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),i=t.n(r),c=t(5),o=t(17),m=t(18),s=t(22),u=t(19),d=t(9),p=t(23),E=t(6);t(11);var g=function(){return l.a.createElement(c.b,{to:"/"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"header__title"},"Hello world! "),l.a.createElement("p",{className:"header__subtitle"},"This is my portfolio.")))},f=(t(34),function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("nav",{className:"landing__navigation"},l.a.createElement("ul",{className:"landing__list"},l.a.createElement(c.b,{to:"/about",replace:!0},l.a.createElement("li",{className:"landing__about"},l.a.createElement("img",{src:"../images/photoCV.jpg",alt:"About",className:"landing__about--image"}))),l.a.createElement(c.b,{to:"/skills"},l.a.createElement("li",{className:"landing__skills"},"Skills")),l.a.createElement("li",{className:"landing__projects"},"Projects"),l.a.createElement("li",{className:"landing__contact"},"Get in touch!"))))}),h=(t(35),function(){return l.a.createElement("div",{className:"about"},l.a.createElement("img",{src:"../images/photoCV.jpg",alt:"About",className:"about__image"}),l.a.createElement("h2",{className:"about__title"},"About me!"),l.a.createElement("section",{className:"about__text"},l.a.createElement("p",{className:"about__paragraph"},"My imagination, creativity, multipotentiality and initiative moves me to research and adopt ",l.a.createElement("br",null),l.a.createElement("strong",null,"new forms of communication"),"."),l.a.createElement("p",{className:"about__paragraph"},"My experience extends from journalism to design and multimedia production, from webdoc to VR and also data visualization, learning by gamification systems and transmedia projects management and interactive experiences UX analytics."),l.a.createElement("p",{className:"about__paragraph"},"I love to explore my attention to details in User Experience and Interfaces and always trying ",l.a.createElement("br",null),l.a.createElement("strong",null,"to make it better"),"."),l.a.createElement("p",{className:"about__paragraph"},"I'm a hackathon lover who has lived interdisciplinar colective experiences around the globe exploring paths to new knowledge, learning and incorporating new skills in",l.a.createElement("br",null),"community as my passion."),l.a.createElement("p",{className:"about__paragraph"},"Currently, I'm exploring my potential as",l.a.createElement("strong",null," Frontend Developer"),".")),l.a.createElement("a",{href:"https://drive.google.com/open?id=1ikcsvqZWBxxD7Ed3hCwQjztunjPQOs4Z",className:"about__link"},"Go to CV"),l.a.createElement("a",{href:"./storymap.js",className:"about__link"},"Visit StoryMap"))}),b=function(e){var a=e.frontendSkills;return l.a.createElement("div",null,l.a.createElement("h3",null,"Frontend"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.description))}))))},_=function(e){var a=e.uxSkills;return l.a.createElement("div",null,l.a.createElement("h3",null,"UX Designer"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.description))}))))},v=function(e){var a=e.agileSkills;return l.a.createElement("div",null,l.a.createElement("h3",null,"Agile"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.description))}))))},k=function(e){var a=e.skills,t=a.frontend,r=a.UX,i=a.Agile,c=a.Design,o=a.Communication,m=a.MultimediaProduction,s=a.Education;return console.log(t,r,i,c,o,m,s),void 0===t?l.a.createElement("div",null,l.a.createElement("img",{src:"../images/loader.gif",alt:"Loading...",className:"loader"})):l.a.createElement("div",null,l.a.createElement("h2",null,"Skills"),l.a.createElement(n.Fragment,null,l.a.createElement(b,{frontendSkills:t}),l.a.createElement(_,{uxSkills:r}),l.a.createElement(v,{agileSkills:i})))},y=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"",alt:"Twitter @4mandapadilla"}),l.a.createElement("img",{src:"",alt:"GitHub @amandapadilla"}),l.a.createElement("img",{src:"",alt:"LinkedIn amandapadillasantiago"}),l.a.createElement("img",{src:"",alt:"E-mail amandapadillasantiago@gmail.com"}))},N=(t(36),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).getPortfolioData=function(){fetch("https://my-json-server.typicode.com/amandapadilla/porfoliodatafakeAPIserver/db").then((function(e){return e.json()})).then((function(a){var t=a.skills[0];e.setState({skills:t,projects:a.projects})}))},e.state={skills:[],projects:[],filter:""},e.getPortfolioData=e.getPortfolioData.bind(Object(d.a)(e)),e}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getPortfolioData()}},{key:"render",value:function(){var e=this.state,a=e.skills,t=e.projects;return console.log(a,t),l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:f}),l.a.createElement(E.a,{exact:!0,path:"/about",component:h}),l.a.createElement(E.a,{exact:!0,path:"/skills/",render:function(){return l.a.createElement(k,{skills:a})}})),l.a.createElement(y,null))}}]),a}(l.a.Component));i.a.render(l.a.createElement(c.a,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.911a0936.chunk.js.map