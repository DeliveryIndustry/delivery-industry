import Head from 'next/head'

import DeliveryAreas from '@/components/DeliveryAreas'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Internship from '@/components/Internship'
import JobDescription from '@/components/JobDescription'
import MainVisual from '@/components/MainVisual'
import Recruit from '@/components/Recruit'
import Salary from '@/components/Salary'
import Schedule from '@/components/Schedule'
import Support from '@/components/Support'

import { COLORS } from '@/constants/colors'

const Top = () => {
  return (
    <>
      <Head>
        <title>採用情報 | 配送業サービス</title>
        <meta
          name="description"
          content="船橋、東京、神奈川、埼玉で配送業サービスを行っており、採用強化中です。未経験の方も大歓迎です！"
        />
        <meta name="theme-color" content={COLORS.black}></meta>
      </Head>

      <MainVisual />
      <Salary />
      <Feature />
      <Schedule />
      <JobDescription />
      <DeliveryAreas />
      <Support />
      <Internship />
      <Recruit />
      <Footer />
    </>
  )
}

export default Top
