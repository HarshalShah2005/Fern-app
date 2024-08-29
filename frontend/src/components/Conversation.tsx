function Conversation() {
    return ( <>
      <div className="flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-gradient-to-r from-purple-500 to-purple-950 hover:drop-shadow-purpleGlow">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">🤣</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
      </>
    )
  }
  
  export default Conversation
  