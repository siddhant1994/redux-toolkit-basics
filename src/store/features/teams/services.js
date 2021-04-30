import { getReq, BASE_URL } from "../../../common/apiCalls";

const END_POINTS = {
  get_teams: "/teams",
};

export const servicesFetchTeams = () => {
  let url = BASE_URL + END_POINTS.get_teams;
  return getReq(url);
};
