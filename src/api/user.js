import service from '@/utils/request'

export const getUserListAPI = () => {
    return service({
      url: '/user/full/',
      method: 'get',
    })
  }

export const addUserAPI = (data) => {
  return service({
    url: '/user/',
    method: 'post',
    data:data,
  })
}

export const getUserByIDAPI = (id) => {
  return service({
    url: '/user/'+id+'/full/',
    method: 'get',
  })
}

export const updateUserByIDAPI = (id,data) => {
  return service({
    url: '/user/'+id+'/full/',
    method: 'put',
    data:data
  })
}