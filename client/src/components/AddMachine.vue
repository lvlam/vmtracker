<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Add Machine">
        <v-text-field
          label="Name"
          required
          :rules="[required]"
          v-model="machine.name"
        ></v-text-field>

        <v-text-field
          label="CPU Info"
          required
          :rules="[required]"
          v-model="machine.cpu"
        ></v-text-field>

        <v-text-field
          label="RAM"
          required
          :rules="[required]"
          v-model="machine.ram"
        ></v-text-field>

        <v-text-field
          label="Operating System"
          required
          :rules="[required]"
          v-model="machine.os"
        ></v-text-field>

        <v-text-field
          label="Disk Size"
          v-model="machine.hdSize"
        ></v-text-field>

        <v-text-field
          label="Location"
          required
          :rules="[required]"
          v-model="machine.location"
        ></v-text-field>
      </panel>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn
        dark
        class="teal"
        @click="add">
        Add Machine
      </v-btn>
      <v-btn
        dark
        class="teal"
        @click="clear">
        Clear
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import MachinesService from '@/services/MachinesService'

export default {
  data () {
    return {
      machine: {
        name: null,
        cpu: null,
        ram: null,
        os: null,
        hdSize: null,
        location: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async add () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.machine)
        .every(key => !!this.machine[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await MachinesService.post(this.machine)
        this.$router.push({
          name: 'machines'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
