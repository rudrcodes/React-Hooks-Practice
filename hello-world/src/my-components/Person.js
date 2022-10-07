import React from 'react'

function Person({person}) {
  return (
    <div>   <h2>
    I am {person.name} and have the skill {person.skill} and have the id
    number {person.id}
  </h2></div>
  )
}

export default Person