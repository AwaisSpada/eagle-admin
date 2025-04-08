const SkeletonTable = ({ rows = 5, columns = 6 }) => {
    return (
      <div className="w-full  rounded-lg overflow-hidden">
        {/* Table Header (Fixed) */}
        {/* <div className="bg-gray-100 p-3 flex">
          {Array(columns).fill(0).map((_, index) => (
            <div key={index} className="flex-1 h-4 bg-gray-300 rounded animate-pulse mx-2"></div>
          ))}
        </div> */}
  
        {/* Table Body Skeleton */}
        <div className="divide-y divide-gray-200">
          {Array(rows).fill(0).map((_, rowIndex) => (
            <div key={rowIndex} className="p-3 flex">
              {Array(columns).fill(0).map((_, colIndex) => (
                <div key={colIndex} className="flex-1 h-4 bg-background/70 rounded animate-pulse mx-4"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkeletonTable;
  