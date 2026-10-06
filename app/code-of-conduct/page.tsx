import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/PageHeader'
import { Container } from '@/components/Container'

export const metadata = genPageMetadata({
  title: 'Code of Conduct',
  description:
    'How we behave towards each other at HelloMaker sessions, what we expect of makers and parents, and what to do if something goes wrong.',
  path: '/code-of-conduct',
})

/*
  DRAFT — needs your review and sign-off before launch.

  This replaces the "Lorem ispum" placeholder that was publicly linked from the
  Makerspace page. It is written to be genuinely usable rather than to fill
  space, but it is not legal advice and it makes a few assumptions you should
  confirm:
    - that you are the sole adult running sessions
    - that parents of under-16s stay contactable during a session
    - that you have no incident-reporting obligation beyond NSW mandatory
      reporting as a person working with children
  Worth a read by someone who knows NSW child-safe standards before it goes live.
*/

export default function CodeOfConductPage() {
  return (
    <>
      <PageHeader
        eyebrow="Code of Conduct"
        title="How we treat each other"
        lede="HelloMaker sessions work because everyone in the room — young people, parents and me — knows what to expect. This is that agreement, in plain language."
      />

      <Container className="py-14 md:py-20">
        <div className="prose max-w-prose">
          <h2>What we are trying to make</h2>
          <p>
            A room where a young person can try something, get it wrong in front of other people,
            and want to try again. Everything below exists to protect that.
          </p>

          <h2>What we expect of makers</h2>
          <ul>
            <li>
              <strong>Look after each other.</strong> No put-downs, no exclusion, no commenting on
              anyone&rsquo;s body, background or ability. Teasing that one person finds funny and
              another doesn&rsquo;t is not teasing, it is the thing we are stopping.
            </li>
            <li>
              <strong>Ask before you touch someone else&rsquo;s work.</strong> Half-built projects
              are precious. Hands off unless you&rsquo;re invited in.
            </li>
            <li>
              <strong>Use tools the way you were shown.</strong> Some of what we use can cut, burn
              or carry current. If you haven&rsquo;t been shown, ask. There is no penalty for
              asking and a real one for guessing.
            </li>
            <li>
              <strong>Tell me if something is wrong.</strong> A broken tool, a hurt finger, a
              conversation that made you uncomfortable. Early and small beats late and large.
            </li>
            <li>
              <strong>Help put the space back.</strong> We pack down together. The next group
              deserves the room we&rsquo;d want.
            </li>
          </ul>

          <h2>Photography and sharing work</h2>
          <p>
            I sometimes photograph projects to show what sessions look like. I ask permission from a
            parent or guardian in writing before any photograph of a young person is published, and
            you can decline or withdraw that permission at any time without it affecting your place
            in a session. Makers can always ask me not to photograph their work.
          </p>

          <h2>Devices and the internet</h2>
          <p>
            Sessions use the internet for research, reference and publishing work. Makers stay on
            task and on sites relevant to what they&rsquo;re building. I don&rsquo;t install
            monitoring software on anyone&rsquo;s personal device; instead we work in shared space
            where screens are visible, which does the same job with more trust and less
            surveillance.
          </p>

          <h2>What you can expect of me</h2>
          <ul>
            <li>
              I hold a current Working with Children Check and a current First Aid certificate, and
              will show either on request.
            </li>
            <li>
              I will not be alone and out of sight with a single young person. Sessions run in open,
              visible spaces.
            </li>
            <li>
              I will tell you promptly if your child is hurt, upset, or involved in something that
              needed my intervention.
            </li>
            <li>
              I will take a concern seriously the first time you raise it, and tell you what
              I&rsquo;ve done about it.
            </li>
            <li>
              I will keep what I learn about your family private, except where I am legally required
              to report a risk of harm to a child.
            </li>
          </ul>

          <h2>What we expect of parents and guardians</h2>
          <ul>
            <li>
              Stay contactable for the length of the session, and let me know in advance about
              anything that helps me support your young person well &mdash; medical needs, access
              needs, triggers, or simply what a hard day looks like for them.
            </li>
            <li>
              Collect on time, and tell me ahead of time if someone other than you is collecting.
            </li>
            <li>
              Raise concerns with me directly and early. I would much rather hear it from you than
              not hear it.
            </li>
          </ul>

          <h2>If something goes wrong</h2>
          <p>
            Tell me, in person or at{' '}
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>. I will acknowledge
            it within two days and tell you what I intend to do.
          </p>
          <p>
            Depending on what has happened, that might mean a conversation, a change to how a
            session runs, asking someone to sit out, or asking someone not to return. Behaviour
            that puts another person&rsquo;s safety at risk ends a session immediately, and I will
            call a parent.
          </p>
          <p>
            Where I believe a child is at risk of significant harm, I am obliged to report it to the
            relevant NSW authority, and I will. If a concern is about me, you are entitled to go
            straight to the <abbr title="Office of the Children&rsquo;s Guardian">OCG</abbr> or the
            police without raising it with me first.
          </p>

          <h2>Access and inclusion</h2>
          <p>
            Neurodivergent makers, makers with disabilities, and makers who need to move, fidget,
            step out or work in silence are all welcome. Tell me what helps and I will work with it.
            If cost is the barrier, say so &mdash; email me and we will have a quiet conversation
            about it.
          </p>

          <p className="text-sm text-muted-foreground">
            Last reviewed: draft pending sign-off. Questions to{' '}
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>.
          </p>
        </div>
      </Container>
    </>
  )
}
