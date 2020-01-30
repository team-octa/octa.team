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
  background: linear-gradient(180deg, #f7d6ff 0%, #005686 100%),
    linear-gradient(180deg, #ffffff 0%, #060046 100%),
    linear-gradient(130deg, #00ffa3 0%, #1a003c 100%),
    linear-gradient(307deg, #ff0000 0%, #3300c6 100%),
    radial-gradient(50% 72% at 50% 50%, #004584 0%, #00ffb2 100%),
    radial-gradient(100% 140% at 100% 0%, #5ed500 0%, #2200aa 100%);
  background-blend-mode: soft-light, overlay, difference, difference, color-burn,
    normal;
  height: 100vh;
  .bg {
    background: rgba(255, 255, 255, 0.3);
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
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.22);
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
