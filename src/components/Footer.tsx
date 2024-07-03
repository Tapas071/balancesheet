import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">BalanceSheet</h3>
            <p className="mt-2">
              Your trusted partner for financial management.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-2 flex space-x-4">
              <li>
                <Link href="#">
                  <svg
                    fill="currentColor"
                    className="h-6 w-6 hover:text-gray-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.94 1.796-4.548 4.42-4.548 1.256 0 2.334.093 2.649.135v3.07l-1.818.001c-1.426 0-1.702.677-1.702 1.67v2.19h3.406l-.443 3.622h-2.963V24h5.803c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <svg
                    fill="currentColor"
                    className="h-6 w-6 hover:text-gray-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.392-1.833.656-2.828.775 1.014-.609 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.204-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.166-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.697.864 3.197 2.177 4.078-.803-.026-1.561-.246-2.229-.616v.061c0 2.367 1.684 4.342 3.918 4.787-.41.111-.843.171-1.287.171-.315 0-.623-.03-.924-.086.623 1.953 2.432 3.377 4.574 3.417-1.676 1.313-3.791 2.097-6.083 2.097-.394 0-.779-.023-1.161-.068 2.166 1.389 4.735 2.201 7.503 2.201 9.004 0 13.923-7.457 13.923-13.923 0-.211 0-.423-.015-.633.954-.689 1.785-1.55 2.444-2.533z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <svg
                    fill="currentColor"
                    className="h-6 w-6 hover:text-gray-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.78 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.22 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.68a2.07 2.07 0 0 1-2.07-2.07c0-1.14.92-2.07 2.07-2.07 1.15 0 2.07.92 2.07 2.07a2.07 2.07 0 0 1-2.07 2.07zM20.45 20.45h-3.56v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.32 2.4 4.32 5.49v6.25z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 BalanceSheet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
