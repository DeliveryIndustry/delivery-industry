import { FC } from 'react'

import styles from '@/components/SectionTitle.module.sass'

import TextAnimeFlipLabel, {
  Props as TextAnimeFlipLabelProps,
} from '@/components/TextAnimeFlipLabel'

type Props = {
  className?: string
  titleEn: string
  titleJa: string
} & Pick<TextAnimeFlipLabelProps, 'color' | 'colorMediaPc'>

const SectionTitle: FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <TextAnimeFlipLabel
        textList={[
          <div key="sub" className={styles.sub}>
            {props.titleEn}
          </div>,
          <div key="main" className={styles.main}>
            {props.titleJa}
          </div>,
        ]}
        color={props.color}
        colorMediaPc={props.colorMediaPc}
      />
    </div>
  )
}

export default SectionTitle
