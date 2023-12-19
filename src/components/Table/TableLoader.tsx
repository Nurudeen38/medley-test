import React from 'react'
import { Spinner } from '../Spinner'

export default function TableLoader() {
  return (
    <div className="spinner-container">
    <Spinner variant="dot-spin" />
  </div>
  )
}
