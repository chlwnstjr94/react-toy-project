import React from 'react'
import * as S from './style'
import { AiFillStar } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { GrMapLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <S.Footer>
      <Link className="footer-nav" to="/">
        <BiMap />
        <p className="nav-title">내 지역보기</p>
      </Link>
      <Link className="footer-nav" to="/all">
        <GrMapLocation />
        <p className="nav-title">전체 시도보기</p>
      </Link>
      <Link className="footer-nav" to="/favorite">
        <AiFillStar />
        <p className="nav-title">즐겨찾기</p>
      </Link>
    </S.Footer>
  )
}

export default Footer
