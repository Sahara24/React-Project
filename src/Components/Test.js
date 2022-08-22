import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
  }, [])
  return (
    <>
      <div id='container'>
        {
          data.map((item) => {
            return (
              <div key={item.id} className="card">
                <div align="center" className='img-container'>
                  <img src={`${item.image}`} alt="product" className='prod-img' />
                </div>

                <div className='prod-info'>
                  <p>{item.title}</p>
                  <p><i>Price: {item.price}</i></p>
                  <p>rating: {item.rating.rate}</p>
                </div>
                {/* <p>{item.description}</p> */}
              </div>
            )
          })
        }
      </div>
    </>
  )
}