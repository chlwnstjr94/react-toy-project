import { useEffect, useReducer } from 'react'
import { dustReducer } from '../reducers/dustReducer'

export default function useAsync(callback) {
  const initialState = {
    loading: false,
    data: null,
    error: false,
  }

  const [state, dispatch] = useReducer(dustReducer, initialState)

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const data = await callback()
      dispatch({ type: 'SUCCESS', data })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return state
}
