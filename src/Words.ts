import { WordFrequency, WordFrequencyAnalyzer } from './interfaces'

export class Words implements WordFrequency, WordFrequencyAnalyzer {
  sentence: Array<string> = []
  freqWords: any = {}
  highestFreqNumArr: Array<number> = []
  highestFreqWord: any
  highestFreqNum: any = 0
  wordsArray: Array<string> = []
  wordCounter: any = 0
  sortableList: any = []
  regEx: any = /[^a-zA-Z ]/g

  getFrequency(): number {
    return this.highestFreqNum
  }
  getWord(): number {
    return this.wordCounter
  }
  getWordList(): any {
    return this.sortableList
  }
  // return a number of highest frequent word in text
  calculateHighestFrequency(text: string): number {
    try {
      if (text) {
        this.sentence = text.toLowerCase().replace(this.regEx, '').split(' ')
        this.sentence.forEach((x) => {
          this.freqWords[x] = (this.freqWords[x] || 0) + 1
        })
        // pick the highest number
        this.highestFreqNumArr = Object.values(this.freqWords)
        this.highestFreqNum = Math.max(...this.highestFreqNumArr)
        this.highestFreqWord = Object.keys(this.freqWords).reduce((a, b) =>
          this.freqWords[a] > this.freqWords[b] ? a : b
        )
      }
      return this.highestFreqNum
    } catch (e) {
      throw new Error(e)
    }
  }

  // return a number of how many times a word occurs in text
  calculateFrequencyForWord(text: string, word: string): number {
    try {
      if (text && word) {
        this.sentence = text.toLowerCase().replace(this.regEx, '').split(' ')
        this.wordCounter = this.sentence.reduce(
          (arr, val) => (val === word.toLowerCase() ? arr + 1 : arr),
          0
        )
      }
      return this.wordCounter
    } catch (e) {
      throw new Error(e)
    }
  }
  // return an array of frequent words based on the amount
  calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
    try {
      if (text && n) {
        this.sentence = text.toLowerCase().replace(this.regEx, '').split(' ')
        this.sentence.forEach((x) => {
          this.freqWords[x] = (this.freqWords[x] || 0) + 1
        })
        for (const item in this.freqWords) {
          this.sortableList.push([item, this.freqWords[item]])
        }
        // sort the list alphabetically and based on occurance and filled amount
        this.sortableList
          .sort()
          .sort((a: any, b: any) => {
            return b[1] - a[1]
          })
          .splice(n)
      }
      return this.sortableList
    } catch (e) {
      throw new Error(e)
    }
  }
}
