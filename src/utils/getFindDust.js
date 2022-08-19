import axios from 'axios'

const queryParams = (sidoName) => {
  return {
    serviceKey: process.env.REACT_APP_SERVICE_KEY,
    pageNo: 1,
    numOfRows: 100,
    returnType: 'JSON',
    ver: '1.0',
    sidoName,
  }
}

export default async function getDustInfo(sidoName) {
  try {
    const response = await axios.get(
      'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      {
        params: queryParams(sidoName),
      },
    )
    return response.data['response']['body']['items']
  } catch (error) {
    console.log(error)
  }
}
