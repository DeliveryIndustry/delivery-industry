export type Feature = {
  companyName: string
  salary: string
  workingTime: string
  workingPlace: string
  support: string
}

export const FEATURES: Readonly<Feature[]> = [
  {
    companyName: '弊社',
    salary: '36万円 / 25日',
    workingTime: '08:00 〜 19:00',
    workingPlace: '自宅から最寄りの営業所',
    support: '1週間の研修<br>キャリアアップサポート',
  },
  {
    companyName: 'A社',
    salary: '28万円 / 25日',
    workingTime: '08:00 〜 配達完了',
    workingPlace: '東京',
    support: '研修3ヶ月<br>期間内給与 -10%',
  },
  {
    companyName: 'B社',
    salary: '32万円 / 25日',
    workingTime: '06:00 〜 配達完了',
    workingPlace: '毎朝、松戸の営業所',
    support: '研修なし<br>経験者のみ採用',
  },
]
