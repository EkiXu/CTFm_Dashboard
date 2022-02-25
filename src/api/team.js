import service from '@/utils/request'

export const addTeamAPI = (data) => {
  return service({
    url: '/admin/team/',
    method: 'post',
    data: data
  })
}

export const getTeamByIDAPI = (id) => {
  return service({
    url: '/admin/team/'+id+'/',
    method: 'get',
  })
}

export const getTeamListAPI = () => {
  return service({
    url:"/admin/team/",
    method:"get",
  })
}

export const updateTeamByIDAPI = (id,data) => {
  return service({
    url: '/admin/team/'+id+'/',
    method: 'put',
    data: data
  })
}


export const deleteTeamByIDAPI = (id) => {
  return service({
    url:"/admin/team/"+id+"/",
    method:"delete",
  })
}