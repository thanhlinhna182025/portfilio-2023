import { forwardRef } from 'react'
import { Tooltip } from 'react-tooltip'
import CV from '~/assets/TRUONG-TUAN-THANH-FRONTEND.pdf'
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
      <a
        download={true}
        href={CV}
        className='group flex h-[40px] w-[120px] items-center justify-center rounded-[60px] bg-gradient-to-b from-[#fff] to-[#ddd] shadow-[_0_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[_0_2px_4px_rgba(0,0,0,0.3)] md:h-[50px] md:w-[140px] lg:h-[60px] lg:w-[170px]'
      >
        <span className='flex h-[90%] w-[90%] items-center justify-center rounded-[60px] bg-gradient-to-t from-[#fff] to-[#ddd] text-lg font-extrabold text-gray-400 group-hover:text-cyan-400 md:text-xl lg:text-2xl'>
          My CV
        </span>
      </a>
    </div>
  )
}
export default forwardRef(Intro)
