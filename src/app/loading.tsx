

const loading = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          {[...Array(8)].map((_, index) => (
          <div key={index} className="w-full max-w-[358px] mx-auto">
            <div className="bg-gray-200 rounded-lg p-4 animate-pulse">
              <div className="aspect-square bg-gray-300 rounded-lg"></div>
              <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        ))} </div>
    )
  }
  
  export default loading