import Layout from "../../components/Layout";

export default function Events() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">Events</h1>
        
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nyu-purple mb-4"></div>
          <p className="text-xl text-nyu-darkgray">Coming Soon...</p>
          <p className="mt-2 text-nyu-darkgray">We&apos;re preparing exciting MATLAB events for the NYU community.</p>
        </div>
      </div>
    </Layout>
  );
}
