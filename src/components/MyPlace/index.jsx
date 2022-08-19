import React from 'react'
import useAsync from '../../hooks/useAsync'
import getDustInfo from '../../utils/getFindDust'
import SelectBox from '../SelectBox'

function MyPlace() {
  const state = useAsync(getDustInfo)
  const { loading, data: dust, error } = state

  if (loading) return <p>로딩중</p>
  if (error) return <p>{error}</p>
  return (
    <div>
      <h1 className="title">내 지역보기</h1>
      <SelectBox />
    </div>
  )
}

export default MyPlace
