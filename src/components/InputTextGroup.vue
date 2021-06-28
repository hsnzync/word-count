<template>
  <div class="border border-secondary rounded p-4 mb-5">
    <label class="form-label" :for="name">{{
      type === 'n'
        ? textContent.form.label.highestFreqNWordLabel
        : textContent.form.label.highestFreqWordLabel
    }}</label>
    <textarea
      type="text"
      class="form-control mb-2"
      v-model="inputData.inputText"
      placeholder="Type a sentence"
      :id="name.text"
    ></textarea>
    <input
      :type="type === 'n' ? 'number' : 'text'"
      class="input-word form-control mb-2"
      v-model="inputData.inputAdditional"
      :placeholder="type === 'n' ? 'Number of words' : 'Type a word'"
      @keydown.space.prevent
      min="0"
      :id="name.word"
    />
    <button class="btn btn-primary" type="button" @click="calculate">
      {{ textContent.form.label.wordLabel }}
    </button>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InputTextGroup',
  inject: ['textContent'],
  props: {
    name: [String, Object],
    type: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    inputData: {
      inputText: '',
      inputAdditional: ''
    }
  }),
  methods: {
    calculate() {
      this.$emit('checkFreq', this.inputData)
    }
  }
})
</script>
