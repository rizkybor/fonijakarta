export default function LoadingBeritaDetail() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 animate-pulse">
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="w-64 h-4 bg-slate-200 rounded-full"></div>
      </div>

      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-12 space-y-6">
          <div className="flex gap-3">
            <div className="w-24 h-6 bg-slate-200 rounded-full"></div>
            <div className="w-32 h-6 bg-slate-200 rounded-full"></div>
          </div>

          <div className="space-y-4">
            <div className="w-full h-12 md:h-16 bg-slate-200 rounded-2xl"></div>
            <div className="w-3/4 h-12 md:h-16 bg-slate-200 rounded-2xl"></div>
          </div>

          <div className="flex justify-between py-6 border-y border-slate-200 mt-8">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 bg-slate-200 rounded-md"></div>
                <div className="w-24 h-3 bg-slate-200 rounded-md"></div>
              </div>
            </div>
            <div className="w-24 h-10 bg-slate-200 rounded-full"></div>
          </div>
        </header>

        <div className="w-full aspect-video bg-slate-200 rounded-4xl mb-12 border border-slate-200"></div>

        <div className="space-y-6 mb-16">
          <div className="w-full h-6 bg-slate-200 rounded-xl"></div>
          <div className="w-full h-6 bg-slate-200 rounded-xl"></div>
          <div className="w-11/12 h-6 bg-slate-200 rounded-xl"></div>
          <div className="w-full h-6 bg-slate-200 rounded-xl"></div>
          <div className="w-4/5 h-6 bg-slate-200 rounded-xl"></div>

          <div className="w-full h-6 bg-slate-200 rounded-xl mt-8"></div>
          <div className="w-[85%] h-6 bg-slate-200 rounded-xl"></div>
          <div className="w-full h-6 bg-slate-200 rounded-xl"></div>
        </div>

        <div className="flex items-center gap-4 py-8 border-t border-slate-200">
          <div className="w-5 h-5 bg-slate-200 rounded-md"></div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-24 h-9 bg-slate-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
