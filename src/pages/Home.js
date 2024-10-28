import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Instagram"
import GitHubIcon from "@material-ui/icons/GitHub"

function Home() {
  return (
    <div className='home'>
      <div className='about'></div>
      <h2>Hi, my name is Onkar.</h2>
      <div className='prompt'></div>
      <p>
        A software developer with a passion for learning and creating.
      </p>
      <LinkedInIcon/>
      <EmailIcon/>
      <GitHubIcon/>



      <div className='skills'></div>
    </div>
  )
}

export default Home