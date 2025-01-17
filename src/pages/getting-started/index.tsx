import Layout from "../../components/Layout";

export default function GettingStarted() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">Getting Started with MATLAB</h1>
        
        <div className="space-y-12">
          {/* Download Section */}
          <section>
            <h2 className="text-2xl font-semibold text-nyu-violet mb-4">Download & Installation</h2>
            <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
              <ol className="list-decimal list-inside space-y-4 text-nyu-darkgray">
                <li>Visit the MathWorks website</li>
                <li>Sign in with your NYU credentials</li>
                <li>Download MATLAB for your operating system</li>
                <li>Follow the installation wizard</li>
              </ol>
            </div>
          </section>

          {/* System Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-nyu-violet mb-4">System Requirements</h2>
            <div className="bg-nyu-white p-6 rounded-lg shadow-md border border-nyu-gray">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-nyu-purple">Windows</h3>
                  <ul className="list-disc list-inside space-y-2 text-nyu-darkgray">
                    <li>Windows 10 or later</li>
                    <li>4GB RAM minimum</li>
                    <li>2GB free disk space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-nyu-purple">macOS</h3>
                  <ul className="list-disc list-inside space-y-2 text-nyu-darkgray">
                    <li>macOS 10.15 or later</li>
                    <li>4GB RAM minimum</li>
                    <li>2GB free disk space</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
