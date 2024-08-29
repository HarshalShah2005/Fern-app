import MessageContainer from "../../components/MessageContainer";
import Sidebar from "../../components/Sidebar";


const Home = () => {
	return (
		<div className="h-screen size-full bg-black">
			<div className='flex h-full w-full rounded-lg overflow-hidden bg-clip-padding'>
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;