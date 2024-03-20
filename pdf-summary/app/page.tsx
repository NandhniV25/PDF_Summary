export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-yellow-300 px-6 py-10 md:px-20">
          <p className={`text-xl text-blue-800 md:text-3xl md:leading-normal`}>
            <strong>Upload PDF File</strong> 
          </p>
        </div>
      </div>
    </main>
  );
}
