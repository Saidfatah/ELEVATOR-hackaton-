import { Player } from "@/types";
import { formatSalary } from "@/utils";
import { FC } from "react";
import PlayerActionsRow from "./PlayerActionsRow";

type PlayersListProps = {
    players: Player[]
}

const PlayersList: FC<PlayersListProps> = ({ players }) => {
    return (
        <div className=" rounded-md border border-black" >
            <table className="table-auto ">
                <thead>
                    <tr className="border-b border-gray-300" >
                        <th className="px-6 py-3" >ID</th>
                        <th className="px-6 py-3" >NOM COMPLETE</th>
                        <th className="px-6 py-3" >SALAIRE ANNUEL</th>
                        <th className="px-6 py-3" >BUT</th>
                        <th className="px-6 py-3" >ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {players.length < 1 && <tr className="border-b border-gray-300"  >
                        <td className="px-6 py-3">aucun joueur trouvé </td>
                    </tr>}

                    {players.map(player => (
                        <tr className="border-b border-gray-300" key={player.id} >
                            <td className="px-6 py-3">{player.id}</td>
                            <td className="px-6 py-3">{`${player.firstname} ${player.lastname}`}</td>
                            <td className="px-6 py-3">{formatSalary(player.salary, player.devise)}</td>
                            <td className="px-6 py-3">{player.goal}</td>
                            <td className="px-6 py-3">
                                <PlayerActionsRow playerId={player.id.toString()} />
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
}

export default PlayersList;