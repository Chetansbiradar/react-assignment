import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
  return (
    <div className='flex flex-col justify-center items-center p-5 m-5'>
      <h1>Uh oh, something went terribly wrong 😩</h1>
        <h1 className='text-lg'>{error.status}</h1>
        <h1 className='text-lg'>{error.statusText}</h1>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
}

export default Error