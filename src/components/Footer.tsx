import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-nyu-gray mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-nyu-purple font-bold">MATLAB@NYU</h3>
            <p className="mt-4 text-sm text-nyu-darkgray">
              Empowering NYU students with computational excellence
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-nyu-violet">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/getting-started" className="text-nyu-darkgray hover:text-nyu-purple">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-nyu-darkgray hover:text-nyu-purple">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-nyu-violet">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/applications" className="text-nyu-darkgray hover:text-nyu-purple">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-nyu-darkgray hover:text-nyu-purple">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-nyu-violet">Engineering Ambassador</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/in/christopherlanuza/"
                  className="text-nyu-darkgray hover:text-nyu-purple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christopher Lanuza
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-nyu-gray pt-8 text-center text-nyu-darkgray">
          © {new Date().getFullYear()} NYU MATLAB Ambassador Program
        </div>
      </div>
    </footer>
  );
}
