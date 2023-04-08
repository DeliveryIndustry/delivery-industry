import Button from '@/components/Button'
import FadeUp from '@/components/FadeUp'
import styles from '@/components/JobDescription.module.sass'
import SectionTitle from '@/components/SectionTitle'
import TextAnimeFlip from '@/components/TextAnimeFlip'

import { COLORS } from '@/constants/colors'
import { mailtoTemplate } from '@/utils/mailtoTemplate'

const JobDescription = () => {
  return (
    <section className={styles.root}>
      <div className={styles.title}>
        <SectionTitle
          titleEn="Job Description"
          titleJa="業務内容"
          color={COLORS.black}
          colorMediaPc={COLORS.white}
          className={styles.title__inner}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.contents}>
          <div className={styles.lead}>
            <TextAnimeFlip>
              <p>未経験者も大歓迎！</p>
            </TextAnimeFlip>
          </div>
          <div>
            <TextAnimeFlip>
              <p className={styles.message}>
                <span className={styles.message__block}>
                  初年度はAmazon勤務になります。
                  <br />
                  配送数に関わらず固定給をお支払いします。
                </span>
                <span className={styles.message__block}>
                  2年目以降は歩合のより高給なお仕事を依頼いたします。
                </span>
                <span className={styles.message__block}>
                  【勤務時間】
                  <br />
                  以下の中から1つ選択していただきます。
                  <br />
                  <br />
                  ・08 : 00 〜 19 : 00
                  <br />
                  　※荷捌きのスピードによって、21時まで勤務することもあります。
                  <br />
                  ・18 : 00 〜 22 : 00
                  <br />
                  ・20 : 00 〜 24 : 00
                </span>
              </p>
            </TextAnimeFlip>
            <FadeUp>
              <a
                href={mailtoTemplate.recruit}
                target="_blank"
                className={styles.button}
                rel="noreferrer"
              >
                <Button>応募する</Button>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobDescription
