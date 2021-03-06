import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import langs from '../consts/localization';
import './splitter';

export const Languages = [
    'ru',
    ...Object.keys(langs)
]

export function loadTranslation(lang) {
    Vue.i18n.set(lang);
    localStorage.setItem('lang', lang);
    
    if(langs[lang]) {
        Vue.i18n.replace(lang, langs[lang]); 
    }
}

export function get(){
    return Vue.i18n.locale();
}

export function detect() {
    if(localStorage.getItem('lang'))
        return localStorage.getItem('lang');
        
    if (navigator.userLanguage)
        return navigator.userLanguage.split('-')[0];

    if (navigator.language)
        return navigator.language.split('-')[0];
    
    return 'en';
}

export default vuexI18n.plugin;
