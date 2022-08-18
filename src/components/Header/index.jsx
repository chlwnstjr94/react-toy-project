import React, { useState } from 'react'
import * as S from './style'

function Header() {
  const [data, setData] = useState()
  return (
    <S.Header>
      <form>
        <select name="" id="">
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value=""></option>
        </select>
      </form>
    </S.Header>
  )
}

export default Header
