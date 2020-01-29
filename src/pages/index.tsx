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
  background: radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
    linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
    linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
    radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
    radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);
  background-blend-mode: screen, color-dodge, overlay, difference, normal;
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
