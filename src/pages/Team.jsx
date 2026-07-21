import { useState } from "react";
import axios from "axios";

async function team()
{
    event.preventDefault();

    await axios.post("http:/localhost:3000/createteam",

    )
}
  return (
    <>
      <Navbar />

      <form onSubmit={sendTeamData}>
      <input
  type="text"
  placeholder="Team Name"
  value={name ?? ""}
  onChange={(e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }}
/>

        <input
          type="text"
          placeholder="Captain"
          value={captain}
          onChange={(e) => setCaptain(e.target.value)}
        />

        <input
          type="text"
          placeholder="Coach"
          value={coach}
          onChange={(e) => setCoach(e.target.value)}
        />

        <button type="submit">Save Team</button>
      </form>
        <div className="min-h-screen bg-gray-100 py-10 px-6">
  <div className="max-w-6xl mx-auto">

    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
      Football Teams
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {teams.map((team) => (
        <div
          key={team.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            {team.teamname}
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">
                Captain
              </span>

              <span className="text-gray-800">
                {team.teamcaptain}
              </span>
            </div>

            <hr />

            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">
                Coach
              </span>

              <span className="text-gray-800">
                {team.teamcoach}
              </span>
            </div>

          </div>

          
<button
  onClick={() => editTeam(team)}
  className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
>
  Edit
</button>
              <button
      onClick={() => deleteTeam(team.id)}
      className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
      Delete
    </button>


          
        </div>
      ))}

    </div>
  </div>
</div>

               
    </>
  );

}
export default Team;
