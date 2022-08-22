import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  background-color: #99a799;
  font-size: 18px;
  .footer-nav {
    text-decoration: none;
    color: #fef5ed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
      color: #345b63;
    }
    .nav-title {
      margin-top: 6px;
    }
  }
`
