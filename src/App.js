import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <head>
        <title>kyle</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
        <section>
          <nav className="py-2  bg-green-500 flex justify-between min-w-screen">
            <h1 className="pl-5 text-xl">Kwyk25</h1>
            <ul className="flex item-center pr-5">
              <li>
                <a className=" text-white py-2 px-4" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-white py-2 px-4" href="#">
                  About
                </a>
              </li>
            </ul>
          </nav>
          </section>
          <section className="bg-blue-950 max-h-screen">
          <div className="text-center ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl ">
              Kyle vw
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
