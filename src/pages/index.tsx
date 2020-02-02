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
  background: linear-gradient(238.72deg, #ffb864 0%, #006c4c 100%),
    radial-gradient(100% 224.43% at 0% 0%, #fcc482 0%, #002e74 100%),
    linear-gradient(121.28deg, #ffd464 0%, #00553b 100%),
    linear-gradient(229.79deg, #7534ff 0%, #248900 94.19%),
    radial-gradient(56.26% 101.79% at 50% 0%, #8f00ff 0%, #493500 100%),
    linear-gradient(96.19deg, #500052 3.37%, #d5b300 96.63%);
  background-blend-mode: overlay, screen, lighten, hard-light, screen, normal;
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

const MouseScroll = styled.div`
  .icon-scroll,
  .icon-scroll:before {
    position: absolute;
    left: 50%;
  }
  .icon-scroll {
    width: 30px;
    height: 47px;
    margin-left: -20px;
    bottom: 25px;
    margin-top: -35px;
    border: 2px solid #333;
    border-radius: 30px;
  }
  @media (max-width: 767px) {
    .icon-scroll {
      position: relative;
    }
  }
  .icon-scroll:before {
    content: '';
    width: 8px;
    height: 8px;
    background: #333;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }
  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(23px);
      transform: translateY(23px);
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
          <MouseScroll>
            <div className="icon-scroll"></div>
          </MouseScroll>
        </div>
      </IntroSection>
    </IndexStyle>
  )
}

export default IndexPage
