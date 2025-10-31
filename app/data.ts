type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Darklyn UI',
    description:
      'The dark theme component focused open source tailwind.css library is now available in mvp',
    link: 'https://darklynui.netlify.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Figma-Design',
    description: 'The github repo where I store my figma designs',
    link: 'https://github.com/Yamikar/Figma-Design',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Frontend Developer',
    start: '2023',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Erdem Hospitals',
    title: 'IT Support Specialist',
    start: '2023',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'SPORTS INC.',
    title: 'Intern',
    start: '2021',
    end: '2022',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'How to Make Your Website Load in Under 1 Second',
    description: 'Start reading now',
    link: 'https://medium.com/full-stack-forge/how-to-make-your-website-load-in-under-1-second-e748100bba01',
    uid: 'blog-2',
  },
  {
    title: 'Top 8 React Libraries Tools You Need to Know in 2025',
    description: 'Start reading now',
    link: 'https://medium.com/@letscodefuture/top-8-react-libraries-tools-you-need-to-know-in-2025-2afdb6c33251',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/yamikar',
  },
  {
    label: 'X',
    link: 'https://x.com/ymzkess',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/y%C4%B1lmaz-keskin-ymk/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ymzkes',
  },
]

export const EMAIL = 'keskinyilmaz037@gmail.com'
