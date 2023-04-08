export const SCHEDULES = Object.freeze([
  {
    time: '07:30 〜 08:00',
    title: '倉庫に出勤',
    desc: ['アルコールチェック', 'コース確認', '点呼'],
  },
  {
    time: '08:15 〜',
    title: '積み込み1回目',
  },
  {
    time: '08:30 〜',
    title: '出発',
  },
  {
    time: '09:00 〜',
    title: '午前配達開始',
  },
  {
    time: '13:00 〜 15:00',
    title: '昼休憩',
  },
  {
    time: '15:00 〜',
    title: '積み込み2回目',
  },
  {
    time: '15:30 〜',
    title: '出発',
  },
  {
    time: '16:00 〜',
    title: '午後配達開始',
  },
  {
    time: '19:00 〜',
    title: '配達終了',
  },
  {
    time: '20:00 〜',
    title: '倉庫戻り退勤準備',
    desc: ['アルコールチェック', '不在戻し', '終了報告'],
  },
  {
    time: '20:15 〜',
    title: '終了・退勤',
  },
])
