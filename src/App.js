import './App.css';
import data from './data';
import { useState } from "react";

function App() {
   const [text, setText] = useState([])
   const [amount, setAmount] = useState(0);

   //zero value alert
    let message = "";
    if (amount <=0 || amount > 6 ){
        message = "Paragraph Number Min Value is 1 and Max Value is 6";
    }
   // generate button
   const onGenerate = () => {
       setText(data.slice(0, parseInt(amount)));
   }

  // oninput button
    const onInputSet = (e) => {
       setAmount(e.target.value);
    }
  return (
    <div className="App">
      <div className="app-title"> Random Text Generator </div>
        <div className="app-generator">
            <strong>Paragraphs: </strong>
            <input type="number" name="paragraph" min="1" max="6" onChange={ onInputSet } value={ amount }/>
            <button onClick={ onGenerate }>Generate</button>
        </div>
            <div className="app-content">
                {
                    (text && amount > 0) &&
                    text.map((text, index) => {
                        return(
                            <p className="single-para" key={index}>
                                { text }
                            </p>
                        )
                    })
                }
                {
                    ( amount <= 0 || amount > 6 ) &&
                    <div className="red">
                        { message }
                    </div>
                }
            </div>
    </div>
  );
}

export default App;
