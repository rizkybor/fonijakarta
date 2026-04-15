export default function LoadingKeanggotaan() {
  return (
    <div className="min-h-screen bg-slate-50 pb-32 animate-pulse">
      {/* 1. Minimalist Hero Section Skeleton */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-slate-200"></div>
            <div className="w-32 h-4 bg-slate-200 rounded-md"></div>
            <div className="w-8 h-[2px] bg-slate-200"></div>
          </div>
          
          <div className="w-3/4 md:w-1/2 h-16 md:h-20 bg-slate-200 rounded-3xl mx-auto mb-8"></div>
          
          <div className="w-full max-w-2xl h-6 bg-slate-200 rounded-xl mx-auto mb-3"></div>
          <div className="w-2/3 max-w-xl h-6 bg-slate-200 rounded-xl mx-auto"></div>
        </div>
      </section>

      {/* 2. Regions Grid Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-[600px]">
                {/* Region Header Skeleton */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-48 h-8 bg-slate-200 rounded-xl"></div>
                  <div className="w-32 h-8 bg-slate-200 rounded-full shrink-0"></div>
                </div>

                {/* SDM Section Skeleton */}
                <div className="mb-8">
                  <div className="w-40 h-4 bg-slate-200 rounded mb-4"></div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[1, 2, 3].map((sdmIdx) => (
                      <div key={sdmIdx} className="bg-slate-100 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                          <div className="w-16 h-4 bg-slate-200 rounded flex-1"></div>
                          <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="w-full h-3 bg-slate-200 rounded"></div>
                          <div className="w-3/4 h-3 bg-slate-200 rounded"></div>
                          <div className="w-1/2 h-3 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clubs Section Skeleton */}
                <div className="mt-auto">
                  <div className="w-32 h-4 bg-slate-200 rounded mb-4"></div>

                  <div className="flex flex-col gap-2.5">
                    {[1, 2, 3].map((clubIdx) => (
                      <div key={clubIdx} className="flex items-center justify-between px-5 py-3.5 rounded-[1rem] bg-white border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                          <div className="w-32 h-5 bg-slate-200 rounded"></div>
                        </div>
                        
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="w-16 h-6 bg-slate-200 rounded-full hidden sm:block"></div>
                          <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}