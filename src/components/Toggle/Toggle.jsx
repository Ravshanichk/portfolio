import React, { useContext } from "react"
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import './Toggle.css'
import { ThemeContext } from "../../context"

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick =()=>{
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src={Sun} alt="sun" className='t-icon'></img>
            <img src={Moon} alt="moon" className='t-icon'></img>
            <div onClick={handleClick} style={{left: theme.state.darkMode?0:25}} className="t-button"></div>
        </div>
    )
}

export default Toggle
