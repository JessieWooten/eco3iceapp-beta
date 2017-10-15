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
          @unitSelected="setSelectedUnit($event)"
        ></connect-prompt>
        <f7-pages id="pages">
          <f7-page class="navbar-fixed">
            <div class="unit-name-container">
              <h2 class="unit-name">{{ unitName }}</h2>
              <span v-if="this.version!= ''" class="unit-version">v.{{ version }}</span>
            </div>
          <!-- main content start -->
            <f7-swiper class="e3i-overflow">
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
	dataUpdate: function(str) {
		if(str == "connected") {
			setTimeout(function() { window.app.sendCommand("dr");},500);
		} else if(str.indexOf('data_ready') > -1) {
			try {
				var sdata = JSON.parse(str.substring(11));
				this.status = sdata.status;
				this.health = sdata.health;
				this.waterUsage = sdata.volume;
        this.version = sdata.version ? sdata.version : '';
			} catch(e) { console.log(e,"error"); }

		}else if(str.indexOf('new_device') > -1){
      this.unitList = JSON.parse(str.substring(11))
    }
	},
    requestUnit: function() {
      var dcount = 0;
	    this.unitList = [];
      var list = this.unitList;
      window.app.scanBle();
      window.tmpinterval  = setInterval(function() {
        var devices = null;
        try {
          devices = JSON.parse(window.app.getDevices());
        } catch(e) { devices = null; }
        if(devices != null) {
          for(var i =0;i<devices.length;i++) {
	          var found = false;
		        for(var j=0;j<list.length;j++) {
	            if(devices[i].mac == list[j].mac)
                found = true;
		        }
        	  if(!found)
	           list.push(devices[i]);
          }
        }
      },100);
      window.tmptimeout = window.setTimeout(function() { window.clearInterval(window.tmpinterval);  },10000);
    },
    togglePanel: function() {
      this.panelOpened = !this.panelOpened;
    },
    toggleResetPrompt: function() {
      this.resetOpened = !this.resetOpened;
    },
    toggleConnect: function() {
      this.connectOpened = !this.connectOpened;
    	if(!this.connectOpened) {
    		window.clearInterval(window.tmpinterval);
    		window.clearTimeout(window.tmptimeout);
	    }
    },
    cleanUpInput: function(input) {
      return input.toLowerCase().trim();
    },
    setSelectedUnit: function(index) {
    	window.clearInterval(window.tmpinterval);
    	window.clearTimeout(window.tmptimeout);
    	var device = this.unitList[index];
    	this.unitName = device.name;
      this.selectedUnitIndex = index;
    	window.app.connect(device.mac);
      if(this.panelOpened) {
        this.panelOpened = false;
      }
    },
    resetUnit: function(index) {
      this.unitName = '- - -';
      this.status = '---';
      this.health = '---';
      this.waterUsage = '---';
      this.selectedUnitIndex = -1;
      window.app.sendCommand('reset');
    }
  },
  data () {
    return {
      panelOpened: false,
      resetOpened: false,
      connectOpened: false,
      unitName: '- - -',
      version: '',
      status: '---',
      health: '---',
      waterUsage: '---',
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
