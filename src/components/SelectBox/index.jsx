import React, { useState } from 'react'
import useAsync from '../../hooks/useAsync'
import getDustInfo from '../../utils/getFindDust'
import { setMyArea } from '../../store/dust'
import { useAppDispatch } from '../../store'
// import * as S from './style'

const SIDO_ARR = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
]

function SelectBox() {
  // const dispatch = useAppDispatch()
  // const dustState = useAppSelector((state) => state.dust)
  const state = useAsync(() => getDustInfo('전국'))
  const { loading, data: dust, error } = state
  const [sido, setSido] = useState('')

  if (loading) return <p>로딩중</p>
  if (error) return <p>{error}</p>

  const selectSidoHandler = (e) => {
    if (e.currentTarget.value === '시도') return
    setSido(e.currentTarget.value)
    // dispatch(getDustInfo(e.currentTarget.value))
    getDustInfo(e.currentTarget.value)
  }

  const selectGunGuHandler = (e) => {
    if (e.currentTarget.value === '군구') return
  }

  return (
    <div>
      <div>
        <label htmlFor="sido">시도</label>
        <select onChange={selectSidoHandler} id="sido">
          <option key={'시도'}>시도</option>
          {SIDO_ARR.map((sido, index) => (
            <option key={index}>{sido}</option>
          ))}
        </select>
        <label htmlFor="gungu">군구</label>
        <select onChange={selectGunGuHandler} id="gungu">
          <option key={'군구'}>군구</option>
          {dust &&
            dust.map((dust) => (
              <option key={dust.stationName}>{dust.stationName}</option>
            ))}
          {/* {dustState.dustDataArr &&
            dustState.dustDataArr.map((dust) => (
              <option key={dust.stationName}>{dust.stationName}</option>
            ))} */}
        </select>
      </div>
    </div>
  )
}

export default SelectBox
