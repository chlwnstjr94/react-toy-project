import React from 'react'
import useAsync from '../../hooks/useAsync'
import getDustInfo from '../../utils/getFindDust'
import Card from '../Card'
import * as S from './style'

function AllSido() {
  const state = useAsync(() => getDustInfo('전국'))
  const { loading, data: dust, error } = state

  if (loading) return <p>로딩중</p>
  if (error) return <p>{error}</p>
  return (
    <S.AllSido>
      <h1 className="title">전체 시도보기</h1>
      {dust &&
        dust.map((el) => {
          return <Card key={el.stationName} {...el} />
        })}
    </S.AllSido>
  )
}

export default AllSido
