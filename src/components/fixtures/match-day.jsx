const MatchDay = ({ data, date }) => {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  }
 
 
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {date}
        </h2>
        <div className="space-y-4">
          {data && data.map((match, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col sm:flex-row sm:items-center justify-between"
            >
              {/* Left side - Team 1 */}
              <div className="flex items-center space-x-2 sm:w-1/3">
                <img
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  className="w-6 h-6"
                />
                <span className="text-gray-800 dark:text-white font-medium">
                  {match.homeTeam.name}
                </span>
              </div>
 
 
              {/* Center - Time */}
              <div className="my-2 sm:my-0 text-center sm:w-1/3 text-sm text-gray-500 dark:text-gray-300">
                {formatDate(match.date)}
              </div>
 
 
              {/* Right side - Team 2 */}
              <div className="flex items-center space-x-2 justify-end sm:w-1/3">
                <span className="text-gray-800 dark:text-white font-medium">
                  {match.awayTeam.name}
                </span>
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  className="w-6 h-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
 };
 
 
 export default MatchDay;
 
 
 