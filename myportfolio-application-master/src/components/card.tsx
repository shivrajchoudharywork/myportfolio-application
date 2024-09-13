export default function Card({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-6 mt-20 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-center border-b-2 border-violet-500 pb-2">
        {title}
      </h2>
      <p className="text-gray-300 mb-6 text-justify">
        {description}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 font-medium underline">
        GitHub Codebase
      </a>
    </div>
  );
}
