import React from 'react';
import style from './MySelect.module.css'


export const MySelect = ({options, defaultValue, value, onChange}) => {
return (
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option value=''>{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
          
        </select>
)
};

export default MySelect;