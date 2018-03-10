export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_GALLERY':
      return { ...state, latestGallery: action.payload }
    case 'GET_SELECTED_GALLERY':
      return { ...state, selected: action.payload }
    case 'CLEAR_GALLERY':
      return { ...state, selected: [] }
    default: return state

  }
}