var config = {
  style: "mapbox://styles/mapbox/light-v11",
  accessToken:
    "pk.eyJ1Ijoia2luZy0tbHVjeSIsImEiOiJjbHh0dXV0aHMwNXB4Mm1vZnNsZHkzdDF1In0.Kt3KHw5id8X4J7d0PO_tBw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  projection: "equirectangular",
  inset: true,
  theme: "dark",
  use3dTerrain: false, //true for 3D maps.
  auto: false,
  title: '"From the River to the Sea" explained in one map and two charts',
  subtitle: "Test map visualization for AFR",
  byline: "Article by Emma Conners, Map Visualization by Lucy King",
  footer:
    'Full and Original article is <a href="https://www.afr.com/world/middle-east/river-to-the-sea-explained-in-one-map-and-two-charts-20240522-p5jfqo" target="_blank">here</a>.',
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      description:
        "The almost biblical ring of &ldquo;from the river to the sea&rdquo; is evocative of the Southern-Levant region it refers to. Politically, it's in the Middle East.",
      location: {
        center: [35.18632, 25.82284],
        zoom: 3,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      //   callback: "firstHighlight",
      onChapterEnter: [
        {
          callback: "hidethirdHighlight",
        },
      ],
      onChapterExit: [
        {
          callback: "hideFirstHighlight",
        },
      ],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      description: "Geographically, it belongs to West Asia.",
      location: {
        center: [39.93636, 26.37397],
        zoom: 4.4,
        pitch: 45.0,
        bearing: 0.0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "secondHighlight",
      onChapterEnter: [],
      onChapterExit: [
        {
          callback: "hideSecondHighlight",
        },
      ],
    },
    {
      id: "third-identifier",
      alignment: "right",
      hidden: false,
      description:
        "It extends from the Mediterranean to the River Jordan that runs for 251 kilometres through the Sea of Galilee to the Dead Sea.",
      location: {
        center: [35.21196, 31.19424],
        zoom: 7.08,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "thirdHighlight",
      onChapterEnter: [],
      onChapterExit: [
        {
          callback: "hidethirdHighlight",
        },
      ],
    },
    {
      id: "fourth-chapter",
      alignment: "left",
      hidden: false,
      description: "It's surrounded by Jordan, Lebanon, Syria and Egypt.",
      location: {
        center: [35.21196, 31.19424],
        zoom: 4.5,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "fourthHighlight",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
