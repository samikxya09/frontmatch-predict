import { useState } from "react";
 import axios from 'axios'

 
function Match(){
  const [teamA,setteamA] =useState("")
  const [teamB,setteamB] =useState("")
  const [teamscore,setteamscore] = useState("")
  const [matchDate,setmatchDate] =useState("")
  
async function matchdata(event) {
  event.preventDefault();

  
    await axios.post("http://localhost:3000/creatematch", {
    teamA: teamA,
    teamB:teamB,
    teamscore : teamscore,
    matchDate:matchDate,
   
     
    });

    alert("User Registered Successfully");

    setteamA("");
    setteamB("");
    setteamscore("");
    setmatchDate("");
   
}
 

 return (
    <>
     

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <form
          onSubmit={matchdata}
          className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Match
          </h2>

          <div className="mb-4">
            <label className="block mb-2 font-medium">teamA</label>
            <input
              type="text"
              placeholder="Enter Team A"
              value={teamA}
              onChange={(e) => setteamA(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">teamB</label>
            <input
              type="text"
              placeholder="Enter Team B"
              value={teamB}
              onChange={(e) => setteamB(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">MatchDate</label>
            <input
              type="date"
              value={matchDate}
              onChange={(e) => setmatchDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Match
          </button>
        </form>
      </div>
    </>
  );
}

export default Match;