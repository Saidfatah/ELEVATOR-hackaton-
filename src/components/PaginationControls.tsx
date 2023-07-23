import Link from "next/link";
import { FC } from "react";

type PaginationControlsProps = {
    pagesCount: number
    currentPage: number
}

const PaginationControls: FC<PaginationControlsProps> = ({ pagesCount, currentPage }) => {

    const nextPageNumber = currentPage + 1
    const prevPageNumber = Math.min(currentPage - 1, 1)

    return (<div>
        <div className="flex items-center justify-between mb-2">
            <Link href="/players/1" className="border border-black  p-2" > 1 </Link>
            <span>...</span>
            <Link href={"/players/" + pagesCount} className="border border-black  p-2" > {pagesCount} </Link>
        </div>

        <div className="flex items-center justify-between">
            <Link href={"/players/" + prevPageNumber} className="border border-black  p-2" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

            </Link>
            <Link href={"/players/" + nextPageNumber} className="border border-black  p-2" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </Link>
        </div>
    </div>);
}

export default PaginationControls;