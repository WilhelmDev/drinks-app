import Image from "next/image";
import Sidebar from '@/components/common/Sidebar'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/5" >
          <Sidebar />
        </div>
        <div className="md:w-4/5">
          <h3>Aqui va el contenido de nuestra app</h3>
        </div>
      </div>
    </main>
  );
}
