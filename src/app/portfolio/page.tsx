import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"

const projects = [
  { id: 1, title: 'PantryPal', description: 'A Pantry Management System, using llama 3.1', github: 'portfolio/pantrypal' },
  { id: 2, title: 'Chatify ', description: 'A variety of chatbots for your personalized needs!', github: 'portfolio/chatify' },
  { id: 3, title: 'Flashcard.AI', description: 'AI-Driven flashcard generator', github: 'portfolio/flashcard' },
  { id: 4, title: 'Zenith', description: 'An activity tracker made for small scale businesses to assign tasks to Employees', github: '/portfolio/zenith' },
  { id: 5, title: 'Collaborative Text Editor', description: 'A Real-time Rich text editor', github: 'portfolio/editor' },
  { id: 6, title: 'The QR Code Generator', description: 'Simple QR code Generator', github: 'portfolio/qrcode' },
  { id: 7, title: 'Notes App', description: 'Simple Notes App with CRUD operations', github: 'portfolio/notes' },
  { id: 8, title: 'Source Code', description: 'Feel free to use the website design!', github: 'https://github.com/DanTiw/retro_portfolio_dantiw' },
]

const Portfolio = () => {
  return (
    <div className="bg-bg min-h-screen p-4 sm:p-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-black text-center mb-8 uppercase   pb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-main border-8 border-black p-4 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 hover:shadow-[8px_8px_0_0_#000] cursor-pointer"
          >
            <h3 className="text-3xl font-bold text-black mb-2 uppercase">{project.title}</h3>
            <p className="text-black mb-4">{project.description}</p>
            <div className="bg-black text-white text-sm font-bold uppercase py-1 px-2 mb-4 inline-block">
              {project.title.toLowerCase()}
            </div>
            <Link href={project.github} passHref>
              <Button className="w-full bg-bg text-black border-4 border-black font-bold text-lg uppercase hover:bg-mainAccent transition-colors">
                <GithubIcon className="mr-2 h-5 w-5" /> Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio