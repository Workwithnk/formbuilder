import { createNewForm } from '@/store/reducer/formReducer';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function CreateNewForm() {
  const router = useRouter();
  const formKey = uuidv4();
  const dispatch = useDispatch()
  const handleFormCreate = () => {
    dispatch(createNewForm({ formKey }));
    router.push(`/build-form?formKey=${formKey}`)
  }


  return (
    <section className="flex flex-col items-center my-10 border-b border-gray-200 pb-5">
      <h1 className=" text-2xl font-bold">Welcome to NextForm</h1>
      <p className="text-base">Create your own forms with ease</p>
      <button onClick={handleFormCreate} className={`mt-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-colors`} >Build form</button>
    </section>
  )
}

export default CreateNewForm