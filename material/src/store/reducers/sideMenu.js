// ------------------------------------
// Constants
// ------------------------------------
export const OPEN_SIDE_MENU = 'OPEN_SIDE_MENU'
export const CLOSE_SIDE_MENU = 'CLOSE_SIDE_MENU'
export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export const openSideMenu = () => ({
  type: OPEN_SIDE_MENU
})

export const closeSideMenu = () => ({
  type: CLOSE_SIDE_MENU
})

export const toggleSideMenu = () => ({
  type: TOGGLE_SIDE_MENU
})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  open: false
}
export default function sideMenuReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return { open: true }

    case CLOSE_SIDE_MENU:
      return { open: false }

    case TOGGLE_SIDE_MENU:
      return { ...state, open: !state.open }

    default:
      return state
  }
}
