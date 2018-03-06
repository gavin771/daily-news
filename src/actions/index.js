const URL = 'http://localhost:3004';

export function latestNews () {
  const request = fetch(`${URL}/articles?_order=desc&_end=3`, { method: 'GET' })
    .then(res => res.json());

  return {
    type: 'GET_LATEST',
    payload: request
  }
}

export function otherNews () {
  const request = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, { method: 'GET' })
    .then(res => res.json());

  return {
    type: 'GET_OTHER',
    payload: request
  }
}

export function latestGalleries () {
  const request = fetch(`${URL}/galleries?_order=desc&_start=0&_limit=1`, { method: 'GET' })
    .then(res => res.json());

  return {
    type: 'GET_GALLERY',
    payload: request
  }
}