const Technology = ({ item }) => {
  return (
    <div>
      <label className='font-semibold text-white'>{item.name}</label>
      <div
        className={`${
          item.level === 'A' ? 'before:w-[75%]' : 'before:w-[50%]'
        } relative h-2 overflow-hidden rounded-full bg-slate-500 shadow-card before:absolute before:h-full before:bg-gradient-to-r before:from-indigo-500  before:to-sky-500 before:content-[""] md:w-[300px] lg:h-3 lg:w-[400px]`}
      ></div>
    </div>
  )
}
export default Technology
