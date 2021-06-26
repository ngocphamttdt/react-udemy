import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import { decrement, increment } from './testReducer'



export default function Sandbox() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null)
  const data = useSelector(state => state.test.data)
  const { loading } = useSelector(state => state.async)

  return (
    <>
      <h1>testing 123</h1>
      <h1>the data is:{data} </h1>
      <Button
        name='increment'
        loading={loading && target === 'increment'}
        onClick={(e) => {
          dispatch(increment(20))
          setTarget(e.target.name)
        }}
        content='Increment'
        color='green'
      />
      <Button
        name='decrement'
        loading={loading && target === 'decrement'}
        onClick={(e) => {
          dispatch(decrement(10))
          setTarget(e.target.name)
        }}
        content='Decrement'
        color='red'
      />
      <Button
        onClick={() => dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))}
        content='Open Modal'
        color='teal'
      />
      <div style={{ marginTop: 15 }}>
        <TestPlaceInput />
      </div>

    </>
  )
}