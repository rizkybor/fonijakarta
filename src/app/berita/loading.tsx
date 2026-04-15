export default function LoadingBerita() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-32 animate-pulse">
      {/* Header Skeleton */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 flex flex-col items-center">
        <div className="w-40 h-8 bg-slate-200 rounded-full mb-6"></div>
        <div className="w-3/4 md:w-1/2 h-16 md:h-20 bg-slate-200 rounded-3xl mb-6"></div>
        <div className="w-2/3 md:w-1/3 h-6 bg-slate-200 rounded-xl"></div>
      </div>

      {/* Featured News Skeleton */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="w-40 h-4 bg-slate-200 rounded-full mb-6"></div>
        <div className="w-full h-[300px] md:h-[400px] bg-slate-200 rounded-[2.5rem]"></div>
      </div>

      {/* Main Content Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: News List */}
          <div className="lg:col-span-8 space-y-6">
            <div className="w-48 h-4 bg-slate-200 rounded-full mb-8"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 p-4 md:p-6 bg-white rounded-[2rem] border border-slate-100">
                <div className="w-full sm:w-48 aspect-video bg-slate-200 rounded-2xl shrink-0"></div>
                <div className="flex-1 space-y-4 py-2">
                  <div className="flex gap-2">
                    <div className="w-20 h-6 bg-slate-200 rounded-lg"></div>
                    <div className="w-24 h-6 bg-slate-200 rounded-lg"></div>
                  </div>
                  <div className="w-full h-7 bg-slate-200 rounded-xl"></div>
                  <div className="w-3/4 h-7 bg-slate-200 rounded-xl"></div>
                  <div className="w-full h-4 bg-slate-200 rounded-md mt-4"></div>
                  <div className="w-2/3 h-4 bg-slate-200 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             {/* Sponsor Box Skeleton */}
             <div className="w-full h-72 bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col items-center justify-center gap-5">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl"></div>
                <div className="w-3/4 h-6 bg-slate-200 rounded-xl"></div>
                <div className="w-full h-4 bg-slate-200 rounded-md"></div>
                <div className="w-5/6 h-4 bg-slate-200 rounded-md"></div>
                <div className="w-1/2 h-12 bg-slate-200 rounded-full mt-2"></div>
             </div>

             {/* Tags Skeleton */}
             <div className="w-full bg-white rounded-[2rem] border border-slate-100 p-8 space-y-6">
                <div className="w-32 h-6 bg-slate-200 rounded-xl"></div>
                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-20 h-9 bg-slate-200 rounded-xl"></div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}