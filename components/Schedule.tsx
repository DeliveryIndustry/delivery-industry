import FadeUp from '@/components/FadeUp'
import styles from '@/components/Schedule.module.sass'
import SectionTitle from '@/components/SectionTitle'

import { SCHEDULES } from '@/constants/schedule'

const Schedule = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background} />
      <div className={styles.title}>
        <SectionTitle
          className={styles.title__inner}
          titleEn="Schedule"
          titleJa="1日のスケジュール"
        />
      </div>
      <div className={styles.contents}>
        <FadeUp className={styles.schedulesBox}>
          <div className={styles.schedules}>
            {SCHEDULES.map((schedule) => (
              <FadeUp key={schedule.time} className={styles.schedule}>
                <div className={styles.timeBox}>
                  <div className={styles.time}>{schedule.time}</div>
                </div>
                <p className={styles.textBox}>
                  <span>{schedule.title}</span>
                  <span className={styles.desc}>
                    {schedule.desc?.map((desc, i) => (
                      <span key={i}>
                        <span>・{desc}</span>
                        <br />
                      </span>
                    ))}
                  </span>
                </p>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export default Schedule
