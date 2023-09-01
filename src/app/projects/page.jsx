import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image1 from '@/images/projects/dashboard.png'
import Image2 from '@/images/projects/store.png'
import Image3 from '@/images/projects/blog.png'

const projects = [
  {
    name: 'Admin Dashboard CMS Backend',
    description:
      'Custom made CMS powered by Prisma + MySql managed backend (PlanetScale). Includes fully responsive Front-End GUI',
    link: {
      href: 'https://github.com/RotichD/ecommerce-admin',
      label: 'repository',
    },
    image: Image1,
    badges: [
      'Prisma',
      'Planetscale',
      'TypeScript',
      'TailwindCSS',
      'Clerk Auth',
      'Stripe',
    ],
  },
  {
    name: 'E-Commerce Store',
    description:
      'Frontend Store: Shopping cart w/persistent storage & Stripe payment integration',
    link: {
      href: 'https://ecommerce-storefront-ivory.vercel.app/',
      label: 'storefront.vercel.app',
    },
    image: Image2,
    badges: [
      'TypeScript',
      'React',
      'Next.js',
      'TailwindCSS',
      'Zustand',
      'HeadlessUI',
      'Stripe',
    ],
  },
  {
    name: 'Photographer Portfolio',
    description:
      'Photography Portfolio to showcase photographic works. Includes Blog powered by Sanity CMS, SSR + ISR, and Stripe Payment integration for accepting donations.',
    link: {
      href: 'https://www.dylanrotich.art/',
      label: 'dylanrotich.art',
    },
    image: Image3,
    badges: [
      'TypeScript',
      'React',
      'Next.js',
      'TailwindCSS',
      'Sanity',
      'Stripe',
    ],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects: Full Stack & Front End"
      intro="I've worked on many projects small and large including course work from Bootcamp and other learning resources. Here of some of my favorite and most comprehensive."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="aspect-h-1 aspect-w-1 lg:aspect-none relative z-10 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-60 lg:h-80 ">
              <Image
                src={project.image}
                alt="project image"
                fill
                className="absolute inset-0 object-cover object-center"
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <Card.Badges>{project.badges}</Card.Badges>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
