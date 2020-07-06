(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[3],{309:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",photoBlock:"ProfileInfo_photoBlock__3-kiv",userInfo:"ProfileInfo_userInfo__3hlxg",photo:"ProfileInfo_photo__3YYCg",customFileUpload:"ProfileInfo_customFileUpload__11Y2d",mainPhoto:"ProfileInfo_mainPhoto__1Fgjo",contact:"ProfileInfo_contact__1N3gp"}},310:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",field:"MyPosts_field__1WcIv",fieldForm:"MyPosts_fieldForm__1PpTn",posts:"MyPosts_posts__3tZ1c"}},311:function(e,t,a){e.exports={item:"Post_item__ihtu9"}},312:function(e,t,a){"use strict";a.r(t);var n=a(37),l=a(38),o=a(40),r=a(39),s=a(0),c=a.n(s),i=a(101),u=a(309),m=a.n(u),p=a(70),f=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],l=a[1],o=Object(s.useState)(e.status),r=Object(i.a)(o,2),u=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onClick:function(){l(!0)}},e.status||"change status")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(u)},value:u})))},d=a(69),E=a.n(d),b=a(27),h=a(133),v=a(50),g=a.n(v),P=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:g.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(b.c)("Full name","fullName",[],b.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(b.c)("","lookingForAJob",[],b.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(b.c)("My professional skills","lookingForAJobDescription",[],b.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(b.c)("About me","aboutMe",[],b.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(b.c)(e,"contacts."+e,[],b.a)))}))))})),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"}}]},name:"camera",theme:"outlined"},_=a(21),O=function(e,t){return s.createElement(_.a,Object.assign({},e,{ref:t,icon:k}))};O.displayName="CameraOutlined";var j=s.forwardRef(O),y=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",{className:m.a.userInfo},c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return c.a.createElement(w,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"Edit profile")))},w=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},N=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),d=Object(i.a)(u,2),b=d[0],h=d[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("div",{className:m.a.photoBlock},c.a.createElement("div",{className:m.a.photo},c.a.createElement("img",{src:t.photos.large||E.a,className:m.a.mainPhoto}),l&&c.a.createElement("label",{className:m.a.customFileUpload},c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),c.a.createElement(j,null)))),c.a.createElement("div",null,c.a.createElement("span",null,t.fullName),c.a.createElement(f,{status:a,updateStatus:n}),b?c.a.createElement(P,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){h(!1)}))}}):c.a.createElement(y,{goToEditMode:function(){h(!0)},profile:t,isOwner:l})))},S=a(59),I=a(42),F=a(310),M=a.n(F),A=a(311),C=a.n(A),B=function(e){return c.a.createElement("div",{className:C.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount))},x=a(95),T=a(71),U=Object(T.a)(10),J=Object(h.a)({form:"ProfileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit,className:M.a.field},c.a.createElement("div",null,c.a.createElement(x.a,{className:M.a.fieldForm,name:"newPostText",component:b.b,placeholder:"Post message",validate:[T.b,U]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),z=c.a.memo((function(e){var t=Object(I.a)(e.posts).reverse().map((function(e){return c.a.createElement(B,{key:e.id,message:e.message,likesCount:e.likesCount})}));c.a.createRef();return c.a.createElement("div",{className:M.a.postsBlock},c.a.createElement("h2",null,"My posts"),c.a.createElement(J,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:M.a.posts},t))})),H=a(18),V=Object(H.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(S.a)(t))}}}))(z),D=function(e){return c.a.createElement("div",null,c.a.createElement(N,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(V,null))},Y=a(10),L=a(9),R=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(L.d)(Object(H.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),Y.g)(R)}}]);
//# sourceMappingURL=3.de3b9564.chunk.js.map