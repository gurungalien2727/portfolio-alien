(this["webpackJsonpalien-portfolio"]=this["webpackJsonpalien-portfolio"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/shipt.10fc77c2.png"},17:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),l=a.n(i),s=a(2),c=a.n(s),o=r.a.memo((function(){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("nav",{className:"navbar"},r.a.createElement(c.a,{to:"#experience"},"Work Experience"),r.a.createElement(c.a,{to:"#projects"},"Projects"),r.a.createElement(c.a,{to:"#contact"},"Contact")))})),m=a(16),u=function(e){var t=e.text,a=e.minTypeSpeed,i=e.maxTypeSpeed,l=e.initDelay,s=e.className,c=Object(n.useState)(""),o=Object(m.a)(c,2),u=o[0],p=o[1];return Object(n.useEffect)((function(){!function(e,t,a,n){var r="",i=0;e.split("").forEach((function(e){i+=Math.random()*(a-t)+t,setTimeout((function(){p(r+=e)}),n+i)}))}(t,a,i,l)}),[t,a,i,l]),r.a.createElement("div",{className:s},u,r.a.createElement("span",null,"\xa0"))};u.defaultProps={text:"Give me something to type!",minTypeSpeed:50,maxTypeSpeed:90,initDelay:700};var p=r.a.memo(u),d=r.a.memo((function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement(p,{className:"hero-title",text:"Alien Gurung"}),r.a.createElement("div",{className:"hero-description"},"Currently studying at Troy University, I'm looking for internships, which would allow me to first refine my technical skills and my educational qualities.",r.a.createElement("br",null),"Check out my ",r.a.createElement(c.a,{to:"#projects"},"side-projects")," ","below."))})),h=function(e){var t=e.statements;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(g,{statement:e,key:t})})),r.a.createElement("div",{className:"statement"},r.a.createElement("div",{className:"input-statement"},r.a.createElement("span",null,"\xa0"))))},g=function(e){var t=e.statement;return r.a.createElement("div",{className:"statement"},r.a.createElement("div",{className:"input-statement"},t.input),r.a.createElement("div",{className:"return-statement",dangerouslySetInnerHTML:{__html:t.return}}))},f=r.a.memo((function(e){var t=e.statements;return r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"terminal"},r.a.createElement("div",{className:"terminal-header"},r.a.createElement("div",{className:"header-button red"}),r.a.createElement("div",{className:"header-button yellow"}),r.a.createElement("div",{className:"header-button green"})),r.a.createElement("div",{className:"terminal-window"},r.a.createElement(h,{statements:t}))))})),v=a(5),E=function(e){var t=e.skill;return r.a.createElement("span",{className:"project-skill"},t)},k=function(e){var t=e.skills;return r.a.createElement("div",{className:"project-skills"},t.map((function(e,t){return r.a.createElement(E,{skill:e,key:t})})))},b=function(e){var t=e.image,a=e.title,n=e.description,i=e.skills;e.links;return r.a.createElement("div",{className:"project-card"},r.a.createElement("img",{alt:"project",className:"project-image",src:t}),r.a.createElement("div",{className:"project-background"}),r.a.createElement("div",{className:"project-content"},r.a.createElement("h3",null,a),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(k,{skills:i})))},w=r.a.memo((function(e){var t=e.projects;return r.a.createElement("div",{className:"projects-container"},t.map((function(e){return r.a.createElement(b,{title:e.title,description:e.description,skills:e.skills,links:e.links,image:e.image,key:e.title})})))})),N=function(e){var t=e.skill;return r.a.createElement("span",{className:"project-skill"},t)},y=function(e){var t=e.skills;return r.a.createElement("div",{className:"project-skills"},t.map((function(e,t){return r.a.createElement(N,{skill:e,key:t})})))},j=function(e){var t=e.links,a=t.github,n=t.preview;return r.a.createElement("div",{className:"project-links"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"project-link secondary"},r.a.createElement(v.a,{icon:["fab","github"]})," View Source"),""!==n&&r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"project-link"},"Watch Video"))},S=function(e){var t=e.image,a=e.title,n=e.description,i=e.skills,l=e.links;return r.a.createElement("div",{className:"project-card"},r.a.createElement("img",{alt:"project",className:"project-image",src:t}),r.a.createElement("div",{className:"project-background"}),r.a.createElement("div",{className:"project-content"},r.a.createElement("h3",null,a),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(y,{skills:i}),r.a.createElement(j,{links:l})))},A=r.a.memo((function(e){var t=e.projects;return r.a.createElement("div",{className:"projects-container"},t.map((function(e){return r.a.createElement(S,{title:e.title,description:e.description,skills:e.skills,links:e.links,image:e.image,key:e.title})})))})),C=function(){return r.a.createElement("div",{className:"contact-links"},r.a.createElement("span",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"mailto:gurungalien2727@gmail.com"},"gurungalien2727@gmail.com")),r.a.createElement("span",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/aliengurung"},"LinkedIn")),r.a.createElement("span",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/gurungalien2727"},"Github")))},x=r.a.memo((function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,"Made by Alien Gurung \xa9 ",(new Date).getFullYear()))})),M=a(6),T=a.n(M),I=a(7),P=a.n(I),L=a(8),_=a.n(L),D=a(9),G=a.n(D),J=[{title:"Chef It Up",description:"Chef It Up is a cross platform recipe search based Mobile app that suggests the list of dishes to the user based on the ingredients user input; allows user to share post with image, ingredients and instructions to prepare certain dish and also get feedback from other users.",skills:["C#","ASP.NET","Xamarin","MSSQL","Microsoft Azure"],image:"",links:{github:"https://github.com/gurungalien2727/chefitup_app",preview:"https://vimeo.com/503667080"}},{title:"Prevent Corona",description:"Prevent Corona is a web application that allows patients with COVID-19 symptoms to register about their health status and view the number of people with COVID-19 symptoms in the area within the application This application also has an interactive Chabot to answer the users\u2019 queries about the virus.",skills:["React","Node","Express","MongoDB","DialogFlow API","Google Maps API"],image:T.a,links:{github:"https://github.com/gurungalien2727/vandyHack2020",preview:"https://devpost.com/software/prevent-corona"}},{title:"Virtual Queue",description:"Virtual Queue is an android application built to allocate the number to each customer upon entering the Geo-fence around the store and to help customer keep shop safely by keeping them in a virtual queue and eventually reduce the COVID-19 transmission.",skills:["Java","Android Studio","FireBase","Geofencing API"],image:"",links:{github:"https://github.com/gurungalien2727/hackShipIt",preview:"https://devpost.com/software/shopsafe-fdc1xo"}},{title:"Covid-19 Map",description:"Covid-19 Map is a web application to show the impact of corona virus all over the world with the map and also shows the table that consists of the countries and their cases.",skills:["HTML","CSS","Bootstrap","JavaScript","JQuery"],image:P.a,links:{github:"https://github.com/gurungalien2727/COVID-19-MAP",preview:"https://www.youtube.com/watch?v=hfO7AzF5x30&ab_channel=AlienGurung"}},{title:"Ecommerce Website",description:"Built an e-commerce web application where users could buy and sell products and also perform live search for products; added a scripted bot for users to provide information about the products.",skills:["HTML","CSS","Javascript","JQuery","Ajax","PHP","MYSQL"],image:G.a,links:{github:"https://github.com/gurungalien2727/e-commApp",preview:"https://www.youtube.com/watch?v=Jda1mqEz8PM&ab_channel=AlienGurung"}},{title:"Platypus",description:"Platypus is an android app for Data Scientists thats helps in outsourcing the task of labeling to crowd-oriented environments. This android app helps in presenting training data in simple manner to help users identify, classify, or otherwise comment on images, text, objects, and other presented entities.",skills:["Java","Andriod Studio","SQLite","Cognitive Vision API"],image:_.a,links:{github:"https://github.com/gurungalien2727/HackGSU2019",preview:"https://devpost.com/software/platypus"}}],Q=a(13),V=[{title:"Shipt",description:"Loading",skills:["Javascript","Typescript","React.js","Next.js","React Native","Detox","GraphQL","Apollo Client"],image:a.n(Q).a,links:{github:"",preview:""}}],H=[{input:"Alien.currentLocation",return:'"Montgomery, Alabama"'},{input:"Alien.contactInfo",return:'["<a href="mailto:gurungalien2727@gmail.com">gurungalien2727@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/aliengurung/">LinkedIn</a>", "<a rel="noopener" href="https://github.com/gurungalien2727">Github</a>"]'},{input:"Alien.resume",return:'"<a rel="noopener" href="https://drive.google.com/file/d/1QY9oQfInyTSPmTDrA1edVfgjwWcEsNK_/view" target="_blank">aliengurung.pdf</a>"'},{input:"Alien.interests",return:'["Technology", "Soccer"]'},{input:"Alien.education",return:'"B.Sc. Computer Science - Troy University"'},{input:"Alien.skills",return:'["HTML5","CSS3","SQL","JavaScript", "Java", "C#","React", "Typescript", "NodeJS", "MSSQL", "MongoDB", "Git"]'}],O=(a(31),a(3)),B=a(14),U=a(15);O.b.add(B.a,U.a);var W=r.a.memo((function(){return r.a.createElement("div",{className:"container-lg"},r.a.createElement("div",{className:"home-container"},r.a.createElement(o,null),r.a.createElement(d,null),r.a.createElement(f,{statements:H}),r.a.createElement("h2",{id:"experience",className:"section-title"},"Work Experience"),r.a.createElement(w,{projects:V}),r.a.createElement("h2",{id:"projects",className:"section-title"},"Projects"),r.a.createElement(A,{projects:J}),r.a.createElement("div",{className:"background"}),r.a.createElement("h2",{id:"contact",className:"section-title"},"Contact me!"),r.a.createElement(C,null),r.a.createElement(x,null)))}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/pc.1b69cb1b.png"},7:function(e,t,a){e.exports=a.p+"static/media/ma.a54df30a.png"},8:function(e,t,a){e.exports=a.p+"static/media/pa.c7a2ff95.png"},9:function(e,t,a){e.exports=a.p+"static/media/ea.93d6a956.png"}},[[17,1,2]]]);
//# sourceMappingURL=main.23c5a8ed.chunk.js.map