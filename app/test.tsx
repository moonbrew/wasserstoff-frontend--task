'use client'
import { animated, useSpring } from '@react-spring/web'

export default function Home() {

  const [springs, api] = useSpring(() => ({
    x: 0,
    config: {
      mass: 1,
      friction: 15,
      tension: 100,
    },
  }), []);


  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 1400,
      }
    })
  }


  return (
    <div className='m-40'>
      <animated.div
        onClick={handleClick}
        style={{
          width: 412,
          height: 630,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs
        }}
      />
    </div>
  )
}
