import React, { useContext } from "react";
import "./main.css";
// import { SiGooglegemini } from "react-icons/si";
import { TbZodiacGemini } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { RiCompassLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdOutlineMicNone } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

import ContextProvider, { context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    reacentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <FaUser size={"30px"} />
      </div>
      <div className="main_container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Monalisa</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>what is react js in the coading language</p>
                <div className="img">
                  <RiCompassLine size={25} />
                </div>
              </div>
              <div className="card">
                <p>what is java in the coading language</p>
                <div className="img">
                  <FaRegLightbulb size={25} />
                </div>
              </div>
              <div className="card">
                <p>what is css in the coading language</p>
                <div className="img">
                  <FaRegMessage size={20} />
                </div>
              </div>
              <div className="card">
                <p>what is html in the coading language</p>
                <div className="img">
                  <FaCode size={22} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result_title">
              <FaUser />
              <p>{reacentPrompt}</p>
            </div>
            <div className="result_data">
              {/* <SiGooglegemini /> */}
              <TbZodiacGemini />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main_bottom">
          <div className="search_box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <GrGallery size={20} />
              <MdOutlineMicNone size={23} />
              <VscSend onClick={() => onSent()} size={20} />
            </div>
          </div>
          <p className="bottom_info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
