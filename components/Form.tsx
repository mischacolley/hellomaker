'use client'

import { FilloutPopupEmbed } from '@fillout/react'
import { useState } from 'react'
import '@fillout/react/style.css'

function Form() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Express Interest</button>

      {isOpen && <FilloutPopupEmbed filloutId="8926s4Ngckus" onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default Form
