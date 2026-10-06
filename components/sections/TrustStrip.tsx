import { trustMarkers } from '@/data/trust'
import { Container } from '@/components/Container'

export default function TrustStrip() {
  return (
    <div className="border-y border-border bg-card py-8">
      <Container>
        <h2 className="sr-only">Credentials</h2>
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustMarkers.map((marker) => (
            <li key={marker.label} className="flex items-start gap-3">
              <marker.icon
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                aria-hidden="true"
                strokeWidth={2}
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
