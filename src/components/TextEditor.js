import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'
const TextEditor = ({initialValue, getValue}) => {
    const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      tabIndex={1}
      onChange={(newContent) => getValue(newContent)}
    />
  )
}

export default TextEditor
