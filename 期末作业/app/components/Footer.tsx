import WakaTimeStats from './WakaTimeStats';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center text-gray-400">
        <p>
          <WakaTimeStats />
        </p>
        <p>&copy; {new Date().getFullYear()} 课程期末作业</p>
      </div>
    </footer>
  );
} 