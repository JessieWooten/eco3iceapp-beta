<template lang="html">
  <div>
    <!-- <svg>
      <circle r="30" cx="50%" cy="50%" class="circle1" />
      <circle r="30" cx="50%" cy="50%" :stroke-dasharray="avgDutyToPercent" class="circle2" />
    </svg> -->
    <section>
      <svg class="circle-chart" width="85" height="85" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle-chart__background" stroke="#b6b2b2" stroke-width="2" fill="none" cx="50%" cy="50%" r="35" />
        <circle class="circle-chart__circle" stroke="#7ceced" stroke-width="2" :stroke-dasharray="avgDutyToPercent" stroke-linecap="round" fill="none" cx="50%" cy="50%" r="35" />
        <g class="circle-chart__info">
          <text v-if="averageDuty === '---'" class="circle-chart__percent" x="50%" y="40%" alignment-baseline="central" text-anchor="middle" font-size="18" fill="#b6b2b2">---</text>
          <text v-else class="circle-chart__percent" x="50%" y="40%" alignment-baseline="central" text-anchor="middle" font-size="18" fill="#4ee038">{{ averageDuty }}%</text>
          <text class="circle-chart__subline" x="50%" y="60%" alignment-baseline="central" text-anchor="middle" font-size="18" font-weight="300" fill="#b6b2b2">daily</text>
        </g>
      </svg>
  </section>
  </div>
</template>

<script>
export default {
  props:{
    averageDuty: String
  },
  computed:{
    avgDutyToPercent: function() {
      if(this.averageDuty === '---'){
          return "0, 220"
      }else if(Number(this.averageDuty) === NaN){
        return "0,220"
      }else{
        var percentage = 220 * (this.averageDuty * .01)
        return percentage + ",220"
      }
    },

  },
  methods: {
  }
}
</script>
