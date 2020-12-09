import axios from 'axios'
import { get, set } from 'lodash'

import { backendURL } from '../constants/constants'

const RestConnector = () => {
  const instance = axios.create({ 
    baseURL: backendURL,
    headers: {
    },
  })

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (err) {
      return Promise.reject(err)
    }
  )

  return instance
}

export default RestConnector()