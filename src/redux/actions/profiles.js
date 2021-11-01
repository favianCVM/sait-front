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
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema en la creacion del perfil.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function updateProfile(data) {
  return async dispatch => {
    return requests.update_profile(data)
      .then(async (r)=>{
        return {
          title: 'perfil actualizado exitosamente.',
          success: true,
          description: '.....',
          status: 'success',
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema en la actualizacion del perfil.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function deleteProfile(id) {
  return async dispatch => {
    return requests.delete_profile(id)
      .then(async (r)=>{
        return {
          title: 'perfil eliminado exitosamente.',
          success: true,
          description: '.....',
          status: 'success',
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema en eliminar el perfil.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function getAllProfiles() {
  return async dispatch => {
    return requests.get_all_profiles()
      .then(async (r)=>{
        return {
          success: true,
          data: r.data,
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema al obtener los perfiles.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}