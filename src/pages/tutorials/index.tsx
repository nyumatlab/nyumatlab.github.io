import Layout from "../../components/Layout";

export default function Tutorials() {
  const tutorials = {
    beginner: [
      {
        title: "Getting Started with MATLAB",
        url: "https://www.mathworks.com/help/matlab/getting-started-with-matlab.html"
      },
      {
        title: "MATLAB Onramp",
        url: "https://www.mathworks.com/learn/tutorials/matlab-onramp.html"
      },
      {
        title: "Programming Fundamentals",
        url: "https://www.mathworks.com/help/matlab/programming-fundamentals.html"
      }
    ],
    intermediate: [
      {
        title: "Data Analysis",
        url: "https://www.mathworks.com/help/matlab/data-analysis.html"
      },
      {
        title: "Signal Processing",
        url: "https://www.mathworks.com/help/signal/"
      },
      {
        title: "Image Processing",
        url: "https://www.mathworks.com/help/images/"
      }
    ],
    advanced: [
      {
        title: "Machine Learning",
        url: "https://www.mathworks.com/help/stats/"
      },
      {
        title: "Deep Learning",
        url: "https://www.mathworks.com/help/deeplearning/"
      },
      {
        title: "Control Systems",
        url: "https://www.mathworks.com/help/control/"
      }
    ]
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">MATLAB Tutorials</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Beginner Tutorials */}
          <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
            <h2 className="text-xl font-semibold text-nyu-purple mb-4">Beginner Tutorials</h2>
            <ul className="space-y-3">
              {tutorials.beginner.map((tutorial, index) => (
                <li key={index}>
                  <a 
                    href={tutorial.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-nyu-darkgray hover:text-nyu-torch"
                  >
                    {tutorial.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Intermediate Tutorials */}
          <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
            <h2 className="text-xl font-semibold text-nyu-purple mb-4">Intermediate Tutorials</h2>
            <ul className="space-y-3">
              {tutorials.intermediate.map((tutorial, index) => (
                <li key={index}>
                  <a 
                    href={tutorial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nyu-darkgray hover:text-nyu-torch"
                  >
                    {tutorial.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced Tutorials */}
          <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
            <h2 className="text-xl font-semibold text-nyu-purple mb-4">Advanced Tutorials</h2>
            <ul className="space-y-3">
              {tutorials.advanced.map((tutorial, index) => (
                <li key={index}>
                  <a 
                    href={tutorial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nyu-darkgray hover:text-nyu-torch"
                  >
                    {tutorial.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
