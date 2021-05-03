import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchPlayers,
  selectPlayers,
  getState,
} from "../store/features/players/playersSlice";
import "./style.css";

export default function Players() {
  const [selected_players, setSelectedPlayers] = useState([]);
  const [hasStored, setHasStored] = useState(false);
  const _state = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!_state.players.length) dispatch(fetchPlayers());
  }, []);

  const renderPlayersPage = () => {
    return (
      <div className="playerlist__wrapper">
        <div className="playerlist__tools">
          <p>selected players counts : {selected_players.length}</p>
          <button type="button" onClick={handleSavePlayers}>
            Save Players
          </button>
          {hasStored ? <Link to="/teams">View Teams</Link> : null}
        </div>

        {renderPlayerList()}
      </div>
    );
  };

  const handleClick = (e) => {
    let value = +e.currentTarget.getAttribute("data-pid");
    setSelectedPlayers([...selected_players, value]);
  };

  const handleSavePlayers = (e) => {
    let data = selected_players.map((id) => {
      return _state.players.find((p) => +p.id === id);
    });
    setHasStored(true);
    dispatch(selectPlayers(data));
  };

  const renderPlayerList = () => {
    let { players } = _state;
    return players.map((player) => {
      return (
        <div key={player.id} className="playerlist__item">
          <span>{player.first_name}</span>
          <span>{player.last_name}</span>
          <span className="playerlist__item__checkbox">
            <input data-pid={player.id} type="checkbox" onClick={handleClick} />
          </span>
        </div>
      );
    });
  };

  let { is_loading } = _state;
  return <>{is_loading ? <p>loading....</p> : renderPlayersPage()}</>;
}
