import { FC } from 'react'

import styles from '@/components/Card.module.sass'

type Props = {
  head?: JSX.Element
  body: JSX.Element
}

const Card: FC<Props> = (props) => {
  return (
    <div className={styles.root}>
      {props.head && <div className={styles.head}>{props.head}</div>}
      <div className={styles.body}>{props.body}</div>
    </div>
  )
}

export default Card
