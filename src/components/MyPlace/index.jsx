import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectCardData } from '../../store/dust'
import Card from '../Card'
import SelectBox from '../SelectBox'
import * as S from './style'

function MyPlace() {
  const data = useSelector(selectCardData)
  return (
    <S.MyPlace>
      <h1 className="title">내 지역보기</h1>
      <SelectBox />
      <div> {data && <Card info={data} />}</div>
    </S.MyPlace>
  )
}

export default MyPlace
