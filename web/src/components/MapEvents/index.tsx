import { LeafletMouseEvent, LocationEvent, Map } from 'leaflet';
import React from 'react';
import { useMapEvents } from 'react-leaflet';

interface MapEventsParams {
  onClick: (event: LeafletMouseEvent, map: Map) => void,
  onLocationFound?: (location: LocationEvent) => void
}

export const MapEvents: React.FC<MapEventsParams> = ({ onClick, onLocationFound }) => {
  const map = useMapEvents({
    click: (e) => onClick(e, map),
    locationfound: onLocationFound,
  })
  return null
}