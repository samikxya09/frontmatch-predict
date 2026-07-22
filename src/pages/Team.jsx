import { useState } from "react";
 import axios from 'axios'

 
function Team(){
  const [Teamname,setTeamname] =useState("")
  const [Teamcaptain,setTeamcaptain] =useState("")
  const [Teamcoach,setTeamcoach] = useState("")

async function teamdata(event) {
  event.preventDefault();

  
    await axios.post("http://localhost:3000/register", {
     Teamname: Teamname,
     Teamcaptain : Teamcaptain,
     Teamcoach:Teamcoach
     
    });

    alert("User Registered Successfully");

    setTeamname("");
    setTeamcaptain("");
    setTeamcoach("");
    
}




 return(
       
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form onSubmit={teamdata}className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-5">

    <h2 className="text-3xl font-bold text-center text-gray-800">
      team
    </h2>

    {/* teamname */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Teamname
      </label>
      <input
        type="Teamname"
        value={Teamname}
        onChange={(e) => setTeamname(e.target.value)}
        placeholder="Enter your team name"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* teamcoach */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Teamcoach
      </label>
      <input
        type="Teamcoach"
        value ={Teamcoach}
        placeholder="Enter your name of coach"
        onChange={(e) => setTeamcoach(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* teamcaptain*/}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Teamcaptain
      </label>
      <input
        type="Teamcaptain"
        value ={Teamcaptain}
        placeholder="Enter ur captain name "
        onChange={(e) => setTeamcaptain(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
    >
      submit
    </button>

  </form>
</div>
    );
}

export default Team;