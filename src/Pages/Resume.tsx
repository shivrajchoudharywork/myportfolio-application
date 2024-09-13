export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6 md:px-12">
      <h1 className="text-3xl font-bold mb-8 mt-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 shadow-md p-2 rounded-lg transition-transform transform hover:scale-105">
        My Resume
      </h1>
      <div className="w-full max-w-4xl h-[90vh] border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <iframe 
          src="/shivraj_resumefile.pdf" 
          className="w-full h-full" 
          title="Resume"
        />
      </div>
    </div>
  );
}
