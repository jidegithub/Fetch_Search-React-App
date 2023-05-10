import React, {useState} from 'react'

export default function Button() {
const [count, setCount] = useState(0)

  return (
    <button data-testid="count-button" onClick={() => setCount((count) => count + 1)}>
        count is {count}
    </button>
  )
}
