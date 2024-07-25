import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="w-1/5 h-full">
        <LeftColumn />
      </div>
      <div className="w-4/5 h-full">
        <RightColumn />
      </div>
    </div>
  );
}
