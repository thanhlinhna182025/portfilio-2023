import Title from '~/components/Title'
import { dataTech } from '~/data'
import Technology from './components/Technology'

const Technologies = () => {
  return (
    <div className='mb-10 flex flex-col gap-10 md:flex-row lg:gap-[80px]'>
      <div>
        <Title>Technologies</Title>
        <div className='flex flex-col gap-y-4'>
          {dataTech.map((item) => (
            <Technology item={item} key={item.name} />
          ))}
        </div>
      </div>
      <div>
        <Title>Additional technologies and skills</Title>
        <ul className='grid w-full grid-cols-1 md:grid-cols-2'>
          <li>- GIT</li>
          <li>- English</li>
          <li>- Quick learning</li>
          <li>- High sense of responsibility</li>
        </ul>
      </div>
    </div>
  )
}
export default Technologies
