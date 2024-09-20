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
    gallerySetTitle: "Landscapes",
    works: [
      {
        id: "lato-17",
        title: "Lato 17",
        src: IMAGE_SRC("gallery/landscapes/Lato_17.jpg"),
        technique: "cienkopis na brystolu",
        dimensions: "50 x 35 cm",
        date: "2017",
      },
      {
        id: "nocny-pejzaz",
        title: "Nocny pejzaż",
        src: IMAGE_SRC("gallery/landscapes/Nocny_pejzaz.jpg"),
        technique: "cienkopis na brystolu",
        dimensions: "50 x 70 cm",
        date: "2017",
      },
      {
        id: "patrz-jaka-gora",
        title: "Patrz jaka góra",
        src: IMAGE_SRC("gallery/landscapes/Patrz_jaka_gora.jpg"),
        technique: "cienkopis na brystolu",
        dimensions: "50 x 70 cm",
        date: "2016",
      },
      {
        id: "pustelnia-sw-hieronima",
        title: "Pustelnia św. Hieronima",
        src: IMAGE_SRC("gallery/landscapes/Pustelnia_sw_Hieronima.jpg"),
        technique: "cienkopis na brystolu",
        dimensions: "50 x 70 cm",
        date: "2015",
      },
      {
        id: "struktura",
        title: "Struktura",
        src: IMAGE_SRC("gallery/landscapes/Struktura.jpg"),
        technique: "cienkopis na brystolu",
        dimensions: "35 x 25 cm",
        date: "2016",
      },
    ],
  },
  {
    id: 2,
    gallerySetTitle: "Watercolour",
    works: [
      {
        id: "carpenter",
        title: "Carpenter",
        src: IMAGE_SRC("gallery/watercolour/Carpenter.jpg"),
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "dom",
        title: "Dom",
        src: IMAGE_SRC("gallery/watercolour/Dom.jpg"),
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018-2019",
      },
      {
        id: "pelnia",
        title: "Pełnia",
        src: IMAGE_SRC("gallery/watercolour/Pelnia.jpg"),
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "widok",
        title: "Widok",
        src: IMAGE_SRC("gallery/watercolour/Widok.jpg"),
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "wulkan",
        title: "Wulkan",
        src: IMAGE_SRC("gallery/watercolour/Wulkan.jpg"),
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 70 cm",
        date: "2017",
      },
    ],
  },
];

export default galleryData;
