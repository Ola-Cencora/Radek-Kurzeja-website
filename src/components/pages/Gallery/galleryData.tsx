export interface WorkData {
  id: string;
  title: string;
  src: string;
  technique: string;
  dimensions: string;
  date: string;
}

interface SetData {
  setTitle: string;
  works: WorkData[];
}

const galleryData: SetData[] = [
  {
    setTitle: "Landscapes",
    works: [
      {
        id: "lato-17",
        title: "Lato 17",
        src: `${process.env.PUBLIC_URL}/images/gallery/landscapes/Lato_17.jpg`,
        technique: "cienkopis na brystolu",
        dimensions: "50 x 35 cm",
        date: "2017",
      },
      {
        id: "nocny-pejzaz",
        title: "Nocny pejzaż",
        src: `${process.env.PUBLIC_URL}/images/gallery/landscapes/Nocny_pejzaz.jpg`,
        technique: "cienkopis na brystolu",
        dimensions: "50 x 70 cm",
        date: "2017",
      },
      {
        id: "patrz-jaka-gora",
        title: "Patrz jaka góra",
        src: `${process.env.PUBLIC_URL}/images/gallery/landscapes/Patrz_jaka_gora.jpg`,
        technique: "cienkopis na brystolu",
        dimensions: "50 x 70 cm",
        date: "2016",
      },
      {
        id: "pustelnia-sw-hieronima",
        title: "Pustelnia św. Hieronima",
        src: `${process.env.PUBLIC_URL}/images/gallery/landscapes/Pustelnia_sw_Hieronima.jpg`,
        technique: "cienkopis na brystolu",
        dimensions: "50 x 70 cm",
        date: "2015",
      },
      {
        id: "struktura",
        title: "Struktura",
        src: `${process.env.PUBLIC_URL}/images/gallery/landscapes/Struktura.jpg`,
        technique: "cienkopis na brystolu",
        dimensions: "35 x 25 cm",
        date: "2016",
      },
    ],
  },
  {
    setTitle: "Watercolour",
    works: [
      {
        id: "carpenter",
        title: "Carpenter",
        src: `${process.env.PUBLIC_URL}/images/gallery/watercolour/Carpenter.jpg`,
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "dom",
        title: "Dom",
        src: `${process.env.PUBLIC_URL}/images/gallery/watercolour/Dom.jpg`,
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018-2019",
      },
      {
        id: "pelnia",
        title: "Pełnia",
        src: `${process.env.PUBLIC_URL}/images/gallery/watercolour/Pelnia.jpg`,
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "widok",
        title: "Widok",
        src: `${process.env.PUBLIC_URL}/images/gallery/watercolour/Widok.jpg`,
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 50 cm",
        date: "2018",
      },
      {
        id: "wulkan",
        title: "Wulkan",
        src: `${process.env.PUBLIC_URL}/images/gallery/watercolour/Wulkan.jpg`,
        technique: "akwarela, cienkopis, brystol",
        dimensions: "50 x 70 cm",
        date: "2017",
      },
    ],
  },
];

export default galleryData;
