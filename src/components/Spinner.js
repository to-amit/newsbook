import React, { Component } from 'react'
import loding from './loding.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center spinn'>
       <img src={loding} alt="loding..." />
      </div>
    )
  }
}
