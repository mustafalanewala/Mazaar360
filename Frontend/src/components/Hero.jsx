import React from "react";

function Hero() {
  return (
    <>
      <div>
        <div class="flex flex-col md:flex-row h-screen bg-black">
          <div class="flex-1  flex items-center justify-start">
            <div class="text-left text-white px-6">
              <h1 class="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
              <p class="mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum voluptatum distinctio, totam, odit minus a eaque quidem
                tempore provident ducimus, vitae eligendi? Vero tenetur
                similique dicta.
              </p>
              <a
                href=""
                class="mt-4 inline-block bg-white text-blue-500 py-2 px-4 rounded"
              >
                Free Tailwind Template
              </a>
            </div>
          </div>
          <img class="flex-1 bg-cover bg-center" src="./assets/hero.png"></img>
        </div>
      </div>
    </>
  );
}

export default Hero;
