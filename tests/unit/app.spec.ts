import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import { textContent } from '@/assets/data/textContent'

const dummyData = {
  highestFreq: {
    value: 1,
    isActive: true
  },
  freqForWord: {
    value: 2,
    isActive: true
  },
  freqNWord: {
    value: [],
    isActive: false
  },
  textContent: textContent,
  text: 'The brown fox jumps of the lazy dog'
}

describe('App.vue', () => {
  // Test case 1
  it('returns the most frequent number of a text', () => {
    const wrapper: any = shallowMount(App, {
      data: () => ({
        ...dummyData
      }),
      provide: () => ({
        ...textContent
      })
    })
    wrapper.vm.checkHighestFreq(dummyData.text)
    expect(wrapper.vm.highestFreq).toEqual(dummyData.highestFreq)
  }),
    // Test case 2
    it('returns the frequency of the specific word', () => {
      const wrapper: any = shallowMount(App, {
        data: () => ({
          ...dummyData
        }),
        provide: () => ({
          ...textContent
        })
      })
      wrapper.vm.checkWordFreq(dummyData.text, 'World')
      expect(wrapper.vm.freqForWord).toEqual(dummyData.freqForWord)
    })
  // Test case 3
  it('returns a list of most frequent words in', () => {
    const wrapper: any = shallowMount(App, {
      data: () => ({
        ...dummyData
      }),
      provide: () => ({
        ...textContent
      })
    })
    wrapper.vm.checkWordFreq(dummyData.text, 1)
    expect(wrapper.vm.freqNWord).toEqual(dummyData.freqNWord)
  })
})
