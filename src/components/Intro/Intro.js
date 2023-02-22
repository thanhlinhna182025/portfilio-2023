import { forwardRef } from 'react'
import { Tooltip } from 'react-tooltip'
import { EmailIcon, GithubIcon, PhoneIcon } from '~/components/Icon'
const Intro = ({}, ref) => {
  return (
    <div className='mb-10 flex flex-col items-center'>
      <div className='mb-5 flex flex-col items-center lg:flex-row lg:gap-x-[200px]'>
        <div className='mb-10'>
          <p className='text-base font-semibold md:text-lg lg:text-xl'>Hi ! I'm Thanh Truong</p>
          <p className='text-lg md:text-xl lg:text-2xl'>
            I implement user interface design and solve user problems using web technologies. I have 1 years of making
            products that solve user problems and implementing responsive website.
          </p>
        </div>
        <div className='flex justify-between gap-y-3 lg:flex-col lg:gap-y-10'>
          <div className='mr-20 lg:mr-0'>
            <a data-tooltip-id='intro-tooltip' data-tooltip-content='thanhlinhna182025@gmail.com'>
              <EmailIcon className='text-white' />
            </a>
            <Tooltip id='intro-tooltip' />
          </div>
          <div className='mr-20 lg:mr-0' ref={ref}>
            <a data-tooltip-id='intro-tooltip' data-tooltip-content='090 296 0063'>
              <PhoneIcon className='text-white' />
            </a>
            <Tooltip id='intro-tooltip' />
          </div>
          <div>
            <a data-tooltip-id='intro-tooltip' data-tooltip-content='https://github.com/thanhlinhna182025'>
              <GithubIcon className='text-white' />
            </a>
            <Tooltip id='intro-tooltip' />
          </div>
        </div>
      </div>
      <button className='w-fit hover:opacity-90 shadow-sm md:shadow-md lg:shadow-lg border-[1px] border-solid border-[#fff] bg-slate-500 px-5 py-1 text-lg font-bold'>
        My CV
      </button>
    </div>
  )
}
export default forwardRef(Intro)
