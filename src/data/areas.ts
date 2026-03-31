export type ServiceArea = {
  name: string;
  countyOrRegion: string;
  coverageNote: string;
  isCoreArea: boolean;
};

export const serviceAreas: ReadonlyArray<ServiceArea> = [
  {
    name: "Birmingham",
    countyOrRegion: "West Midlands",
    coverageNote: "Core operating direction (confirm exact postcodes before publishing guarantees).",
    isCoreArea: true,
  },
  {
    name: "Coventry",
    countyOrRegion: "West Midlands",
    coverageNote: "West Midlands coverage area; availability depends on schedule.",
    isCoreArea: true,
  },
  {
    name: "Dudley",
    countyOrRegion: "West Midlands",
    coverageNote: "West Midlands coverage area; availability depends on schedule.",
    isCoreArea: true,
  },
  {
    name: "Sandwell",
    countyOrRegion: "West Midlands",
    coverageNote: "West Midlands coverage area; availability depends on schedule.",
    isCoreArea: true,
  },
  {
    name: "Solihull",
    countyOrRegion: "West Midlands",
    coverageNote: "West Midlands coverage area; availability depends on schedule.",
    isCoreArea: true,
  },
  {
    name: "Walsall",
    countyOrRegion: "West Midlands",
    coverageNote: "West Midlands coverage area; availability depends on schedule.",
    isCoreArea: true,
  },
  {
    name: "Wolverhampton",
    countyOrRegion: "West Midlands",
    coverageNote: "West Midlands coverage area; availability depends on schedule.",
    isCoreArea: true,
  },
];
