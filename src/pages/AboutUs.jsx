import React from 'react'
import styled from 'styled-components'

const  Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;

  p{
    span{
      font-weight: bold;
    }
  }

  h1{
    margin-bottom: 30px;
  }

  h3{
    margin-top: 30px;
  }
`

const AboutUs = () => {
  return (
    <Container>
        <div>
          <h1>About this Application</h1>
          <p>This Application is developed by Nitin Sirsath <br />
            For the purpose of learning ReactJS and Firebase. <br />
            This application is developed using <span>ReactJS, Firebase, Material UI, Styled Components.</span> <br />
            You can use this application to store your recipes and share them with your friends. <br />
            You can also use this application to search for recipes. <br />
            Get this application source code from <a href="https://github.com/NitinSirsath/food-recipe-app" target="_blank">here</a> <br />
          </p>

          <h3>Check out my Portfolio site <a href="https://portfolio.nitinsirsath.vercel.app/" target="_blank">here</a></h3>
        </div>
    </Container>
  )
}

export default AboutUs