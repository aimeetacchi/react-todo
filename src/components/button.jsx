import React from 'react';

 const Button = (props) => {

      const { func, name, nameClass } = props;
    
      return <button onClick={() => func()} className={nameClass}>{name}</button>
}

export default Button;