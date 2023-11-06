import './header.css'
import myImage from '../Images/TrollFace.png'

function Header() {

    return (
        <>
        <div className='headerContainer'>
          <img className='face' alt='face' src={myImage}/>
          <h1 className='memeGen'>Meme Generator</h1>
          <p className='project'>React Course: Project 3</p>
        </div>
        </>
        )
    }

    export default Header;
