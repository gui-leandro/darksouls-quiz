import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

const QuizContainer = styled.div`
  width: 100%;
  height: calc(100vh - 45px);
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    height: 100vh;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Dark Souls</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum sit amet...</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <p>Lorem ipsum sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gui-leandro/darksouls-quiz" />
    </QuizBackground>
  );
}
