<template lang="html">
  <div>
    <div :hidden="!isPanelOpened" class="e3i-prompt-overlay" @click="closePanel"></div>
    <f7-panel left cover :opened='isPanelOpened'>
      <div class="menu-logo-container">
        <img class="menu-logo" src="static/images/franke-logo.jpg" alt="Franke">
      </div>
      <f7-list>
        <f7-list-item
          title="Connect to machine"
          class="menu-item"
          @click="openConnectPrompt"
        >
          <i class="f7-icons menu-icon">social_rss_fill</i>
        </f7-list-item>
        <f7-list-item
          v-if="selectedUnitIndex == -1"
          title="Reset Unit"
          class="menu-item disabled"
        >
          <i class="f7-icons menu-icon-reset disabled">refresh</i>
        </f7-list-item>
        <f7-list-item
          v-else
          title="Reset Unit"
          class="menu-item"
          @click="openResetPrompt"
        >
          <i class="f7-icons menu-icon-reset">refresh</i>
        </f7-list-item>
        <f7-list-item>
        <f7-accordion>
        <f7-accordion-item class="menu-item list-block measurements">
          <f7-accordion-toggle>Measurements
            <img src="static/images/ruler.png" class="menu-icon-img">
          </f7-accordion-toggle>
          <f7-accordion-content>
            <div class="menu-drop-down flex">
              <p :class="{'menu-measurement': true, disabled: !this.imperial}">Lbs</p>
              <f7-input type="switch" @click="switchMeasurement"></f7-input>
              <p :class="{'menu-measurement': true, disabled: this.imperial}">Kgs</p>
            </div>
          </f7-accordion-content>
        </f7-accordion-item>
      </f7-accordion>
      </f7-list-item>
      </f7-list>
    </f7-panel>
  </div>
</template>

<script>
import { promptBus } from '../main'
export default {
  props: {
    isPanelOpened: Boolean,
    isResetOpened: Boolean,
    selectedUnitIndex: Number,
    imperial: Boolean
  },
  methods: {
    openConnectPrompt: function() {
      this.$emit('openConnectPrompt');
    },
    openResetPrompt: function() {
      this.$emit('openResetPrompt');
    },
    closePanel: function() {
      this.$emit('closePanel')
    },
    switchMeasurement: function() {
      this.$emit('switchMeasurements');
    }
  }
}
</script>
