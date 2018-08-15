import React from 'react';
import '../css/Intro.css';
import Navbar from './Navbar';

class LandingPage extends React.Component {

    
    render() {

      const qualities = [
        { href : "#projects", title: "Web Developer", id:"1"  },
        { href : "#photo", title: "Photograher", id:"2" },
        { href : "#music", title: "Musician", id:"3" }
      ]

      const socialMedia = [
        { href: "https://www.linkedin.com/in/sehmim-haque/" , src: "https://grytics.com/wp-content/uploads/2015/01/1414386638_linkedin_circle_color-512.png", id:"1"  },
        { href: "https://github.com/sehmim" , src: "https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png", id:"2"  },
        { href: "https://stackoverflow.com/users/9531113/sehmim-al-haque" , src: "https://streamdata.io/wp-content/uploads/2018/04/stack-overflow-orange.png" , id:"3" }
      ]
      const dp = "https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/33691440_1784156978310338_35797598929420288_n.jpg?_nc_cat=0&oh=7c3b916a5053b8580eba5ab438f338d5&oe=5C0EF3EB";

      return (
        <div className="Landing-Page">
          <Navbar/>
          <h1 className="name-header"> Sehmim Al</h1><br/>
            <img src={dp} className="circle"></img> 
          <div className="qualities"> ♦
            {
              qualities.map(item => { 
                return(
                  <a key={item.id} href= {item.href}> ♦ {item.title} ♦</a>
                )
              })
            }♦
          </div>
          <div className="qualities">
            Please, do have a look around
          </div> {
            socialMedia.map(item=>{
              return(
                <a key={item.id} href={item.href}><img className="social-media" src={item.src}></img></a>
              )
            })
          }
        </div>
      ); 
    }
  }
  export default LandingPage;
