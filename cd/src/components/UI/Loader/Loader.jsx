import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import s from './Loader.module.css'


const Loader = () => {
return (
<div className={s.spinnerContainer}>
<Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#black', '#black']}
/>
</div>
)
};

export default Loader;