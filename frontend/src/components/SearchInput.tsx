import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
    return (
		<form className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input-sm md:input input-bordered rounded-full sm:rounded-full w-full'
			/>
			<button type='submit' className='btn md:btn-md btn-sm btn-circle bg-purple-600 text-white  '>
            <IoSearchSharp className="w-6 h-6 outline-none" />
			</button>
		</form>
	);
}

export default SearchInput