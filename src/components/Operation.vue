<template lang="html">
  <div>
    <h3 class="page-title">operation</h3>
    <div class="content-block inset">
      <div class="content-block-inner">
        <div class="e3i-content-lg">
          <div class="status-container">
            <div class="status-wrapper">
              <img class="status-icon" src="/static/images/status/status-ok.png">
              <p class="status-text-ok e3i-success">{{ status }}</p>
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
            <div class="health-wrapper">
              <img class="health-icon" src="/static/images/cartridge/cartridge-health-good.png">
              <p class="health-text e3i-success">{{ health }}</p>
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
            <div class="health-wrapper">
              <img class="health-icon" src="/static/images/status/water-drop.png">
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
