import styled from 'styled-components'

export const Card = styled.section`
  width: 80%;
  background-color: ${(props) => props.color};
  margin: 20px auto;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  p {
    margin: 10px 0;
  }
  .card-header {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .card-title {
      display: flex;
      align-items: end;
      margin: 10px 0;
      .station-name {
        font-size: 20px;
        margin-right: 10px;
      }
      .sido-name {
        font-size: 14px;
      }
    }
    .header-icon {
      position: absolute;
      right: 0;
      font-size: 30px;
    }
  }

  .dust-grade {
    background-color: #fff;
    font-size: 30px;
    padding: 10px;
    border-radius: 10px;
    color: ${(props) => props.color};
  }
`
