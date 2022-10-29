import React, { useContext } from 'react';
import '../App.css'
import { ThemeContext } from '../Context/ThemeContext';
import Button from './Button';

const MainPage = () => {
    const {darkMode}=useContext(ThemeContext);
    console.log(darkMode);
  return (
    <div>
      {/* <span className='fa fa-toggle-off'></span>
      <span className='fa fa-toggle-on'></span> */}
      <div className='head'>
        <div>
            <td>Home</td>
        </div>
        <div>
            <td>Work</td>
            <td>Project</td>
            <td>Contact me</td>
        </div>
      </div>
      <div className={darkMode ? "canvas-dark" : "canvas"}>
      <div className='body'>
        <div className={darkMode ? 'overlay-dark':'overlay'}>
        <h2>About..</h2>
        </div>
      </div>

      <center>
        <div className={darkMode? 'detail-dark':'detail'}>
          <div style={{textAlign:"left"}}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQG28Bh3km2p_w/profile-displayphoto-shrink_400_400/0/1602101081141?e=1672272000&v=beta&t=SSd6ul1qDDaAUJo_ROMGvZvwRMfj2tOYjBBzRboopCE"
              alt="..."
            />
            <h3 style={{marginBottom:"10px"}}>Albert Sebastian</h3>
            <h5 style={{marginBottom:"10px"}}>Senior Developer</h5>
            <hr />
            <p style={{marginBottom:"10px"}}>
              Dolor id mollit sit ut dolor cillum esse. Fugiat voluptate
              cupidatat irure eiusmod nulla eiusmod excepteur incididunt tempor
              nulla laboris aliqua. Dolor exercitation commodo est reprehenderit
              dolore ea aute velit reprehenderit minim. Incididunt consequat
              incididunt exercitation do nostrud. Magna reprehenderit occaecat
              duis sunt sit Lorem. Qui ea adipisicing cillum ea esse minim quis
              labore. Aliqua laboris voluptate fugiat anim consequat id veniam
              labore. Ut culpa anim nostrud quis culpa adipisicing commodo
              exercitation reprehenderit ea exercitation eiusmod. Labore elit
              ullamco eu tempor sit ipsum. Tempor amet non dolore laborum. Est
              eu aute sunt duis nisi ullamco aute dolore ipsum commodo. Sint
              magna eu adipisicing qui. Irure voluptate id sunt duis ullamco
              exercitation fugiat cillum Lorem ut dolor. Enim aliquip
              reprehenderit sint non. Incididunt labore est irure occaecat
              cupidatat. Quis eiusmod incididunt nostrud anim aliqua deserunt
              nostrud adipisicing laborum et in est. Ea aliqua in dolor velit do
              qui sunt reprehenderit irure minim sit anim aute voluptate. Aliqua
              eu irure reprehenderit commodo sunt officia ipsum sint ad minim
              adipisicing mollit est officia. Consequat eiusmod adipisicing
              proident veniam laborum. Ut ea incididunt excepteur dolore do
              reprehenderit tempor deserunt. Tempor laborum incididunt nulla
              duis enim. Occaecat proident mollit laboris dolor fugiat
              consectetur tempor nisi aliqua culpa quis Lorem dolore ut. Dolor
              commodo excepteur minim id qui non laboris sint deserunt anim
              mollit cillum proident est. Pariatur proident in mollit laborum.
              Cillum mollit nulla veniam fugiat minim elit mollit cupidatat
              commodo reprehenderit dolore.
            </p>
          </div>
          <hr />
          <p style={{marginBottom:"10px"}}>
            "Amet excepteur anim velit reprehenderit incididunt nisi ad. Eiusmod
            ipsum qui dolor occaecat adipisicing."
          </p>
          <div className={darkMode?"icons-dark":"icons"}>
            <span className="fa fa-github"></span>
            <span className="fa fa-instagram"></span>
            <span className="fa fa-linkedin-square"></span>
          </div>
        </div>
      </center>
      </div>
      <Button/>
    </div>
    

  )
}

export default MainPage
