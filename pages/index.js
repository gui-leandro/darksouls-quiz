/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Dark Souls Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Dark Souls</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={(text) => {
                  setName(text.target.value);
                }}
                placeholder="Ser das cinzas, digite seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar como
                {' '}
                {name}
              </button>
            </form>
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
