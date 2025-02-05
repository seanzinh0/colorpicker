import {useState, useEffect} from 'react'
import ColorPicker from "./components/ColorPicker.jsx";
import './App.css'

function App() {
    const [chosenColor, setChosenColor] = useState('white');
    const colors = ['Red', 'Blue', 'Green', 'Yellow'];
    // set state to chosen color
    const handleColorChange = (color) => {
        setChosenColor(color);
    }
    // set state to white when reset
    const handleReset = () => {
        setChosenColor('white')
    }
    // set body to chosen color
    useEffect(() => {
        document.body.style.backgroundColor = chosenColor;
    }, [chosenColor]);

    return (
        <>
            {/*pass functions and array as props*/}
            <ColorPicker colors={colors} handleReset={handleReset} handleColorChange={handleColorChange} />
        </>
    )
}

export default App
