import { Building2, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/30">
      {/* glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-500 p-3 shadow-lg shadow-indigo-500/30">
                <Building2 className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Plot<span className="text-indigo-400">AI</span>
                </h2>

                <p className="text-sm text-white/50">AI Architecture Platform</p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-white/60">Transform any plot into intelligent floor plans, 3D layouts, and AI-powered architecture experiences.</p>

            <div className="mt-8 flex gap-4">
              {['X', 'IG', 'YT'].map((item) => (
                <div key={item} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/70 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Product</h3>

            <div className="space-y-4 text-white/60">
              <a href="#" className="block transition hover:text-indigo-400">
                AI Planner
              </a>

              <a href="#" className="block transition hover:text-indigo-400">
                Floor Plans
              </a>

              <a href="#" className="block transition hover:text-indigo-400">
                3D Visualizer
              </a>

              <a href="#" className="block transition hover:text-indigo-400">
                Vastu AI
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Company</h3>

            <div className="space-y-4 text-white/60">
              <a href="#" className="block transition hover:text-indigo-400">
                About
              </a>

              <a href="#" className="block transition hover:text-indigo-400">
                Pricing
              </a>

              <a href="#" className="block transition hover:text-indigo-400">
                Contact
              </a>

              <a href="#" className="block transition hover:text-indigo-400">
                Documentation
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-500/20 p-4">
                <Sparkles className="h-6 w-6 text-indigo-400" />
              </div>

              <h3 className="text-2xl font-bold leading-tight">Let’s Build The Future Of AI Architecture</h3>

              <p className="mt-4 leading-7 text-white/60">Want to collaborate, invest, or build something amazing?</p>

              <div className="mt-8 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <p className="text-sm text-white/40">Built by</p>

                  <h4 className="mt-1 text-lg font-semibold text-white">Rishi Sippy</h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <p className="text-sm text-white/40">Contact</p>

                  <h4 className="mt-1 text-lg font-semibold text-indigo-400">+91 7018548653</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 PlotAI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
