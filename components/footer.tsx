import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/3 mb-4 md:mb-0'>
            <h2 className='text-lg font-bold mb-2'>Store</h2>
            <p className='text-sm text-gray-600'>
              Your one-stop destination for the latest fashion trends.
            </p>
          </div>
          <div className='w-full md:w-1/3 mb-4 md:mb-0'>
            <h3 className='text-md font-bold mb-2'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-sm text-gray-600 hover:text-gray-900'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-sm text-gray-600 hover:text-gray-900'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-sm text-gray-600 hover:text-gray-900'
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/3'>
            <h3 className='text-md font-bold mb-2'>Connect With Us</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-gray-900'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-gray-900'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-gray-900'
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-200 text-center'>
          <div className='container mx-auto py-4 px-4'>
            <p className='text-xs text-center text-gray-500'>
              &copy; {new Date().getFullYear()} Koko, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
