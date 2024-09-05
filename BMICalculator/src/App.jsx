import { useState } from "react";
import "./App.css";
function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [ message, setMessage ] = useState("Your Weight Category :");

  const handleSubmitChange = (e) => {
    e.preventDefault();
    console.log(height, weight);
    if (height === 0 && weight === 0) alert("Enter Valid Weight or height");
    else {
      let calBmi = Number(weight / Math.pow(height / 100, 2)).toFixed(2);
      setBmi(calBmi);
    }
    if(bmi < 18.5) setMessage("Under Weight");
    else if (bmi >= 18.5 && bmi <=24.9) setMessage("Normal");
    else if (bmi >= 25 && bmi <=29.9)   setMessage("Over Weight");
    else  setMessage("Obese");

    setHeight(0);
    setWeight(0);
  };

  return (
    <>
      <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  text-white "> 
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight ">
            BMI Calculator
          </h2>
        </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-6" action="Submit" onSubmit={handleSubmitChange}>
        <div>
          <label htmlFor="hi" 
        className="block text-sm font-medium leading-6 ">Height in Centmeters</label>
       <div className="mt-2">
       <input
          type="number"
          name=""
          id="hi"
          placeholder="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          className="block w-full font-lg font-semibold  rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
       </div>
       </div>

        <div>
        <label htmlFor="wi">Weight in Kg</label>
        <div className="mt-2">
        <input
          type="number"
          name=""
          id="wi"
          required
          placeholder="weight"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          className="block w-full font-lg font-semibold  rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        </div>
        </div>

        <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
            </div>

      </form>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 className="mt-3 text-center text-2xl text-white font Bold">{message}</h1>
      <h1 className="mt-1 text-left text-xl text-white font Bold">Your BMI : <span className="text-blue-400 font-extrabold">{bmi}</span></h1>
      
       </div>
     <div className="mt-2">
     <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => {
          setHeight(0);
          setWeight(0);
          setBmi("");
          setMessage("Your Weight Category :");
        }}
      >
        Reload
      </button>
     </div>
      </div>
      <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">

          <p className="mt-1 text-center text-sm text-gray-500">
            Follow me instagram{' '}
            <a href="https://www.instagram.com/codewithuday.ig/" target="_blank" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              instagram
            </a>
          </p>
        </div>
      </div>

    </>
    
  );
}

export default App;


