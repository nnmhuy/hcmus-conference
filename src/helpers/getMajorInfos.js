import { majorList } from '../constants/constants'
import { find } from 'lodash'

const getMajorInfos = (majorId) => {
  const { name, icon } = find(majorList, { id: majorId})
  return {
    majorName: name,
    majorIcon: icon.default,
  }
}

export default getMajorInfos