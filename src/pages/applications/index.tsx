import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const applications = [
  {
    title: "SLAB3D Sound Visualization",
    description: "Interactive 3D visualization of sound waves and acoustic properties. A groundbreaking tool for spatial audio research and education.",
    thumbnail: "/images/sound-viz.jpg",
    demoUrl: "http://slab3d.sonisphere.com",
    technologies: ["MATLAB", "Signal Processing", "WebGL", "Three.js"],
    team: "Dr. Stephen A. Rizzi, Dr. Aric R. Aumann, and Dr. Leonard V. Krishnamurthy - NASA Glenn Research Center",
    category: "Audio"
  },
  {
    title: "Neural Network Visualizer",
    description: "Real-time visualization of neural network training process, developed using MATLAB's Deep Learning Toolbox and exported to web interface.",
    thumbnail: "/images/nn-viz.jpg",
    demoUrl: "https://playground.tensorflow.org",
    technologies: ["MATLAB", "Deep Learning", "D3.js", "React"],
    team: "Daniel Smilkov, Shan Carter - Google Brain Team",
    category: "Machine Learning"
  },
  {
    title: "3D Slicer Medical Imaging",
    description: "3D visualization of medical imaging data with interactive segmentation tools, powered by MATLAB's Image Processing Toolbox.",
    thumbnail: "/images/bio-viz.jpg",
    demoUrl: "https://www.slicer.org",
    technologies: ["MATLAB", "Image Processing", "WebGL", "VTK.js"],
    team: "Dr. Ron Kikinis, Dr. Steve Pieper, Dr. Jean-Christophe Fillion-Robin - Brigham and Women's Hospital & Harvard Medical School",
    category: "Healthcare"
  }
];

export default function Applications() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">Interactive Applications</h1>
        <p className="text-nyu-darkgray mb-12 text-xl">
          Explore innovative applications built with MATLAB by leading researchers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
              <div className="aspect-w-16 aspect-h-9 mb-4 relative rounded-lg overflow-hidden">
                <Image
                  src={app.thumbnail}
                  alt={app.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={index < 2}
                />
              </div>
              <h3 className="text-xl font-semibold text-nyu-purple">{app.title}</h3>
              <p className="mt-2 text-nyu-darkgray">{app.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {app.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-nyu-purple/10 text-nyu-purple px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-nyu-darkgray">By: {app.team}</p>
              <div className="mt-6">
                <a
                  href={app.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-nyu-torch text-nyu-white px-4 py-2 rounded-md hover:bg-nyu-brightred transition-colors"
                >
                  View Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
