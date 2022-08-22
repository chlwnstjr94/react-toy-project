import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  setSidoDatas: null,
  setGuGunList: null,
  setCardData: null,
  myFavorite: JSON.parse(localStorage.getItem('myFavorite')) || [],
  status: 'idle',
  error: null,
}

const queryParams = {
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  pageNo: 1,
  numOfRows: 100,
  returnType: 'JSON',
  ver: '1.0',
}

export const fetchDust = createAsyncThunk('fetchDust', async (sidoName) => {
  try {
    const response = await axios.get(
      'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      {
        params: { ...queryParams, sidoName },
      },
    )
    return response.data['response']['body']['items']
  } catch (error) {
    console.log(error)
  }
})

const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    filterGuGunDatas(state, action) {
      state.setCardData = action.payload
    },
    addMyFavoriteList(state, action) {
      state.setSidoDatas[action.payload].myFavorite =
        !state.setSidoDatas[action.payload].myFavorite
      state.myFavorite.includes(action.payload)
        ? (state.myFavorite = state.myFavorite.filter(
            (item) => item !== action.payload,
          ))
        : state.myFavorite.push(action.payload)

      localStorage.setItem('myFavorite', JSON.stringify(state.myFavorite))
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDust.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDust.fulfilled, (state, action) => {
        let prepare = action.payload
        prepare = prepare.map((item) => {
          const myFavorite = state.myFavorite.includes(item)
          return (item = {
            ...item,
            myFavorite,
          })
        })
        const result = prepare.reduce((acc, cur) => {
          return {
            ...acc,
            [cur.stationName]: cur,
          }
        }, {})
        state.status = 'succeeded'
        state.setSidoDatas = result
        state.setGuGunList = Object.keys(result)
        state.setCardData = Object.keys(result)[0]
      })
      .addCase(fetchDust.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const getSidoDatas = (state) => state.dust.setSidoDatas
export const getGuGunList = (state) => state.dust.setGuGunList
export const selectCardData = (state) => state.dust.setCardData
export const favoriteArr = (state) => state.dust.myFavorite
export const getDustDataStatus = (state) => state.dust.status
export const getDustDataError = (state) => state.dust.error

export const { filterGuGunDatas, filterGuGunList, addMyFavoriteList } =
  dustSlice.actions

export default dustSlice.reducer

// export const dustReducer = dustSlice.reducer

// export const { setMyArea, addLike, removeLike } = dustSlice.actions
