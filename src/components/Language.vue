<template lang="pug">
.lang
  Select.select.upper(v-model="lang" size="small")
    Option.upper(v-for="lang in list" :value="lang" :key="lang")
      | {{lang}}
</template>


<script>
import { Languages as list, get, loadTranslation } from '../i18n'

export default {
  data(){
    return {
      lang: get(),
      list
    }
  },
  watch: {
    lang(v){
      loadTranslation(v);
    }
  }
}
</script>

<style lang="sass" scoped>
.lang
  float: right
  padding-right: 1em
  .select
    width: 4em
  .upper
    text-transform: uppercase
</style>

