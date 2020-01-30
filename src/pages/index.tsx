import React from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'

// Components
import Header from '../components/Header'

// styled
const IndexStyle = styled.div`
  min-height: 100vh;
  background: #fff;
`

const IntroSection = styled.section`
  background: linear-gradient(
    56deg,
    rgb(255, 180, 172) 0%,
    rgb(255, 180, 172) 40%,
    rgb(103, 145, 134) calc(40% + 1px),
    rgb(103, 145, 134) 50%,
    rgb(38, 78, 112) calc(50% + 1px),
    rgb(38, 78, 112) 70%,
    rgb(255, 235, 211) calc(70% + 1px),
    rgb(255, 235, 211) 100%
  );
  height: 100vh;
  .bg {
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`

const IntroTitle = styled.div`
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    b {
      font-weight: 800;
    }
    text-shadow: 0 2px 4px rgba(13, 0, 77, 0.08),
      0 3px 6px rgba(13, 0, 77, 0.08), 0 8px 16px rgba(13, 0, 77, 0.08);
  }
  p.subDesc {
    color: #3c3c3c;
    font-size: 1.02rem;
    line-height: 1.8;
    margin-top: 40px;
    span {
      font-family: 'Montserrat', sans-serif;
    }
  }
`

const IndexPage: React.FC = () => {
  return (
    <IndexStyle>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <IntroSection>
        <div className="bg">
          <IntroTitle>
            <h1>
              <b>team Octa</b>, a group of creators.
            </h1>
            <p className="subDesc">
              <span>team Octa</span> 는 자유로운 창작자들을 위한 팀입니다.
              <br />
              정해지지 않은 채로, 자유롭게 활동합니다. 기분에 따라서 활동량이
              바뀌죠.
            </p>
          </IntroTitle>
        </div>
      </IntroSection>
    </IndexStyle>
  )
}

export default IndexPage
