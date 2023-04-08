import { FC, ReactNode } from 'react'

import styles from '@/components/TextAnimeFlip.module.sass'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

type Props = {
  children: ReactNode
}

const TextAnimeFlip: FC<Props> = (props) => {
  const root = useIntersectionObserver()
  const animeClassName = root.isIntersecting ? styles['is-anime'] : ''

  return (
    <div ref={root.ref} className={[styles.root, animeClassName].join(' ')}>
      {props.children}
    </div>
  )
}

export default TextAnimeFlip
