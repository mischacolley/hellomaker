/**
 * Social proof. Currently empty on purpose: the homepage section renders
 * nothing while this array is empty, so no placeholder quotes can ship by
 * accident.
 *
 * This is the single largest conversion gap before advertising. Two or three
 * real quotes will outperform any amount of visual polish. Collect first name,
 * child's age, and permission to publish.
 */
export type Testimonial = {
  quote: string
  name: string
  context: string
}

export const testimonials: Testimonial[] = []
