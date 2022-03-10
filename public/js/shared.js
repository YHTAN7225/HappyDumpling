export const shared = {
    methods : {
      log : function(text="", input){
        if(text){
          console.log(text, input);
        }else{
          console.log(input);
        }
        return true;
      },
        setLanguage(lang){
          this.$global.commit("setLanguage", lang)
          this.$i18n.locale = lang;
        },
        changeView: function(){
          console.log(window.innerWidth, this.$global.state.setting.isMobileView)
          if(window.innerWidth < 500){
            if(!this.$global.state.setting.isMobileView){
              this.$global.commit("setIsMobileView", true);
            }
          }else{
            if(this.$global.state.setting.isMobileView){
              this.$global.commit("setIsMobileView", false);
            }
          }
        },
        showLoading: function(value){    
          if(value){
            this.$global.commit("setShowLoading", true);
            var self = this;
            var loadingTimeout = setTimeout(() => {
              if(self.$global.state.setting.showLoading){
                self.$global.commit("setShowLoading", false);
                console.log("Timeout");
              }
            }, 3000);
          }else{
            this.$global.commit("setShowLoading", false);
          }
        },
        hoverEnter : function(e, className){
          e.target.classList.add(className);
        },
        hoverExit : function(e, className){
          e.target.classList.remove(className);
        },
        goToLink : function(link, newTab=true){
          const a = document.createElement("a");
          a.href = link;
          a.target = newTab ? "_blank" : "_self";
          a.click();
          a.remove();
        }
    }
}