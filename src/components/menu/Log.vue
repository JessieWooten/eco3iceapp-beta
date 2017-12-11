<template lang="html">
  <div @actions:closed="closeLog()">
    <f7-actions animated="true" :opened="isLogOpened" style="margin-left: 0; left: 0; width: 100%">
      <f7-actions-group class="log-wrapper">
        <f7-actions-label>
          <div class="log-title-wrapper flex">
            <span v-if="unitName === '- - -'" class="log-title">Log</span>
            <span v-else class="log-title">{{unitName}}</span>
          </div>
          <div class="flex log-share-wrapper">
            <i class="f7-icons log-email-icon" @click="emailLog">email</i>
            <i class="f7-icons log-download-icon" @click="saveLog">download</i>
          </div>
        </f7-actions-label>
        <div v-if="logIsEmpty" class="flex log-data-display" >
          <div>
            <p class="e3i-gray-light">loading...</p>
            <div class="flex">
              <div class="preloader preloader-gray" style="width: 25px; height: 25px;"></div>
            </div>
          </div>
        </div>
        <f7-list v-else class="log-data-display">
          <!-- <div v-for="(line,index) in log"class="log-data menu-item"> -->
          <div class="log-data" v-for="(line,index) in log">
              <span class="log-index">{{index + 1}}</span>
              <span>{{line}}</span>
          </div>
          <!-- </div> -->
        </f7-list>
        <f7-actions-button @click="closeLog"
          class="e3i-gray-light log-button"
        >
          close log
        </f7-actions-button
        >
      </f7-actions-group>
    </f7-actions>
  </div>
</template>

<script>
import { promptBus } from '../../main'
export default {
  props: {
    isLogOpened: Boolean,
    log: Array,
    unitName: String
  },
  computed:{
    logIsEmpty: function() {
    return  this.log.length === 0;
    }
  },
  methods: {
    closeLog: function(){
      this.$emit('logClosed');
    },
    saveLog: function(){
      var str = this.log.join('\n')
      window.app.saveLog(encodeURIComponent(str))
    },
    emailLog: function(){
      var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth(); //January is 0!

      var yyyy = today.getFullYear();
      if(dd<10){
          dd='0'+dd;
      }
      var today = month[mm] + ' ' + dd + ' , '+yyyy;
      window.open('mailto:?subject=' + this.unitName + ' Log ' + today + '&body=' + this.convertLogToEmail(this.log));
    },
    convertLogToEmail: function(log) {
      var i = 1;
      var logStr = log.map( function(line){
        var str = i + ' ' + line
        i++;
        return str
      }).join('\n');
      return encodeURIComponent(logStr);
    }
  },
  data: function() {
    return {
      logData: {"Firmware version":"X16W.2.02.hv",
                "SecondsClock":"99999999",
                "PWM":"999",
                "Cell Voltage":"99.99",
                "Cell Voltage Average":"99.99",
                "Cell Current":"9.999",
                "Cell Current Average":"9.999",
                "Target Cell Current":"9.999",
                "Flow Rate (LPM)":"9.99",
                "Polarity":"1",
                "Cell Voltage Maximum":"99.99",
                "Cell Current Maximum":"9.999",
                "Start Time":"99999999",
                "Error Status":"9",
                "Cell Current Ratio Average":"9.999",
                "Cell Current Window Average":"9.999",
                "Log Offset":"131072",
                "Total On Time":"99999999",
                "Target Current Slope":"9.9999",
                "Target Current Offset":"9.9999",
                "Target Current Minimum":"9.99",
                "Target Current Maximum":"9.99",
                "Flow Sensor Slope":"9.9999",
                "Flow Sensor Offset":"9.9999",
                "Flow Rate LPM On":"9.9",
                "Flow Rate LPM Off":"9.9",
                "Total Volume (L)":"999999.9",
                "Window Average Time":"999999",
                "Window Average Trip Point":"9.99",
                "Window Average Reset Point":"9.99",
                "Low Flow On Time":"99999999",
                "Low Flow Volume (L)":"999999.9"}
    }
  }
}
</script>
