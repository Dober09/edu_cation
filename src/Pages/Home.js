import Articles from "../components/Articles";
import Aside from "../components/Aside";
import Section from "../components/Section";

export default function Home() {
    return (
        <>
          <Section title='Who are we' order={0} margin={0}/>
          <Section title="What we offer" order={2} margin={20}/>
          <Articles/>
          <Aside/>
        </>
    )
}