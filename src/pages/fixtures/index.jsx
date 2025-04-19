import { useEffect, useState } from "react";
import { getMatch } from "../../api/api";
import FixturesHero from "../../components/fixtures/fixtures-hero";
import MatchSchedule from "../../components/fixtures/match-date";
import MatchDay from "../../components/fixtures/match-day";


const Fixtures = () => {
 const today = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD
 const [selectedDate, setSelectedDate] = useState(today);


 const [fixtures, setFixtures] = useState([]);
 const [isLoading, setIsLoading] = useState(false);


 useEffect(() => {
   setIsLoading(true);
   getMatch(selectedDate).then((res) => {
     setFixtures(res.data);
     setTimeout(() => {
       setIsLoading(false);
     }, 1000);
   });
 }, [selectedDate]);


 return (
   <>
     <FixturesHero />
      <MatchSchedule
       selectedDate={selectedDate}
       setSelectedDate={setSelectedDate}
     />
      {isLoading && (
       <div className="bg-white dark:bg-gray-900">
         <div className="max-w-4xl mx-auto px-4 pt-6 pb-6">
           <p className="text-center text-black dark:text-white text-2xl">
             Loading...
           </p>
         </div>
       </div>
     )}
      {!isLoading && fixtures && fixtures.length > 0 && (
       <MatchDay data={fixtures} date={selectedDate} />
     )}
      {!isLoading && (!fixtures || fixtures.length === 0) && (
       <div className="bg-white dark:bg-gray-900">
         <div className="max-w-4xl mx-auto px-4 pt-6 pb-6">
           <p className="text-center text-black dark:text-white text-2xl">
             No Match
           </p>
         </div>
       </div>
     )}
   </>
 ); 
};


export default Fixtures;
