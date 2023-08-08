import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SkillSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Skill({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description: 'As a Developer I have an assortment of tools and skills',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="As a Developer I have an assortment of tools and skills"
      intro="As a certified Full Stack Developer I was trained to use the MERN Stack. Since then I've added several technologies under my belt."
    >
      <div className="space-y-20">
        <SkillSection title="Languages">
          <Skill title="HTML | CSS | JavaScript">
            My introduction to web development and the three main languages of
            web development.
          </Skill>
          <Skill title="TypeScript">
            A superset of JavaScript. I learned TypeScript at my first
            internship and have been using it ever since. Using a typed language
            really makes everything intentional and saves you from a lot of
            errors.
          </Skill>
          <Skill title="Python">
            New to myself, I&apos;m learning through Codecademy&apos;s Comptuer
            Science Path. I find learning a language with a different syntax
            challenging but rewarding as it helps to cement coding concepts.
          </Skill>
        </SkillSection>
        <SkillSection title="FrontEnd">
          <Skill title="React">
            An essential part of the MERN stack. I use React to create elegant
            and reusable components as well as hooks for dynamic interactions.
          </Skill>
          <Skill title="NextJs">
            My favorite React Framework. I use NextJs for server-side rendering,
            page routing, and API routes.
          </Skill>
          <Skill title="TailwindCSS">
            My absolute favorite piece of tech. Tailwind allows me to quickly
            style pixel perfect components in a way that is readable and
            intuitive.
          </Skill>
        </SkillSection>
        <SkillSection title="Backend">
          <Skill title="MongoDB">NoSQL document based database.</Skill>
          <Skill title="ExpressJs">
            Routing, Middleware, and HTTP Requests
          </Skill>
          <Skill title="MySQL | PostgreSQL">
            Relational Databases using SQL
          </Skill>
          <Skill title="Prisma">
            An ORM that I&apos;ve recently tried out and enjoyed. Prisma greatly
            helped me to understand modeling relationships within a DB.
          </Skill>
        </SkillSection>
        <SkillSection title="Development Tools">
          <Skill title="NodeJs">JavaScript runtime environment</Skill>
          <Skill title="GitHub | Git CLI">
            Checkout some of my repositories.
          </Skill>
          <Skill title="Visual Studio Code">My IDE of choice.</Skill>
          <Skill title="Chrome Dev Tools | React Dev Tools">
            A couple of debugging staples.
          </Skill>
        </SkillSection>
      </div>
    </SimpleLayout>
  )
}
