import React from 'react';
import Image from '../elements/Image';
import Card from '../elements/Card';

class TabularData extends React.Component {
  render() {
    return (
      <div className='tabularData'>
        <Image 
          imgSrc={this.props.imgSrc}
        />
        <Card className='weatherData1' weatherDetails={this.props.weatherDetails} />
      </div>
    )
  }
}

export default TabularData;