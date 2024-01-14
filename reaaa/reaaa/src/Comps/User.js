import React from 'react'

export default function User(props) {

    const {propies} = props;

  return (
    <>
        <h1>UserProfile</h1>
        <ul>
            <li>name: {propies.name}</li>
            <li>emal: {propies.email}</li>
            <li>location: {propies.location}</li>
        </ul>
    </>
  )
}
