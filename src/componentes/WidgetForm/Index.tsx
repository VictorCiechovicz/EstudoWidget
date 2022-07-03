import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


 export const feedbackTypes = {

BUG:{
  title:'Problema',
  image: {
   source: bugImageUrl ,
   alt:'imagem de um inseto'
  },
},
IDEA:{
  title:'Ideia',
  image: {
    source: ideaImageUrl,
    alt:'Imagem de uma lampada'
   },
},
OTHER:{
  title:'Outro',
  image: {
    source:thoughtImageUrl,
    alt:'Imagem de uma nuvem'
   },
}

};

 export type FeedbackType = keyof typeof feedbackTypes;


                 export function WidgetForm(){
                 const [feedbackType, setFeedBackType] = useState <FeedbackType | null>(null)
                 const[feedbackSent, setFeedBackSent] = useState(false);

                 function handleRestartFeedback(){
                  setFeedBackSent(false);
                  setFeedBackType(null);
                 }

                 
                   return (
                 
                 <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-33.6rem)] md:w-auto">
                     { feedbackSent ? (

                      <FeedbackSuccessStep onFeedbackRestartRequested= {handleRestartFeedback} />

                     ): (
                      <>
                      
                 {!feedbackType ? (
                   <FeedbackTypeStep  onFeedbackTypeChanged = {setFeedBackType} />

                 ) :(
                  <FeedbackContentStep
                 
                 feedbackType={feedbackType}
                 onFeedbackRestartRequested = {handleRestartFeedback}
                 onFeedbackSent= {() => setFeedBackSent(true)}
                 />

                 )}  
                      </>
                     )}
                                 
                 
                  
                 
                 
                  <footer className="text-xs text-neutral-400">Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.                 com.br/">Rocketseat</a></footer>
                 </div>
                 
                 
                 
                 
                 
                 
                 
                   );
                 }