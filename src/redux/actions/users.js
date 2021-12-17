import requests from '@utils/requests'

export function createUser(data) {
  return async dispatch => {
    return requests.create_user(data)
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
          title: e.response?.data?.error?.message || 'Hubo un problema en la creacion del usuario.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function updateUser(data) {
  return async dispatch => {
    return requests.update_user(data)
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
          title: e.response?.data?.error?.message || 'Hubo un problema en la actualizacion del usuario.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function deleteUser(id) {
  return async dispatch => {
    return requests.delete_user(id)
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
          title: e.response?.data?.error?.message || 'Hubo un problema en eliminar el usuario.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function getAllUsers() {
  return async dispatch => {
    return requests.get_all_users()
      .then(async (r)=>{
        return {
          success: true,
          data: r.data,
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema al obtener los usuarios.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}