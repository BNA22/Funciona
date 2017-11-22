!function(e){angular.module("custom.controllers",[]),app.controller("LoginController",["$scope","$http","$location","$rootScope","$window","$state","$translate","Notification",function(e,o,n,s,t,a,r,i){function c(e,o,n,t){"undefined"!=typeof Storage&&(sessionStorage.setItem("_u",JSON.stringify(e)),s.session=JSON.parse(sessionStorage._u)),a.go("home")}function l(e,o,n,s){var t=401==o?r.instant("Login.view.invalidPassword"):e;i.error(t)}app.registerEventsCronapi(e,r),s.http=o,s.Notification=i,e.message={},e.login=function(){e.message.error=void 0;var n={username:e.username.value,password:e.password.value};o({method:"POST",url:"auth",data:$.param(n),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(c).error(l)}}]),app.controller("HomeController",["$scope","$http","$rootScope","$state","$translate","Notification",function(e,o,n,s,t,a){app.registerEventsCronapi(e,t),n.http=o,n.Notification=a,e.message={},e.selecionado={valor:1},e.refreshToken=function(){o({method:"GET",url:"auth/refresh"}).success(function(o,n,s,t){console.log("revive :",new Date(o.expires)),sessionStorage.setItem("_u",JSON.stringify(o)),setTimeout(function(){e.refreshToken()},18e5)}).error(function(){})},n.session=sessionStorage._u?JSON.parse(sessionStorage._u):null,n.session?(n.myTheme=n.session.user.theme,e.$watch("myTheme",function(e){void 0!==e&&""!==e&&$("#themeSytleSheet").attr("href","plugins/cronapp-framework-js/css/themes/"+e+".min.css")}),n.session.token&&e.refreshToken()):(s.go("login"),sessionStorage.removeItem("_u")),n.logout=function(){n.session={},"undefined"!=typeof Storage&&sessionStorage.removeItem("_u"),s.go("login")},e.changePassword=function(){function e(e,o,n,r){a.info(t.instant("Home.view.passwordChanged")),s()}function n(e,o,n,s){var r=o>=401?t.instant("Home.view.InvalidPassword"):e;a.error(r)}function s(){oldPassword.value="",newPassword.value="",newPasswordConfirmation.value="",$("#modalPassword").modal("hide")}var r={oldPassword:oldPassword.value,newPassword:newPassword.value,newPasswordConfirmation:newPasswordConfirmation.value};o({method:"POST",url:"changePassword",data:$.param(r),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(e).error(n)};var r=function(){var e=$(this);e.closest(".sub-menu").length>0&&e.closest(".navbar-nav").collapse("hide")};e.$on("$viewContentLoaded",function(){var e=$(".navbar-nav");e.off("click","a",r),e.on("click","a",r)}),e.themes=["cerulean","cosmo","cyborg","darkly","flatly","journal","lumen","paper","readable","sandstone","simplex","slate","spacelab","superhero","united","yeti"],e.changeTheme=function(e){function s(o,s,t,a){n.session.theme=e,n.session.user.theme=e,sessionStorage.setItem("_u",JSON.stringify(n.session))}function t(e,o,n,s){var t=e;a.error(t)}if(void 0!==e){$("body").append('<div id="transition" />'),$("#transition").css({"background-color":"#FFF",zIndex:1e5,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",overflow:"hidden",display:"block"}),$("#transition").fadeIn(800,function(){$("#themeSytleSheet").attr("href","plugins/cronapp-framework-js/css/themes/"+e+".min.css"),n.myTheme=e,$("#transition").fadeOut(1e3,function(){$("#transition").remove()})});var r={theme:e};o({method:"POST",url:"changeTheme",data:$.param(r),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(s).error(t)}}}])}(app),window.safeApply=function(e){var o=this.$root.$$phase;"$apply"==o||"$digest"==o?e&&"function"==typeof e&&e():this.$apply(e)};