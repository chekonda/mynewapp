import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('this is the use state ');
    
    const Handleonchange=(event)=>{
        console.log("this is onchange");
        setText(event.target.value);
    }
    
    const Buttonupclick = () => 
    {
        console.log("button up was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }    
   

   

    //   setText('hey i modified setstate ');
    return (
        <div>

            <h1> {props.h1}</h1>

            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Enter the text bellow u want to convert </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={Handleonchange}></textarea>
                <br />
                <button className="btn btn-primary" onClick={Buttonupclick} >Convert to uppercase</button>
            </div>

        </div>


    )
}
