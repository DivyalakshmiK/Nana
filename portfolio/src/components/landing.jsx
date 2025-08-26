import { useState } from 'react'

function Landing() {
  const [activeFig, setActiveFig] = useState(null)
  
  const figs = [
    { id: 1, x: '20%', y: '40%', text: 'Projects' },
    { id: 2, x: '30%', y: '30%', text: 'About' },
    { id: 3, x: '25%', y: '50%', text: 'Skills' },
    { id: 4, x: '35%', y: '45%', text: 'Contact' }
  ]

  const quote = {
    text: "In the garden of code, ideas bloom like figs – each one unique, each one promising.",
    author: "- A Digital Dreamer"
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Home Icon */}
      <div className="absolute top-6 left-6 text-amber-50/80 hover:text-amber-50 transition-colors cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>

      {/* Fig Tree and Figs */}
      <div className="absolute bottom-0 left-0 w-2/5 h-full">
        {/* Tree Trunk - using CSS gradient for a simple trunk effect */}
        <div className="absolute bottom-0 left-12 w-8 h-3/4 bg-gradient-to-t from-amber-900 to-amber-800 rounded-t-full"></div>
        
        {/* Figs */}
        {figs.map((fig) => (
          <button
            key={fig.id}
            style={{ left: fig.x, top: fig.y }}
            className={`absolute w-12 h-12 rounded-full transition-all duration-300 transform
              ${activeFig === fig.id ? 'scale-110' : 'scale-100'}
              bg-purple-600 hover:bg-purple-500
              shadow-[0_0_15px_rgba(168,85,247,0.5)]
              hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
              cursor-pointer`}
            onClick={() => setActiveFig(fig.id)}
          >
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-amber-50/90 whitespace-nowrap">
              {fig.text}
            </span>
          </button>
        ))}
      </div>

      {/* Quote */}
      <div className="absolute top-1/4 right-12 max-w-md text-right">
        <p className="text-2xl font-light text-amber-50/90 italic leading-relaxed">
          {quote.text}
        </p>
        <p className="mt-4 text-amber-50/70">
          {quote.author}
        </p>
      </div>

      {/* Cat */}
      <div className="absolute bottom-8 right-12">
        <div className="w-16 h-16 bg-amber-800 rounded-full relative">
          {/* Cat ears */}
          <div className="absolute -top-4 left-2 w-4 h-8 bg-amber-800 rounded-t-full transform -rotate-6"></div>
          <div className="absolute -top-4 right-2 w-4 h-8 bg-amber-800 rounded-t-full transform rotate-6"></div>
          {/* Cat face */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-amber-50 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-amber-50 rounded-full"></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-900 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Landing