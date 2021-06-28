<template>
  <div class="border border-secondary rounded p-4 mb-5">
    <label class="form-label" :for="name">{{ textContent.form.label.highestFreqLabel }}</label>
    <textarea
      type="text"
      class="form-control mb-2"
      v-model="inputText"
      placeholder="Type a sentence"
      :id="name"
    ></textarea>
    <button class="btn btn-primary" type="button" @click="calculate">
      {{ textContent.form.label.freqLabel }}
    </button>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InputText',
  inject: ['textContent'],
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    inputText: ''
  }),
  methods: {
    calculate() {
      this.$emit('checkFreq', this.inputText)
    }
  }
})
</script>
