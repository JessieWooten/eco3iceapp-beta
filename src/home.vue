<template lang="html">
  <div id="app">
    <f7-views navbar-through="">
      <f7-view main="" url="/" :dynamic-navbar="true">
        <f7-navbar>
          <f7-nav-left><i class="f7-icons">bars</i></f7-nav-left>
          <f7-nav-center sliding="">EcO3Ice</f7-nav-center>
          <f7-nav-right></f7-nav-right>
        </f7-navbar>
        <f7-pages id="pages">
          <f7-page class="navbar-fixed">
            <h2 class="unit-name">{{ unitName }}</h2>
          <!-- main content start -->
            <f7-swiper>
              <f7-swiper-slide>
                <operation></operation>
              </f7-swiper-slide>
            </f7-swiper>
          <!-- main content end -->
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
import Operation from './components/Operation.vue'
export default {
  name: 'app',
  components: {
    Operation
  },
  data () {
    return {
      unitName: 'Eco Unit 2'
    }
  }
}
</script>
