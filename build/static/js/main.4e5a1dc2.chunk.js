(this["webpackJsonpuba-review-app"]=this["webpackJsonpuba-review-app"]||[]).push([[0],{35:function(e,a,t){e.exports=t(64)},40:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(33),c=t.n(r),s=(t(40),t(3)),m=t(1),o=t(13),i=t(7),d=t(8),u=t(10),p=t(9),E=t(12),v=t.n(E),h=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={firstname:"",lastname:"",email:"",password:"",confirmpassword:""},e.handleChange=function(a){e.setState(Object(o.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t=e.props.history,l=e.state,n=l.firstname,r=l.lastname,c=l.email,s=l.password;if(s===l.confirmpassword){var m={firstname:n,lastname:r,email:c,password:s};return v()({method:"post",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/newums.service/api/Account/SignUp",data:m,headers:{"X-ClientSecret":"/2vINOzySVTPjwae1UmxBouWH4g6/euBnNrBFmMoGyo="}}).then((function(e){localStorage.setItem("userToken",e.data.Data.Token),t.push("/pending")})).catch((function(e){console.log(e.response.data.ResponseMessage),alert(e.response.data.ResponseMessage)}))}alert("Password does not match")},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,a=e.firstname,t=e.lastname,l=e.email,r=e.password,c=e.confirmpassword;return n.a.createElement("div",{className:"main-top-intro"},n.a.createElement("div",{className:"bg-layer"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("header",null,n.a.createElement("div",{className:"login-logo-float"},n.a.createElement("h1",null,n.a.createElement(s.b,{className:"logo",to:"/home"},n.a.createElement("img",{src:"images/UBA-logo.svg",alt:"Logo of the United Bank for Africa"})))),n.a.createElement("div",{className:"clear"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"content-inner-info"},n.a.createElement("div",{className:"content-Expo-main"},n.a.createElement("h1",null,"Welcome to UBA Expo"),n.a.createElement("p",null,"Introducing our brand New UBA app. Download and experience for yourself.")))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"content-inner-info"},n.a.createElement("div",{className:"content-login-right-main"},n.a.createElement("h3",null,"Sign up"),n.a.createElement("div",{className:"form-w3ls-left-info"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"email",placeholder:"First Name",required:!0,value:a,name:"firstname",onChange:this.handleChange}),n.a.createElement("input",{type:"email",placeholder:"Last Name",value:t,name:"lastname",onChange:this.handleChange,required:!0}),n.a.createElement("input",{type:"email",placeholder:"Email Address",value:l,name:"email",onChange:this.handleChange,required:!0}),n.a.createElement("input",{type:"password",placeholder:"Create Password",value:r,name:"password",onChange:this.handleChange,required:!0}),n.a.createElement("input",{type:"password",placeholder:"Retype Password",value:c,name:"confirmpassword",onChange:this.handleChange,required:!0}),n.a.createElement("div",{className:"bottom"},n.a.createElement("button",{className:"btn",type:"submit"},"Register")))))),n.a.createElement("br",null),n.a.createElement("p",{style:{color:"white"}},"Have an account? ",n.a.createElement(s.b,{to:"/",style:{color:"white",fontWeight:"bold"}},"SignIn")))))))}}]),t}(l.Component),g=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"banner"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"top-menu"},n.a.createElement("span",{className:"menu"}),n.a.createElement("ul",null,n.a.createElement("li",{className:"active"},n.a.createElement("a",{href:"index.html"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#features"},"Features")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#overview"},"Overview")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#how-it-works"},"How it works")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#media"},"Media")),n.a.createElement(s.b,{className:"view hvr-bounce-to-left",to:"/"},"LOG OUT"))),n.a.createElement("div",{className:"logo wow fadeInLeft","data-wow-delay":"0.5s"},n.a.createElement(s.b,{to:"/feedback"},n.a.createElement("img",{src:"images/UBA-Logo.svg",alt:"United Bank for Africa Logo"}))),n.a.createElement("div",{className:"clearfix"})),n.a.createElement("div",{className:"banner-info"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-5 banner-text wow fadeInRight","data-wow-delay":"0.5s"},n.a.createElement("h1",null,"Banking Experience just got better!"),n.a.createElement("p",null,"Introducing our brand New UBA app. Download and experience for yourself."),n.a.createElement("a",{className:"google-play",href:" "},n.a.createElement("img",{src:"images/google-play.svg",alt:"Google Play store"})),n.a.createElement("a",{className:"apple-store",href:" "},n.a.createElement("img",{src:"images/apple-store.svg",alt:"App store"}))),n.a.createElement("div",{className:"col-md-6 banner-pic wow fadeInLeft","data-wow-delay":"0.5s"},n.a.createElement("img",{src:"images/uba-phone-app.png",alt:"UBA App"})),n.a.createElement("div",{className:"clearfix"})))),n.a.createElement("div",{id:"features",className:"features"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"features-head"},n.a.createElement("h4",null,"Amazing Features"),n.a.createElement("h3",null,"A simple, proven way to boost your team performance.")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"features-section wow fadeInRight","data-wow-delay":"0.5s"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 feature-grid"},n.a.createElement("div",{className:"feature-grid-border"},n.a.createElement("img",{className:"wow bounceIn uba-movie-roll","data-wow-delay":"0.4s",src:"images/movie-roll.svg",alt:""}),n.a.createElement("p",null,"Savings Account"),n.a.createElement("div",{className:"movie-roll-spacer"}))),n.a.createElement("div",{className:"col-md-3 feature-grid"},n.a.createElement("div",{className:"feature-grid-border"},n.a.createElement("img",{className:"wow bounceIn uba-movie-roll","data-wow-delay":"0.4s",src:"images/movie-roll.svg",alt:""}),n.a.createElement("p",null,"Business Account"),n.a.createElement("div",{className:"movie-roll-spacer"}))),n.a.createElement("div",{className:"col-md-3 feature-grid"},n.a.createElement("div",{className:"feature-grid-border"},n.a.createElement("img",{className:"wow bounceIn uba-movie-roll","data-wow-delay":"0.4s",src:"images/movie-roll.svg",alt:""}),n.a.createElement("p",null,"UBA Account-Leo"),n.a.createElement("div",{className:"movie-roll-spacer"}))),n.a.createElement("div",{className:"col-md-3 feature-grid"},n.a.createElement("div",{className:"feature-grid-border"},n.a.createElement("img",{className:"wow bounceIn uba-movie-roll","data-wow-delay":"0.4s",src:"images/movie-roll.svg",alt:""}),n.a.createElement("p",null,"Magic Banking"),n.a.createElement("div",{className:"movie-roll-spacer"})))),n.a.createElement("div",{className:"clearfix"}))))),n.a.createElement("div",{id:"overview",className:"about"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"about-top"},n.a.createElement("div",{className:"col-md-6 about-device wow fadeInLeft","data-wow-delay":"0.5s"},n.a.createElement("img",{src:"images/phnDouble1.png",alt:""})),n.a.createElement("div",{className:"col-md-6 about-device-info wow fadeInRight","data-wow-delay":"0.5s"},n.a.createElement("div",{className:"device-text"},n.a.createElement("h4",null,"Great Banking App"),n.a.createElement("h3",null,"Smart and Secure Mobile Banking"),n.a.createElement("p",null,"Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. ")),n.a.createElement("div",{className:"about-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"abt1"}),"Top-notch Security"),n.a.createElement("li",null,n.a.createElement("span",{className:"abt2"}),"Personal Financial Manager"),n.a.createElement("li",null,n.a.createElement("span",{className:"abt3"}),"Lifestyle"),n.a.createElement("li",null,n.a.createElement("span",{className:"abt4"}),"4 Themes Variance")))),n.a.createElement("div",{className:"clearfix"})))),n.a.createElement("div",{id:"how-it-works",className:"video"},n.a.createElement("img",{src:"images/playVideoIcon.png",alt:"A corporate ad video playing at the background"}),n.a.createElement("h1",{className:"spacer"},"See How It Works"),n.a.createElement("h3",{className:"spacer"},"Watch 60 seconds Video of how it works")),n.a.createElement("div",{id:"media",className:"pricing-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"pricing-text-bottom"},n.a.createElement("h4",null,"Latest News"),n.a.createElement("h3",null,"Find out what's happening on Open Banking")),n.a.createElement("div",{className:"price-section-grids wow fadeInRight","data-wow-delay":"0.5s"},n.a.createElement("div",{className:"tabbable-panel"},n.a.createElement("div",{className:"tabbable-line"},n.a.createElement("ul",{className:"nav nav-tabs"},n.a.createElement("li",{className:"active"},n.a.createElement("a",{href:"#tab_news","data-toggle":"tab"},"News ")),n.a.createElement("li",null,n.a.createElement("a",{href:"#tab_photos","data-toggle":"tab"},"Photos ")),n.a.createElement("li",null,n.a.createElement("a",{href:"#tab_videos","data-toggle":"tab"},"Videos "))),n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane active",id:"tab_news"},n.a.createElement("div",{className:"row uba-card-group"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"uba-card"},n.a.createElement("img",{className:"card-img-top",src:"images/blog-image.jpg",alt:"Blog"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"blog-para-1"},n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted"},"June 16, 2020")),n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted cat uba-blog-icon"},n.a.createElement("i",{className:"fa fa-comment-o"})," 22",n.a.createElement("span",{id:"uba-blog-icon-spacer"}),n.a.createElement("i",{className:"fa fa-heart-o"})," 211"))),n.a.createElement("h5",{className:"card-title"},"Keep it simple and beautiful, fun and functional"),n.a.createElement("p",{className:"card-text"}," Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("a",{className:"view-blog hvr-bounce-to-left",href:"."},"READ MORE")))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"uba-card"},n.a.createElement("img",{className:"card-img-top",src:"images/blog-image.jpg",alt:"Blog"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"blog-para-1"},n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted"},"June 16, 2020")),n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted cat uba-blog-icon"},n.a.createElement("i",{className:"fa fa-comment-o"})," 22",n.a.createElement("span",{id:"uba-blog-icon-spacer"}),n.a.createElement("i",{className:"fa fa-heart-o"})," 211"))),n.a.createElement("h5",{className:"card-title"},"Keep it simple and beautiful, fun and functional"),n.a.createElement("p",{className:"card-text"}," Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("a",{className:"view-blog hvr-bounce-to-left",href:"."},"READ MORE")))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"uba-card"},n.a.createElement("img",{className:"card-img-top",src:"images/blog-image.jpg",alt:"Blog"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"blog-para-1"},n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted"},"June 16, 2020")),n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted cat uba-blog-icon"},n.a.createElement("i",{className:"fa fa-comment-o"})," 22",n.a.createElement("span",{id:"uba-blog-icon-spacer"}),n.a.createElement("i",{className:"fa fa-heart-o"})," 211"))),n.a.createElement("h5",{className:"card-title"},"Keep it simple and beautiful, fun and functional"),n.a.createElement("p",{className:"card-text"}," Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("a",{className:"view-blog hvr-bounce-to-left",href:"."},"READ MORE")))))),n.a.createElement("div",{className:"tab-pane",id:"tab_photos"},n.a.createElement("p",null,"Howdy, I'm in Tab 2. Wating for Photos"),n.a.createElement("p",null,"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.")),n.a.createElement("div",{className:"tab-pane",id:"tab_videos"},n.a.createElement("p",null,"Howdy, I'm in Tab 3. Wating for videos"),n.a.createElement("p",null,"Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat"))))),n.a.createElement("div",{className:"clearfix"})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-10"},n.a.createElement("h1",null,"Get it now"),n.a.createElement("p",null,"Available on both App Store and Play Store."),n.a.createElement("div",{className:"wow fadeInRight","data-wow-delay":"0.5s"},n.a.createElement("a",{className:"google-play",href:" "},n.a.createElement("img",{src:"images/google-play.svg",alt:""})),n.a.createElement("a",{className:"apple-store",href:" "},n.a.createElement("img",{src:"images/apple-store.svg",alt:""})))),n.a.createElement("div",{className:"col-md-1"})))))}}]),t}(l.Component),f=t(22),b=t(16),N=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={themes:[],features:[],reviews:[],replies:{},message:[]},e.getReplies=function(a){var t=localStorage.getItem("userToken");v()({method:"get",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Replies/Search?reviewId=".concat(a),headers:{Authorization:"bearer ".concat(t)}}).then((function(t){t.data.Data.records.length>0&&e.setState({replies:Object(b.a)(Object(b.a)({},e.state.replies),{},Object(o.a)({},a,Object(f.a)(t.data.Data.records)))}),console.log(e.state.replies)})).catch((function(e){console.log(e)}))},e.createMessage=function(a){var t=localStorage.getItem("userToken");v()({method:"post",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Reviews/Create",headers:{Authorization:"bearer ".concat(t)}}).then((function(t){t.data.Data.records.length>0&&(console.log(t.data.Data.Comment),e.setState({message:Object(b.a)(Object(b.a)({},e.state.replies),{},Object(o.a)({},a,Object(f.a)(t.data.Data.records)))}))})).catch((function(e){console.log(e)}))},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=localStorage.getItem("userToken");v()({method:"get",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Features/Search?page=0",headers:{Authorization:"bearer ".concat(a)}}).then((function(a){console.log(a.data.Data),e.setState({features:a.data.Data.records})})).catch((function(e){console.log(e)})),v()({method:"get",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Themes/Search?page=0",headers:{Authorization:"bearer ".concat(a)}}).then((function(a){console.log(a.data.Data),e.setState({themes:a.data.Data.records})})).catch((function(e){console.log(e)})),v()({method:"get",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Reviews/Search",headers:{Authorization:"bearer ".concat(a)}}).then((function(a){console.log(a.data.Data),e.setState({reviews:a.data.Data.records})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"main-top-intro"},n.a.createElement("div",{className:"bg-layer"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("header",null,n.a.createElement("div",{className:"top-menu"},n.a.createElement("span",{className:"menu"}),n.a.createElement("ul",null,n.a.createElement("li",{className:"active"},n.a.createElement(s.b,{to:"/home"},"Home")),n.a.createElement(s.b,{className:"view hvr-bounce-to-left",to:"/"},"LOG OUT"))),n.a.createElement("div",{className:"login-logo-float"},n.a.createElement("h1",null,n.a.createElement(s.b,{to:"/home"}," ",n.a.createElement("div",{className:"logo"},n.a.createElement("img",{src:"images/UBA-logo.svg",alt:"United Bank for Africa Logo"}))," "))),n.a.createElement("div",{className:"clear"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"content-inner-info"},n.a.createElement("div",{className:"content-Expo-main"},n.a.createElement("h1",null,"Hi there, let's know your thoughts"),n.a.createElement("p",null,"Introducing our brand New UBA app. Download and experience for yourself.")))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"content-inner-info"},n.a.createElement("div",{className:"content-login-right-main"},n.a.createElement("h3",null,"Feedback Form"),n.a.createElement("div",{className:"form-w3ls-left-info"},n.a.createElement("form",{action:"#",method:"post"},n.a.createElement("select",{id:"themes",name:"Themes",className:"uba-feed-options"},n.a.createElement("option",{value:"SelectTheme"},"Select Viewed Theme"),this.state.themes.map((function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.name)}))),n.a.createElement("select",{id:"featue",name:"Features",className:"uba-feed-options"},n.a.createElement("option",{value:""},"Select a Feature"),this.state.features.map((function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.name)}))),n.a.createElement("div",{className:"uba-feed-message"},n.a.createElement("textarea",{rows:3,className:"form-control",placeholder:"Message",defaultValue:""})),n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{id:"inputAddList",type:"checkbox"}),n.a.createElement("span",null," Remember ")),n.a.createElement("div",{className:"bottom"},n.a.createElement("button",{className:"btn",type:"submit"},"Submit"))))))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"content-inner-info"},n.a.createElement("div",{className:"content-Expo-app"},n.a.createElement("img",{src:"images/feed-back-Img01.png",alt:"UBA App"})))),n.a.createElement("div",{className:"content-inner-info"},this.state.reviews.map((function(a){return n.a.createElement("div",{className:"content-Expo-main",key:a.id},n.a.createElement("p",null,"App Feature: ",a.AppFeature),n.a.createElement("p",null,"Comment: ",a.Comment),n.a.createElement("br",null),a.ImageUrl&&n.a.createElement("img",{src:a.ImageUrl,alt:"Images of feedback from App"}),n.a.createElement("br",null),n.a.createElement("button",{className:"btn",onClick:function(){return e.getReplies(a.id)}},"View Replies"),e.state.replies[a.id]&&n.a.createElement("div",{className:"content-Expo-main"},n.a.createElement("h3",null,"Replies:"),e.state.replies[a.id].map((function(e){return n.a.createElement("p",null,"Comment: ",e.Comment)}))),n.a.createElement("hr",null))}))))))))}}]),t}(l.Component),w=t(17),y=t.n(w),x=t(21),k=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={email:"",password:""},e.handleChange=function(a){e.setState(Object(o.a)({},a.target.name,a.target.value))},e.login=function(){var a=e.state,t={email:a.email,password:a.password};return v()({method:"post",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/newums.service/api/Account/SignIn",data:t,headers:{"X-ClientSecret":"/2vINOzySVTPjwae1UmxBouWH4g6/euBnNrBFmMoGyo="}})},e.checkValidUser=function(){var e=Object(x.a)(y.a.mark((function e(a){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,v()({method:"get",url:"http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Users/Detail?id=".concat(a)}).then((function(e){t="approved"===e.data.Data.userstatustext})).catch((function(e){console.log(e),t=!1}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.handleSubmit=function(){var a=Object(x.a)(y.a.mark((function a(t){var l,n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),l=e.props.history,a.prev=2,a.next=5,e.login();case 5:return n=a.sent,localStorage.setItem("userToken",n.data.Data.Token),a.next=9,e.checkValidUser(n.data.Data.User.Id);case 9:a.sent?(console.log("valid user, redirect to feedback page",e.props),l.push("/feedback")):(console.log("invalid user redirect to Pending page"),l.push("/pending")),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0.response.data.ResponseMessage),alert(a.t0.response.data.ResponseMessage);case 17:case"end":return a.stop()}}),a,null,[[2,13]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return n.a.createElement("div",null,n.a.createElement("div",{className:"main-top-intro"},n.a.createElement("div",{className:"bg-layer"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("header",null,n.a.createElement("div",{className:"login-logo-float"},n.a.createElement("h1",null,n.a.createElement(s.b,{className:"logo",to:"/home"},n.a.createElement("img",{src:"images/UBA-logo.svg",alt:"United Bank for Africa Logo"})))),n.a.createElement("div",{className:"clear"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"content-inner-info"},n.a.createElement("div",{className:"content-Expo-main"},n.a.createElement("h1",null,"Welcome to UBA Expo"),n.a.createElement("p",null,"Introducing our brand New UBA app. Download and experience for yourself.")))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"content-inner-info"},n.a.createElement("div",{className:"content-login-right-main"},n.a.createElement("h3",null,"Sign in"),n.a.createElement("div",{className:"form-w3ls-left-info"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{value:a,name:"email",onChange:this.handleChange,type:"email",placeholder:"Email Address",required:!0}),n.a.createElement("input",{value:t,name:"password",onChange:this.handleChange,type:"password",placeholder:"Password",required:!0}),n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{id:"inputAddList",type:"checkbox"}),n.a.createElement("span",null," Remember ")),n.a.createElement("div",{className:"bottom"},n.a.createElement("button",{className:"btn",type:"submit"},"Login"))))),n.a.createElement("br",null),n.a.createElement("p",{style:{color:"white"}},"Don't have an account? ",n.a.createElement(s.b,{to:"/Signup",style:{color:"white",fontWeight:"bold"}},"SignUp")))))))))}}]),t}(l.Component),A=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"banner-blog"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"top-menu"},n.a.createElement("span",{className:"menu"}),n.a.createElement("ul",null,n.a.createElement("li",{className:"active"},n.a.createElement("a",{href:"index.html"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#features"},"Features")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#overview"},"Overview")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#how-it-works"},"How it works")),n.a.createElement("li",null,n.a.createElement("a",{className:"scroll",href:"#media"},"Media")),n.a.createElement("a",{className:"view hvr-bounce-to-left",href:"login.html"},"LOG OUT"))),n.a.createElement("div",{className:"logo wow fadeInLeft","data-wow-delay":"0.5s"},n.a.createElement("a",{href:"index.html"},n.a.createElement("img",{src:"images/UBA-Logo.svg",alt:""}))),n.a.createElement("div",{className:"clearfix"})),n.a.createElement("div",{className:"blog-banner-info"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-7 banner-text wow fadeInRight","data-wow-delay":"0.5s"},n.a.createElement("h3",null,"Latest News"),n.a.createElement("h1",null,"Keep it simple and beautiful, fun and functional ")),n.a.createElement("div",{className:"col-md-4 banner-pic wow fadeInLeft","data-wow-delay":"0.5s"}),n.a.createElement("div",{className:"clearfix"})))),n.a.createElement("div",{className:"row uba-card-group00 uba-big-card-group"},n.a.createElement("div",{className:"col-md-2"}),n.a.createElement("div",{className:"col-md-5"},n.a.createElement("div",{className:"uba-big-card"},n.a.createElement("img",{className:"card-img-top",src:"images/blog-image.jpg",alt:"Blog Image 01"}),n.a.createElement("div",{className:"card-body00 big-card-body"},n.a.createElement("p",{className:"blog-para-1"},n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted"},"June 16, 2020")),n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted cat uba-blog-icon"},n.a.createElement("i",{className:"fa fa-comment-o"})," 22",n.a.createElement("span",{id:"uba-blog-icon-spacer"}),n.a.createElement("i",{className:"fa fa-heart-o"})," 211"))),n.a.createElement("h5",{className:"card-title"},"Keep it simple and beautiful, fun and functional"),n.a.createElement("p",{className:"card-text"}," Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("p",{className:"card-text"}," Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("p",{className:"card-text"}," Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("div",{className:"blog-card-dark"},n.a.createElement("span",{className:"blog-quote"},n.a.createElement("i",{className:"fa fa-quote-left","aria-hidden":"true"})),n.a.createElement("h4",null,"Keep it simple and beautiful, fun and functional, simple and beautiful, fun and functional")),n.a.createElement("p",{className:"card-text"}," Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content. Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content. Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("div",{className:"blog-bottom-spacer"})))),n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-2 blog-left-top-spacer"},n.a.createElement("div",{className:"blog-left-head"},n.a.createElement("h4",null,"Most Popular")),n.a.createElement("div",{className:"blog-left-articles"},n.a.createElement("h4",null,"All site communication and data transfer are secured and "),n.a.createElement("p",{className:"blog-para-1"},n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted"},"June 16, 2020")))),n.a.createElement("div",{className:"blog-left-articles"},n.a.createElement("h4",null,"All site communication and data transfer are secured and "),n.a.createElement("p",{className:"blog-para-1"},n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted"},"June 16, 2020")))))),n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-10"},n.a.createElement("h1",null,"Get it now"),n.a.createElement("p",null,"Available on both App Store and Play Store."),n.a.createElement("div",{className:"wow fadeInRight","data-wow-delay":"0.5s"},n.a.createElement("a",{className:"google-play",href:"#"},n.a.createElement("img",{src:"images/google-play.svg"})),n.a.createElement("a",{className:"apple-store",href:"#"},n.a.createElement("img",{src:"images/apple-store.svg"})))),n.a.createElement("div",{className:"col-md-1"})))))}}]),t}(l.Component),S=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"You have not been authorized! Once you have been approved, you will receive an email"))}}]),t}(l.Component);var O=function(){return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:k}),n.a.createElement(m.a,{path:"/home",component:g}),n.a.createElement(m.a,{path:"/feedback",component:N}),n.a.createElement(m.a,{path:"/signup",component:h}),n.a.createElement(m.a,{path:"/blog",component:A}),n.a.createElement(m.a,{path:"/pending",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4e5a1dc2.chunk.js.map