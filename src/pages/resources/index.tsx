import Layout from "../../components/Layout";
import Link from "next/link";

export default function Resources() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Documentation */}
          <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
            <h2 className="text-xl font-semibold text-nyu-purple mb-4">Documentation</h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.mathworks.com/help/matlab/"
                  className="text-nyu-darkgray hover:text-nyu-torch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MATLAB Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://www.mathworks.com/help/signal/"
                  className="text-nyu-darkgray hover:text-nyu-torch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Signal Processing Toolbox
                </a>
              </li>
            </ul>
          </div>

          {/* Downloads */}
          <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
            <h2 className="text-xl font-semibold text-nyu-purple mb-4">Downloads</h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.mathworks.com/downloads/"
                  className="text-nyu-darkgray hover:text-nyu-torch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download MATLAB
                </a>
              </li>
              <li>
                <Link 
                  href="/getting-started"
                  className="text-nyu-darkgray hover:text-nyu-torch"
                >
                  Installation Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Books Section */}
          <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
            <h2 className="text-xl font-semibold text-nyu-purple mb-4">Books</h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://yanndebray.github.io/matlab-with-python-book/"
                  className="text-nyu-darkgray hover:text-nyu-torch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MATLAB with Python by Yann Debray
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/HackAudio/textbookcode"
                  className="text-nyu-darkgray hover:text-nyu-torch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hack Audio by Eric Tarr
                </a>
              </li>
              {/* add more books */}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}