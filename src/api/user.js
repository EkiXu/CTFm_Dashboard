import service from '@/utils/request'

export const getUserListAPI = () => {
    return service({
      url: '/admin/user/',
      method: 'get',
    })
  }

export const addUserAPI = (data) => {
  return service({
    url: '/admin/user/',
    method: 'post',
    data:data,
  })
}

export const getUserByIDAPI = (id) => {
  return service({
    url: '/admin/user/'+id+'/',
    method: 'get',
  })
}

export const updateUserByIDAPI = (id,data) => {
  return service({
    url: '/admin/user/'+id+'/',
    method: 'put',
    data:data
  })
}