const MatchSchedule = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Date Selector */}
        <div className="mb-6 flex items-center gap-2">
          <label
            className="text-sm text-gray-700 dark:text-white font-medium"
            htmlFor="date"
          >
            Select match date:
          </label>
          <input
            id="date"
            type="date"
            className="border text-sm rounded-md px-3 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
 };
 
 
 export default MatchSchedule;
 