import { FC, ReactNode } from 'react'

import styles from '@/components/Button.module.sass'

type Props = {
  className?: string
  children: ReactNode
}

const Button: FC<Props> = (props) => {
  return <span className={[styles.root, props.className].join(' ')}>{props.children}</span>
}

export default Button
