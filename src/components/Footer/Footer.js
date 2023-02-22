import { Tooltip } from 'react-tooltip'
import { EmailIcon, GithubIcon, PhoneIcon } from '~/components/Icon'

const Footer = () => {
  return (
    <footer className='md:mt-[150px] flex flex-col-reverse justify-between py-10 md:flex-row md:px-10 lg:px-20'>
      <div className='flex flex-col md:flex-row md:gap-x-5 lg:gap-x-[50px]'>
        <div className='flex lg:flex-col'>
          <span>Call me :</span>
          <span>090 296 0063</span>
        </div>
        <div className='flex lg:flex-col'>
          <span>Email :</span>
          <span>thanhlinhna182025@gmail.com</span>
        </div>
      </div>
      <div className='flex gap-x-5'>
        <div>
          <a data-tooltip-id='footer-tooltip' data-tooltip-content='thanhlinhna182025@gmail.com'>
            <EmailIcon className='text-white' />
          </a>
          <Tooltip id='footer-tooltip' place='top' />
        </div>
        <div>
          <a data-tooltip-id='footer-tooltip' data-tooltip-content='090 296 0063'>
            <PhoneIcon className='text-white' />
          </a>
          <Tooltip id='footer-tooltip' place='top' />
        </div>
        <div>
          <a data-tooltip-id='footer-tooltip' data-tooltip-content='https://github.com/thanhlinhna182025'>
            <GithubIcon className='text-white' />
          </a>
          <Tooltip id='footer-tooltip' place='top' />
        </div>
      </div>
    </footer>
  )
}
export default Footer
