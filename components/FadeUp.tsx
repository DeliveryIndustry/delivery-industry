import { FC, ReactNode } from 'react'

import styles from '@/components/FadeUp.module.sass'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

type Props = {
  className?: string
  children: ReactNode
}

const FadeUp: FC<Props> = (props) => {
  const root = useIntersectionObserver()
  const animeClassName = root.isIntersecting ? styles['is-anime'] : ''

  return (
    <div ref={root.ref} className={[styles.fadeUp, animeClassName, props.className].join(' ')}>
      {props.children}
    </div>
  )
}

export default FadeUp
