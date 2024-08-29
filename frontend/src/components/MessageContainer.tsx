
import Messages from './Messages'

function MessageContainer() {
  return (
    <div className='w-full flex flex-col'>
				<>
					{/* Header */}
					<div className='px-4 py-2 mb-2 bg-purple-600 grid grid-cols-1'>
						<span className='label-text text-white '>To:</span>{" "}
						<span className='text-gray-900 font-bold'></span>
					</div>
                    <Messages />
				</>
		</div>
  )
}

export default MessageContainer