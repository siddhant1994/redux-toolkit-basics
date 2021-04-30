import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeams, selectTeams } from "../store/features/teams/teamsSlice";
import { getSelectedPlayers } from "../store/features/players/playersSlice";

export default function Teams() {
  const _teams = useSelector(selectTeams);
  const _selected_players = useSelector(getSelectedPlayers);
  const dispatch = useDispatch();

  console.log(_selected_players);

  useEffect(() => {
    // dispatch(fetchTeams());
  }, []);

  return (
    <div>
      <>{JSON.stringify(_selected_players)}</>
    </div>
  );
}
