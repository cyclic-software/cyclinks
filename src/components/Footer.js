function Footer() {
  return (
    <footer className="px-3 sm:px-0">
      <div className="container text-center mx-auto">
        <div className="md:w-4/6 mx-auto">
        <p className='py-4 text-center text-xs sm:text-sm font-light text-white'>
        Created with{' '}
        <span className='text-purple-600 dark:text-purple-400 font-semibold animate-pulse'>
          React
        </span>{' '}
        from{' '}
        <span className='text-blue-500 dark:text-blue-300 font-semibold animate-pulse'>
          CycLinks
        </span>
      </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
