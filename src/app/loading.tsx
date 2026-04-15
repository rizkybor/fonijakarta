export default function LoadingHome() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <section className="pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 sm:mb-8 mx-auto">
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <div className="w-48 h-3 bg-slate-200 rounded" />
        </div>

        <div className="mx-auto max-w-4xl space-y-4 mb-6 px-2">
          <div className="h-12 sm:h-14 md:h-16 bg-slate-200 rounded-3xl" />
          <div className="h-12 sm:h-14 md:h-16 bg-slate-200 rounded-3xl w-5/6 mx-auto" />
        </div>

        <div className="mx-auto max-w-2xl space-y-3 mb-8 sm:mb-10 px-2">
          <div className="h-4 sm:h-5 bg-slate-200 rounded-xl" />
          <div className="h-4 sm:h-5 bg-slate-200 rounded-xl w-4/5 mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <div className="w-full sm:w-48 h-14 bg-slate-200 rounded-full" />
          <div className="w-full sm:w-44 h-14 bg-slate-200 rounded-full" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 relative z-10 mb-16 md:mb-24">
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl md:rounded-[3rem] overflow-hidden bg-slate-200 border border-slate-200" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 relative z-20">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-200 rounded-xl md:rounded-2xl mb-4 md:mb-5" />
              <div className="h-10 md:h-12 w-24 bg-slate-200 rounded-2xl" />
              <div className="mt-3 h-3 w-24 bg-slate-200 rounded" />
              <div className="mt-3 h-3 w-40 bg-slate-100 rounded hidden sm:block" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mx-auto w-56 h-3 bg-slate-200 rounded mb-8 sm:mb-10" />
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-20">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-slate-100 px-8 py-4 rounded-2xl border border-slate-200"
            >
              <div className="w-28 h-5 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
          <div className="space-y-4">
            <div className="w-24 h-4 bg-slate-200 rounded" />
            <div className="w-72 h-10 bg-slate-200 rounded-2xl" />
          </div>
          <div className="w-40 h-12 bg-slate-200 rounded-full" />
        </div>

        <div className="flex gap-6 overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[380px] w-[85vw] md:w-[380px] shrink-0 bg-white rounded-[2rem] border border-slate-200 shadow-sm flex flex-col overflow-hidden"
            >
              <div className="h-56 bg-slate-200" />
              <div className="p-8 flex flex-col flex-1">
                <div className="w-40 h-4 bg-slate-200 rounded mb-6" />
                <div className="w-full h-7 bg-slate-200 rounded-xl mb-3" />
                <div className="w-4/5 h-7 bg-slate-200 rounded-xl mb-8" />
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-2xl" />
                    <div className="w-40 h-4 bg-slate-200 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-2xl" />
                    <div className="w-32 h-4 bg-slate-200 rounded" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
