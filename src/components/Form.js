import '../App'
import React from 'react'





function Form() {



    const [memes, setMemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })


    const [allMemeImages, setAllMemeImages] = React.useState("")

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            const memeArr = data.data.memes
               setAllMemeImages(memeArr)
        })
        
    }, [])

    console.log("alldata", allMemeImages)

    function getMeme(e) {
        e.preventDefault()
        const memeLength = allMemeImages.length
        const randomNumber = getRandomNumber(memeLength)
        const url = allMemeImages[randomNumber].url
        setMeme(url)
  }

  function setMeme(urlInput) {

        setMemes((prevMemes) => ({
            ...prevMemes,
            randomImage: urlInput
        }))
  }

    function getRandomNumber(numberInput) {
        return Math.floor(Math.random() * (numberInput -1));
      }

      function setText(event) {
     
        const { name, value } = event.target

        setMemes((prevMeme) => {
        
                return {...prevMeme, [name] : value }
        })
      }

    return (

        <div>
            <form className='form'>
                    <input 
                    type='text' 
                    className='input1' 
                    placeholder='topText'
                    name="topText"
                    value={memes.topText}
                    onChange={setText}
                    />
                    <input 
                    type='text' 
                    className='input2' 
                    placeholder='bottomText'
                    name="bottomText"
                    value={memes.bottomText}
                    onChange={setText}
                    />
                    <button onClick={getMeme} className='formBtn'>Get a new meme image  🖼</button>
            </form>
            <div className="meme">
                <img alt='meme' src={memes.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memes.topText}</h2>
                <h2 className="meme--text bottom">{memes.bottomText}</h2>
            </div>
        </div>
        
        )
    }

    export default Form;