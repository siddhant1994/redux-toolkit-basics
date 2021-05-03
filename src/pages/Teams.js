import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSelectedPlayers } from "../store/features/players/playersSlice";

export default function Teams() {
  const _selected_players = useSelector(getSelectedPlayers);
  useEffect(() => {}, []);
  return (
    <div>
      <>{JSON.stringify(_selected_players)}</>
    </div>
  );
}
