import Navbar from '@/components/Navbar'
import prisma from "@/lib/prisma";
import Link from 'next/link';

export default async function Home() {


  return (
    <main >
      <div className='flex flex-col gap-8 justify-center items-center p-12' >
        <h1>Bienvenue a l&apos;appilication des joures</h1>
        <Link href={"/players/1"} className=" flex items-center border border-black  p-2" >
          <span>Visualizer les list des jouers</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </Link>
      </div>
    </main>
  )
}
