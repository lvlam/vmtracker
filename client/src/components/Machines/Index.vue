<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">

    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <machines-search-panel />
      <machines-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import MachinesPanel from './MachinesPanel'
import MachinesSearchPanel from './MachinesSearchPanel'
import MachinesService from '@/services/MachinesService'
import {mapState} from 'vuex'

export default {
  components: {
    MachinesPanel,
    MachinesSearchPanel
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      machines: null
    }
  },
  async mounted () {
    this.machines = (await MachinesService.index()).data
  }
}
</script>

<style scoped>
</style>
