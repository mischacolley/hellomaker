'use client'

import { FilloutPopupEmbed } from '@fillout/react'
import { useState } from 'react'
import '@fillout/react/style.css'

function Form({ buttonText = 'Express Interest', filloutId, parameters = {} }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="btn" onClick={() => setIsOpen(true)}>
        {buttonText}
      </button>

      {isOpen && filloutId && (
        <FilloutPopupEmbed
          filloutId={filloutId}
          inheritParameters
          parameters={parameters}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Form
