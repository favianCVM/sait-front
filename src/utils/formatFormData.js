export default function formatFormData(data = {}, type = ""){
  let newData = new FormData()
  Object.keys(data).forEach((key)=> newData.append(key, data[key]))
  
  return newData
}