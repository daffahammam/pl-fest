import { useState } from "react";


const StandingTables = ({ league, standings }) => {
 const [sortOrder, setSortOrder] = useState("asc");


 const toggleSortOrder = () => {
   setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
 }


 const sortedStandings = [...(standings || [])].sort((a, b) => {
   return sortOrder === "asc"
     ? a.position - b.position
     : b.position - a.position;
 });


 return (
   <>
     <div className="flex flex-col items-center justify-center w-screen bg-white dark:bg-gray-900 pt-3 pb-10">
       <h1 className="text-lg text-gray-900 dark:text-white font-medium">
         {league ? `${league.name} - ${league.season}` : ""}
       </h1>
       <div className="flex flex-col mt-6">
         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
           <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
             <div className="shadow overflow-hidden rounded-lg">
               <table className="min-w-full text-sm text-gray-900 dark:text-white">
                 <thead className="bg-white dark:bg-gray-700 text-xs uppercase font-medium">
                   <tr>
                     <th className="cursor-pointer" onClick={toggleSortOrder}>
                       #
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider"
                     >
                       Club
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider"
                     >
                       MP
                     </th>
                     <th
                        scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider"
                     >
                       W
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider"
                     >
                       D
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider"
                     >
                       L
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider"
                     >
                       GF
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider hidden md:table-cell"
                     >
                       GA
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider hidden md:table-cell"
                     >
                       GD
                     </th>
                     <th
                       scope="col"
                       className="px-3 md:px-6 py-3 text-left tracking-wider"
                     >
                       Pts
                     </th>
                   </tr>
                 </thead>
                 <tbody className="bg-white dark:bg-gray-700">
                   {standings &&
                     sortedStandings.map((item, index) => (
                       <tr
                         key={index}
                         className={
                           item.position % 2 === 1
                             ? "bg-gray-200 dark:bg-black bg-opacity-20"
                             : ""
                         }
                       >
                        <td
                          className={`pl-4 ${
                            item.position >= 1 && item.position <= 4
                              ? 'border-l-2 border-l-blue-500'
                              : item.position >= 5 && item.position <= 7
                              ? 'border-l-2 border-l-orange-400'
                              : item.position >= 18 && item.position <= 20
                              ? 'border-l-2 border-l-red-500'
                              : ''
                          }`}
                        >
                          {item.position}
                        </td>

                         <td className="flex px-3 md:px-6 py-4 whitespace-nowrap">
                           <img className="w-5" src={item.team.logo} alt="" />
                           <span className="ml-2 font-medium hidden md:block">
                             {item.team.name}
                           </span>
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                           {item.total.games}
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                           {item.total.wins}
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                           {item.total.draws}
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                           {item.total.loses}
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                           {item.total.scoredGoals}
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                           {item.total.receivedGoals}
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                           {item.total.scoredGoals - item.total.receivedGoals}
                         </td>
                         <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                           {item.points}
                         </td>
                       </tr>
                     ))}
                 </tbody>
               </table>
             </div>
           </div>
         </div>
       </div>
              {/* Keterangan posisi */}
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <p>
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm mr-2"></span>
          Positions 1–4: Qualify for UEFA Champions League
        </p>
        <p>
          <span className="inline-block w-3 h-3 bg-orange-400 rounded-sm mr-2"></span>
          Positions 5–7: Qualify for UEFA Europa League
        </p>
        <p>
          <span className="inline-block w-3 h-3 bg-red-500 rounded-sm mr-2"></span>
          Positions 18–20: Relegated to lower division
        </p>
      </div>
     </div>
   </>
 );
};


export default StandingTables;
