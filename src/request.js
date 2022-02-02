function parseData(data) {
  let formData = new FormData();
  for (let key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

function request(url, method = 'POST', data = false) {
  return new Promise((resolve, reject) => {
    const options = {
      method
    };

    if (data) {
      options.body = parseData(data);
    }

    fetch(url, options)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

export const post = (url, data) => request(url, 'POST', data);
export const get = url => request(url, 'GET');

export default request;
