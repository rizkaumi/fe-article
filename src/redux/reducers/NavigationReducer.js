import { AppSidebar } from "src/components"
const initialState = [...AppSidebar]

const NavigationReducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

export default NavigationReducer