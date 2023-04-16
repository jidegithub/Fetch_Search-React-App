import React from 'react'

export default function Post({userId,title,body}) {
    // const {userId,title,body} = props //object destructuring
  return (
    <div>
        <p>{userId}</p>
        <p>{title}</p>
        <p>{body}</p>
    </div>
  )
}
