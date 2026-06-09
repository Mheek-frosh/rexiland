import Image from 'next/image';
import Container from '@/components/Container';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-gradient-to-b from-[#EDF5FD] via-[#F5FAFE] to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(47,79,255,0.18)_0%,transparent_60%)]" />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF9D4] border border-primary/30 text-zinc-800 text-xs font-semibold shadow-sm">
                About RexiPay
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                Payments that keep working—online or offline.
              </h1>

              <p className="mt-6 text-zinc-600 text-base md:text-lg leading-relaxed max-w-xl">
                RexiPay is built to help businesses move money confidently, even when network service is weak—or not available.
                We combine secure digital finance, instant crypto liquidity, and resilient payment flows so customers can pay,
                and merchants can get paid.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Offline-ready transaction flow',
                  'POS-free payments',
                  'Instant crypto-to-cash liquidity',
                  'Security-first architecture'
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold bg-white border border-zinc-200 text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-secondary/10 rounded-[2rem] blur-xl" />
              <Image
                src="/images/mockup-1.webp"
                alt="RexiPay payment experience"
                width={900}
                height={650}
                className="rounded-[2rem] w-full h-auto shadow-xl"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">
                Financial infrastructure without limits.
              </h2>
              <p className="mt-5 text-zinc-600 leading-relaxed">
                Traditional payment systems can break when banking infrastructure is disrupted.
                RexiPay is designed for continuity—so businesses can transact even when network connectivity fails.
              </p>

              <div className="mt-8 space-y-6">
                {[{ k: '1', t: 'Resilient payments', d: 'Keep business moving during outages with an offline-capable flow.' },
                  { k: '2', t: 'POS-free by design', d: 'Access and receive funds without expensive POS hardware or ATM dependence.' },
                  { k: '3', t: 'Instant crypto liquidity', d: 'Receive cryptocurrency and convert to cash quickly with rapid settlement.' }
                ].map((x) => (
                  <div key={x.k} className="flex gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-secondary/15 border border-secondary/20 text-secondary font-extrabold flex items-center justify-center">
                      {x.k}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 text-lg">{x.t}</h3>
                      <p className="text-zinc-600 leading-relaxed text-sm md:text-base">{x.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-secondary/10 blur-2xl" />
              <Image
                src="/images/secure.webp"
                alt="Secure digital finance ecosystem"
                width={700}
                height={520}
                className="rounded-[2rem] w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-hero-background py-16 md:py-24 border-t border-zinc-100">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">A unified finance ecosystem</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              RexiPay brings payments, merchant services, transfers, and digital asset management together—built with security and accessibility at its core.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: '/images/hero-transactions.webp',
                title: 'Payments that work',
                desc: 'Online & offline-friendly transaction flows for merchants.'
              },
              {
                img: '/images/hero-chart.webp',
                title: 'Business insights',
                desc: 'Track activity and manage money with clear reporting.'
              },
              {
                img: '/images/convert.webp',
                title: 'Crypto to cash',
                desc: 'Receive crypto and convert quickly when you need liquidity.'
              },
              {
                img: '/images/testimonial-1.webp',
                title: 'Security first',
                desc: 'Safeguards across the digital finance experience.'
              }
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-[2rem] border border-zinc-100 shadow-sm overflow-hidden">
                <div className="relative h-40">
                  <Image src={c.img} alt={c.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-zinc-900 text-lg">{c.title}</h3>
                  <p className="mt-2 text-zinc-600 leading-relaxed text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden bg-secondary text-white rounded-[2.5rem] py-14 md:py-20 px-6 md:px-10 text-center shadow-xl shadow-secondary/10">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_-100px,rgba(255,255,255,0.35)_0%,transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to build resilience into your payments?</h2>
              <p className="mt-4 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Help your customers pay and help your business get paid—whether the network is strong or not.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="/contact"
                  className="bg-[#FFECA1] hover:bg-[#FFE370] text-[#121212] font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;

