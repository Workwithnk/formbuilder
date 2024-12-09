'use client';
import CreateNewForm from "@/components/CreateNewForm";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const formData = useSelector(state => state.formReducer);
  console.log(formData);
  const savedForm = formData.filter(data => data.formStatus === 'save')
  const pubForm = formData.filter(data => data.formStatus === 'publish')


  const editForm = (data) => {
    router.push(`/build-form?formKey=${data.key}`)
  }

  const viewForm = (data) => {
    router.push(`/view-form?formKey=${data.key}`)
  }

  return (
    <main>
      <CreateNewForm />
      <section className=" px-3">
        {savedForm.length > 0 && <h2 className=" mb-2">
          Saved Form
        </h2>}
        <div className=" grid grid-cols-4 gap-3">
          {
            savedForm.length > 0 && savedForm.map((data, i) => {
              return <div key={i} className=" shadow border p-3 border-gray-200 rounded-lg">
                <h5>{data.formName}</h5>
                {data.ques.length > 0 && <p>Ques: {data.ques.length}</p>}
                <button className=" px-3 py-1 bg-green-500 rounded  mr-2 mt-1 outline-none" onClick={() => editForm(data)}>Edit</button>
                <button className=" px-3 py-1 bg-blue-500 rounded outline-none" onClick={() => viewForm(data)}>View</button>
              </div>
            })
          }
        </div>
      </section>
      <section className=" px-3 mt-5">
        {pubForm.length > 0 && <h2 className=" mb-2">
          View Form
        </h2>}
        <div className=" grid grid-cols-4 gap-3">
          {
            pubForm.length > 0 && pubForm.map((data, i) => {
              return <div key={i} className=" shadow border p-3 border-gray-200 rounded-lg">
                <h5>{data.formName}</h5>
                {data.ques.length > 0 && <p>Ques: {data.ques.length}</p>}
                <button className=" px-3 py-1 bg-blue-500 rounded outline-none" onClick={() => viewForm(data)}>View</button>
              </div>
            })
          }
        </div>
      </section>
    </main>
  );
}
