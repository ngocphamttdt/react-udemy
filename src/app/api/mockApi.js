import { delay } from '../common/util/util'
import { sampleData } from './sampleDate'

export function fectchSampleData() {
  return delay(1000).then(function () {
    return Promise.resolve(sampleData)
  })
}