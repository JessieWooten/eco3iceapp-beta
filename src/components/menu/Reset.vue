<template lang="html">
  <div>
    <div :hidden="!isResetOpened" class="e3i-prompt-overlay" @click="closeResetPrompt"></div>
    <f7-actions :id="reset" :opened="isResetOpened">
      <f7-actions-group>
        <f7-actions-label class="reset-title">Are you sure you want to reset<br/> {{ unitName }}?</f7-actions-label>
        <f7-actions-button @click="closeResetPrompt" class="e3i-gray-light e3i-reset-button" style="border-right: 1px solid #c2c2c2;">Cancel</f7-actions-button
        ><f7-actions-button @click="reset" class="e3i-fail e3i-reset-button">Reset</f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </div>
</template>

<script>
export default {
  props: {
    isResetOpened: Boolean,
    unitName: String
  },
  computed:{
  },
  methods: {
    closeResetPrompt: function(){
      this.$emit('resetClosed');
    },
    reset: function() {
      console.log('Unit Reset');
      this.closeResetPrompt();
    },
    data: function() {
      return {
        reset: "Reset"
      }
    }
  }
}
</script>
