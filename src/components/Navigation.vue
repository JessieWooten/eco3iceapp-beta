<template lang="html">
  <div>
    <f7-navbar>
      <f7-nav-left>
        <i class="f7-icons e3i-gray" @click="togglePanel()" style="margin-left: 10px;">bars</i>
      </f7-nav-left>
      <f7-nav-center sliding="" class="e3i-blue nav-title">EcO3Ice Metrics</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    togglePanel: function() {
      this.$emit('togglePanel');
    }
  }
}
</script>
