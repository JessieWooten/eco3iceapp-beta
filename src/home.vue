<template lang="html">
  <div id="app"
    @panel:closed="togglePanel()"
  >
    <f7-views navbar-through="">
      <f7-view main="" url="/" :dynamic-navbar="true">
        <!-- Navigation Bar -->
        <navigation @togglePanel="togglePanel()"></navigation>
        <!-- Menu Panel-->
        <panel
          :is-panel-opened="isPanelOpened"
          @resetPromptOpened="toggleResetPrompt()"
          @connectPromptOpened="toggleConnect()"
        ></panel>
        <!-- Reset Prompt -->
        <reset-prompt
          :is-reset-opened="isResetOpened"
          :unit-name="unitName"
          @resetClosed="toggleResetPrompt()"
          @resetUnit="resetUnit()"
        ></reset-prompt>
        <!-- Connect Prompt -->
        <connect-prompt
          :isConnectOpened='isConnectOpened'
          :unitList="unitList"
          :selectedUnitIndex="selectedUnitIndex"
          @connectPromptClosed="toggleConnect()"
          @unitSelected="SetSelectedUnit($event)"
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
    },
    selectedUnit: function() {
      return this.selectedUnitIndex;
    }
  },
  methods: {
    // FIX THIS v
    // closePanel: function() {
    //   if(this.panelOpened){
    //     this.panelOpened = false;
    //   }
    // },
    togglePanel: function(){
      this.panelOpened = !this.panelOpened;
    },
    toggleResetPrompt: function() {
      this.resetOpened = !this.resetOpened;
    },
    toggleConnect: function() {
      this.connectOpened = !this.connectOpened;
    },
    cleanUpInput: function(input) {
      return input.toLowerCase().trim();
    },
    SetSelectedUnit: function(index) {
      this.unitName = this.unitList[index].name;
      this.status = this.cleanUpInput(this.unitList[index].status);
      this.health = this.cleanUpInput(this.unitList[index].health);
      this.waterUsage = this.cleanUpInput(this.unitList[index].volume);
      this.selectedUnitIndex = index;
    },
    resetUnit: function(index) {
      //make reset the unit #s not this.data
      this.unitName = '';
      this.status = '';
      this.health = '';
      this.waterUsage = '';
      this.selecte
      console.log('^reset|');
    }
  },
  data () {
    return {
      panelOpened: false,
      resetOpened: false,
      connectOpened: false,
      unitName: '- - -',
      status: '',
      health: '',
      waterUsage: '',
      selectedUnitIndex: -1,
      unitList: [
                {
                  name: 'Eco Unit 1',
                  status: 'OK',
                  health: 'Good',
                  volume: '1200',
                  consumption:'800',
                  duty:'600',
                  avg_consumption:'760',
                  avg_duty:'590',
                  selected: false
                },
                {
                  name: 'Eco Unit 2',
                  status: 'Check Cartridge Health',
                  health: 'Change Now',
                  volume: '1200',
                  consumption:'800',
                  duty:'600',
                  avg_consumption:'760',
                  avg_duty:'590',
                  selected: false
                },
                {
                  name: 'Eco Unit 3',
                  status: 'Excessive Flow Detected',
                  health: 'Change Soon',
                  volume: '3000',
                  consumption:'635',
                  duty:'344',
                  avg_consumption:'1404',
                  avg_duty:'479',
                  selected: false
                }]
    }
  }
}
</script>
