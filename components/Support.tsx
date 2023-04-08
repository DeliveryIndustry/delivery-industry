import SectionTitle from '@/components/SectionTitle'
import styles from '@/components/Support.module.sass'
import TextAnimeFlip from '@/components/TextAnimeFlip'

import { COLORS } from '@/constants/colors'

const Support = () => {
  return (
    <section className={styles.root}>
      <div className={styles.title}>
        <SectionTitle
          titleEn="Support"
          titleJa="サポート"
          color={COLORS.black}
          colorMediaPc={COLORS.white}
          className={styles.title__inner}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.contents}>
          <div className={styles.lead}>
            <TextAnimeFlip>
              <p>
                あなたのために
                <br />
                全力でサポートします
              </p>
            </TextAnimeFlip>
          </div>
          <TextAnimeFlip>
            <p className={styles.message}>
              <span className={styles.message__block}>
                こんな仕事をしてみたい！
                <br />
                もっと給与が欲しい！
                <br />
                もっと休みが欲しい！
              </span>
              <span className={styles.message__block}>
                あなたの日常の『悩み』や『希望』を
                <br />
                定期的に行う面談を通して
                <br />
                ヒヤリングさせて頂きます。
              </span>
              <span className={styles.message__block}>
                その声を元に、
                <br />
                あなたがより快適に楽しく
                <br />
                仕事ができる環境づくりを
                <br />
                弊社は、全力でサポートさせて頂きます!
              </span>
            </p>
          </TextAnimeFlip>
        </div>
      </div>
    </section>
  )
}

export default Support
