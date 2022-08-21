import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addMyFavoriteList, getSidoDatas } from '../../store/dust'
import * as S from './style'

const pm10Grade = {
  1: '좋음',
  2: '보통',
  3: '나쁨',
  4: '매우 나쁨',
  5: '치명적',
}

const pm10GradeColor = {
  1: '#70A1D7',
  2: '#6BCB77',
  3: '#FFD93D',
  4: '#FF6B6B',
  5: '#C21010',
}

function Card({ info }) {
  const dispatch = useDispatch()
  const datas = useSelector(getSidoDatas)
  const data = datas[info]

  const addFavorite = () => {
    dispatch(addMyFavoriteList(data.stationName))
  }

  return (
    <>
      {data && (
        <S.Card
          color={data.pm10Grade ? pm10GradeColor[data.pm10Grade] : '#9e9e9e'}
        >
          <div className="card-header">
            <div className="card-title">
              <h3 className="station-name">{data.stationName}</h3>
              <span className="sido-name">{data.sidoName}</span>
            </div>
            <div className="header-icon" onClick={addFavorite}>
              {data.myFavorite ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          </div>
          <p className="dust-grade">
            {data.pm10Grade ? pm10Grade[data.pm10Grade] : '데이터 없음'}
          </p>
          <p className="dust-value">
            미세먼지 수치 : {data.pm10Value ? data.pm10Value : '-'}
          </p>
          <p className="dust-time">
            {data.dataTime ? data.dataTime : '데이터 없음'}
          </p>
        </S.Card>
      )}
    </>
  )
}

export default Card
