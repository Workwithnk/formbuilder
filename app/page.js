import Link from "next/link";


export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center my-10">
        <h1 className=" text-2xl font-bold">Welcome to NextForm</h1>
        <p className="text-base">Create your own forms with ease</p>
        <Link className={`mt-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-colors`} href={"/build-form"}>Build form</Link>
      </section>
    </main>
  );
}
