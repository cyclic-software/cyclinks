import profilepicrs from '../profilepicrs.jpg'

function Header() {
    return (
      <header className="container flex text-center mx-auto py-10">
        <div className="md:w-4/6 mx-auto">
          <img src={profilepicrs} className="h-24 rounded-full mx-auto mb-5 border-white border-double" />
          <h1 className="text-xl font-bold text-blue-400 dark:text-blue-200 font-semibold animate-pulse">Rachel Schipull</h1>
          <p className='text-white'>Software Engineer and Developer Relations</p>
        </div>
      </header>
    );
  }
  
  export default Header;