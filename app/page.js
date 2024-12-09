'use client';
import { createNewForm } from "@/store/reducer/formReducer";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const dispatch = useDispatch();
  const formKey = uuidv4();
  const router = useRouter()

  const handleFormCreate = () => {
    dispatch(createNewForm({ formKey }));
    router.push(`/build-form?formKey=${formKey}`)
  }

  return (
    <main>
      <section className="flex flex-col items-center my-10">
        <h1 className=" text-2xl font-bold">Welcome to NextForm</h1>
        <p className="text-base">Create your own forms with ease</p>
        <button onClick={handleFormCreate} className={`mt-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-colors`} >Build form</button>
      </section>
    </main>
  );
}
