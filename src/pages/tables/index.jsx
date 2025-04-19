import { useEffect, useState } from "react";
import { getStandings } from "../../api/api";
import StandingHero from "../../components/tables/standing-hero";
import StandingTables from "../../components/tables/standing-tables";


const Tables = () => {
 const [league, setLeague] = useState(null);
 const [standings, setStandings] = useState([]);


 useEffect(() => {
   getStandings().then((res) => {
     setLeague(res.league);
     setStandings(res.groups[0].standings);
   })
 }, [])


 return (
   <>
     <StandingHero />
     <StandingTables league={league} standings={standings} />
   </>
 );
};


export default Tables;
