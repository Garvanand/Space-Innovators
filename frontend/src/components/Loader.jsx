import "../index.css"

const Loader = () => {
    
    console.log("Loader Component Loaded");

    return(
        <div className="w-full h-screen flex justify-center items-center mx-auto bg-EventBG">
            <svg viewBox="0 0 240 240" height="240" width="240" className="loader">
            <circle stroke-linecap="round" stroke-dashoffset="-330" stroke-dasharray="0 660" stroke-width="20" stroke="#000" fill="none" r="105" cy="120" cx="120" className="loader-ring loader-ring-a"></circle>
            <circle stroke-linecap="round" stroke-dashoffset="-110" stroke-dasharray="0 220" stroke-width="20" stroke="#000" fill="none" r="35" cy="120" cx="120" className="loader-ring loader-ring-b"></circle>
            <circle stroke-linecap="round" stroke-dasharray="0 440" stroke-width="20" stroke="#000" fill="none" r="70" cy="120" cx="85" className="loader-ring loader-ring-c"></circle>
            <circle stroke-linecap="round" stroke-dasharray="0 440" stroke-width="20" stroke="#000" fill="none" r="70" cy="120" cx="155" className="loader-ring loader-ring-d"></circle>
            </svg>
        </div>
    )
}

export default Loader