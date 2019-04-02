
import Api from './Api.js'



const AriService = {
  subscribe (email) {
    return Api.post('subnews/ARILLC/' + email)
  }
}

export default AriService

