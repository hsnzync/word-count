import { Words } from '@/Words'
// Prepare data
const data = {
  highestFreqNum: 2,
  wordCounter: 1,
  sortableList: [
    ['the', 2],
    ['brown', 1]
  ],
  text: 'The brown fox jumps of the lazy dog'
}
// Test case 1
it('returns amount of frequent words in text', () => {
  const classInstance = new Words()

  classInstance.calculateHighestFrequency(data.text)
  classInstance.getFrequency()
  expect(classInstance.getFrequency()).toEqual(data.highestFreqNum)
})
// Test case 2
it('returns the frequency of a specific word', () => {
  const classInstance = new Words()

  classInstance.calculateFrequencyForWord(data.text, 'dog')
  classInstance.getWord()
  expect(classInstance.getWord()).toEqual(data.wordCounter)

  classInstance.calculateMostFrequentNWords(data.text, 2)
  classInstance.getWordList()
  expect(classInstance.getWordList()).toEqual(data.sortableList)
})
// Test case 3
it('returns the amount of results of the most frequent words in a text', () => {
  const classInstance = new Words()

  classInstance.calculateMostFrequentNWords(data.text, 2)
  classInstance.getWordList()
  expect(classInstance.getWordList()).toEqual(data.sortableList)
})
