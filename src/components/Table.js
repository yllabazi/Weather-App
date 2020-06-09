import React from 'react';
import Image from '../elements/Image';
import Card from '../elements/Card';

const TabularData = () => {
  return (
    <div className='tabularData'>
      <Image />
      <Card className='weatherData1' />
      <div className='weatherData2'>3</div>
      <div className='weatherData3'>4</div>
      <div className='weatherData4'>5</div>
    </div>
  )
}

export default TabularData;