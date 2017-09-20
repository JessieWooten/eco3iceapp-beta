<template lang="html">
  <div>
    <f7-panel left cover :opened='isPanelOpened'>
      <div class="menu-logo-container">
        <img class="menu-logo" src="/static/images/franke-logo.jpg" alt="Franke">
      </div>
      <f7-list>
        <f7-list-item title="Connect to machine" class="menu-item">
          <i class="f7-icons menu-icon">social_rss_fill</i>
        </f7-list-item>
        <f7-list-item
          title="Reset Unit"
          class="menu-item"
          @click="openResetPrompt"
        >
          <i class="f7-icons menu-icon-reset">refresh</i>
        </f7-list-item>
      </f7-list>
    </f7-panel>
  </div>
</template>

<script>
export default {
  props: {
    isPanelOpened: Boolean,
    isResetOpened: Boolean
  },
  methods: {
    openResetPrompt: function() {
      this.$emit('resetPromptOpened')
    }
  }
}
</script>
