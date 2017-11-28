<template lang="html">
  <div @accordion:close="clearInputs()">
    <div :hidden="!isPanelOpened" class="e3i-prompt-overlay" @click="closePanel"></div>
    <f7-panel left cover :opened='isPanelOpened'>
      <div class="menu-logo-container">
        <img class="menu-logo" src="static/images/franke-logo.jpg" alt="Franke">
      </div>
      <f7-list>
        <!--Connect Prompt -->
        <f7-list-item
          title="Connect to machine"
          class="menu-item"
          @click="openConnectPrompt"
        >
          <i class="f7-icons menu-icon">social_rss_fill</i>
        </f7-list-item>
        <!--Reset Prompt Disabled -->
        <f7-list-item
          v-if="unitNotSelected"
          title="Reset Unit"
          class="menu-item disabled"
        >
          <i class="f7-icons menu-icon-reset disabled">refresh</i>
        </f7-list-item>
        <!--Reset Prompt Enabled -->
        <f7-list-item
          v-else
          title="Reset Unit"
          class="menu-item"
          @click="openResetPrompt"
        >
          <i class="f7-icons menu-icon-reset">refresh</i>
        </f7-list-item>
        <!-- Accordion Start -->
        <f7-list-item style="padding: 0;">
          <div class="list-block accordion-list" style="width: 100%;">
            <!-- Rename Accordion -->
            <li v-if="unitNotSelected" class="accordion-item">
              <div class="item-inner" style="padding-right:0; background: none;">
                <div class="menu-item item-title disabled" style="width:100%;">
                  Rename Eco Unit
                  <i class="f7-icons menu-icon" style="font-size:18px; float: right;">compose</i>
                </div>
              </div>
            </li>
            <li v-else id="rename"class="accordion-item" @setNewName="close(event)"><a href="#" class="item-link" style="padding-left:0;" @click="matchNames('rename')">
              <div class="item-inner" style="padding-right:0; background: none;">
                <div class="menu-item item-title" style="width:100%;">
                  Rename Eco Unit
                  <i class="f7-icons menu-icon" style="font-size:18px; float: right;">compose</i>
                </div>
              </div></a>
              <div class="accordion-item-content">
                <div class="content-block">
                  <div class="menu-drop-down flex" style="justify-content: flex-start;">
                    <div>
                      <input class="menu-rename-input"
                        type="text"  ref="rename"
                        v-model="newUnitName" v-on:keydown.enter="setName()"
                        style="margin: 5px 0; padding: 0 8px; font-weight: 300"/>
                    </div>
                    <button :disabled="nameTooShort || nameIsSame || unitNotSelected" class="menu-rename-button"
                      type="button" name="button" @click="setName()"
                      >
                      <i class="f7-icons" style="padding: 0 3px;">add</i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <!--Capacity Accordion -->
            <li v-if="unitNotSelected" class="accordion-item">
              <div class="item-inner" style="padding-right:0; background: none;">
                <div class="menu-item item-title disabled" style="width:100%;">
                  Set Ice Machine Capacity
                  <i class="f7-icons menu-icon" style="font-size:19px; float: right;">box</i>
                </div>
              </div>
            </li>
            <li v-else id="capacity" class="accordion-item"><a href="#" class="item-link" style="padding-left:0;" >
              <div class="item-inner" style="padding-right:0; background: none;">
                <div class="menu-item item-title" style="width:100%;">
                  Set Ice Machine Capacity
                  <i class="f7-icons menu-icon" style="font-size:19px; float: right;">box</i>
                </div>
              </div></a>
              <div class="accordion-item-content">
                <div class="content-block">
                  <div class="menu-drop-down flex" style="justify-content: flex-start;">
                    <div class="">
                      <input class="menu-capacity-input" type="text" maxlength="5"
                        v-model="capacityValue" v-on:keydown.enter="setCapacity()" placeholder="0"
                        style="margin: 5px 0; padding: 0 8px; font-weight: 300"
                        />
                        <span v-if="this.imperial" style="margin: 0 5px;"> lbs</span>
                        <span v-else style="margin: 0 5px;"> kg</span>
                    </div>
                    <button :disabled="!isWholeNumber || Number(this.capacityValue) === 0  || unitNotSelected"
                      :class="{'menu-rename-button':true, 'disabled':!isWholeNumber }"
                      type="button" name="button"
                      @click="setCapacity()"
                    >
                      <i class="f7-icons" style="padding: 0 3px;">add</i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <!--Measurements Accordion -->
            <li id="measurements" class="accordion-item"><a href="#" class="item-link" style="padding-left:0;">
              <div class="item-inner" style="padding-right:0; background: none;">
                <div class="menu-item item-title" style="overflow: visible;">
                  Measurements
                  <img src="static/images/ruler.png" class="menu-icon-img">
                </div>
              </div></a>
              <div class="accordion-item-content">
                <div class="content-block">
                  <div class="menu-drop-down flex" style="justify-content: flex-start;">
                    <p :class="{'menu-measurement': true, disabled: !this.imperial}">imperial</p>
                    <f7-input id="switch"
                    type="switch"
                    @click="switchMeasurement"
                    style="width:auto"></f7-input>
                    <p :class="{'menu-measurement': true, disabled: this.imperial}">metric</p>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </f7-list-item>
      </f7-list>
      <p :hidden="!nameTooShort" class="e3i-fail" style="font-size: 9px; margin-left: 15px">name should be at least 3 characters long</p>
      <p :hidden="isWholeNumber" class="e3i-fail" style="font-size: 9px; margin-left: 15px">capacity should be a whole number</p>
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
    imperial: Boolean,
    unitName: String
  },
  computed:{
    unitNotSelected: function() {
      return this.selectedUnitIndex === -1 && !window.app.isConnected();
    },
    nameIsSame: function() {
      return this.unitName.trim() == this.newUnitName.trim()
    },
    nameTooShort: function() {
      return this.newUnitName.length < 3
    },
    isWholeNumber: function() {
      let input = Number(this.capacityValue)
      if(!isNaN(input)){
        return (typeof input == 'number' && input%1 == 0);
      }else{
        return false;
      }
    }
  },
  methods: {
    close: function(event){
      event.currentTarget.accordionClose()
    },
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
    },
    matchNames: function(id) {
      if(this.selectedUnitIndex != -1){
        this.newUnitName = this.unitName;
      }
    },
    setName: function() {
      this.$emit('setNewName', this.newUnitName);
      this.clearInputs();
    },
    clearInputs: function()  {
      this.newUnitName = this.unitName;
      this.capacityValue = '';
    },
    setCapacity: function() {
      if (this.imperial) {
        console.log('Set Capacity: ' + this.capacityValue + ' lbs')
        this.$emit('setCapacity', this.capacityValue),
        this.capacityValue = '';
      }else{
        let toLbs = Math.round(this.capacityValue * 2.20462262185);
        console.log(this.capacityValue + ' kg converts to ' + toLbs + ' lbs')
        this.$emit('setCapacity', toLbs);
        this.capacityValue = '';
      }
    }
  },
  data: function() {
    return {
      capacityValue: '',
      newUnitName: this.unitName,
      warnName: false
    }
  }
}
</script>
