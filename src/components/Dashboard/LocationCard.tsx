import L from "leaflet";
import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const mapMarkerIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

type LocationCardProps = {
  location: {
    formattedAddress: string;
    city: string;
    state: string;
    formattedZipCode: string;
    latitude: number;
    longitude: number;
  };
  contacts: {
    formattedPhone?: string;
    email?: string;
    hasContactInfo?: boolean;
  };
};

export function LocationCard({
  location,
  contacts,
}: Readonly<LocationCardProps>) {
  const position: [number, number] = [location.latitude, location.longitude];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-none bg-linear-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Localização
            </span>
            <span className="text-lg font-semibold text-white sm:text-xl">
              {location.city} / {location.state}
            </span>
            <span className="text-xs text-zinc-400">
              {location.formattedZipCode}
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom
              className="h-72 w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Circle
                center={position}
                radius={700}
                pathOptions={{
                  color: "#f3b870",
                  fillColor: "#f3b870",
                  fillOpacity: 0.15,
                }}
              />
              <Marker position={position} icon={mapMarkerIcon}>
                <Popup>
                  <div className="text-xs text-zinc-900">
                    {location.formattedAddress}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-none bg-zinc-950 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                Endereço completo
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {location.formattedAddress}
              </p>
            </div>
            <div className="rounded-xl border border-none bg-zinc-950 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                Coordenadas
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {location.latitude}, {location.longitude}
              </p>
            </div>
            <div className="rounded-xl border border-none bg-zinc-950 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                Contatos
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm font-semibold text-white">
                {contacts.formattedPhone ? (
                  <span>{contacts.formattedPhone}</span>
                ) : null}

                {contacts.formattedPhone && contacts.email ? (
                  <span className="text-white/50">•</span>
                ) : null}

                {contacts.email ? <span>{contacts.email}</span> : null}

                {!contacts.formattedPhone && !contacts.email ? (
                  <span className="text-white/60">Sem contato disponivel</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
