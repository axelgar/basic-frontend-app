import axios from 'axios'

class VivievdaBackendService  {
  constructor(){
    this.vivievdaBackendService = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_DOMAIN,

    })
  }

getAllViviendas(){
 return this.vivievdaBackendService.get('/based/viviendas')
 .then(response => response)
}
addOneVivienda(newVivienda){
return this.vivievdaBackendService.post('/based/viviendas/new', newVivienda)
.then(response => response)
}
updateOneVivienda(id, updateVivienda){
  return this.vivievdaBackendService.put(`/based/viviendas/${id}/update`, updateVivienda)
  .then(response => response)
}
deleteOneVivienda(id){
  return this.vivievdaBackendService.delete(`/based/viviendas/${id}/delete`)
  .then(response => response)
}
searchVivienda(vivienda){
  console.log(vivienda, 'Paco Perez')
  return this.vivievdaBackendService.post(`/based/viviendas/search`, vivienda)
  .then(response => response)
}
getOneVivienda(id){
  console.log(id)
  return this.vivievdaBackendService.get(`based/viviendas/${id}/detail`)
  .then(response => response)
}

}
 const vivievdaBackendService = new VivievdaBackendService()

export default vivievdaBackendService;


