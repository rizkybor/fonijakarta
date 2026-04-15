export default function LoadingEvents() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header Skeleton */}
        <section className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="w-40 h-4 bg-slate-200 rounded-full mb-6"></div>
          <div className="w-3/4 md:w-2/3 h-16 md:h-20 bg-slate-200 rounded-3xl mb-6"></div>
          <div className="w-full h-6 bg-slate-200 rounded-xl mb-3"></div>
          <div className="w-2/3 h-6 bg-slate-200 rounded-xl"></div>
        </section>

        {/* 2. Upcoming Events Grid Skeleton */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-64 h-8 bg-slate-200 rounded-xl"></div>
            <div className="h-[2px] flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-slate-100 flex flex-col overflow-hidden h-[500px]">
                {/* Image Placeholder */}
                <div className="w-full h-60 bg-slate-200 p-3 shrink-0">
                  <div className="w-full h-full bg-slate-300 rounded-[1.25rem]"></div>
                </div>
                
                {/* Card Content Placeholder */}
                <div className="p-8 flex-1 flex flex-col">
                   <div className="w-32 h-4 bg-slate-200 rounded-md mb-4"></div>
                   <div className="w-full h-8 bg-slate-200 rounded-xl mb-3"></div>
                   <div className="w-3/4 h-8 bg-slate-200 rounded-xl mb-8"></div>
                   
                   <div className="mt-auto space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-slate-200 rounded-2xl shrink-0"></div>
                         <div className="w-1/2 h-5 bg-slate-200 rounded-md"></div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-slate-200 rounded-2xl shrink-0"></div>
                         <div className="w-1/2 h-5 bg-slate-200 rounded-md"></div>
                      </div>
                      <div className="w-full h-12 bg-slate-200 rounded-xl mt-4"></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Past Events Timeline Skeleton */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-64 h-8 bg-slate-200 rounded-xl"></div>
            <div className="h-[2px] flex-1 bg-slate-200"></div>
          </div>
          
          <div className="bg-white rounded-[2rem] border border-slate-200 p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-100 bg-slate-50 items-start sm:items-center justify-between">
                    <div className="flex-1 w-full">
                       <div className="flex items-center gap-3 mb-4">
                         <div className="w-20 h-5 bg-slate-200 rounded-md"></div>
                         <div className="w-24 h-4 bg-slate-200 rounded-md"></div>
                       </div>
                       <div className="w-3/4 sm:w-full h-6 bg-slate-200 rounded-xl"></div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-3 shrink-0 w-full sm:w-auto">
                       <div className="w-full sm:w-32 h-8 bg-slate-200 rounded-lg"></div>
                       <div className="w-full sm:w-32 h-8 bg-slate-200 rounded-lg"></div>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}