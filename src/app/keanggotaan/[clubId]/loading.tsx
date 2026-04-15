export default function LoadingClubDetail() {
  return (
    <div className="min-h-screen bg-slate-50 pb-32 animate-pulse">
      {/* 1. Minimalist Header Skeleton */}
      <section className="relative pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="w-24 h-4 bg-slate-200 rounded mb-8"></div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200"></div>
                <div className="w-32 h-6 bg-slate-200 rounded-full"></div>
              </div>
              
              <div className="w-3/4 max-w-md h-12 bg-slate-200 rounded-2xl mb-4"></div>
              
              <div className="w-40 h-8 bg-slate-200 rounded-full"></div>
            </div>

            <div className="bg-slate-200 px-8 py-6 rounded-[2rem] flex flex-col items-center justify-center shrink-0 min-w-[160px] h-32"></div>
          </div>
        </div>
      </section>

      {/* 2. Athletes Table Skeleton */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-48 h-8 bg-slate-200 rounded-xl"></div>
            <div className="h-[2px] flex-1 bg-slate-200"></div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <th key={i} className="px-8 py-5">
                        <div className="w-20 h-4 bg-slate-200 rounded"></div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[1, 2, 3, 4, 5].map((row) => (
                    <tr key={row}>
                      <td className="px-8 py-5">
                        <div className="w-40 h-6 bg-slate-200 rounded"></div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="w-16 h-8 bg-slate-200 rounded-lg"></div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="w-16 h-6 bg-slate-200 rounded ml-auto"></div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="w-16 h-6 bg-slate-200 rounded ml-auto"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}