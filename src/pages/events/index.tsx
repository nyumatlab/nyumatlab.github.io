// Added new sections at the top with the embedded video and event details

import Layout from "../../components/Layout";
import Image from 'next/image';

export default function Events() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">Events</h1>
        
        {/* New Video Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-nyu-purple mb-4">Digital Signal Processing Webinar Recording</h2>
          <p className="text-lg text-gray-700 mb-6">
            Watch the recording of our DSP seminar led by Professor Eric Tarr, author of &ldquo;Hack Audio&rdquo;. 
            This session provides hands-on experience with MATLAB and Simulink for implementing real-time 
            audio processing techniques.
          </p>
          
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe 
              className="w-full h-[500px] rounded-lg shadow-md"
              src="https://www.youtube.com/embed/8PJCBQRIG_M" 
              title="Digital Signal Processing Webinar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <p className="text-gray-700 mt-4">
            This webinar covers essential DSP concepts and practical applications using MATLAB, 
            perfect for students in Acoustics, Audio Engineering, Music Technology, and related STEM fields.
          </p>
        </div>
        
        {/* Original Event Section - keep for reference or mark as past event */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-nyu-purple mb-4">Past Event: Digital Signal Processing Webinar</h2>
          <p className="text-lg text-gray-700 mb-6">
            A DSP seminar led by Professor Eric Tarr, author of &ldquo;Hack Audio&rdquo;, offering students in Acoustics, Audio Engineering, Music Technology, and related STEM fields hands-on experience with MATLAB and Simulink for implementing real-time audio processing techniques.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold text-nyu-purple">Event Details:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Date: April 10th, 2024</li>
                <li>Time: 4:00 PM - 5:30 PM EST</li>
                <li>Platform: Webex</li>
                <li>Duration: 1 hour and 30 minutes</li>
              </ul>
              <p className="text-gray-700">
                This event has concluded. See the recording above!
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <Image 
                src="/images/dsp-webinar/dsp-qr-code.png"
                alt="Event Registration QR Code"
                width={300}
                height={300}
                className="object-contain border-2 border-gray-200 p-4 rounded-lg shadow-md"
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}