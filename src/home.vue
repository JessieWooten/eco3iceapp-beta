<template lang="html">
  <div id="app"
    @closePanel="closePanel()"
    @panel:closed="togglePanel()"
  >
    <f7-views navbar-through="">
      <f7-view main="" url="/" :dynamic-navbar="true">
        <!-- Navigation Bar -->
        <navigation @togglePanel="togglePanel()"></navigation>
        <!-- Menu Panel-->
        <panel
          :is-panel-opened="isPanelOpened"
          @resetPromptOpened="toggleReset()"
          @connectPromptOpened="toggleConnect()"
        ></panel>
        <!-- Reset Prompt -->
        <reset-prompt
          :is-reset-opened="isResetOpened"
          :unit-name="unitName"
          @resetClosed="toggleReset()"
        ></reset-prompt>
        <!-- Connect Prompt -->
        <connect-prompt
        :isConnectOpened='isConnectOpened'
        :unitList="unitList"
        @connectPromptClosed="toggleConnect()"

        ></connect-prompt>
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
import Navigation from './components/Navigation.vue'
import Operation from './components/Operation.vue'
import Panel from './components/Panel.vue'
import ResetPrompt from './components/menu/Reset.vue'
import ConnectPrompt from './components/menu/Connect.vue'
export default {
  name: 'app',
  components: {
    Navigation,
    Operation,
    Panel,
    ResetPrompt,
    ConnectPrompt
  },
  computed: {
    isPanelOpened: function() {
      return this.panelOpened;
    },
    isResetOpened: function() {
      return this.resetOpened;
    },isConnectOpened :function() {
      return this.connectOpened;
    }
  },
  methods: {
    closePanel: function() {
      if(this.panelOpened){
        this.panelOpened = false;
      }
    },
    togglePanel: function(){
      this.panelOpened = !this.panelOpened;
    },
    toggleReset: function() {
      this.resetOpened = !this.resetOpened;
    },
    toggleConnect: function() {
      this.connectOpened = !this.connectOpened;
    }
  },
  data () {
    return {
      panelOpened: false,
      resetOpened: false,
      connectOpened: false,
      unitName: 'Eco Unit 2',
      status: 'OK',
      health: 'good',
      waterUsage: '123',
      unitList: [
                {name: 'Eco Unit 1'},
                {name: 'Eco Unit 2'},
                {name: 'Eco Unit 3'}]
    }
  }
}
</script>
