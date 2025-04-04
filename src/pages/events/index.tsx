import Layout from "../../components/Layout";
import Image from 'next/image';

export default function Events() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-nyu-purple mb-8">Upcoming Events</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-nyu-purple mb-4">Digital Signal Processing Webinar</h2>
          <p className="text-lg text-gray-700 mb-6">
          A DSP seminar led by Professor Eric Tarr, author of “Hack Audio”, offering students in Acoustics, Audio Engineering, Music Technology, and related STEM fields hands-on experience with MATLAB and Simulink for implementing real-time audio processing techniques.
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
                Don&apos;t miss this opportunity to enhance your DSP skills! 
              </p>
              <a 
                href="https://mathworksmeeting.webex.com/webappng/sites/mathworksmeeting/meeting/register/3a6ce58438b64a1791a0bd39739aa5b7?ticket=4832534b00000007f92bd4ebbc32ba06d23da88af27c1a3992b8fabb00f6c1c059a9b0548f93259c&timestamp=1742871275717&RGID=rd31b809cd850a68a97050e347a83f23f&isAutoPopRegisterForm=false"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-nyu-purple text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
              >
                Register Now
              </a>
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