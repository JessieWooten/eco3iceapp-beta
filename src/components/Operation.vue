<template lang="html">
  <div>
    <h3 class="page-title">operation</h3>
    <div class="content-block inset">
      <div class="content-block-inner">
        <div class="e3i-content-lg">
          <div class="status-container">
            <!--Status Ok -->
            <div v-if="status === 'ok'" class="status-wrapper">
              <img class="status-icon-inline" src="/static/images/operation/status-ok.png">
              <p class="status-text-ok e3i-success">OK</p>
            </div>
            <!-- Status Low Flow -->
            <div v-else-if="status === 'low flow detected'" class="status-wrapper">
              <img class="status-icon" src="/static/images/operation/status-warn.png">
              <p class="status-text e3i-warn">Low Flow Detected</p>
            </div>
            <!-- Status Excessive Flow -->
            <div v-else-if="status === 'excessive flow detected'" class="status-wrapper">
              <div><img class="status-icon" src="/static/images/operation/status-warn.png"></div>
              <p class="status-text e3i-warn">Excessive Flow Detected</p>
            </div>
            <!-- Status No Communication -->
            <div v-else-if="status === 'no communication linked'" class="status-wrapper">
              <img class="status-icon" src="/static/images/operation/status-fail.png">
              <p class="status-text e3i-fail">No Communication Linked</p>
            </div>
            <!-- Status Check Cartridge Health -->
            <div v-else-if="status === 'check cartridge health'" class="status-wrapper">
              <img class="status-icon" src="/static/images/operation/status-fail.png">
              <p class="status-text e3i-fail">Check Cartridge Health</p>
            </div>
            <!-- status = '---' -->
            <div v-else-if="status === '---'" class="status-wrapper">
              <p class="status-text-blank e3i-gray-light">---</p>
            </div>
            <!-- Default -->
            <div v-else class="status-wrapper">
              <p class="status-text e3i-gray-light">{{ status }}</p>
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
            <div v-if="health === 'good'" class="health-wrapper">
              <img class="health-icon" src="/static/images/operation/health-good.png">
              <p class="health-text e3i-success">good</p>
            </div>
            <!-- Health Change Soon -->
            <div v-else-if="health === 'change soon'"class="health-wrapper">
              <img class="health-icon" src="/static/images/operation/health-change-soon.png">
              <p class="health-text e3i-warn">change soon</p>
            </div>
            <!-- Health Change Now -->
            <div v-else-if="health === 'change now'" class="health-wrapper">
              <img class="health-icon" src="/static/images/operation/health-change-now.png">
              <p class="health-text e3i-fail">change now</p>
            </div>
            <!-- Health Default -->
            <div v-else class="health-wrapper">
              <p class="health-text e3i-gray-light">{{ health }}</p>
            </div>
          </div>
          <div class="status-title-wrapper">
            <span class="box-title">cartidge health</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-block inset" >
      <div class="content-block-inner">
        <div class="e3i-content-sm">
          <div class="health-container">
            <!-- Water Usage Volume # -->
            <div v-if="waterUsage != '---'" class="health-wrapper">
              <img class="water-icon" src="/static/images/operation/water-drop.png">
              <p class="health-text e3i-blue">{{ waterUsage }} gals</p>
            </div>
            <!-- Default Water Usage Volume -->
            <div v-else class="health-wrapper">
              <p class="health-text e3i-gray-light">---</p>
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
