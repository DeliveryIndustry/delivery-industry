import styles from '@/components/Recruit.module.sass'
import { mailtoTemplate } from '@/utils/mailtoTemplate'

export const list = [
  {
    title: '面接日のご相談',
    desc: `<a href="${mailtoTemplate.recruit}" target="_blank" class="${styles.link}">メール</a>にて希望日を3日以上お伝えください。<br>仕事内容が気になる方は、面接前に一日、助手席での職場体験も可能です！`,
  },
  {
    title: '面接',
    desc: '自宅近くのカフェ or 弊社事務所 (南青山)にて面接します。採用結果を当日お伝えします。<br>※過去の経歴などは一切関係ございません。<br>※MTまたはAT運転免許の所有が必須です。',
  },
  {
    title: '通帳と運転免許証のコピー',
    desc: '給与振込先の口座番号が記載されているものと<br>運転免許証の各コピーをご用意ください。',
  },
  {
    title: '住民票の取得',
    desc: '住民票を取得してください。',
  },
  {
    title: '運転記録証明書の取得',
    desc: '最寄りの自動車安全運転センターにて申請し、<br>運転記録証明書を取得してください。',
  },
  {
    title: '研修開始日の決定',
    desc: '研修は数日〜1週間ほど行っていだたきます。<br>ベテランドライバーが隣に付き、端末の操作方法などを教えます。',
  },
]
