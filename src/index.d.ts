import { Control, LayerGroup, MapOptions, TileLayer } from 'leaflet';

export class MiniMap extends Control {
  constructor(layer: TileLayer | LayerGroup, options?: MiniMapOptions);

  changeLayer(layer: TileLayer | LayerGroup): void;
  minimize(): void;
  restore(): void;
  isMiniMapOpen(): boolean;
  disableInteractivity(): void;
  invalidateSize(): void;
}

export interface MiniMapOptions {
  position: 'bottomright' | 'topleft' | 'bottomleft' | 'topright'; // default: 'bottomright'
  toggleDisplay: boolean; // default: false
  zoomLevelOffset: number; // default: -5
  zoomLevelFixed: boolean; // default: false
  centerFixed: boolean; // default: false
  zoomAnimation: boolean; // default: false
  autoToggleDisplay: boolean; // default: false
  minimized: boolean; // default: false
  width: number; // default: 150
  height: number; // default: 150
  collapsedWidth: number; // default: 19
  collapsedHeight: number; // default: 19
  aimingRectOptions: AimingRectOptions;
  shadowRectOptions: ShadowRectOptions;
  hideText: 'Hide MiniMap';
  showText: 'Show MiniMap';
  mapOptions: MapOptions; // Allows definition / override of Leaflet map options.
}

interface AimingRectOptions {
  color: string; // default: '#ff7800'
  weight: number; // default: 1
  interactive: boolean; // default: false
}

interface ShadowRectOptions {
  color: string; // default: '#000000'
  weight: number; // default: 1
  interactive: boolean; // default: false
  opacity: number; // default: 0
  fillOpacity: number; // default: 0
}
