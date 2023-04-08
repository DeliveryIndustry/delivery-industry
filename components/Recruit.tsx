import Image from 'next/image'

import Button from '@/components/Button'
import FadeUp from '@/components/FadeUp'
import styles from '@/components/Recruit.module.sass'
import SectionTitle from '@/components/SectionTitle'

import { COLORS } from '@/constants/colors'
import { list } from '@/constants/recruit'
import { mailtoTemplate } from '@/utils/mailtoTemplate'

const Recruit = () => {
  return (
    <section className={styles.root}>
      <div className={styles.title}>
        <SectionTitle
          titleEn="Recruit"
          titleJa="採用の流れ"
          color={COLORS.black}
          className={styles.title__inner}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.contents}>
          <ul className={styles.list}>
            {list.map((item, i) => (
              <li key={i}>
                <FadeUp>
                  <div className={styles.cardImage}>
                    <Image
                      src={`/img/recruit_step${i + 1}.png`}
                      alt={item.title}
                      width="718"
                      height="238"
                    />
                  </div>
                  <div className={styles.cardTextBox}>
                    <h3 className={styles.cardTitle}>
                      STEP{i + 1}.{item.title}
                    </h3>
                    <p
                      className={styles.cardDesc}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
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
    </section>
  )
}

export default Recruit
