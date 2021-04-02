import { createContext, Dispatch } from 'react'

export const Context = createContext<{
  state: StateType
  dispatch: Dispatch<any>
}>(undefined)

export type StateType = {
  modals: string[]
}

export const initialState: StateType = {
  modals: [],
}

export const reducer = (state: StateType, action): StateType => {
  switch (action.type) {
    case 'push': {
      const modals = [...state.modals]
      modals.push(action.modal)

      return { modals }
    }
    case 'shift': {
      const modals = [...state.modals]
      modals.shift()

      return { modals }
    }
    case 'unshift': {
      const modals = [...state.modals]
      modals.unshift(action.modal)

      return { modals }
    }
    default:
      throw new Error('未定義のaction')
  }
}