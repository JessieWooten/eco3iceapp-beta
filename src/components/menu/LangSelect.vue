<template>
  <div style="width: 100%;">
    <select class="menu-lang-select" v-model="selectedLang" name="langSelect">
      <option disabled value="" style="display: none;">{{currentLanguage(locale)}}</option>
      <option v-for="(lang, index) in supportedLangs" :value="lang">{{currentLanguage(lang)}}</option>
    </select>
    <i class="f7-icons menu-icon menu-submit-button" :disabled="isDisabled"
    @click="setLang"
    >chevron_right</i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLang: '',
      locale: 'en'

    }
  },
  computed:{
    supportedLangs: function() {
      var availableLangs = [];
      var i18n = this.$i18n.messages;
  	  for(var key in i18n) {
  		    availableLangs.push(key)
  	  }
  	  return availableLangs;
    },
    isDisabled: function(){
      if(this.selectedLang === this.locale){
        return true;
      } else if(this.selectedLang === ''){
        return true;
      }else{
        return false;
      }
    }
  },
  methods:{
    setLang: function() {
      this.locale = this.selectedLang;
      this.selectedLang = '';
      this.$emit('closePanel')
    },
    isSelected: function(lang) {
      if(this.locale == lang){
        return true;
      }else{
        return false;
      }
    },
    currentLanguage: function(lang) {
      switch (lang) {
        case 'en':
          return "English"
          break;

        case "es":
            return "español"
            break;

        default:
        return lang
      }
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>
