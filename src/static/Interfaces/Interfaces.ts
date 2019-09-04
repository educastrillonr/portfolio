export interface TileProps {
  featured: ITile[];
  rest: ITile[];
}

export interface ITile {
  demo: string;
  code: string;
  tags: string[];
  img: string;
  size?: number;
}
