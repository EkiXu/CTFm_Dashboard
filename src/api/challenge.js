import service from '@/utils/request'

export const getChallengeListAPI = () => {
  return service({
    url: '/challenge/full',
    method: 'get',
  })
}


export const getChallengeByIDAPI = (id) => {
  return service({
    url: '/challenge/'+id+'/full/',
    method: 'get',
  })
}

export const addChallengeAPI = (data) => {
  return service({
    url: '/challenge/',
    method: 'post',
    data:data
  })
}

export const updateChallengeByIDAPI = (id,data) => {
  return service({
    url: '/challenge/'+id+'/',
    method: 'put',
    data:data
  })
}