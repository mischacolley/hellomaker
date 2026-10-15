import { trustMarkers } from '@/data/trust'
import { Container } from '@/components/Container'

export default function TrustStrip() {
  return (
    <div className="border-y border-border bg-card py-8">
      <Container>
        <h2 className="sr-only">Credentials</h2>
        {/* Four columns only once there is room for them. At the old sm: breakpoint
            each column was ~130px of text, which wrapped "Working with Children
            Check" onto four lines. Two columns hold it on one line until lg. */}
        <ul className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
          {trustMarkers.map((marker) => (
            <li key={marker.label} className="flex items-center gap-3.5">
              {/* Sized to the full two-line text block (~39px) rather than one line,
                  so the icon and the text start and finish together. The lighter
                  stroke keeps a 40px glyph from overpowering 14px type. */}
              <marker.icon
                className="h-10 w-10 shrink-0 text-foreground"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <span className="text-sm">
                <span className="block font-semibold leading-snug">{marker.label}</span>
                <span className="block text-muted-foreground">{marker.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
