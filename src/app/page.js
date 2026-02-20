import Sidebar from "@/views/main/Sidebar/Sidebar";
import Header from "@/views/main/Header/Header";

export default function Home() {
  return (
    <div className='Wrapper'>
      <Sidebar />
      <div className='Content'>
        <Header />
      </div>
    </div>
  );
}
