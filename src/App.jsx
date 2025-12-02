import './App.css'

function App() {

  return (
   <div className='w-screen h-[300vh] bg-emerald-50'>
    <div className='w-screen grid grid-cols-5'>
    <div className='grid-cols-1'>
    <img className='w-10' src='/img/icon.png'/>
    </div>
    <div className='mt-[5%] grid-cols-1 transition-all duration-300 hover:scale-110'>
     <h3><a href="#about-me">About ME</a></h3>
    </div>
    <div className='grid-cols-1 mt-[5%] transition-all duration-300 hover:scale-110'>
      <h3><a href="#my-work"> My Works</a></h3>
      </div>
      <div className='grid-cols-1 mt-[5%]  transition-all duration-300 hover:scale-110'>
      <h3><a href="#contact">Contact</a></h3>
      </div>
    </div>
    <div className='flex justify-center items-center'>
      <div>
      <h3 className='ml-[100%] text-8xl font-bold mt-[5%]'>Joveline</h3>
      <p className='absolute left-[28%] text-gray-500 text-2xl  font-bold'>Create by maryam</p>
      </div>
      <div>
      <img src='/img/mecopy.png' className=' w-[38%] mt-[1%] ml-[63%]'/>
      </div>
    </div>
     <br/><br/><br/><br/>
    <div className='mt-[5%] px-[20%] text-center'>
  <h2 className='text-7xl transition-all duration-300 hover:scale-110 mb-4' id="about-me">About Me</h2>
  
  <p className='text-3xl leading-relaxed whitespace-pre-line'>
    {`My name is Maryam, I am 22 years old, and I am a graduate of the University of Technology, majoring in Computer Engineering.
I have a good knowledge of programming and I love learning more about it.
I know web languages such as HTML, CSS, JS, Bootstrap, Tailwind, C#, and Svelte.
I also have a passion for design, as I know how to use Canva and Photoshop.`}
  </p>
</div>


      <br/><br/><br/><br/><br/><br/><br/><br/>
     <div>
      <h2 id="my-work" className='text-7xl text-center transition-all duration-300 hover:scale-110'>My Work</h2>
     </div>
     <br/><br/>
     <div className='flex justify-center items-center'>
      <div>
        <button className='w-[150px] h-[80px] bg-white m-5 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
          Emergency Project
        </button>
      </div>
      <div>
        <button className='w-[150px] h-[80px] bg-white m-5 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
          Emma Store
        </button>
      </div>
      <div>
        <button className='w-[150px] h-[80px] bg-white m-5 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
          Note Book
        </button>
      </div>
     </div>
     <div className='flex justify-center items-center'>
        <div>
          <button className='w-[150px] h-[80px] bg-white m-5 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
          Xo Game
        </button>
        </div>
        <div>
          <button className='w-[150px] h-[80px] bg-white m-5 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
           One Page Store
        </button>
        </div>
        <div>
          <button className='w-[150px] h-[80px] bg-white m-5 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
          Al-Bahja Clininc
        </button>
        </div>
      </div>
              <img src='/img/circ.png' className='w-[20%] ml-[70%] mt-[-15%]'/> 
              <img src='/img/circ.png' className='w-[20%] ml-[10%] mt-[-35%]'/> 
     <br/><br/><br/><br/><br/>
     <div className='flex justify-center items-center bg-black w-screen h-[200px] mt-[10%] text-white'>
          <div id="contact">
          phone:07903254281
          </div>
          <div className='ml-10'>
          email:maryamwassem71@gmail.com
          </div>
          <div className='ml-10'>
          github:Draken29
          </div>
         
     </div>
   </div>

   
  )
}

export default App
