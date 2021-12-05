export const shared = {
    methods : {
        setLanguage(lang){
            this.$global.commit("setLanguage", lang)
            this.$i18n.locale = lang;
        }
    }
}