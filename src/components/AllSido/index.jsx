import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDust, getGuGunList } from '../../store/dust'
import Card from '../Card'
import * as S from './style'

function AllSido() {
  const datas = useSelector(getGuGunList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDust('전국'))
  }, [])

  return (
    <S.AllSido>
      <h1 className="title">전체 시도보기</h1>
      {datas && datas.map((item, index) => <Card key={index} info={item} />)}
    </S.AllSido>
  )
}

export default AllSido
