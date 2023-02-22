import { forwardRef } from 'react'
import Title from '~/components/Title'
const About = ({}, ref) => {
  return (
    <div ref={ref}>
      <Title>About Me</Title>
      <div className='mt-10 flex flex-col justify-center md:flex-row'>
        <div className='relative mb-[120px] h-2 w-[200px] rounded-full bg-white before:absolute before:right-0 before:top-1/2 before:h-4 before:w-4 before:translate-x-[50%] before:translate-y-[-50%] before:rounded-full before:bg-white before:content-[""] md:mb-0'>
          <span className='absolute top-[-30px] font-semibold right-0 translate-x-[50%]'>2012</span>
          <p className='absolute top-[10px] right-0 w-[170px] text-center'>
            In 2012, graduated from Industrial University of Ho Chi Minh City
          </p>
        </div>
        <div className='relative mb-[120px] h-2 w-[300px] rounded-full bg-white before:absolute before:right-0 before:top-1/2 before:h-4 before:w-4 before:translate-x-[50%] before:translate-y-[-50%] before:rounded-full before:bg-white before:content-[""] md:mb-0'>
          <span className='absolute top-[-30px] font-semibold right-0 translate-x-[50%]'>2018</span>
          <p className='absolute top-[10px] right-0 w-[170px] text-center'>
            From 2012 - 2018, working at Asia Commercial Joint Stock Bank
          </p>
        </div>
        <div className='relative mb-[120px] h-2 w-[250px] rounded-full bg-white before:absolute before:right-0 before:top-1/2 before:h-4 before:w-4 before:translate-x-[50%] before:translate-y-[-50%] before:rounded-full before:bg-white before:content-[""] md:mb-0'>
          <span className='absolute top-[-30px] right-0 translate-x-[50%]'>2020</span>
          <p className='absolute top-[10px] right-0 w-[170px] text-center'>
            From 2018-2019 to learn web programming at Codecademy
          </p>
        </div>
        <div className='relative mb-[120px] h-2 w-[200px] rounded-full bg-white before:absolute before:right-0 before:top-1/2 before:h-4 before:w-4 before:translate-x-[50%] before:translate-y-[-50%] before:rounded-full before:bg-white before:content-[""] md:mb-0'>
          <span className='absolute top-[-30px] font-semibold right-0 translate-x-[50%]'>2021</span>
          <p className='absolute top-[10px] right-0 w-[170px] text-center'>
            Working at ALLGROWLABO CO.,LTD. , position front end developer
          </p>
        </div>
        <div className='relative h-2 w-[250px] rounded-full bg-white md:mb-0'>
          <span className='absolute top-[-30px] font-semibold right-0 translate-x-[50%]'>2023</span>
          <p className='absolute top-[10px] right-0 w-[170px] text-center'>Freelancer</p>
        </div>
      </div>
    </div>
  )
}
export default forwardRef(About)
