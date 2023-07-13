import { useFormik } from 'formik';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import React from 'react'

const Contact = () => {
  const formik = useFormik({
    initialValues: { name: "",
    email: "",
    message: "" },
    onSubmit: values => {
      enqueueSnackbar('Message Sent')
    }
  });
  return (
    <div className='flex flex-col m-5 p-5'>
    <h1>Contact Us</h1>
    <form onSubmit={formik.handleSubmit} className='flex flex-col mt-3 border p-5 justify-start items-start rounded-lg' > 
      <label htmlFor="name">Name</label>
        <input
        className='border m-2 focus:outline-slate-300'
          id="name"
          name="name"
          type="name"
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      <label htmlFor="email">Email Address</label>
        <input
        className='border m-2 focus:outline-slate-300'
          id="email"
          name="email"
          type="email"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      <label htmlFor="message">Message</label>
        <input
        className='border m-2 focus:outline-slate-300'
          id="message"
          name="message"
          type="message"
          required
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      <button type="submit" className='border bg-slate-400 p-2 px-4 mt-2 rounded-lg' onClick={
        () => {
        }
      }>Submit</button>
      <SnackbarProvider/>
    </form>
    </div>
    
  )
}

export default Contact