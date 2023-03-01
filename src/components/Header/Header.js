const Header = ({ scrollToProject, scrollToAbout, scrollContact }) => {
  return (
    <header className='mb-5 flex flex-col items-center py-2 md:py-4 lg:h-header-height lg:flex-row lg:justify-between lg:py-0'>
      <div className='title_box w-full lg:w-1/2'>
        <h1 className='title title_1 text-[24px] md:text-[40px] lg:text-[45px]'>Trương Tuấn Thành</h1>
        <h1 className='title title_2 text-[24px] md:text-[40px] lg:text-[45px]'>Trương Tuấn Thành</h1>
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
