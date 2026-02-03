import {  Play } from 'lucide-react';

function CarousselPresentation() {
  const carouselItems = [
    {
      title: "Analytics Dashboard",
      desc: "Deep-dive into performance metrics",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJbqvgyNuL3qLRheFW2JohTZHlgI2g7wpmK0swo5MOACoy_bL1AffNA2cAm8UuTY43RZduHTkapXEkZCHnhAccc4RiDysBBaWj8_L-wShSdmbtv-_pj-0XIkmPVfbqGBBtuvia5rm-Aw-U9ga5zQXt_VZ29vhUyE4VNN_iM1euZq8m6OSZNMFOg5-Jgj4M1ODIjs81nYPtS8ScZkLBTOS7hwE_kmApjJG5KujFicoMqMd4ghd8x0pXzY8rC3t_Sj8mOVnsv_A1_bi2",
    },
    {
      title: "Integrated Team Chat",
      desc: "Context-aware conversations",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHpwiYRtaYO4GAHhk9Q0xwGTk6a1LZnZ5Xqn0D-UvrMbiQxIAIqhlu4d9fYqj_6mjg--bBf3MC9LXbU22iqOFDb0vCBgOuqc5RXwNPKSsGlKIrj9hi-ncbU85PWsWqCacLU4eXUf8NfQHMpC3G88TDRfGmJmsmC_kJLaxT9Ggx-qEVuMa-XdSco3G5bUOp1GGoSfyFIROAdW_ZBb_UOQXrPLq4zyFdNzdneM4cIjlwSvGURMZyiTacC9d07ThXp1YOYmPwOcDgWNyi",
    },
    {
        title: "Document Engine",
        desc: "Rich text editing with 50+ embeds",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3oFlzTkgr58lzJ2hhlXcVCQX28tyEpfNa5RqsvqgjMnm2O-LkdiBXSgvuohm8jgzY6VqKuyC8CA2csFiQaOkVpCw0qEoFi655lW9wCME-XyDzC6UiSw_uEDw7yAAdmX6tULRXhkppEdG11W2TZsUV2xslXL27ghJxmnW3dHoyOR8oKz7AYNRKpWscrxk2f9Qt-DhFcDVAcoNgHsJopeGT_B21p1RcaC3d19MtvmFtxBdfQHPHh3-yO4M9Uv6IBWUk9EqWfnnMNzVd",
      }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header du Carrousel */}
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-xl">
            <h3 className=" text-white text-5xl font-bold mb-4">See Nexus in Action</h3>
            <p className=" text-lg text-gray-500 leading-relaxed">
              Explore how our specialized tools solve your biggest productivity bottlenecks.
            </p>
          </div>
          
        </div>

        {/* Conteneur défilant */}
        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide">
          {carouselItems.map((item, index) => (
            <div key={index} className="min-w-100 shrink-0 group cursor-pointer">
              
              {/* Image avec Overlay au Hover */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-5 bg-secondary-dark border border-border-slate">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" 
                  src={item.img} 
                  alt={item.title} 
                />

                {/* Bouton Play au milieu (apparaît au hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="size-12 bg-white text-primary rounded-full flex items-center justify-center shadow-xl">
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Textes de la carte */}
              <h5 className="text-white text-lg md:text-2xl font-bold">{item.title}</h5>
              <p className="text-gray-400  text-lg ">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CarousselPresentation;