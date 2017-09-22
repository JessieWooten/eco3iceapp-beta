<template lang="html">
  <div id="app">
    <f7-views navbar-through="">
      <f7-view main="" url="/" :dynamic-navbar="true">
        <!-- Navigation Bar -->
        <navigation @togglePanel="togglePanel()"></navigation>
        <!-- Menu Panel-->
        <panel
          :is-panel-opened="panelOpened"
          @openResetPrompt="toggleResetPrompt()"
          @openConnectPrompt="toggleConnect(), requestUnit()"
          @closePanel="togglePanel()"
        ></panel>
        <!-- Reset Prompt -->
        <reset-prompt
          :is-reset-opened="resetOpened"
          :unit-name="unitName"
          @resetClosed="toggleResetPrompt()"
          @resetUnit="resetUnit()"
          @closeAll="togglePanel()"
        ></reset-prompt>
        <!-- Connect Prompt -->
        <connect-prompt
          :isConnectOpened='connectOpened'
          :unitList="unitList"
          :selectedUnitIndex="selectedUnitIndex"
          @connectPromptClosed="toggleConnect()"
          @unitSelected="setSelectedUnit($event),togglePanel()"
        ></connect-prompt>
        <f7-pages id="pages">
          <f7-page class="navbar-fixed">
            <div class="unit-name-container">
              <h2 class="unit-name">{{ unitName }}</h2>
            </div>
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
  },
  methods: {
    requestUnit: function() {
      var xhttp = new XMLHttpRequest();
      var list = this.unitList;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          list.push(JSON.parse(this.responseText));
         }
      };
      xhttp.open("GET", "http://localhost:8081/status", true);
      xhttp.send();
    },
    togglePanel: function() {
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
    setSelectedUnit: function(index) {
      this.unitName = this.unitList[index].name;
      this.status = this.cleanUpInput(this.unitList[index].status);
      this.health = this.cleanUpInput(this.unitList[index].health);
      this.waterUsage = this.cleanUpInput(this.unitList[index].volume);
      this.selectedUnitIndex = index;
    },
    resetUnit: function(index) {
      //make reset the unit #s not this.data
      this.unitName = '- - -';
      this.status = '';
      this.health = '';
      this.waterUsage = '';
      this.selectedUnitIndex = -1;
      console.log('^reset|');
    }
  },
  data () {
    return {
      ajaxData: 'ajax?',
      panelOpened: false,
      resetOpened: false,
      connectOpened: false,
      unitName: '- - -',
      status: '',
      health: '',
      waterUsage: '',
      selectedUnitIndex: -1,
      unitList: []
    }
  }
}
</script>

<!-- Hard coded test data

{
  name: 'Eco Unit 1',
  status: 'OK',
  health: 'Good',
  volume: '970',
  consumption:'800',
  duty:'600',
  avg_consumption:'760',
  avg_duty:'590'
},
{
  name: 'Eco Unit 2',
  status: 'Check Cartridge Health',
  health: 'Change Now',
  volume: '1200',
  consumption:'800',
  duty:'600',
  avg_consumption:'760',
  avg_duty:'590'
},
{
  name: 'Eco Unit 3',
  status: 'Excessive Flow Detected',
  health: 'Change Soon',
  volume: '3000',
  consumption:'635',
  duty:'344',
  avg_consumption:'1404',
  avg_duty:'479'
} -->
