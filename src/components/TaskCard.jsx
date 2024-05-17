import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'


const TaskCard = ({title, tags, handleDelete, index }) => {
  return (
    <article className='w-full min-h-[100px] border mx-0 my-[15px] p-[15px] rounded-[10px] border-solid border-[#dcdcdc]'>
        <p className='text-lg font-bold mb-[15px]'>{title}</p>

        <div className='flex items-center justify-between'>
            <div className=''>
                {
                    tags.map((tag, index) => (
                      <Tag 
                      key={index}
                      tagName={tag}
                      selected
                      />
                    ))
                }
            </div>
            <div className='w-[35px] h-[35px] flex items-center justify-center cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] rounded-[100%] hover:bg-[#ebebeb]'
            onClick={() => handleDelete(index)}
            >
          <img src={deleteIcon} 
          className='w-5 opacity-[50%] transition-all duration-[0.3s] ease-[ease-in-out]' alt='' />
            </div>
        </div>
    </article>
  )
}

export default TaskCard