import service from '@/utils/request'

// @Summary getContestDetail
// @Produce  application/json
// @Router /contest/ [get]
export const getContestAPI = () => {
  return service({
    url: '/contest/',
    method: 'get',
  })
}

// @Summary updateContestDetail
// @Produce  application/json
// @Param data body {name:"string",start_time:"string",end_time:"string"}
// @Router /contest/ [put]
export const updateContestAPI = (data) => {
  return service({
    url: '/contest/',
    method: 'put',
    data:data
  })
}