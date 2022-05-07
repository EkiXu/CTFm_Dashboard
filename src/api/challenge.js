import service from '@/utils/request'

export const getChallengeListAPI = () => {
  return service({
    url: '/admin/challenge/',
    method: 'get',
  })
}


export const getChallengeByIDAPI = (id) => {
  return service({
    url: '/admin/challenge/'+id+'/',
    method: 'get',
  })
}

export const addChallengeAPI = (data) => {
  return service({
    url: '/admin/challenge/',
    method: 'post',
    data:data
  })
}

export const updateChallengeByIDAPI = (id,data) => {
  return service({
    url: '/admin/challenge/'+id+'/',
    method: 'put',
    data:data
  })
}

export const deleteChallengeByIDAPI = (id) => {
  return service({
    url: '/admin/challenge/'+id+'/',
    method: 'delete',
  })
}