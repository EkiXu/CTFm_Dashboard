import service from '@/utils/request'

export const getContainerListAPI = () => {
  return service({
    url: '/admin/container/',
    method: 'get',
  })
}

export const getContainerByIDAPI = (id) => {
  return service({
    url: '/admin/container/'+id+'/',
    method: 'get',
  })
  }

export const addContainerAPI = (data) => {
  return service({
    url: '/admin/container/',
    method: 'post',
    data:data
  })
}
export const deleteContainerByIDAPI = (id) => {
  return service({
    url: '/admin/container/'+id+'/',
    method: 'delete',
  })
}