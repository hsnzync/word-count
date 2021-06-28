<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center mb-4 fw-bold">{{ textContent.form.title }}</h1>
      <InputText @checkFreq="checkHighestFreq" name="Text">
        <div class="card mt-3" v-if="highestFreq.isActive">
          <div class="card-header">{{ textContent.form.label.highestResultLabel }}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ highestFreq.value }}</li>
          </ul>
        </div>
      </InputText>
      <InputTextGroup @checkFreq="checkWordFreq" :name="{ text: 'Text', word: 'Word' }">
        <div class="card mt-3" v-if="freqForWord.isActive">
          <div class="card-header">{{ textContent.form.label.freqResulLabel }}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ freqForWord.value }}</li>
          </ul>
        </div>
      </InputTextGroup>
      <InputTextGroup
        @checkFreq="checkMostFreqNWords"
        :name="{ text: 'Text', count: 'n' }"
        type="n"
      >
        <div class="card mt-3" v-if="freqNWord.isActive && freqNWord.value">
          <div class="card-header">{{ textContent.form.label.listResultLabel }}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(item, index) in freqNWord.value" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </InputTextGroup>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputText from './components/InputText.vue'
import InputTextGroup from './components/InputTextGroup.vue'
import { textContent } from './assets/data/textContent'
import { Words } from './Words'

export default Vue.extend({
  name: 'App',
  components: { InputText, InputTextGroup },
  data: () => ({
    Words,
    highestFreq: {
      value: 0,
      isActive: false
    },
    freqForWord: {
      value: 0,
      isActive: false
    },
    freqNWord: {
      value: null,
      isActive: false
    },
    textContent: textContent
  }),
  provide: () => ({
    textContent: textContent
  }),
  methods: {
    checkHighestFreq(value: string) {
      if (value) {
        const myFrequency = new Words()
        myFrequency.calculateHighestFrequency(value)
        this.highestFreq.value = myFrequency.getFrequency()
        this.highestFreq.isActive = true
      }
    },
    checkWordFreq(value: { inputText: string; inputAdditional: string } | null) {
      if (value) {
        const myWord = new Words()
        myWord.calculateFrequencyForWord(value.inputText, value.inputAdditional)
        myWord.getWord()
        this.freqForWord.value = myWord.getWord()
        this.freqForWord.isActive = true
      }
    },
    checkMostFreqNWords(value: { inputText: string; inputAdditional: number } | null) {
      if (value) {
        const myWord = new Words()
        myWord.calculateMostFrequentNWords(value.inputText, value.inputAdditional)
        this.freqNWord.value = myWord.getWordList()
        this.freqNWord.isActive = true
      }
    }
  }
})
</script>
