# Leaflet.MiniMap

Leaflet.MiniMap is a mini map control that you can drop into your leaflet map, and it will create a small map in the corner which shows the same as the main map with a set zoom offset. (By default it is `-5`.)

[![npm version](https://badge.fury.io/js/leaflet-control-mini-map.svg)](https://www.npmjs.com/package/leaflet-control-mini-map)

## Using the MiniMap control

The control can be inserted in two lines: First you have to construct a layer for it to use, and then you create and attach the minimap control. Do not reuse the layer you added to the main map. Alternatively, you can pass in a LayerGroup with multiple layers (for example with overlays or suitably themed markers). Marker layers can't be reused either.

From the [demo](https://abdulk1.github.io/Leaflet.MiniMap/):

```js
var tileLayer = new L.TileLayer(tileLayerUrl, { minZoom: 0, maxZoom: 13 });
var miniMap = new L.Control.MiniMap(tileLayer).addTo(map);
```

As the minimap control inherits from leaflet's control, positioning is handled automatically by leaflet. However, you can still style the minimap and set its size by modifying the css file.

### Example Usage

```js
import { MiniMap } from 'leaflet-control-mini-map';
new MiniMap(layer, options).addTo(map);
```

## Available Methods

`changeLayer`: Swaps out the minimap layer for the one provided.

`minimize`: Swaps out the minimap layer for the one provided.

`restore`: Swaps out the minimap layer for the one provided.

`isMiniMapOpen`: Swaps out the minimap layer for the one provided.

`disableInteractivity`: Swaps out the minimap layer for the one provided.

`invalidateSize`: Swaps out the minimap layer for the one provided.

## Available Options

The mini map uses options which can be set in the same way as other leaflet options, and these are the available options:

`position`: The standard Leaflet.Control position parameter, used like all the other controls. Defaults to 'bottomright'.

`width`: The width of the minimap in pixels. Defaults to 150.

`height`: The height of the minimap in pixels. Defaults to 150.

`collapsedWidth`: The width of the toggle marker and the minimap when collapsed, in pixels. Defaults to 19.

`collapsedHeight`: The height of the toggle marker and the minimap when collapsed, in pixels. Defaults to 19.

`zoomLevelOffset`: The offset applied to the zoom in the minimap compared to the zoom of the main map. Can be positive or negative, defaults to -5.

`zoomLevelFixed`: Overrides the offset to apply a fixed zoom level to the minimap regardless of the main map zoom. Set it to any valid zoom level, if unset `zoomLevelOffset` is used instead.

`centerFixed`: Applies a fixed position to the minimap regardless of the main map's view / position. Prevents panning the minimap, but does allow zooming (both in the minimap and the main map). If the minimap is zoomed, it will always zoom around the `centerFixed` point. You can pass in a LatLng-equivalent object. Defaults to false.

`zoomAnimation`: Sets whether the minimap should have an animated zoom. (Will cause it to lag a bit after the movement of the main map.) Defaults to false.

`toggleDisplay`: Sets whether the minimap should have a button to minimise it. Defaults to false.

`autoToggleDisplay`: Sets whether the minimap should hide automatically if the parent map bounds does not fit within the minimap bounds. Especially useful when 'zoomLevelFixed' is set.

`minimized`: Sets whether the minimap should start in a minimized position.

`aimingRectOptions`: Sets the style of the aiming rectangle by passing in a [Path.Options object](https://leafletjs.com/reference.html#path). (Interactive will always be overridden and set to false.)

`shadowRectOptions`: Sets the style of the aiming shadow rectangle by passing in a [Path.Options object](https://leafletjs.com/reference.html#path). (Interactive will always be overridden and set to false.)

`hideText`: The text to be displayed as Tooltip when hovering over the toggle button on the MiniMap and it is visible. Defaults to 'Hide MiniMap'

`showText`: The text to be displayed as Tooltip when hovering over the toggle button on the MiniMap and it is hidden. Defaults to 'Show MiniMap'

`mapOptions`: Sets Leaflet options for the MiniMap map. It does not override the MiniMap default map options but extends them.

### Available Events

The MiniMap fires `minimize`, `restore` events and `toggle` for both.
