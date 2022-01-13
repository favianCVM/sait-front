export default function formatFormData(data = {}, type = "") {
  let newData = new FormData();

  Object.keys(data).forEach((key) => {
    if (
      (typeof data[key] === "object" && Date.parse(data[key]) === NaN) ||
      Array.isArray(data[key])
    )
      newData.append(key, JSON.stringify(data[key]));
    else newData.append(key, data[key]);
  });

  return newData;
}
