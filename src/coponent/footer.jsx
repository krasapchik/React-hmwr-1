import React from 'react'

const Footer = ({email,phone}) => {
    return (
      <div>
          <input type="text" placeholder={email}/>
          <input type="text" placeholder={phone}/>
      </div>
    )
  }
export default Footer
