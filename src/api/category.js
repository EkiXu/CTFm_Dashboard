import service from '@/utils/request'

export const getCategoryListAPI = () => {
    return service({
      url: '/category/full',
      method: 'get',
    })
  }

export const getCategoryDetailByIDAPI = (id) => {
  return service({
    url: '/category/'+id+'/',
    method: 'get',
  })
}

export const addCategoryAPI = (data) => {
  return service({
    url: '/category/',
    method: 'post',
    data: data
  })
}

export const updateCategoryByIDAPI = (id,data) => {
  return service({
    url: '/category/'+id+'/',
    method: 'put',
    data: data
  })
}

export const deleteCategoryByIDAPI = (id) => {
  return service({
    url: '/category/'+id+'/',
    method: 'DELETE',
  })
}