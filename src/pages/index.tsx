import Layout from "../components/Layout";
import Link from "next/link";
import EventPopup from "../components/EventPopup";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <EventPopup />
      <div className="bg-nyu-white">
        {/* Hero Section */}
        <div className="relative bg-nyu-purple py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-nyu-white sm:text-5xl lg:text-6xl">
                Unleash the Power of MATLAB
              </h1>
              <p className="mt-6 text-xl text-nyu-white max-w-3xl">
                Your Gateway to Computational Excellence at NYU
              </p>
              <div className="mt-10 flex gap-4">
                <Link
                  href="/getting-started"
                  className="bg-nyu-white text-nyu-purple px-6 py-3 rounded-md font-medium hover:bg-nyu-gray transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/tutorials"
                  className="bg-nyu-torch text-nyu-white px-6 py-3 rounded-md font-medium hover:bg-nyu-brightred transition-colors"
                >
                  View Tutorials
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 ml-8">
              <Image src="/images/matlab-logo-animation.gif" alt="MATLAB Animation" className="rounded-lg shadow-md" width={300} height={300} />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-nyu-purple">
              Popular Resources
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
                <h3 className="text-xl font-semibold text-nyu-purple">Getting Started Guide</h3>
                <p className="mt-2 text-nyu-darkgray">Learn how to set up MATLAB and start your journey.</p>
              </div>
              <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
                <h3 className="text-xl font-semibold text-nyu-purple">Tutorials Library</h3>
                <p className="mt-2 text-nyu-darkgray">Step-by-step guides for all skill levels.</p>
              </div>
              <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
                <h3 className="text-xl font-semibold text-nyu-purple">Project Gallery</h3>
                <p className="mt-2 text-nyu-darkgray">Explore projects created by NYU students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
