'use client';

const items = [
  { title: 'Google Maps Listing Issues', desc: 'Fix visibility and listing errors.' },
  { title: 'Phone Verification Problems', desc: 'Resolve phone verification failures.' },
  { title: 'Suspended Profiles', desc: 'Recover suspended profiles safely.' },
  { title: 'Number Update Issues', desc: 'Update business numbers correctly.' },
  { title: 'Low Local Rankings', desc: 'Improve Maps ranking positions.' },
  { title: 'Duplicate Listings', desc: 'Remove harmful duplicates.' },
  { title: 'Incorrect Address', desc: 'Fix pin & address mismatches.' },
  { title: 'Profile Optimization', desc: 'Optimize for local dominance.' },
];

export default function PremiumSnapCarousel() {
  return (
    <section className="bg-gradient-to-b from-white via-green-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Google Maps SEO Challenges We Solve
        </h2>
        <p className="mt-4 max-w-2xl text-gray-600 text-lg">
          Swipe horizontally to explore — smooth, calm, and focused.
        </p>
      </div>

      <div className="mt-16">
        <div
          className="
            flex gap-6 px-6 md:px-16
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            scrollbar-hide
            touch-pan-x
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                snap-center
                min-w-[280px] md:min-w-[360px] lg:min-w-[420px]
                bg-white
                rounded-3xl
                p-8
                border border-green-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <div className="h-12 w-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold">
                {i + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
