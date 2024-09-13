import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2 px-4 w-full mt-auto sticky bottom-0">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        <div className="text-xl font-semibold">
          Shivraj Choudhary <span className="block text-sm font-normal">Web Developer</span>
        </div>
        
        <div className="space-x-4">
          <Link to="/" className="hover:text-violet-300">Home</Link>
          <Link to="/projects" className="hover:text-violet-300">Projects</Link>
          <Link to="/opensource" className="hover:text-violet-300">Open Source</Link>
          <Link to="/resume" className="hover:text-violet-300">Resume</Link>
          <Link to="/about" className="hover:text-violet-300">About</Link>
        </div>
        
        <div className="space-x-4">
          <a href="https://github.com/shivrajchoudharywork" target="_blank" className="hover:text-violet-300">GitHub</a>
          <a href="https://x.com/aboutshiv" target="_blank" className="hover:text-violet-300">X</a>
          <a href="https://www.linkedin.com/in/shivraj-choudhary-1st-162206225/" target="_blank" className="hover:text-violet-300">LinkedIn</a>
          <a href="https://leetcode.com/u/shivrajchoudhary/" target="_blank" className="hover:text-violet-300">Leetcode</a>
        </div>

        <div className="text-sm text-gray-500">
          All rights Reserved !!
        </div>
      </div>
    </footer>
  );
}

export default Footer;
