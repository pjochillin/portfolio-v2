import Intro from "../components/intro"
import Jobs from "../components/jobs"
import Cello from "../components/cello"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Ochalek's Portfolio</title>
        <meta 
          name="description"
          content="Hello! I'm Josh, a student at Cornell University. Check out my portfolio!"
        />
      </Head>
      <Intro />
      <Jobs />
      <Cello />
    </div>
  );
}
