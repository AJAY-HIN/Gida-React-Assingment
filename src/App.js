// import logo from './logo.svg';
import './App.css';
import images from './images.jpeg'
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';




function App() {
  const [open, setOpen] = useState(false);
  const [gif, setGif] = useState("click");
  const [image1, setImage] = useState()

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  function showMe() {
    setOpen(
      <>
        <img id='dio' src="https://img.wallpapersafari.com/desktop/1920/1080/69/37/nFHfkA.jpg" style={{ width: "50vw" }} alt="jh" /><br />
        <button  className='hbtn' onClick={gifsho}>Gif </button>
        <button   className='hbtn' onClick={showImg}>Graph</button>
      </>

    )
  }

  function gifsho() {
    setGif(<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt='jhsjd' />)
  }

  function showImg() {
    setImage(<img src={images} alt='df' />)
  }

  setTimeout(() => {
    setGif(false)
  }, 7000);




  return (
    <>
     
        <div className="container">
          <img src="https://img.wallpapersafari.com/desktop/1920/1080/69/37/nFHfkA.jpg" alt="img" id="img" />
          <button className='btn' onClick={showMe}>Click Me</button>
        </div>
     
      <dailog  id='jk' className='dialogBox'>
        {open}
        {gif}
        {image1}
      </dailog>
      </>
      );
}

      export default App;
