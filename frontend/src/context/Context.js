import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [reacentPrompt, setReacentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

const delayPara = (index,nextWord)=>{
setTimeout(function(){
setResultData(prev=>prev+nextWord);
},75*index)
}

const newchat =()=>{
  setLoading(false)
  setShowResult(false)
}


  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
      response=await runChat(prompt);
      setReacentPrompt(prompt)
    }else{
      setPrevPrompts(prev=>[...prev,input])
      setReacentPrompt(input)
      response = await runChat(input)
    }
    // setReacentPrompt(input)
    // setPrevPrompts(prev=>[...prev,input])
    // const response = await runChat(input);
    let responseArray = response.split("**")
    let newResponse = "";
    for(let i=0;i<responseArray.length; i++)
      {
if(i === 0 || i%2 !==1){
 newResponse += responseArray[i];

}else{
  newResponse += '<b>'+responseArray[i]+ "</b>";
}
      }
      let newResponse2 = newResponse.split("*").join("</br>")
      let newResponeArray = newResponse2.split(" ");
      for(let i=0; i<newResponeArray.length;i++)
        {
const nextWord =newResponeArray[i];
delayPara(i,nextWord+" ")
      }
    // setResultData(newResponse2);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setReacentPrompt,
    reacentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newchat,
  };
  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
