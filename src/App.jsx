import { useState } from 'react'
import './App.css'

function App() {
  const [activeButton, setActiveButton] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isRotating, setIsRotating] = useState(false)

  const buttons = Array.from({ length: 9 }, (_, i) => i + 1)
  const radius = 300

  return (
    <div className="app-container">
      <div 
        className="button-container"
        onMouseLeave={() => {
          setActiveButton(null)
          setIsExpanded(false)
          setIsRotating(false)
        }}
      >
        <button 
          className="main-button"
          onMouseEnter={() => {
            setActiveButton('main')
            setIsExpanded(true)
            setIsRotating(true)
          }}
          onClick={() => window.location.href = 'https://www.waytoagi.com/zh'}
        >
          <span>Trae and Dream</span>
        </button>

        {buttons.map((num, index) => {
          const angle = (index * 40) * (Math.PI / 180)
          const x = isExpanded ? Math.cos(angle) * radius : 0
          const y = isExpanded ? Math.sin(angle) * radius : 0

          return (
            <button
              key={num}
              className={`circle-button ${num === 1 ? 'special-text' : ''} ${activeButton === num ? 'active' : ''} ${isRotating ? 'rotating' : ''}`}
              style={{
                '--x': `${x}px`,
                '--y': `${y}px`,
                transform: `translate(${x}px, ${y}px)`,
                opacity: isExpanded ? 1 : 0,
                pointerEvents: isExpanded ? 'auto' : 'none'
              }}
              onMouseEnter={() => {
                setActiveButton(num)
                setIsRotating(false)
              }}
              onClick={() => {
                if (num === 1) {
                  window.location.href = 'https://light-and-shadow-art-game.vercel.app'
                } else if (num === 2) {
                  window.location.href = 'https://beauty-makeup-match-puzzle.vercel.app/'
                } else if (num === 3) {
                  window.location.href = 'https://github.com/fengqile8866/Drone.git'
                } else if (num === 4) {
                  window.location.href = 'https://chat.deepseek.com/'
                } else if (num === 5) {
                  window.location.href = 'https://github.com/fengqile8866/weixinchat.git'
                } else if (num === 6) {
                  window.location.href = 'https://cephalon.cloud/share/register-landing?invite_id=9C0nEn'
                } else if (num === 7) {
                  window.location.href = 'https://www.coze.cn/s/i56gpQFm/'
                } else if (num === 8) {
                  window.location.href = 'https://www.coze.cn/s/i56VatYK/'
                } else if (num === 9) {
                  window.location.href = 'https://www.coze.cn/s/i56Cp9NS/'
                }
              }}
            >
              {num === 1 ? '光影游戏' : num === 2 ? '美妆消消乐' : num === 3 ? '无人机表演' : num === 4 ? 'Deepseek' : num === 5 ? '微信神器' : num === 6 ? '端脑云' : num === 7 ? '一键转绘' : num === 8 ? '男神写真' : num === 9 ? '女神写真' : num}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default App
