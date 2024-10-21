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
  id: number;
  gallerySetTitle: string;
  works: WorkData[];
}

const galleryData: SetData[] = [
  {
    id: 1,
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
    id: 2,
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
