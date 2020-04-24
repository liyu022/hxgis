import { fetch } from './fetch'

export default {
  login (params) {
    return fetch('/login', params)
  },
  reg (params) {
    return fetch('/reg', params)
  },
  reset (params) {
    return fetch('/reset', params)
  },
  sendMail (params) {
    return fetch('/mail', params)
  },
  query (params) {
    return fetch('/query', params)
  }

}
