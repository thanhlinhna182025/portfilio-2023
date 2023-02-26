const Header = ({ scrollToProject, scrollToAbout, scrollContact }) => {
  return (
    <header className='mb-5 flex flex-col items-center py-2 md:py-4 lg:h-header-height lg:flex-row lg:justify-between lg:py-0'>
      <div className='bg-gradient-to-tr from-lime-400 to-emerald-300 bg-clip-text text-lg font-bold uppercase text-transparent md:text-2xl lg:text-3xl'>
        Trương Tuấn Thành
      </div>
      <div className='flex justify-between px-5 md:justify-center'>
        <span
          onClick={scrollToProject}
          className='mr-6 cursor-pointer font-semibold hover:text-rose-500 md:mr-10 md:text-lg '
        >
          Project
        </span>
        <span
          onClick={scrollToAbout}
          className='mr-6 cursor-pointer font-semibold hover:text-rose-500 md:mr-10 md:text-lg '
        >
          About
        </span>
        <span onClick={scrollContact} className='cursor-pointer font-semibold hover:text-rose-500 md:text-lg'>
          Contact
        </span>
      </div>
    </header>
  )
}
export default Header
