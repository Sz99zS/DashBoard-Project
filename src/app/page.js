import Sidebar from "@/views/main/Sidebar/Sidebar";
import Header from "@/views/main/Header/Header";
import Maininfo from "@/views/main/MainInfo/Maininfo";

export default function Home() {
  return (
    <div className='Wrapper'>
      <Sidebar />
      <div className='Content'>
        <Header />
        <Maininfo />
      </div>
    </div>
  );
}
