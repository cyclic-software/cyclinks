function Footer() {
  return (
    <footer className="px-3 sm:px-0">
      <div className="container text-center mx-auto">
        <div className="md:w-4/6 mx-auto">
        <p className='py-4 text-center text-xs sm:text-sm font-light text-white'>
        Created with{' '}
        <span className='text-green-600 dark:text-green-400 font-semibold animate-pulse'>
          <a href="https://github.com/facebook/create-react-app">React</a>
        </span>{' '}
        from{' '}
        <span className='text-blue-500 dark:text-blue-300 font-semibold animate-pulse'>
          <a href="https://github.com/rachelschipull/cyclinks">CycLinks</a>
        </span>
      </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
