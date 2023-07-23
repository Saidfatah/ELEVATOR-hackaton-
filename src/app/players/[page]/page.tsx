import PaginationControls from '@/components/PaginationControls';
import PlayersList from '@/components/PlayersList'
import prisma from "@/lib/prisma";

const ITEMS_PER_PAGE = 6

type PlayersPropsType = {
    params: { page: string }
}

export default async function Players({ params }: PlayersPropsType) {
    const pageNumber = parseInt(params.page) ? parseInt(params.page) : 1

    const players = await prisma.player.findMany({
        skip: (Number(pageNumber) - 1) * ITEMS_PER_PAGE,
        take: ITEMS_PER_PAGE,
    });

    // Convert the salary field from BigInt to number
    const formattedPlayers = players.map((player: any) => ({
        ...player,
        salary: Number(player.salary),
    }));


    const totalCount = await prisma.player.count();
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    return (
        <main >
            <div className='flex flex-col gap-8 justify-center items-center p-12' >
                <PlayersList players={formattedPlayers} />
                <PaginationControls pagesCount={totalPages} currentPage={pageNumber} />
            </div>
        </main>
    )
}
