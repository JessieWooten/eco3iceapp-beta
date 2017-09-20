<template lang="html">
  <div>
    <f7-actions :opened="isResetOpened">
      <!-- Actions Group -->
      <f7-actions-group>
        <!-- Actions Label -->
        <f7-actions-label class="reset-title">Are you sure you want to reset<br/> {{ unitName }}?</f7-actions-label>
        <f7-actions-button @click="closeResetPrompt" class="e3i-gray-light" style="border-right: 1px solid #c2c2c2;">Cancel</f7-actions-button
        ><f7-actions-button @click="reset" class="e3i-fail">Reset</f7-actions-button>

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
    pseudoClose: function(){
      this.$el.querySelector('.modal-overlay').addEventListener('click', closeResetPrompt());
    }
  },
  methods: {
    closeResetPrompt: function(){
      this.$emit('resetClosed');
    },
    reset: function() {
      console.log('Unit Reset');
      this.closeResetPrompt();
    }
  }
}
</script>
