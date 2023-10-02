export const request = (url, config) => {
  return fetch(url, config).then((res) => {
    if (!res.ok) {
      throw Error('');
    }

    return res.json();
  }).then((resJson) => {
      return resJson;
  }).catch((error) => {
    console.error('internal error');
  });
};

export const get = (url, headers) => {
  return request(url, {
    method: 'GET',
    headers
  });
};
