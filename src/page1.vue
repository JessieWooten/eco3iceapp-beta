<template lang="html">
  <f7-page hide-bars-on-scroll="">
  <f7-navbar back-link="Back" title="Page 1" sliding=""></f7-navbar>
  <f7-block>This is page 1.<br/>Data-binding {{mydata}}!
    <p class="red">This text is <span>red</span></p>
    <p class="cursive">This is <span>cursive</span></p>
  </f7-block>
  </f7-page>
  </template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      mydata: 'works'
    }
  }
}
</script>

<style lang="sass?indentedSyntax">
  // Add your styles here.
  // See the following link for info on indented syntax:
  // http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html

  .red
    span
      color: red

  .cursive
    span
      font-style: italic
</style>
