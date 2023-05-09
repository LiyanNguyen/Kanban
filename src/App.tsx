import React from 'react'

type Props = {
  name: string
  lastName: string
  age: number
}

const App = (props: Props) => {
  const {age = 25, lastName} = props
  return (
    <div>App {age}</div>
  )
}

export default App