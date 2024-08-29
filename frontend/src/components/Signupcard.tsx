import { Link, useNavigate } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"

function Signupcard() {
    const navigate = useNavigate()

    return (
        <div className="border rounded-lg overflow-hidden flex items-center justify-center w-full h-full p-4 sm:p-6 md:p-8">
            <form className="space-y-4 w-full max-w-md" action="#">
                <h5 className="text-white drop-shadow-purpleGlow text-xl font-bold">Message your friends with Fern!</h5>
                <div>
                    <input type="text" name="fullname" id="fullname" className="drop-shadow-purpleGlow border text-sm rounded-lg block w-full p-2.5 bg-transparent placeholder-white text-white" placeholder="Enter name" required />
                </div>
                <div>
                    <input type="email" name="email" id="email" className="drop-shadow-purpleGlow border text-sm rounded-lg block w-full p-2.5 bg-transparent placeholder-white text-white" placeholder="Enter email" required />
                </div>
                <div>
                    <GenderCheckbox />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Enter password" className="drop-shadow-purpleGlow border text-sm rounded-lg block w-full p-2.5 bg-transparent placeholder-white text-white" required />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Confirm password" className="drop-shadow-purpleGlow border text-sm rounded-lg block w-full p-2.5 bg-transparent placeholder-white text-white" required />
                </div>
                <button 
                    onClick={() => {
                        navigate('/')
                    }}
                    type="submit" className="focus:drop-shadow-purpleGlow w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700">
                    Sign in to your account
                </button>
                <div className="text-sm font-medium text-gray-300">
                    Already have an account?{' '}
                    <Link to="/login" className="hover:underline text-purple-500">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Signupcard
