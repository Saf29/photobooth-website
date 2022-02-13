import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/water.mp4'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type='video/mp4' autoPlay loop muted playInline/>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Next Level Productions</HeroH1>
          <HeroP>Out of this world</HeroP>
          <Button primary='true' big='true' round='true' to='/content'>Book a Session</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg, 
      rgba(o, o, o, 0.2) 0%, 
      rgba(o, o, o, 0.2) 100%
    ), 
    linear-gradient(rgba(o, o, o, 0.2) 0%, transparent 100% );
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vh - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vh, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vh, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`