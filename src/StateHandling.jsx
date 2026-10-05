import { useState } from 'react'
import catImage from './cat.jpg'

function StateHandling() {
    const [count, setCount] = useState(100);
    const [height, setHeight] = useState(140);
    const [width, setWidth] = useState(180);
    const [rotation, setRotation] = useState(0);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

    function increment(){
        setCount((currentCount) => currentCount + 20)
    }
    function decrement(){
        setCount((currentCount) => currentCount - 10)
    }

    function changeBgColor() {

        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

    function enhanceHeight() {
        setHeight((currentHeight) => currentHeight + 20);
    }

    function reduceHeight() {
        setHeight((currentHeight) => Math.max(currentHeight - 20, 40));
    }

    function enhanceWidth() {
        setWidth((currentWidth) => currentWidth + 20);
    }

    function reduceWidth() {
        setWidth((currentWidth) => Math.max(currentWidth - 20, 40));
    }

    function rotateImage() {
        setRotation((currentRotation) => currentRotation + 90);
    }

    return (
        <div>
            {/* <h1>State Handling</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button> */}
            <h2> Change Background Color</h2>
           <div
  style={{
    backgroundColor: `rgb(${red},${green},${blue})`,
    border: "2px solid red",
    height: "180px",
    margin: "20px auto",
    width: "250px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box',
  }}
>
    <img
      src={catImage}
      alt="Cat"
      style={{ width: `${width}px`, height: `${height}px`, flexShrink: 0, objectFit: 'cover', borderRadius: '12px', border: '2px solid #333', transform: `rotate(${rotation}deg)` }}
    />
</div>
            <p>Image height: {height}px</p>
            <p>Image width: {width}px</p>
            <p>Background color: rgb({red}, {green}, {blue})</p>
            <div style={{ textAlign: 'center' }}>
                <button onClick={changeBgColor} style={{ display: 'block', margin: '0 auto 8px' }}>
                    Change Background Color
                </button>
                <button onClick={enhanceHeight} style={{ display: 'block', margin: '0 auto 8px' }}>
                    Enhance Image Height
                </button>
                <button onClick={reduceHeight} style={{ display: 'block', margin: '0 auto 8px' }}>
                    Reduce Image Height
                </button>
                <button onClick={enhanceWidth} style={{ display: 'block', margin: '0 auto 8px' }}>
                    Enhance Image Width
                </button>
                <button onClick={reduceWidth} style={{ display: 'block', margin: '0 auto' }}>
                    Reduce Image Width
                </button>
                <button onClick={rotateImage} style={{ display: 'block', margin: '8px auto 0' }}>
                    Rotate Image
                </button>
            </div>
        </div>
    )
  
}

export default StateHandling
