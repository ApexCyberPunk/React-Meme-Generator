import '../App'
import memes from '../components/memesData'

function Form() {

    function getMeme(e) {
        e.preventDefault()
        const memeLength = memes.data.memes.length
        const randomNumber = getRandomNumber(memeLength)
        const url = memes.data.memes[randomNumber].url
        console.log(url)
  }

    function getRandomNumber(numberInput) {
        return Math.floor(Math.random() * (numberInput -1));
      }

    return (

        <div>
            <form className='form'>
                    <input type='text' className='input1' placeholder='topText'/>
                    <input type='text' className='input2' placeholder='bottomText'/>
                    <button onClick={getMeme} className='formBtn'>Get a new meme image  🖼</button>
            </form>
        </div>
        
        )
    }

    export default Form;