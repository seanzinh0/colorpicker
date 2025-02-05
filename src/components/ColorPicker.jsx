const ColorPicker = ({colors, handleColorChange, handleReset}) => {
    // props passed through to handle color changing and reset
    return (
        // map each button based on array of colors
        <div className='flex justify-center h-40 w-full bg-gray-600 items-center'>
            <div className='flex'>
            <div>{colors.map((color, index) => (
                <button key={index} onClick={() => handleColorChange(color)}
                className='h-28 w-60 m-2 rounded-2xl'
                style={{backgroundColor: color}}>{color}</button>
            ))}</div>
            <button onClick={handleReset} className='h-28 w-60 bg-zinc-200 m-2 rounded-2xl'>Reset</button>
            </div>
        </div>
    )
}

export default ColorPicker;