<template lang="html">
  <div id="app"
    @actions:closed="toggleReset()"
    @panel:closed="togglePanel()"
  >
    <f7-views navbar-through="">
      <f7-view main="" url="/" :dynamic-navbar="true">
        <f7-navbar>
          <f7-nav-left>
            <i class="f7-icons e3i-gray" @click="togglePanel()" style="margin-left: 10px;">bars</i>
          </f7-nav-left>
          <f7-nav-center sliding="" class="e3i-blue nav-title">EcO3Ice Metrics</f7-nav-center>
          <f7-nav-right></f7-nav-right>
        </f7-navbar>
        <!--Menu Panel-->
        <panel
          :is-panel-opened="isPanelOpened"
          @resetPromptOpened="toggleReset()"
          @panel:closed="togglePanel()"
        ></panel>
        <!--Reset Prompt -->
        <reset-prompt
        :is-reset-opened="isResetOpened"
        :unit-name="unitName"
        @resetClosed="toggleReset()"
        ></reset-prompt>
        <f7-pages id="pages">
          <f7-page class="navbar-fixed">
            <h2 class="unit-name">{{ unitName }}</h2>
          <!-- main content start -->
            <f7-swiper>
              <f7-swiper-slide>
                <operation
                  :status="status"
                  :health="health"
                  :waterUsage="waterUsage"
                  ></operation>
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
import Panel from './components/Panel.vue'
import ResetPrompt from './components/Reset.vue'
export default {
  name: 'app',
  components: {
    Operation,
    Panel,
    ResetPrompt
  },
  computed: {
    isPanelOpened: function(){
      return this.panelOpened;
    },
    isResetOpened: function(){
      return this.resetOpened;
    }
  },
  methods: {
    togglePanel: function(){
      this.panelOpened = !this.panelOpened;
    },
    toggleReset: function() {
      this.resetOpened = !this.resetOpened;
    }
  },
  data () {
    return {
      panelOpened: false,
      resetOpened: false,
      unitName: 'Eco Unit 2',
      status: 'OK',
      health: 'good',
      waterUsage: '123'
    }
  }
}
</script>
