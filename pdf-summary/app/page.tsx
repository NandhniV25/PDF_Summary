import Form from "./ui/update-pdf-form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="items-center flex flex-col justify-center gap-6 rounded-lg bg-yellow-300 px-6 py-10 md:px-20">
          <p className={`items-center text-xl text-justify-center text-blue-800 md:text-3xl md:leading-normal`}>
            <strong>Legal Clarity: Simplifying Complexity, Empowering You</strong> 
          </p>
        </div>
        <Form/>
      </div>
    </main>
  );
}
