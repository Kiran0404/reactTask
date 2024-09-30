import React from 'react'

const Head = () => {
  return (
    <>

      <div className="mainHead bg-[url('https://clarity-tailwind.preview.uideck.com/images/hero-bg.svg')] h-svh rounded-b-2xl">
        <div className="headContent flex mx-40 h-72 rounded-lg shadow-xl mt-4">
          <div className="img bg-[url('https://clarity-tailwind.preview.uideck.com/images/hero-01.png')] bg-cover bg-no-repeat ml-4 border-2 h-72 w-3/4 rounded-lg  ">
          </div>
          <div className="content ml-20 mt-4">
            <a href=""><h1 className="lifestyle text-purple-900  mb-4 bg-purple-100 w-20 text-center h-6 rounded-2xl ">Lifestyle</h1></a>
            <h1 className="begin font-bold text-4xl">Begin here to obtain a brief summary encompassing all the essential</h1>
            <p className="post mt-3 text-l">This comprehensive post serves as your cheat-sheet to swiftly <br /> familiarize yourself with Ghost. Packed with crucial...</p>
            <div className="create1 flex gap-4 mt-4">
              <img src="https://clarity-tailwind.preview.uideck.com/images/user-01.png" height="24px" width="24px" alt="" srcset="" />
              <p>Adrio Devid</p>
              <p>Sep 10, 2025</p>
            </div>
          </div>
        </div>

        <div className="second-content flex gap-10">
          <div className="content1 flex w-2/5 ml-40 h-48 rounded-lg shadow-xl mt-14">
            <div className="img1 mt-1 ml-1">
              <img src="https://clarity-tailwind.preview.uideck.com/images/hero-02.png" alt="" srcset="" />
            </div>
            <div className="tec ml-7">
              <h1 className="techno text-blue-800 bg-blue-100 w-24 rounded-2xl text-center">Technology</h1>
              <p className="inno text-lg font-semibold mt-3">14 Innovative Architectural <br /> Designs to Create a Vast <br /> Interior Space</p>
              <div className="bottom1 flex gap-6 mt-3">
                <h1>By Adrio Devid</h1>
                <h1>Sep 10, 2025</h1>
              </div>
            </div>
          </div>
          <div className="content2 flex w-2/5 mr-40 h-48 rounded-lg shadow-xl mt-14">
            <div className="img2 mt-1 ml-1">
              <img src="https://clarity-tailwind.preview.uideck.com/images/hero-03.png" alt="" srcset="" />
            </div>
            <div className="travel ml-7">
              <h1 className="trav text-green-800 bg-green-100 w-24 rounded-2xl text-center">Travel</h1>
              <p className="traveller text-lg font-semibold mt-3">Traveller Visiting Ice Cave With <br /> Amazing Eye-catching view <br /> with nature</p>
              <div className="bottom2 flex gap-6 mt-3">
                <h1>By Adrio Devid</h1>
                <h1>Sep 10, 2025</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Head
