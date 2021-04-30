import { getReq, BASE_URL } from "../../../common/apiCalls";

const END_POINTS = {
  get_players: "/players",
};

export const servicesFetchPlayers = () => {
  let url = BASE_URL + END_POINTS.get_players;
  return getReq(url);
};
