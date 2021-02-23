import service from '@/utils/request'

// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /auth/obtainToken/ [post]
export const obtainTokenAPI = (data) => {
  return service({
    url: '/auth/obtain_token/',
    method: 'post',
    data: data
  })
}

// @Summary refreshToken
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /auth/refreshToken/ [post]
export const refreshTokenAPI = (data) => {
  return service({
    url: '/auth/refresh_token/',
    method: 'post',
    data: data
  })
}

export const logoutAPI = (data) => {
  return service({
    url: '/auth/logout/',
    method: 'get',
  })
}