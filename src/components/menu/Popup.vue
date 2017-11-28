<template lang="html">
  <div @actions:closed="closeWifiPrompt">
    <!--Saving to unit Popup -->
    <f7-popup id="popup" :opened="popupOpened">
      <div class="flex" style="height: 100vh">
        <f7-card class="flex" style="width: 80%; text-align: center">
          <div>
            <p class="popup-alert">Saving to unit...</p>
            <div class="preloader-status flex" style="margin-top: 0">
              <div class="preloader preloader-gray" style="height: 25px; width: 25px;"></div>
            </div>
          </div>
          </f7-card>
      </div>
    </f7-popup>
    <!--Save Successful -->
    <f7-popup id="popup" :opened="popupSaveOpened">
      <div class="flex" style="height: 100vh">
        <f7-card class="flex" style="width: 80%; text-align: center">
          <div>
            <img class="status-icon-inline" src="static/images/operation/status-ok.png" style="margin-top: 20px;">
            <p class="popup-alert-saved e3i-success">Saved</p>
          </div>
        </f7-card>
      </div>
    </f7-popup>
    <!-- Reset saving Popup -->
    <f7-popup id="popup" :opened="popupResetOpened">
      <div class="flex" style="height: 100vh">
        <f7-card class="flex" style="width: 80%; text-align: center">
          <div>
            <p class="popup-alert">Resetting unit...</p>
            <div class="preloader-status flex" style="margin-top: 0">
              <div class="preloader preloader-gray" style="height: 25px; width: 25px;"></div>
            </div>
          </div>
          </f7-card>
      </div>
    </f7-popup>
    <!-- Reset Successful -->
    <f7-popup id="popup" :opened="popupWasReset">
      <div class="flex" style="height: 100vh">
        <f7-card class="flex" style="width: 80%; text-align: center">
          <div>
            <img class="status-icon-inline" src="static/images/operation/status-ok.png" style="margin-top: 20px;">
            <p class="popup-alert-saved__reset e3i-success">Reset successful</p>
          </div>
        </f7-card>
      </div>
    </f7-popup>
    <!-- <div :hidden="!connectToWifi" class="e3i-prompt-overlay" @click="closeWifiPrompt"></div> -->
    <f7-actions animated="true" :opened="connectToWifi">
      <f7-actions-group>
        <f7-actions-label class="wifiConnect-title">Please Connect to wifi network</f7-actions-label>
        <f7-actions-button style="width: 100%" @click="closeWifiPrompt()">ok</f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </div>
</template>

<script>
export default {
  props:{
    popupOpened: Boolean,
    popupSaveOpened: Boolean,
    popupWasReset: Boolean,
    popupResetOpened: Boolean,
    connectToWifi: Boolean
  },
  methods: {
    closeWifiPrompt: function() {
      this.$emit('closeWifiPrompt')
    }
  }
}
</script>
