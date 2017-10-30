<template lang="html">
  <div>
    <h3 class="page-title">operation</h3>
    <div class="content-block inset">
      <div class="content-block-inner">
        <div class="e3i-content-lg">
          <div class="status-container">
            <!--Status Ok -->
            <div v-if="status.indexOf('ok') != -1" class="status-wrapper">
              <img class="status-icon-inline" src="static/images/operation/status-ok.png">
              <p class="status-text-ok e3i-success">OK</p>
            </div>
            <!-- Status Low Flow -->
            <div v-else-if="status.indexOf('low flow detected') != -1" class="status-wrapper">
              <img class="status-icon" src="static/images/operation/status-warn.png">
              <p class="status-text e3i-warn">Low Flow Detected</p>
            </div>
            <!-- Status Excessive Flow -->
            <div v-else-if="status.indexOf('excessive flow detected') != -1" class="status-wrapper">
              <div><img class="status-icon" src="static/images/operation/status-warn.png"></div>
              <p class="status-text e3i-warn">Excessive Flow Detected</p>
            </div>
            <!-- Status No Communication -->
            <div v-else-if="status.indexOf('no communication linked') != -1" class="status-wrapper">
              <img class="status-icon" src="static/images/operation/status-fail.png">
              <p class="status-text e3i-fail">No Communication Linked</p>
            </div>
            <!-- Status Check Cartridge Health -->
            <div v-else-if="status.indexOf('check cartridge health') != -1" class="status-wrapper">
              <img class="status-icon" src="static/images/operation/status-fail.png">
              <p class="status-text e3i-fail">Check Cartridge Health</p>
            </div>
            <!-- status = '---' -->
            <div v-else-if="status === '---'" class="status-wrapper">
              <p class="status-text-blank e3i-gray-light">---</p>
            </div>
            <!-- status is loading -->
            <div v-else-if="status === 'loading'" class="status-wrapper">
              <div class="preloader-status">
                <div class="preloader preloader-gray" style="height: 25px; width: 25px;"></div>
              </div>
            </div>
            <!-- Default -->
            <div v-else class="status-wrapper">
              <p class="status-text e3i-gray">{{ status }}</p>
            </div>

          </div>
          <div class="status-title-wrapper">
            <span class="box-title">operational status</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-block inset" >
      <div class="content-block-inner">
        <div class="e3i-content-sm">
          <div class="health-container">
            <!-- Health Good -->
            <div v-if="health.indexOf('good') != -1" class="health-wrapper">
              <img class="health-icon" src="static/images/operation/health-good.png">
              <p class="health-text e3i-success">Good</p>
            </div>
            <!-- Health Change Soon -->
            <div v-else-if="health.indexOf('change soon') != -1" class="health-wrapper">
              <img class="health-icon" src="static/images/operation/health-change-soon.png">
              <p class="health-text e3i-warn">Change Soon</p>
            </div>
            <!-- Health Change Now -->
            <div v-else-if="health.indexOf('change now') != -1" class="health-wrapper">
              <img class="health-icon" src="static/images/operation/health-change-now.png">
              <p class="health-text e3i-fail">Change Now</p>
            </div>
            <!-- Health  === '---' -->
            <div v-else-if="health === '---'" class="health-wrapper">
              <p class="health-text e3i-gray-light" style="letter-spacing: 1px;">---</p>
            </div>
            <!-- Health is loading -->
            <div v-else-if="health === 'loading'" class="status-wrapper">
              <div class="preloader-health">
                <div class="preloader preloader-gray" style="width: 25px; height: 25px;"></div>
              </div>
            </div>
            <!-- Health Default -->
            <div v-else class="health-wrapper">
              <p class="health-text e3i-gray">{{ health }}</p>
            </div>
          </div>
          <div class="status-title-wrapper">
            <span class="box-title">cartridge health</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-block inset" >
      <div class="content-block-inner">
        <div class="e3i-content-sm">
          <div class="health-container">
            <!-- Default Water Usage Volume -->
            <div v-if="waterUsage === '---'" class="health-wrapper">
              <p class="health-text e3i-gray-light" style="letter-spacing: 1px;">---</p>
            </div>
            <!-- Water Usage is loading -->
            <div v-else-if="waterUsage === 'loading'" class="status-wrapper">
              <div class="preloader-health">
                <div class="preloader preloader-gray" style="width: 25px; height: 25px;"></div>
              </div>
            </div>
            <!-- Water Usage Volume # -->
            <div v-else class="health-wrapper">
              <img class="water-icon" src="static/images/operation/water-drop.png">
              <p class="health-text e3i-blue">{{ waterUsage }} gals</p>
            </div>
          </div>
          <div class="status-title-wrapper">
            <span class="box-title">total gallons of water</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: String,
    health: String,
    waterUsage: String
  },
  data: function() {
    return {

    }
  }
}
</script>
