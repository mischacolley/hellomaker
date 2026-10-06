'use client'

import { FilloutPopupEmbed } from '@fillout/react'
import { useState } from 'react'
import '@fillout/react/style.css'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void }
  }
}

type FormProps = {
  buttonText?: string
  filloutId: string
  parameters?: Record<string, string>
  className?: string
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline' | 'secondary'
  /** Analytics label so we can read conversion per placement, not just per site. */
  trackAs?: string
}

/**
 * The interest form. Fillout handles submission and holds the redirect to
 * /thanks — set that redirect in the Fillout dashboard so ad platforms have a
 * conversion URL to fire against. `inheritParameters` carries UTMs through to
 * the submission.
 */
export default function Form({
  buttonText = 'Express interest',
  filloutId,
  parameters = {},
  className,
  size = 'default',
  variant = 'default',
  trackAs,
}: FormProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('interest-form-open', { placement: trackAs ?? 'unknown', ...parameters })
    }
  }

  return (
    <>
      <Button onClick={open} size={size} variant={variant} className={cn('rounded-full', className)}>
        {buttonText}
      </Button>

      {isOpen && (
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
