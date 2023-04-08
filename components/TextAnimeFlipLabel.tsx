import { FC, ReactNode, CSSProperties } from 'react'

import styles from '@/components/TextAnimeFlipLabel.module.sass'

import { COLORS } from '@/constants/colors'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const defaultColor = COLORS.white

export type Props = {
  textList: ReactNode[]
  color?: string
  colorMediaPc?: string
}

type CustomCSSProperties = CSSProperties & {
  '--color'?: string
  '--color-media-pc'?: string
}

const TextAnimeFlipLabel: FC<Props> = (props) => {
  const root = useIntersectionObserver()
  const animeClassName = root.isIntersecting ? styles['is-anime'] : ''
  const style = (() => {
    const style: CustomCSSProperties = {}

    style['--color'] = props.color ?? defaultColor
    if (props.colorMediaPc) {
      style['--color-media-pc'] = props.colorMediaPc
    }

    return style
  })()

  return (
    <div ref={root.ref} className={[styles.root, animeClassName].join(' ')} style={style}>
      {props.textList.map((text, index) => (
        <div key={index} className={styles.root__item}>
          {text}
        </div>
      ))}
    </div>
  )
}

export default TextAnimeFlipLabel
