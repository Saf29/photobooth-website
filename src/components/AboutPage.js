import React from 'react';
import styled from 'styled-components';
import {AboutData} from '../data/AboutData';
import {StaticImage} from 'gatsby-plugin-image';

const AboutPage = () => {
  return (
    <AboutContainer>
      <LeftDiv>
      <AboutTitle>OUR PHOTO BOOTH</AboutTitle>
      <AboutDetails>
      {AboutData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon
              
              color="#363636">{item.icon}</Icon>
              <Desc>{item.desc}</Desc>
            </StatsBox>
          )
        })}
      </AboutDetails>
      </LeftDiv>
      <StaticImage 
      src="../assets/images/PhotoBooth.jpg" 
      alt="picture of the Photo Booth." 
      width={350}
      height={400}
      margin-top={10}
      border="solid 1px black"
      />
    </AboutContainer>
  )
}
export default AboutPage;

const AboutContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  padding: 0;
`

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
`

const AboutTitle = styled.h2`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: clamp(1.5rem, 5vh, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`
const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  } 
`

const StatsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90%;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5 1rem;
`

const Icon = styled.div`
  display: flex;
`

const Desc = styled.p`
  font-size: 1rem;
`