import axios from "axios";
axios.defaults.withCredentials = true;

export async function onAddPlayer(playerData) {
  return await axios.post("http://localhost:8000/api/add-user", playerData);
}
export async function allPlayers() {
  return await axios.get("http://localhost:8000/api/get-users");
}
export async function deletePlayer(playerName) {
  console.log(playerName ," axios")
  return await axios.delete("http://localhost:8000/api/delete-user",playerName);
}