export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-6 mt-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 shadow-md p-2 rounded-lg transition-transform transform hover:scale-105">
        My Resume
      </h1>
      <div className="w-full max-w-3xl h-[80vh] md:h-[90vh] border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <iframe 
          src="/shivraj_resumefile.pdf" 
          className="w-full h-full" 
          title="Resume"
        />
      </div>
    </div>
  );
}
