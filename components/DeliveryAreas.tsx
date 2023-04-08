import Image from 'next/image'

import Card from '@/components/Card'
import styles from '@/components/DeliveryAreas.module.sass'
import FadeUp from '@/components/FadeUp'
import SectionTitle from '@/components/SectionTitle'

import { DELIVERY_AREAS } from '@/constants/deliveryAreas'

const DeliveryAreas = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background} />
      <div className={styles.title}>
        <SectionTitle
          className={styles.title__inner}
          titleEn="DeliveryAreas"
          titleJa="配送エリア"
        />
      </div>
      <div className={styles.contents}>
        <p className={styles.lead}>基本的に自宅から最寄りの営業所をお選び頂きます</p>
        <ul className={styles.list}>
          {DELIVERY_AREAS.map((area) => (
            <li key={area.name}>
              <FadeUp className={styles.schedulesBox}>
                <Card
                  head={
                    <>
                      <h3>{area.displayName}</h3>
                      <span className={styles.icon}>
                        <Image
                          src={`/img/icon_${area.name}.png`}
                          alt={`アイコン(${area.displayName})`}
                          width="72"
                          height="72"
                        />
                      </span>
                    </>
                  }
                  body={
                    <>
                      {area.cities.map((city) => (
                        <p key={city} className={styles.desc}>
                          {city}
                        </p>
                      ))}
                    </>
                  }
                />
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default DeliveryAreas
