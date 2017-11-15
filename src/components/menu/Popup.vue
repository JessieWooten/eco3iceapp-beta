<template lang="html">
  <div>
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
  </div>
</template>

<script>
export default {
  props:{
    popupOpened: Boolean,
    popupSaveOpened: Boolean,
    popupWasReset: Boolean,
    popupResetOpened: Boolean
  }
}
</script>
