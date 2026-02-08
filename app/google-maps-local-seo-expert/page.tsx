import Hero from "@/src/sections/google-maps-local-seo-ranking-expert/Hero";
import MapsSeoCarousel from "@/src/sections/google-maps-local-seo-ranking-expert/MapsSeoCarousel"

export const metadata = {
  title: "Google Maps Local SEO Ranking Expert | Zammy Zaif",
  description:
    "Google Maps Local SEO Ranking Expert. Since 2008, Zammy Zaif helps businesses achieve 1st rank results in Google Maps with proven local SEO strategies.",
};

export default function GoogleMapsLocalSeoRankingExpertPage() {
  return (
    <main className="overflow-x-hidden">
          <Hero />
          
          <section className="relative bg-gradient-to-br from-white via-green-50 to-white py-20 overflow-hidden">
  {/* subtle background glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

      
      {/* IMAGE SIDE */}
      <div className="relative group lg:col-span-5">

        <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition"></div>

        <img
          src="/assets/images/best-seo-expert/local-seo-expert.webp"
          alt="Local SEO 1st Rank Expert"
          className="relative z-10 w-full rounded-3xl shadow-2xl border border-green-100"
        />
      </div>

      {/* CONTENT SIDE */}
     <div className="lg:col-span-7">

        <h2 className="h2 text-gray-700 max-w-6xl leading-tight"> 
          Expert in Local SEO #1 Rank 
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4 mb-6"></div>

        <p className="text-black p leading-relaxed">
          Zammy Zaif and our team possess extensive expertise in securing first-rank
          results for Google Business Profiles. Drawing from our experience with over
          1,200 projects, we have developed tailored strategies for various industries.
          We have established a streamlined pipeline approach to optimize Google Maps
          business listings, ensuring strict adherence to Google’s guidelines. This
          enables us to achieve No. 1 local SEO rankings within 45 business days. Our
          proven strategy has been successfully implemented for over 800 businesses,
          consistently delivering top rankings.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300">
            GET QUOTE
            <span className="inline-block transform group-hover:translate-x-1 transition">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  </div> 
</section>

<MapsSeoCarousel/>
    </main>
  );
}
