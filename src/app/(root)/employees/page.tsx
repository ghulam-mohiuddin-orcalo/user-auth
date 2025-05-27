'use client'
import React from 'react'
import { Typography } from '@mui/material'

import { useAppSelector } from '@/redux/store/store'

function AboutPage() {
  const count = useAppSelector((state) => state.counter.value)
  return (
    <>
      <Typography>Page content</Typography>
      <Typography variant="h6">{count}</Typography>
    </>
  )
}

export default AboutPage