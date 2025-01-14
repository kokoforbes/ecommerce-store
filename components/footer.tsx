const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <div className='container mx-auto py-10 px-4'>
        <p className='text-xs text-center text-gray-500'>
          &copy; {new Date().getFullYear()} Koko, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
