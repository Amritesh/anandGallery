import { cloneDeep } from 'lodash'

export function arrayToTree(
    array,
    id = 'id',
    parentId = 'pid',
    children = 'children'
  ) {
    const result = []
    const hash = {}
    const data = cloneDeep(array)
  
    data.forEach((item, index) => {
      hash[data[index][id]] = data[index]
    })
  
    data.forEach(item => {
      const hashParent = hash[item[parentId]]
      if (hashParent) {
        !hashParent[children] && (hashParent[children] = [])
        hashParent[children].push(item)
      } else {
        result.push(item)
      }
    })
    return result
  }