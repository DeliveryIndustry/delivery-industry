import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'

import styles from '@/components/MainVisual.module.sass'
import TextAnimeFlipLabel from '@/components/TextAnimeFlipLabel'

import { BREAK_POINTS } from '@/constants/mediaQuery'
import useMedia from '@/hooks/useMedia'

type Vanta = {
  destroy: () => void
}

const MainVisual = () => {
  const isWide = useMedia(`(min-width: ${BREAK_POINTS.pc}px)`)
  const [vantaEffect, setVantaEffect] = useState<Vanta | null>(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x111110,
          points: 11.0,
          maxDistance: isWide ? 24.0 : 22.0,
          spacing: isWide ? 15.0 : 20.0,
        })
      )
    }
    return () => {
      vantaEffect?.destroy()
    }
  }, [vantaEffect, isWide])

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div ref={vantaRef} />
        <div className={styles.title}>
          <TextAnimeFlipLabel
            textList={[
              <div key="title-sub" className={styles.title__sub}>
                Deliver To The Heart
              </div>,
              <h1 key="title-main" className={styles.title__main}>
                心に届ける
              </h1>,
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default MainVisual
