import requests from '@utils/requests'

export function getAllTechnicians() {
  return async dispatch => {
    return requests.get_all_technicians()
      .then(async (r)=>{
        return {
          success: true,
          data: r.data,
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema al obtener los técnicos.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}
