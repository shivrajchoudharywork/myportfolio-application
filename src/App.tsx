import { useState } from 'react'
import './App.css'
import { Navbar } from './componets/Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar image={"logo.jpeg"} label1={"Home"} label2={"Resume"} label3={"Skills"} label4={"Projects/Experience"} label5={"Contact"}/>
     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem cupiditate neque et mollitia dolorum pariatur ratione tenetur. Beatae repellendus unde neque quo blanditiis iure distinctio, natus laudantium deserunt maxime ab ullam nostrum quae dolore aut quasi facere quisquam quam sit, error cupiditate quis optio, voluptatibus excepturi. Alias porro quam voluptatibus omnis facilis sunt nisi voluptate cupiditate repudiandae aut explicabo, vel quae facere quis, mollitia sit qui iusto veniam doloribus eaque nobis expedita dolorum? Doloremque consequatur neque commodi totam. Temporibus architecto laboriosam quam eveniet eum qui veniam, cum nobis ex ut quasi voluptatum veritatis soluta minus facilis. Dignissimos perspiciatis hic sed minus, enim tempora voluptatum optio illo maxime reprehenderit repellendus facere eius neque expedita magni ipsa aliquam distinctio assumenda perferendis, non officia iste. Doloribus odio numquam temporibus. Fugiat laborum reprehenderit cumque! Facere dignissimos totam consectetur numquam a dolor voluptas optio. Modi voluptatibus beatae molestiae deserunt eum iste illo provident iusto cum, consectetur ratione impedit at adipisci, dolor ipsum corrupti eligendi aliquid sit vel, nulla explicabo ex? Dolores aperiam sunt, nostrum voluptatibus deserunt mollitia aliquid possimus itaque facere nisi odio consequatur ullam? At recusandae vel laborum amet fuga distinctio! Deserunt porro at eum incidunt praesentium quae corporis illum. Ad odit labore rerum ipsum unde ducimus libero totam, facere quod enim. Deserunt repellendus voluptatibus libero natus temporibus, harum sit qui explicabo corrupti?</div>
    </>
  )
}

export default App
