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

export function selectedNews (id) {
  const request = fetch(`${URL}/articles?id=${id}`, { method: 'GET' })
    .then(res => res.json());

  return {
    type: 'GET_SELECTED_NEWS',
    payload: request
  }
}

export function clearSelectedNews () {
  
  return {
    type: 'CLEAR_SELECTED_NEWS',
    payload: []
  }
}

export function selectedGallery (id) {
  const request = fetch(`${URL}/galleries?id=${id}`, { method: 'GET' })
    .then(res => res.json());

  return {
    type: 'GET_SELECTED_GALLERY',
    payload: request
  }
}

export function clearGallery () {
  
  return {
    type:'CLEAR_GALLERY',
    payload: []
  }
}

export function handleLikes(array,id,section,type){
  const request = fetch(`${URL}/${section}/${id}`, { 
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes:array})
  })
  .then(response => response.json());

  return{
      type: type,
      payload:request
  }
}