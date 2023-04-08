import Button from '@/components/Button'
import FadeUp from '@/components/FadeUp'
import styles from '@/components/Internship.module.sass'
import SectionTitle from '@/components/SectionTitle'
import TextAnimeFlip from '@/components/TextAnimeFlip'

import { mailtoTemplate } from '@/utils/mailtoTemplate'

const Internship = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background} />
      <div className={styles.title}>
        <SectionTitle className={styles.title__inner} titleEn="Internship" titleJa="職場体験" />
      </div>
      <div className={styles.contents}>
        <TextAnimeFlip>
          <p className={styles.desc}>
            ・どんな仕事をするのか不安...。
            <br />
            ・実際に仕事を初めて自分に合わなくても、辞めづらくなりそう...。
            <br />
            ・予想以上に仕事がきつかったら嫌だな...。
            <br />
            <br />
            心配が残る方のために、1日、助手席に乗って職業体験できる制度があります！
            <br />
            <br />
            ※勤務決定の場合、体験日の給与支給
            <br />
            ※勤務しない場合、体験日の支払いなし
          </p>
        </TextAnimeFlip>
        <FadeUp>
          <a
            href={mailtoTemplate.internship}
            target="_blank"
            className={styles.button}
            rel="noreferrer"
          >
            <Button>職場体験に申し込む</Button>
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

export default Internship
