import service from '@/utils/request'

export const getNotificationListAPI = () => {
  return service({
    url: '/admin/notification/',
    method: 'get',
  })
}

export const getNotificationByIDAPI = (id) => {
  return service({
    url: '/admin/notification/'+id+'/',
    method: 'get',
  })
  }

export const addNotificationAPI = (data) => {
  return service({
    url: '/admin/notification/',
    method: 'post',
    data:data
  })
}
export const deleteNotificationByIDAPI = (id,data) => {
  return service({
    url: '/admin/notification/'+id+'/',
    method: 'delete',
    data:data
  })
}