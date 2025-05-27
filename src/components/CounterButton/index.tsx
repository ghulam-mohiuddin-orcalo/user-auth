'use client';
import React from 'react'
import { Button, Divider, Typography } from '@mui/material'
import { useAppSelector, useAppDispatch } from '@/redux/store/store'
import { increment } from '@/redux/features/counter/counterSlice'

function CounterButton() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  return (
    <>
      <Typography variant="h6">{count}</Typography>
      <Divider />
      <Button onClick={() => dispatch(increment())}>Increment</Button>
    </>
  )
}

export default CounterButton