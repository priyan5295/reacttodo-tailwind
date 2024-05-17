import React from 'react'

const Tag = ({ tagName, selectTag, selected}) => {

    const tagStyle = {
        HTML : {backgroundColor: "#fda821"},
        CSS : {backgroundColor: "#15d4c8"},
        Javascript : {backgroundColor: "#ffd12c"},
        React : {backgroundColor: "#4cdafc"},
        default : {backgroundColor: "#f9f9f9"},
    }

  return (
    <button
        type='button'
        className='tag text-sm font-medium bg-[#f9f9f9] border cursor-pointer mr-2.5 px-2.5 py-0.5 rounded-[5px] border-solid border-[#dfe3e6]'
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => selectTag(tagName)}>
            {tagName}
    </button>
  )
}

export default Tag