import { IMAGE_SRC } from "../../../config";

export interface WorkData {
  id: string;
  title: string;
  src: string;
  technique: string;
  dimensions: string;
  date: string;
}

interface SetData {
  id: string;
  gallerySetTitle: string;
  description_slug?: string;
  description?: string[];
  description_imgs?: string[];
  works: WorkData[];
}

const galleryData: SetData[] = [
  {
    id: "empty-vessel",
    gallerySetTitle: "Empty Vessel",
    description_slug:
      "The “Empty Vessel” series represents a continuation and a new stage in the artistic path that began thirteen years ago with intuitive landscape drawings...",
    description: [
      "The “Empty Vessel” series represents a continuation and a new stage in the artistic path that began thirteen years ago with intuitive landscape drawings.",
      "The concept of the series draws on the metaphor through which Carl Gustav Jung understood the notion of the archetype. In his view, the archetype resembled an empty form - a vessel of imaginative potentiality, a kind of psychic muscle that precedes the creation of meaning and order.",
      "Emptiness reveals itself as a positively creative category, much like for the Desert Fathers who sought spiritual renewal precisely in desolate places.",
      "In the series, the “empty vessels” are geometric forms cut out in passe-partout and then filled with more or less deliberately composed drawings. These works are primarily products of intuition - the result of a kind of impulse in which, nevertheless, structures and a style developed over years of creative practice play an important role.",
    ],
    description_imgs: [
      "gallery/empty_vessel/description/Radoslaw-Kurzeja-empty-vessel-1.webp",
      "gallery/empty_vessel/description/Radoslaw-Kurzeja-empty-vessel-2.webp",
      "gallery/empty_vessel/description/Radoslaw-Kurzeja-empty-vessel-3.webp",
      "gallery/empty_vessel/description/Radoslaw-Kurzeja-empty-vessel-4.webp",
      "gallery/empty_vessel/description/Radoslaw-Kurzeja-empty-vessel-5.webp",
      "gallery/empty_vessel/description/Radoslaw-Kurzeja-empty-vessel-6.webp",
    ],
    works: [
      {
        id: "pierwszy",
        title: "Pierwszy / The first",
        src: IMAGE_SRC("gallery/empty_vessel/Pierwszy.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "23 x 17,5 cm",
        date: "2023",
      },
      {
        id: "przyblizenia",
        title: "Przybliżenia / Approaches",
        src: IMAGE_SRC("gallery/empty_vessel/Przyblizenia.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "20 x 28 cm",
        date: "2023",
      },
      {
        id: "naczynia",
        title: "Naczynia / Vessels",
        src: IMAGE_SRC("gallery/empty_vessel/Naczynia.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "21 x 29,5 cm",
        date: "2023",
      },
      {
        id: "umiar",
        title: "Umiar / Mildness",
        src: IMAGE_SRC("gallery/empty_vessel/Umiar.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "28 x 35,5 cm",
        date: "2023",
      },
      {
        id: "kierunek",
        title: "Kierunek / Direction",
        src: IMAGE_SRC("gallery/empty_vessel/Kierunek.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "38 x 28 cm",
        date: "2023",
      },
      {
        id: "w-objeciach",
        title: "W objęciach / In embrace",
        src: IMAGE_SRC("gallery/empty_vessel/W_objeciach.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "25,5 x 30,5 cm",
        date: "2023",
      },
      {
        id: "analogia",
        title: "Analogia / Analogy",
        src: IMAGE_SRC("gallery/empty_vessel/Analogia.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "23 x 17 cm",
        date: "2023",
      },
      {
        id: "inna-pociecha",
        title: "Inna Pociecha / Other Solace",
        src: IMAGE_SRC("gallery/empty_vessel/Inna_Pociecha.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "25 x 48 cm",
        date: "2023",
      },
      {
        id: "modlitwa-o-zdrowie",
        title: "Modlitwa o zdrowie dla Przemka / Prayer for Przemek's health",
        src: IMAGE_SRC(
          "gallery/empty_vessel/Modlitwa_o_zdrowie_dla_Przemka.webp"
        ),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "15 x 20 cm",
        date: "2023",
      },
      {
        id: "oblok-niewiedzy",
        title:
          "Obłok Niewiedzy albo Modlitwa o uzdrowienie dla Przemka / Cloud of Unknow or Prayer for Przemek's healing",
        src: IMAGE_SRC("gallery/empty_vessel/Oblok_Niewiedzy.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "25 x 20 cm",
        date: "2023",
      },
      {
        id: "modlitwa-za-przemka",
        title: "Modlitwa za Przemka / Prayer for Przemek",
        src: IMAGE_SRC("gallery/empty_vessel/Modlitwa_za_Przemka.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "38 x 30,5 cm",
        date: "2024",
      },
      {
        id: "to-ja",
        title: "To ja, nie bójcie się / It is me, do not be afraid",
        src: IMAGE_SRC("gallery/empty_vessel/To_ja_nie_bojcie_sie.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "20 x 27,5 cm",
        date: "2024",
      },
      {
        id: "analogia-druga",
        title: "Analogia Druga / The Second Analogy",
        src: IMAGE_SRC("gallery/empty_vessel/Analogia_Druga.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "20 x 25 cm",
        date: "2024",
      },
      {
        id: "analogia-trzecia",
        title: "Analogia Trzecia / The Third Analogy",
        src: IMAGE_SRC("gallery/empty_vessel/Analogia_Trzecia.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "26 x 32 cm",
        date: "2024",
      },
      {
        id: "obiekt",
        title: "Obiekt / Object",
        src: IMAGE_SRC("gallery/empty_vessel/Obiekt.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "35 x 28 cm",
        date: "2024",
      },
      {
        id: "o-potyczkach-i",
        title: "O potyczkach I / About clash I",
        src: IMAGE_SRC("gallery/empty_vessel/O_potyczkach_1.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "21 x 29,5 cm",
        date: "2024",
      },
      {
        id: "o-potyczkach-ii",
        title: "O potyczkach II / About clash II",
        src: IMAGE_SRC("gallery/empty_vessel/O_potyczkach_2.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "21 x 29,5 cm",
        date: "2024",
      },
      {
        id: "sierpniowy",
        title: "Sierpniowy / August",
        src: IMAGE_SRC("gallery/empty_vessel/Sierpniowy.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "15 x 10 cm",
        date: "2024",
      },
      {
        id: "niewiadomy",
        title: "Niewiadomy / Unknown",
        src: IMAGE_SRC("gallery/empty_vessel/Niewiadomy.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "30,5 x 25,5 cm",
        date: "2024",
      },
      {
        id: "oblok-niewiedzy-inny",
        title: "Obłok Niewiedzy. Inny / Cloud of Unknow. Other",
        src: IMAGE_SRC("gallery/empty_vessel/Oblok_Niewiedzy_Inny.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "25 x 37 cm",
        date: "2024",
      },
      {
        id: "adwent",
        title: "Adwent / Advent",
        src: IMAGE_SRC("gallery/empty_vessel/Adwent.webp"),
        technique:
          "fine-liner on bristol, passe-partout cut from watercolor paper, vintage frame",
        dimensions: "12 x 12 cm",
        date: "2024",
      },
    ],
  },
  {
    id: "drawings",
    gallerySetTitle: "Drawings",
    works: [
      {
        id: "na-niebie-czesc-druga",
        title: "Na niebie, część druga / At the sky, part two",
        src: IMAGE_SRC("gallery/drawings/Na_niebie_czesc_druga.jpg"),
        technique: "ink on paper",
        dimensions: "50 x 35 cm",
        date: "2021",
      },
      {
        id: "dino-buzzati",
        title: "Dino Buzzati w górach / Dino Buzzati in the mountains",
        src: IMAGE_SRC("gallery/drawings/Dino_Buzzati.jpg"),
        technique: "ink on paper",
        dimensions: "50 x 70 cm",
        date: "2019 - 2021",
      },
      {
        id: "2068",
        title:
          "2068 albo wariacja na temat Mnicha / 2068 or a variation on the Mnich mountain",
        src: IMAGE_SRC("gallery/drawings/2068.jpg"),
        technique: "ink on paper",
        dimensions: "50 x 40 cm",
        date: "2021",
      },
      {
        id: "krolowa-niebieska-widok-z-oddali",
        title:
          "Królowa Niebieska widok z oddali / Queen of Heaven view from a distance",
        src: IMAGE_SRC("gallery/drawings/Krolowa_Niebieska_widok_z_oddali.jpg"),
        technique: "ink on paper",
        dimensions: "30 x 40 cm",
        date: "2019",
      },
      {
        id: "krolowa-niebieska",
        title: "Królowa Niebieska / Queen of Heaven",
        src: IMAGE_SRC("gallery/drawings/Krolowa_Niebieska.jpg"),
        technique: "ink on paper",
        dimensions: "35 x 25 cm",
        date: "2018",
      },
      {
        id: "wschod",
        title: "Wschód / Sunrise",
        src: IMAGE_SRC("gallery/drawings/Wschod.jpg"),
        technique: "ink on paper",
        dimensions: "35 x 50 cm",
        date: "2018",
      },
      {
        id: "detal",
        title: "Detal / Detail",
        src: IMAGE_SRC("gallery/drawings/Detal.jpg"),
        technique: "ink on paper",
        dimensions: "35 x 25 cm",
        date: "2018",
      },
      {
        id: "nocny-pejzaz",
        title: "Nocny pejzaż / Night landscape",
        src: IMAGE_SRC("gallery/drawings/Nocny_pejzaz.jpg"),
        technique: "ink on paper",
        dimensions: "50 x 70 cm",
        date: "2017",
      },
      {
        id: "maly-pejzaz-2",
        title: "Mały pejzaż II / Small landscape II",
        src: IMAGE_SRC("gallery/drawings/Maly_pejzaz_II.jpg"),
        technique: "ink on paper",
        dimensions: "21 x 30 cm",
        date: "2017",
      },
      {
        id: "struktura",
        title: "Struktura / Structure",
        src: IMAGE_SRC("gallery/drawings/Struktura.jpg"),
        technique: "ink on paper",
        dimensions: "25 x 35 cm",
        date: "2016",
      },
      {
        id: "maly-pejzaz-1",
        title: "Mały pejzaż I / Small landscape I",
        src: IMAGE_SRC("gallery/drawings/Maly_pejzaz_I.jpg"),
        technique: "ink on paper",
        dimensions: "21 x 30 cm",
        date: "2017",
      },
      {
        id: "maly-pejzaz-3",
        title: "Mały pejzaż III / Small landscape III",
        src: IMAGE_SRC("gallery/drawings/Maly_pejzaz_III.jpg"),
        technique: "ink on paper",
        dimensions: "21 x 30 cm",
        date: "2017",
      },
      {
        id: "lato-17",
        title: "Lato 17 / Summer 17",
        src: IMAGE_SRC("gallery/drawings/Lato_17.jpg"),
        technique: "ink on paper",
        dimensions: "35 x 50 cm",
        date: "2017",
      },
      {
        id: "pustelnia-sw-hieronima",
        title: "Pustelnia Świętego Hieronima / Saint Jerome's Hermitage",
        src: IMAGE_SRC("gallery/drawings/Pustelnia_swietego_Hieronima.jpg"),
        technique: "ink on paper",
        dimensions: "50 x 70 cm",
        date: "2015",
      },
      {
        id: "patrz-jaka-gora",
        title: "Patrz jaka góra / Look what a mountain",
        src: IMAGE_SRC("gallery/drawings/Patrz_jaka_gora.jpg"),
        technique: "ink on paper",
        dimensions: "50 x 70 cm",
        date: "2016",
      },
      {
        id: "kosmogonia",
        title: "Kosmogonia / Cosmogony",
        src: IMAGE_SRC("gallery/drawings/Kosmogonia.jpg"),
        technique: "ink on paper",
        dimensions: "35 x 50 cm",
        date: "2015",
      },
      {
        id: "zapadla-juz-noc",
        title: "Zapadła już noc / Night has already fallen",
        src: IMAGE_SRC("gallery/drawings/Zapadla_juz_noc.jpg"),
        technique: "ink on paper",
        dimensions: "35 x 50 cm",
        date: "2015",
      },
      {
        id: "zwidywanie",
        title: "Zwidywanie / Delusion",
        src: IMAGE_SRC("gallery/drawings/Zwidywanie.jpg"),
        technique: "ink on paper",
        dimensions: "35 x 25 cm",
        date: "2016",
      },
    ],
  },
  {
    id: "watercolor",
    gallerySetTitle: "Watercolor",
    works: [
      {
        id: "na-niebie",
        title: "Na niebie / At the sky",
        src: IMAGE_SRC("gallery/watercolor/Na_niebie.jpg"),
        technique: "gouache, watercolor paper",
        dimensions: "50 x 35 cm",
        date: "2021",
      },
      {
        id: "wulkan",
        title: "Wulkan / Volcano",
        src: IMAGE_SRC("gallery/watercolor/Wulkan.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 70 cm",
        date: "2019",
      },
      {
        id: "pejzaz",
        title: "Pejzaż / Landscape",
        src: IMAGE_SRC("gallery/watercolor/Pejzaz.jpg"),
        technique: "gouache, ink on paper",
        dimensions: "23 x 20 cm",
        date: "2021",
      },
      {
        id: "lato-19",
        title: "Lato 19 / Summer 19",
        src: IMAGE_SRC("gallery/watercolor/Lato_19.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "40 x 30 cm",
        date: "2019",
      },
      {
        id: "dom",
        title: "Dom / House",
        src: IMAGE_SRC("gallery/watercolor/Dom.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 50 cm",
        date: "2019",
      },
      {
        id: "pelnia",
        title: "Pełnia / Plenilune",
        src: IMAGE_SRC("gallery/watercolor/Pelnia.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "dziennik-z-podrozy",
        title:
          "Dziennik z podróży. Podróż druga / Travel diary. Second journey",
        src: IMAGE_SRC("gallery/watercolor/Dziennik_z_podrozy.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 50 cm",
        date: "2017",
      },
      {
        id: "baranek-bozy",
        title: "Baranek Boży / Lamb of God",
        src: IMAGE_SRC("gallery/watercolor/Baranek_Bozy.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "carpenter",
        title: "Carpenter",
        src: IMAGE_SRC("gallery/watercolor/Carpenter.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "widok",
        title: "Widok / View",
        src: IMAGE_SRC("gallery/watercolor/Widok.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "widok2",
        title: "Widok II / View II",
        src: IMAGE_SRC("gallery/watercolor/WidokII.jpg"),
        technique: "watercolor, ink on paper",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
    ],
  },
];

export default galleryData;
