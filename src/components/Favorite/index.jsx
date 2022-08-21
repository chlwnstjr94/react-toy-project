import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { favoriteArr } from '../../store/dust'
import Card from '../Card'
import * as S from './style'

function Favorite() {
  const datas = useSelector(favoriteArr)

  return (
    <S.Favorite>
      <h1 className="title">즐겨찾기</h1>

      {datas && datas.map((item, index) => <Card key={index} info={item} />)}
    </S.Favorite>
  )
}

export default Favorite
