import styles from '@/components/Feature.module.sass'
import RadarChart from '@/components/RadarChart'
import SectionTitle from '@/components/SectionTitle'
import TextAnimeFlip from '@/components/TextAnimeFlip'

import { COLORS } from '@/constants/colors'
import { Feature as FeatureType, FEATURES } from '@/constants/features'
import { strictEntries, strictValues } from '@/utils'

// JSXで扱いやすいように加工
type FormattedFeatures = Record<keyof FeatureType, string[]>

const formattedFeatures = FEATURES.reduce((all, feature) => {
  strictEntries(feature).forEach(([key, value]) => {
    if (!all[key]) {
      all[key] = []
    }
    all[key].push(value)
  })
  return all
}, {} as FormattedFeatures)

// tableとして扱いやすいように加工
const { companyName: head, ...body } = formattedFeatures

const Feature = () => {
  return (
    <section className={styles.root}>
      <div className={styles.title}>
        <SectionTitle
          titleEn="Feature"
          titleJa="特長"
          color={COLORS.black}
          colorMediaPc={COLORS.white}
          className={styles.title__inner}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.contents}>
          <div className={[styles.lead, 'pcOnly'].join(' ')}>
            <TextAnimeFlip>
              <p>時代にあった働き方</p>
            </TextAnimeFlip>
          </div>
          <div className={styles.graph}>
            <div className={styles.radarChartWrapper}>
              <TextAnimeFlip>
                <div className={styles.radarChartTitle}>1. 給与</div>
              </TextAnimeFlip>
              <div className={styles.radarChartBox}>
                <TextAnimeFlip>
                  <div className={styles.radarChartTitle}>2. 勤務時間</div>
                </TextAnimeFlip>
                <RadarChart className={styles.radarChart} />
                <TextAnimeFlip>
                  <div className={styles.radarChartTitle}>4. サポート</div>
                </TextAnimeFlip>
              </div>
              <TextAnimeFlip>
                <div className={styles.radarChartTitle}>3. 出勤場所</div>
              </TextAnimeFlip>
            </div>
            <TextAnimeFlip>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <td />
                    {head.map((companyName, index) => (
                      <td key={index} className={styles.tableHead}>
                        {companyName}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {strictValues(body).map((values, index) => (
                    <tr key={index}>
                      <td className={styles.tableDataOrder}>{index + 1}</td>
                      {values.map((value, i) => (
                        <td
                          key={i}
                          className={styles.tableData}
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </TextAnimeFlip>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
