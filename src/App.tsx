import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQEqK5uipFOmyQ/profile-displayphoto-shrink_800_800/0/1700569830594?e=1709769600&v=beta&t=Ltkis2TnvK0ZDEXbacZe_Dx9FvbZmm03uD3PetLhgkI',
      name: 'Yuri Pedrosa',
      role: 'FullStack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-01-07 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Yuri Pedrosa 2',
      role: 'FullStack Developer2',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-01-08 12:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className = {styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key = {post.id}
                post = {post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}