'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Sparkles, Upload, Wand2, Ruler, Layers3 } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-indigo-500 p-2">
              <Building2 className="h-5 w-5" />
            </div>

            <h1 className="text-xl font-bold tracking-tight">
              Plot<span className="text-indigo-400">AI</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#">Features</a>
            <a href="#">Planner</a>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:block text-sm text-white/70 hover:text-white transition">Login</button>

            <button className="rounded-xl bg-indigo-500 px-5 py-2 text-sm font-medium hover:bg-indigo-400 transition">Start Free</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-24">
        {/* background glow */}
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              AI Powered Architecture Planning
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-7xl">
              Upload Your Plot.
              <span className="block text-indigo-400">Generate AI House Plans.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">Turn any plot sketch, dimensions, marla, gaj, or site image into smart floor plans, 3D layouts, and AI-generated architecture.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-2xl bg-indigo-500 px-7 py-4 font-medium hover:bg-indigo-400 transition">
                Start Planning
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-medium hover:bg-white/10 transition">Watch Demo</button>
            </div>

            {/* stats */}
            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="mt-1 text-white/50">Generated Layouts</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="mt-1 text-white/50">Plot Variations</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">AI</h3>
                <p className="mt-1 text-white/50">Vastu Optimization</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              {/* topbar */}
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-semibold">AI Planner</h3>
                  <p className="text-sm text-white/50">30x40 East Facing Plot</p>
                </div>

                <div className="rounded-xl bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">AI Active</div>
              </div>

              {/* planner */}
              <div className="grid grid-cols-12 gap-4">
                {/* sidebar */}
                <div className="col-span-3 rounded-2xl border border-white/10 bg-[#0F172A] p-4">
                  <div className="space-y-4">
                    <div className="rounded-xl bg-indigo-500/20 p-3">
                      <Upload className="mb-2 h-5 w-5 text-indigo-400" />
                      <p className="text-sm">Upload Plot</p>
                    </div>

                    <div className="rounded-xl border border-white/10 p-3">
                      <Ruler className="mb-2 h-5 w-5 text-cyan-400" />
                      <p className="text-sm">Set Dimensions</p>
                    </div>

                    <div className="rounded-xl border border-white/10 p-3">
                      <Layers3 className="mb-2 h-5 w-5 text-pink-400" />
                      <p className="text-sm">Generate Layout</p>
                    </div>
                  </div>
                </div>

                {/* canvas */}
                <div className="col-span-6 rounded-2xl border border-white/10 bg-[#111827] p-4">
                  <div className="relative h-[420px] rounded-2xl bg-[#0B1120] p-4">
                    {/* grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* rooms */}
                    <motion.div
                      animate={{
                        y: [0, -6, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4
                      }}
                      className="absolute left-5 top-5 flex h-28 w-36 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-sm"
                    >
                      Living Room
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 6, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5
                      }}
                      className="absolute right-5 top-5 flex h-28 w-32 items-center justify-center rounded-xl border border-indigo-400/40 bg-indigo-500/10 text-sm"
                    >
                      Bedroom
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, -5, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6
                      }}
                      className="absolute bottom-5 left-5 flex h-24 w-32 items-center justify-center rounded-xl border border-pink-400/40 bg-pink-500/10 text-sm"
                    >
                      Kitchen
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 8, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4
                      }}
                      className="absolute bottom-5 right-5 flex h-28 w-36 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-sm"
                    >
                      Master Room
                    </motion.div>
                  </div>
                </div>

                {/* ai sidebar */}
                <div className="col-span-3 rounded-2xl border border-white/10 bg-[#0F172A] p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-lg bg-indigo-500/20 p-2">
                      <Wand2 className="h-4 w-4 text-indigo-400" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold">AI Assistant</h4>
                      <p className="text-xs text-white/50">Smart Suggestions</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">Kitchen moved according to Vastu.</div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">Added parking area for sedan.</div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">Optimized natural lighting.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating blur */}
            <div className="absolute -right-10 top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Everything You Need To Plan Homes</h2>

          <p className="mt-4 text-white/60">AI-powered architecture tools built for modern home planning.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'AI Plot Reader',
              desc: 'Upload sketches, PDFs, or images and let AI understand dimensions.'
            },
            {
              title: 'Smart Room Planning',
              desc: 'Automatically generate optimized room layouts instantly.'
            },
            {
              title: '3D Visualization',
              desc: 'Preview your home with realistic 3D rendering and walkthroughs.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-500/20 p-4">
                <Sparkles className="h-6 w-6 text-indigo-400" />
              </div>

              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
