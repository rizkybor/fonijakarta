export default function LoadingMaps() {
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

      {/* 2. Clean Filter Bar Skeleton */}
      <section className="sticky top-[80px] lg:top-[96px] z-40 bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96 h-11 bg-slate-200 rounded-lg"></div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <div className="w-full md:w-40 h-11 bg-slate-200 rounded-lg"></div>
            <div className="w-full md:w-40 h-11 bg-slate-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* 3. Maps Grouped by Region Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {[1, 2].map((regionIdx) => (
            <div key={regionIdx} className="mb-20 last:mb-0">
              {/* Region Header Skeleton */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-48 h-8 bg-slate-200 rounded-xl"></div>
                <div className="h-[2px] flex-1 bg-slate-200"></div>
                <div className="w-20 h-5 bg-slate-200 rounded-md"></div>
              </div>

              {/* Horizontal Scroll Container Skeleton */}
              <div className="flex gap-6 overflow-hidden -mx-6 px-6 md:mx-0 md:px-0">
                {[1, 2, 3].map((itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="min-w-[320px] md:min-w-[400px] w-[85vw] md:w-[400px] shrink-0 bg-white rounded-2xl border border-slate-200 flex flex-col h-[480px]"
                  >
                    {/* Image Thumbnail Skeleton */}
                    <div className="h-48 bg-slate-200 rounded-t-2xl"></div>

                    {/* Content Body Skeleton */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="w-24 h-6 bg-slate-200 rounded mb-3"></div>
                      
                      <div className="w-3/4 h-7 bg-slate-200 rounded-xl mb-6"></div>

                      {/* Technical Specs Skeleton */}
                      <div className="space-y-3 mb-8 mt-auto">
                        {[1, 2, 3, 4].map((specIdx) => (
                          <div key={specIdx} className="flex justify-between items-center border-b border-slate-100 pb-2">
                            <div className="w-20 h-4 bg-slate-200 rounded"></div>
                            <div className="w-16 h-4 bg-slate-200 rounded"></div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button Skeleton */}
                      <div className="w-full h-11 bg-slate-200 rounded-lg mt-auto"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Minimalist CTA Section Skeleton */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-200 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full max-w-2xl">
              <div className="w-3/4 h-10 bg-slate-300 rounded-xl mb-4 mx-auto md:mx-0"></div>
              <div className="w-full h-6 bg-slate-300 rounded-lg mx-auto md:mx-0 mb-2"></div>
              <div className="w-5/6 h-6 bg-slate-300 rounded-lg mx-auto md:mx-0"></div>
            </div>
            <div className="shrink-0 w-48 h-14 bg-slate-300 rounded-xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
