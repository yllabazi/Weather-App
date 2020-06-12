import React from 'react';
import Image from '../elements/Image';
import Card from '../elements/Card';

class TabularData extends React.Component {
  render() {
    return (
      <div className='tabularData'>
        <Image weatherDetails={this.props.weatherDetails} />
        <Card className='weatherData1' weatherDetails={this.props.weatherDetails} />
        <div className='weatherData2'>3</div>
        <div className='weatherData3'>4</div>
        <div className='weatherData4'>5</div>
      </div>
    )
  }
}

export default TabularData;