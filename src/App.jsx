import {useState, useEffect} from 'react'
import ColorPicker from "./components/ColorPicker.jsx";
import './App.css'

function App() {
    const [chosenColor, setChosenColor] = useState('white');
    const colors = ['Red', 'Blue', 'Green', 'Yellow'];
    const handleColorChange = (color) => {
        setChosenColor(color);
    }

    const handleReset = () => {
        setChosenColor('white')
    }

    useEffect(() => {
        document.body.style.backgroundColor = chosenColor;
    }, [chosenColor]);

    return (
        <>
            <ColorPicker colors={colors} handleReset={handleReset} handleColorChange={handleColorChange} />
        </>
    )
}

export default App
