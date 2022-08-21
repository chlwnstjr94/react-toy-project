import React, { useEffect, useState } from 'react'
import * as S from './style'
import { fetchDust, filterGuGunDatas, getGuGunList } from '../../store/dust'
import { useSelector, useDispatch } from 'react-redux/es/exports'

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
  const [sido, setSido] = useState(SIDO_ARR)
  const dispatch = useDispatch()
  const guGunList = useSelector(getGuGunList)

  const selectSidoHandler = async (e) => {
    if (e.currentTarget.value === '시도') return
    setSido(e.currentTarget.value)
    dispatch(fetchDust(e.target.value))
  }

  const selectGunGuHandler = (e) => {
    if (e.currentTarget.value === '군구') return
    dispatch(filterGuGunDatas(e.target.value))
  }

  useEffect(() => {
    dispatch(fetchDust(sido))
  }, [dispatch, sido])

  return (
    <S.Select>
      <select onChange={selectSidoHandler} id="sido" className="select">
        <option key={'시도'}>시도</option>
        {SIDO_ARR.map((sido, index) => (
          <option key={index}>{sido}</option>
        ))}
      </select>
      <select onChange={selectGunGuHandler} id="gungu" className="select">
        <option key={'군구'}>군구</option>
        {guGunList &&
          guGunList.map((gugun, index) => (
            <option key={index} value={gugun}>
              {gugun}
            </option>
          ))}
      </select>
    </S.Select>
  )
}

export default SelectBox
