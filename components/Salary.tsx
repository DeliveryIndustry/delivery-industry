import { gsap } from 'gsap'
import { FC, useEffect, useMemo, useState } from 'react'

import Button from '@/components/Button'
import Card from '@/components/Card'
import FadeUp from '@/components/FadeUp'
import styles from '@/components/Salary.module.sass'
import SectionTitle from '@/components/SectionTitle'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { mailtoTemplate } from '@/utils/mailtoTemplate'

type CardSalaryProps = {
  workingDaysPerWeek: number
  workingTime: string
  salary: number
  numberOfBonuses: number
}

const CardSalary: FC<CardSalaryProps> = (props) => {
  const workingDaysPerMonth = props.workingDaysPerWeek * 4

  const root = useIntersectionObserver({ options: { threshold: 0.7 } })
  const [tweenedNumber, setTweenedNumber] = useState({ value: 0 })
  const salary = useMemo(() => tweenedNumber.value.toFixed(0), [tweenedNumber])

  useEffect(() => {
    if (!root.isIntersecting && tweenedNumber.value) {
      setTweenedNumber({ value: 0 })
      return
    }
    gsap.to(tweenedNumber, {
      value: props.salary,
      ease: 'power3.out',
      duration: 1,
      onUpdate: (newValue) => setTweenedNumber({ value: newValue.value }),
      onUpdateParams: [tweenedNumber],
    })
  }, [root.isIntersecting, props.salary, tweenedNumber])

  return (
    <div ref={root.ref}>
      <Card
        head={
          <p>
            週<span className={styles['cardText--strong']}>{props.workingDaysPerWeek}</span>日 (月
            {workingDaysPerMonth}日) &emsp;
            {props.workingTime}
          </p>
        }
        body={
          <div className={styles.cardBody__inner}>
            <div className={styles.cardBody__item}>
              <div>
                <h3 className={styles.cardTitle}>給与</h3>
                <p className={styles['cardText--withMarker']}>
                  <span className={styles['cardText--strong']}>{salary}</span>万円
                </p>
                <span className={styles.cardAttention}>※月末締め翌月末払い</span>
              </div>
            </div>
            <div className={styles.cardBody__item}>
              <div>
                <h3 className={styles.cardTitle}>賞与</h3>
                <p className={styles['cardText--withMarker']}>
                  年<span className={styles['cardText--strong']}>{props.numberOfBonuses}</span>回
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

const Salary = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background} />
      <div className={styles.title}>
        <SectionTitle className={styles.title__inner} titleEn="Salary" titleJa="給与" />
      </div>
      <div className={styles.contents}>
        <div className={styles.item}>
          <FadeUp className={styles.subTitle}>1年目</FadeUp>
          <div className={styles.cards}>
            <FadeUp>
              <CardSalary
                workingDaysPerWeek={5}
                workingTime="08 : 00 〜 19 : 00"
                salary={26}
                numberOfBonuses={1}
              />
            </FadeUp>
            <FadeUp>
              <CardSalary
                workingDaysPerWeek={6}
                workingTime="08 : 00 〜 19 : 00"
                salary={36}
                numberOfBonuses={1}
              />
            </FadeUp>
          </div>
        </div>

        <div className={styles.item}>
          <FadeUp className={styles.subTitle}>2年目</FadeUp>
          <div className={styles.cards}>
            <FadeUp>
              <CardSalary
                workingDaysPerWeek={5}
                workingTime="08 : 00 〜 19 : 00"
                salary={49}
                numberOfBonuses={2}
              />
            </FadeUp>
            <FadeUp>
              <CardSalary
                workingDaysPerWeek={6}
                workingTime="08 : 00 〜 19 : 00"
                salary={63}
                numberOfBonuses={2}
              />
            </FadeUp>
          </div>
        </div>

        <div className={styles.item}>
          <FadeUp className={styles.subTitle}>その他</FadeUp>
          <div className={styles.cards}>
            <FadeUp>
              <Card
                body={
                  <>
                    <h3 className={styles.cardTitle}>紹介制度</h3>
                    <p className={styles.cardDesc}>
                      1人紹介につき毎月の給与に
                      <span className={styles.cardTextWithMarker}>
                        +<span className={styles.cardTextStrong}>1</span>万円
                      </span>
                      <br />
                      5人紹介で年収
                      <span className={styles.cardTextWithMarker}>
                        +<span className={styles.cardTextStrong}>60</span>万円
                      </span>
                    </p>
                  </>
                }
              />
            </FadeUp>
            <FadeUp>
              <Card
                body={
                  <>
                    <h3 className={styles.cardTitle}>自己負担</h3>
                    <p className={styles.cardDesc}>
                      レンタル代：3.3万円 (購入も可能)
                      <br />
                      自動車保険：1.5万円
                      <br />
                      貨物保険　：0.5万円
                      <br />
                      ガソリン代：運転状況により変動
                      <br />
                      駐車場代　：自宅に駐車場がない場合
                    </p>
                  </>
                }
              />
            </FadeUp>
          </div>
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

export default Salary
