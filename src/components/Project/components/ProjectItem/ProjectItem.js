import { TagLinkIcon } from '~/components/Icon'

const ProjectItem = ({ item }) => {
  return (
    <div className='relative mb-5 flex flex-col-reverse gap-3 before:absolute before:top-[-8px] before:h-[1px] before:w-full before:bg-slate-400 before:content-[""] lg:mb-10 lg:flex-row lg:justify-between  '>
      <div>
        <span className='mb-2 inline-block italic text-gray-300'>{item.date}</span>
        <div>
          <h5 className='mb-2 text-xl font-bold capitalize'>{item.title}</h5>
          <p className='mb-2 text-sm font-medium md:text-base lg:text-lg'>{item.desc}</p>
          <div className='flex'>
            <TagLinkIcon className='mr-1 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6' />
            <a href={item.link} className='mb-3 text-xs hover:text-purple-900 md:text-sm lg:text-base'>
              {item.link}
            </a>
          </div>
        </div>
        <div className='flex flex-wrap gap-5'>
          {item.tech.map((t) => (
            <div
              key={t}
              className='border-[2px] border-solid border-[#ccc] bg-slate-700 p-1 font-semibold shadow-card lg:p-2'
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className='w-full shrink-0 cursor-pointer overflow-hidden rounded-md shadow-card lg:h-[200px] lg:w-[300px]'>
        <a href={item.link} target='_blank'>
          <img src={item.img} className='block h-full w-full object-cover' />
        </a>
      </div>
    </div>
  )
}
export default ProjectItem
