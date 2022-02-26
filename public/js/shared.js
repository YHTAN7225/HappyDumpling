export const shared = {
    methods : {
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
          }
    }
}