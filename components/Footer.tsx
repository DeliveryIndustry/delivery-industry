import styles from '@/components/Footer.module.sass'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div>Don Richy株式会社</div>
          <div>
            代表取締役：根本ジェシー
            <br />
            総括本部長：立花壮太
          </div>
        </div>
        <p className={styles.copyright}>Copyright © DON RICHY. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
