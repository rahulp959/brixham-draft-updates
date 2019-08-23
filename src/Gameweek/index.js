import React from 'react';
import gameweeks from './gameweeks';
import "./index.css";

export default ({match}) => {
    const { params: { id }} = match
    const gameweek = gameweeks[id];
    return (
        <article>
            <section>
            <h1>GW {id} Waiver wire</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Manager
                        </th>
                        <th>
                            Player In
                        </th>
                        <th>
                            Player Out
                        </th>
                    </tr>
                </thead>
                {renderWaiverTableBody(gameweek)}
            </table>
            </section>

            <section>
                <h1>GW {id} Free Agent Pickups</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Manager
                            </th>
                            <th>
                                Player In
                            </th>
                            <th>
                                Player Out
                            </th>
                        </tr>
                    </thead>
                    {renderFreeAgentTableBody(gameweek)}
                </table>
            </section>

            <section>
                <h1>GW {id} Trades </h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Offered By
                            </th>
                            <th>
                                Offered To
                            </th>
                            <th>
                                Players Offered
                            </th>
                            <th>
                                Players Requested
                            </th>
                        </tr>
                    </thead>
                    {renderTradeTableBody(gameweek)}
                </table>
            </section>
        </article>
    )
}

function renderWaiverTableBody(gameweek) {
    const waivers = gameweek.waivers;

    return (
        <tbody>
            {waivers.map(waiver => (
                <tr>
                    <td>
                        {waiver.manager}
                    </td>
                    <td>
                        {waiver.playerIn}
                    </td>
                    <td>
                        {waiver.playerOut}
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

function renderFreeAgentTableBody(gameweek) {
    const freeAgents = gameweek.freeAgents;

    return (
        <tbody>
            {freeAgents.map(freeAgent => (
                <tr>
                    <td>
                        {freeAgent.manager}
                    </td>
                    <td>
                        {freeAgent.playerIn}
                    </td>
                    <td>
                        {freeAgent.playerOut}
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

function renderTradeTableBody(gameweek) {
    const trades = gameweek.trades;

    return (
        <tbody>
            {trades.map(trade => (
                <tr>
                    <td>
                        {trade.offeredBy}
                    </td>
                    <td>
                        {trade.offeredTo}
                    </td>
                    <td>
                        {trade.offered.join(", ")}
                    </td>
                    <td>
                        {trade.requested.join(", ")}
                    </td>
                </tr>
            ))}
        </tbody>
    )
}