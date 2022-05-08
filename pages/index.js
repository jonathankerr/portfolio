import Head from 'next/head'
import styles from '../styles/MainPage.module.css'
import ResponsiveAppBar from './components/NavBar'
import Image from 'next/image'
import covInfo from './images/covinfo.png'
import runApp from './images/runapp.png'

export default function MainPage() {
  const MyImage = (props) => {
    return (
      <Image
        src={covInfo}
        alt="Screenshot of CovInfo"
        // width="350px"
        // height="300px"
        layout="responsive"
        className={styles.imageWrap}
      />
    )
  }
  const MyImage2 = (props) => {
    return (
      <Image
        src={runApp}
        alt="Screenshot of Where Shall I Run Today"
        // width="350px"
        // height="300px"
        layout="responsive"
        className={styles.imageWrap2}
      />
    )
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan Kerr | Portfolio</title>
        <meta name="description" content="Portoflio site for Jonathan Kerr - A Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header>
        <ResponsiveAppBar></ResponsiveAppBar>
      </header> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! I&apos;m Jonathan Kerr
        </h1>
        <p className={styles.description}>
          I&apos;m a <b>Software Engineer</b> who has recently graduated from The University of Strathclyde with
            a Bsc Hons Degree in Computer Science. I currently work in the role of <b>Founding Engineer</b> at <b>Rayday.</b>
        </p>
        <button className={styles.btn}>Learn More</button>
        <div className={styles.projects}>
          <p>Selected Projects</p>
          <div className={styles.project1}>
            <MyImage></MyImage>
            <h3 className={styles.projectName}>CovInfo</h3>
            <p>A Covid-19 analytics app providing users with update the date and accurate Government advice as well as location, national and 
              global analytics.
            </p>
          </div>
          <div className={styles.project2}>
            <MyImage2></MyImage2>
            <h3 className={styles.projectName2}>Where Shall I Run Today?</h3>
            <p>An application capable of generating runnable looping routes for users which favour greenery over busy city roads.
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.foot}>
        <p>Made from scrath using  <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>. This code is <a href="https://github.com/jonathankerr/portfolio" target="_blank" rel="noreferrer">Open-Source</a>.</p> 
        <a href="https://www.linkedin.com/in/jonathan--kerr/" target="_blank" rel="noreferrer noopener"><img src="https://s2.svgbox.net/social.svg?ic=linkedin&amp;color=000" class="social-icons"></img></a>
        <a href="https://github.com/jonathankerr" target="_blank" rel="noreferrer noopener"><img src="https://s2.svgbox.net/social.svg?ic=github&amp;color=000" class="social-icons"></img></a>
        <p className={styles.copy}>© Jonathan Kerr 2022</p>
      </footer>
    </div>
  )
}
