"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const subscribe = () => () => {};
const getOrigin = () => window.location.origin;
const getServerOrigin = () => "";

export default function AddressBar() {
  const pathname = usePathname();
  const origin = useSyncExternalStore(subscribe, getOrigin, getServerOrigin);

  return (
    <div className="addressbar">
      <span className="addressbar-label">Address</span>
      <span className="addressbar-field">
        {origin}
        {pathname}
      </span>
    </div>
  );
}
