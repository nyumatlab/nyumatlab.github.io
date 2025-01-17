import Layout from "../../components/Layout";

export default function Projects() {
  const projects = [
    {
      title: "Signal Processing",
      description: "Digital signal processing applications using MATLAB",
      author: "NYU Engineering",
      tags: ["DSP", "Engineering"]
    },
    {
      title: "Machine Learning Models",
      description: "Implementation of various ML algorithms",
      author: "Data Science Club",
      tags: ["ML", "AI"]
    },
    {
      title: "Financial Analysis",
      description: "Stock market analysis and prediction",
      author: "Stern School",
      tags: ["Finance", "Analytics"]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">Student Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
              <h3 className="text-xl font-semibold text-nyu-purple">{project.title}</h3>
              <p className="mt-2 text-nyu-darkgray">{project.description}</p>
              <p className="mt-4 text-sm text-nyu-darkgray">By: {project.author}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-nyu-purple/10 text-nyu-purple px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
