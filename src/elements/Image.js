import React from 'react';

const Image = (props) => {
  const data = props.weatherDetails;
  return (
    <img className='image' src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt=''/>
  )
}

export default Image;