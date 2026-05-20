import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <header className="space-y-3">
            <h2 className="text-2xl font-bold">10-K Analysis Workspace</h2>
            <p className="text-sm text-slate-600">
              All financial amounts are in millions of USD unless displayed otherwise.
            </p>
            <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
              This dashboard is for analysis of the 10-K only and is not investment advice.
            </p>
          </header>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Welcome</h3>
            <p className="text-sm text-slate-700">
              Use the left navigation to explore sections for filing-based financial analysis.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
