import React, { useEffect } from 'react'
import useStorage from '../../Hooks/useStorage'
import '../Progress/ProgressBar.css'

function ProgressBar({file, setFile}) {
    const{url, progress}= useStorage(file);
        useEffect(() => {
           if (url) {
               setFile(null)
           }
        }, [url, setFile])

  
    return (
        <div className="progressbar" style={{width: progress + '%'}}>
      
        </div>
    )
}

export default ProgressBar
