import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";

export function ScreenshotButton(){ 

   const [isTakingScreenshot, setIsTakingScreenshot]= useState(false)

   async function handleTakeScreenshot(){
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png');

    setIsTakingScreenshot(false);

  }


  return(
  <button
  type="button"
  onClick={handleTakeScreenshot}
  className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 "

  >
    <Camera className="w-6 h-6 text-zinc-400"/>
  </button>
  )
}