import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/5 bg-primary text-light border-r border-black flex flex-col">
        <LeftColumn />
      </div>
      <div className="w-4/5 flex flex-col">
        <RightColumn />
      </div>
    </div>
  );
}
