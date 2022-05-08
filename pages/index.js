import Head from 'next/head'
import useDarkMode from "./useDarkMode";
import styles from '../styles/MainPage.module.css'
import Image from 'next/image'
import covInfo from './images/covinfo.png'
import runApp from './images/runapp.png'

export default function MainPage() {
  const [colorTheme, setTheme] = useDarkMode();
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
    <div className={colorTheme === "light" ? styles.container : styles.darkContainer}>
      <Head>
        <title>Jonathan Kerr | Portfolio</title>
        <meta name="description" content="Portoflio site for Jonathan Kerr - A Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! I&apos;m Jonathan Kerr
          {colorTheme === "light" ? (
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className={styles.theme}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className={styles.theme}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
        </svg>
      )}
        </h1>
        <p className={styles.description}>
          I&apos;m a <b>Software Engineer</b> who has recently graduated from The University of Strathclyde with
            a Bsc Hons Degree in Computer Science. I currently work in the role of <b>Founding Engineer</b> at <b>Rayday.</b>
        </p>
        <button className={colorTheme === "light" ? styles.btn : styles.darkButton}>Learn More</button>
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
      <footer className={colorTheme === "light" ? styles.foot : styles.darkFoot}>
        <p>Made from scrath using  <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>. This code is <a href="https://github.com/jonathankerr/portfolio" target="_blank" rel="noreferrer">Open-Source</a>.</p> 
        <a href="https://www.linkedin.com/in/jonathan--kerr/" target="_blank" rel="noreferrer noopener">
          {colorTheme === "light" ? 
            <img src="https://s2.svgbox.net/social.svg?ic=linkedin&amp;color=000"></img> : 
            <img src="https://s2.svgbox.net/social.svg?ic=linkedin&amp;color=fff"></img>
          }
        </a>
        <a href="https://github.com/jonathankerr" target="_blank" rel="noreferrer noopener">
          {colorTheme === "light" ?
            <img src="https://s2.svgbox.net/social.svg?ic=github&amp;color=000"></img> :
            <img src="https://s2.svgbox.net/social.svg?ic=github&amp;color=fff"></img>
          }
        </a>
        <p className={styles.copy}>© Jonathan Kerr 2022</p>
      </footer>
    </div>
  )
}
