<template lang="html">
  <div>
    <div :hidden="!isConnectOpened" class="e3i-prompt-overlay" @click="closeConnectPrompt"></div>
    <f7-actions :opened="isConnectOpened">
      <f7-actions-group>
        <f7-actions-label class="reset-title">Select Unit</f7-actions-label>
        <f7-list>
          <f7-list-item v-for="(unit, index) in unitList"
            :title="unit.name"
            class="menu-item"
            @click="selectUnit(unit.name, index)"
          ></f7-list-item>
        </f7-list>
        <f7-actions-button @click="closeConnectPrompt" class="e3i-gray-light" style="width: 100% !important;">Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </div>
</template>

<script>
export default {
  props:{
    isConnectOpened: Boolean,
    unitList: Array
  },
  methods: {
    closeConnectPrompt: function() {
      this.$emit('connectPromptClosed');
    },
    closePanel: function() {
      this.$emit('closePanel');
    },
    selectUnit: function(unit, index) {
      console.log( unit + ' Selected' );
      this.$emit('unitSelected', index);
      this.closeConnectPrompt();
      this.closePanel();
    }
  }
}
</script>
