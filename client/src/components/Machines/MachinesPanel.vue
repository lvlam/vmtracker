<template>
  <panel title="Machines">
    <v-btn
      slot="action"
      :to="{
        name: 'machines-add'
      }"
      class="teal accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="machines"
      hide-actions
      class="elevation-1">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
            {{props.item.name}}
        </td>
        <td class="text-xs-left">
            {{props.item.cpu}}
        </td>
        <td class="text-xs-left">
            {{props.item.ram}}
        </td>
        <td class="text-xs-left">
            {{props.item.os}}
        </td>
        <td class="text-xs-left">
            {{props.item.hdSize}}
        </td>
        <td class="text-xs-left">
            {{props.item.location}}
        </td>
        <td>
          <v-btn
            v-if="$store.state.isUserLoggedIn"
            class="teal accent-2">
            Reserve
          </v-btn>
          <v-icon
            v-if="$store.state.isUserLoggedIn"
            color="red accent-2">
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import MachinesService from '@/services/MachinesService'

export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'CPU', align: 'left', value: 'cpu' },
        { text: 'RAM', align: 'left', value: 'ram' },
        { text: 'OS', align: 'left', value: 'os' },
        { text: 'Hard Disk', align: 'left', value: 'hdSize' },
        { text: 'Location', align: 'left', value: 'location' },
        { text: 'Actions', align: 'center', value: 'actions' }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      machines: []
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.machines = (await MachinesService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>

</style>
