import requests from '@utils/requests'

export function createProfile(data) {
  return async dispatch => {
    return requests.create_profile(data)
      .then(async (r)=>{
        return {
          title: 'perfil creado exitosamente.',
          success: true,
          description: '.....',
          status: 'success',
        }
      })
      .catch((e)=>{
        console.log('el error', e.response);
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema en la creacion del perfil.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}