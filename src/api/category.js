import service from '@/utils/request'

export const getCategoryListAPI = () => {
    return service({
      url: '/admin/category/',
      method: 'get',
    })
  }

export const getCategoryDetailByIDAPI = (id) => {
  return service({
    url: '/admin/category/'+id+'/',
    method: 'get',
  })
}

export const addCategoryAPI = (data) => {
  return service({
    url: '/admin/category/',
    method: 'post',
    data: data
  })
}

export const updateCategoryByIDAPI = (id,data) => {
  return service({
    url: '/admin/category/'+id+'/',
    method: 'put',
    data: data
  })
}

export const deleteCategoryByIDAPI = (id) => {
  return service({
    url: '/admin/category/'+id+'/',
    method: 'delete',
  })
}