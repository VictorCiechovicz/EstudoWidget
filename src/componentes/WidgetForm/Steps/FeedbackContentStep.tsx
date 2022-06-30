import { ArrowLeft, Camera } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../Index";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps{
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType, 
  onFeedbackRestartRequested
}:FeedbackContentStepProps){
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return(
    <>
    <header>
    
    <button 
    type="button" 
    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
    onClick={onFeedbackRestartRequested}
    >

      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>

    <span className="text-xl leading-6 flex items-center gap-2">
      <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className = "w-6 h-6" />
      
      {feedbackTypeInfo.title}
    </span>
    <CloseButton/>
    </header>


                  
               <form className="my-4 w-full">
                <textarea 
                className="min-w-[304px] w-full min-h-[112px] text-sm text-zinc-100 bg-zinc-800 border-zinc-500 rounded-md focus:border-violet-500 focus:ring-violet-500 focus:ring-1 focus:outline-none resize-none p-2"
                placeholder="Conte com detalhes o que está acontecendo..."
                ></textarea>

                <footer className=" flex gap-2 mt-2">

              <ScreenshotButton />
                  
                  <button 
                  type="submit"
                  className="p-2 bg-violet-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-violet-300 focus:outline-none focus:ring-2 transition-colors"
                  >
                      Enviar feedback
                  </button>

                </footer>
               </form>

                  </>
  )
  
    
  }