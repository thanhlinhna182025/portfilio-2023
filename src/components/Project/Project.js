import { forwardRef } from 'react'
import Title from '~/components/Title'
import { dataProject } from '~/data'
import ProjectItem from './components/ProjectItem'
const Project = ({}, ref) => {
  return (
    <div ref={ref} className='mb-10 '>
      <Title>recent projects</Title>
      <div className=''>
        {dataProject.map((item) => (
          <ProjectItem item={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
export default forwardRef(Project)
