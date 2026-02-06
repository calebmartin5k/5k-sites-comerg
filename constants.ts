import { ContentSection } from './types';

// Placeholder images used since we cannot access local files from the original query.
// In a real migration, we would use the original assets or professional stock photos.
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000",
  atomic: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Machinery
  fragrants: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800", // Roses
  flavours: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800", // Spices
  emollients: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=800", // Oils
  fruit: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800", // Berries
};

export const SITE_DATA = {
  companyName: "COMERG",
  tagline: "A Natural Extraction Solution",
  heroHeading: "Developing Technologies With Minimum Impact To The End Product",
  techIntro: "COMERG has developed a breakthrough extraction and purification technology.",
};

export const SECTIONS: ContentSection[] = [
  {
    id: 'atomic',
    title: 'ATOMIC',
    subtitle: 'Liquefied Gas Extraction Technology',
    image: IMAGES.atomic,
    description: `
      <p class="mb-4"><strong>Food Grade Hash Resin</strong></p>
      <ul class="space-y-4">
        <li>
          <strong class="text-brand-green">Use Low Pressure</strong><br/>
          The process can run at 2-9 bars, which is a significantly lower investment for equipment and maintenance.
        </li>
        <li>
          <strong class="text-brand-green">Use Any Material</strong><br/>
          Universal extraction process as the solvent does not affect the nature of the raw material either dry or fresh.
        </li>
        <li>
          <strong class="text-brand-green">Explosion and Fire Safe</strong><br/>
          Low pressure recovery system with no fire hazard and no temperature involved in process.
        </li>
        <li>
          <strong class="text-brand-green">Excellent Selectivity</strong><br/>
          A non-polar solvent at low and moderate pressures that extracts specific flavor and aroma substances from the plant.
        </li>
        <li>
          <strong class="text-brand-green">No Residue</strong><br/>
          Cleaner process suitable for organic extracts where the extracts can be used directly in food or drinks.
        </li>
        <li>
          <strong class="text-brand-green">Mega Spectrum Oil by COMERG</strong><br/>
          “Beyond Full Spectrum — Experience the Complete Essence of the Plant.” Crafted through our revolutionary low-temperature, solvent-free extraction.
        </li>
      </ul>
    `
  },
  {
    id: 'fragrants',
    title: 'Fragrants',
    subtitle: 'Capturing the Essence',
    image: IMAGES.fragrants,
    description: `
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-bold text-white">Oil-bearing rose (Rosa damascena Mill)</h4>
          <p class="text-gray-300 mt-2">The composition of the extract is much more close to the natural scent of the rose itself, due to the high content of phenylethyl alcohol - the main component in a native odor. The specifics of the solvent preserve the availability of scent fixation (some waxes), thereby ensuring durability.</p>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white">Lavender (Lavandula Angustifolia Mill)</h4>
          <p class="text-gray-300 mt-2">Smells sweeter and less floral than the essential oil. The odor has a crisp herbal edge and a slight balsamic note. Calms the skin and also calms the mind as well. Valuable for a wide range of skin conditions from dry and oily to eczema and psoriasis.</p>
        </div>
      </div>
    `
  },
  {
    id: 'flavours',
    title: 'Flavours',
    subtitle: 'Pure Taste Profiles',
    image: IMAGES.flavours,
    description: `
      <div class="grid grid-cols-2 gap-4 mb-6 text-sm font-medium text-gray-200">
        <div>Anise</div>
        <div>Cardamom</div>
        <div>Cumin</div>
        <div>Coriander</div>
        <div>Dill seeds</div>
        <div>Ginger</div>
        <div>Nutmeg</div>
        <div>Rosemary</div>
      </div>
      <h3 class="text-xl font-bold text-brand-green mb-3">Properties of Extracts</h3>
      <p class="text-gray-300 mb-4">All extracts can replace traditional spice in quantities from 1:25 to 1:500 in different meat, dairy and vegetable products. They sharply reduce bacteriological contamination, prolong life, improve the flavor and appearance of the foods.</p>
      <ul class="list-disc pl-5 space-y-2 text-gray-300">
        <li>Preserved natural plant pH</li>
        <li>Preserved natural plant odor</li>
        <li>Preserved natural plant microflora</li>
        <li>Preserved natural plant strength</li>
      </ul>
    `
  },
  {
    id: 'emollients',
    title: 'Emollients',
    subtitle: 'Natural Skin Solutions',
    image: IMAGES.emollients,
    description: `
       <div class="space-y-6">
        <div>
          <h4 class="text-lg font-bold text-white">Grape seed (Vitis vinifera)</h4>
          <p class="text-gray-300 mt-2">Rich in essential fatty acids (Omega-3, Omega-6, and Omega-9) and vitamin E. The polyphenols and flavonoids found in this oil contain strong antioxidant activity.</p>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white">Dog rose seeds (Rosa canina L.)</h4>
          <p class="text-gray-300 mt-2">Rich source of linoleic and linolenic acid and vitamin C, helps the cell regeneration and improves the texture of the epidermis.</p>
        </div>
      </div>
    `
  },
  {
    id: 'fruit',
    title: 'Fruit Extracts',
    subtitle: 'Nutritional Powerhouses',
    image: IMAGES.fruit,
    description: `
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-bold text-white">Raspberry</h4>
          <p class="text-gray-300 mt-2">Fruit contains bioactive polyphenols including anthocyanins and ellagitannins with reported anti-inflammatory properties. Red raspberry extract possess cartilage-protecting and anti-inflammatory benefits.</p>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white">Blueberry</h4>
          <p class="text-gray-300 mt-2">The little blue balls are rich in anthocyanins. There are valuable organic acids, like caffeic, ferulic, coumaric, gallic and procatchuic. This little fruit softens dry skin, boosts your brain, and may even prevent cancer.</p>
        </div>
      </div>
    `
  }
];

export const TFE_FEATURES = [
  "TFEs are extremely inert and only decompose under extreme conditions, therefore leaving no residue.",
  "TFEs are produced in high purity on a large scale, and therefore are lower cost.",
  "Critical pressures and temperatures are much lower than carbon dioxide, allowing the construction of low pressure and low temperature apparatus.",
  "TFEs is a higher polar solvent than CO2 at lower pressures and the degradation of materials is much less."
];
