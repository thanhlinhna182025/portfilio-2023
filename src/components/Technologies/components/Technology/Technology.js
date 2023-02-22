const Technology = ({ item }) => {
  return (
    <div>
      <label className='text-white font-semibold'>{item.name}</label>
      <div
        className={`${
          item.level === 'A' ? 'before:w-[75%]' : 'before:w-[50%]'
        } relative shadow-sm md:shadow-md lg:shadow-lg h-2 lg:h-3 overflow-hidden rounded-full bg-slate-500 before:absolute before:h-full before:bg-gradient-to-r  before:from-indigo-500 before:to-sky-500 before:content-[""] md:w-[300px] lg:w-[400px]`}
      ></div>
    </div>
  )
}
export default Technology
