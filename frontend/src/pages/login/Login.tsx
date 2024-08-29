import Logincard from "../../components/Logincard"

function Login() {
  return (
    <div className="overflow-hidden h-screen bg-gradient-to-r from-black to-purple-800 grid grid-cols-1 lg:grid-cols-2">
      <div className='pr-60 p-8 my-10 mt-10 pt-8 flex items-center justify-center'>
          <Logincard />
      </div>
      <div className='hidden lg:flex items-center justify-center'>
        <div className='mt-4 flex flex-col'>
          <h1 className='drop-shadow-purpleGlow text-5xl font-bold text-white mb-3'>Speak Freely</h1>
          <h4 className='text-xl text-white'>Say "hello" to a different messaging</h4>
          <h4 className='text-xl text-white'>experience. An unexpected focus on privacy,</h4>
          <h4 className='text-xl text-white'>combined with all of the features you expect.</h4>
        </div>
      </div>
    </div>
  )
}

export default Login
