import service from '@/utils/request'

export const getWhaleConfigAPI = () => {
    return service({
      url: '/admin/whale/',
      method: 'get',
    })
}

export const updateWhaleConfigAPI = (data) => {
    return service({
      url: '/admin/whale/',
      method: 'post',
      data:data
    })
}

