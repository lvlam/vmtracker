import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('machines', {
      params: {
        search: search
      }
    })
  },
  show (machineId) {
    return Api().get(`machines/${machineId}`)
  },
  post (machine) {
    return Api().post('machines', machine)
  },
  put (machine) {
    return Api().put(`machines/${machine.id}`, machine)
  }
}
