export default function formatFormData(data = {}, type = "") {
  let newData = new FormData();

  Object.keys(data).forEach((key) => {
    if (data[key] instanceof File) newData.append(key, data[key]); //force this, this its needed beacuse files does not work stringified
    else if (
      (typeof data[key] === "object" && isNaN(Date.parse(data[key]))) ||
      Array.isArray(data[key])
    ) {
      newData.append(key, JSON.stringify(data[key]));
    } else {
      newData.append(key, data[key]);
    }
  });

  return newData;
}
