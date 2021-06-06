import React from 'react';
import Rails from './Rails';
import { orignalsData, bollywoodData, hollywoodData } from '../data/banner';

export default function RailsSection(props) {
  return (
    <div className='container-fluid'>
      <Rails data={orignalsData} title={'orignals'} />
      <Rails data={bollywoodData} title={'bollywood'} />
      <Rails data={hollywoodData} title={'hollywood'} />
    </div>
  );
}
