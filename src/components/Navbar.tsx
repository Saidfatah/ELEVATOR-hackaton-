import Link from "next/link";

const Navbar = () => {
    return (
        <div className='p-4 flex justify-between border-b-2 border-black' >
            <h1 className="font-bold">Liste des jouers</h1>

            <Link href="/add-player" className='flex justify-between items-center border border-b-2 p-2 border-black' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>Ajouter un joueur</span>
            </Link>
        </div >
    );
}

export default Navbar;