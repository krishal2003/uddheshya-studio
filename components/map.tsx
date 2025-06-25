"use client";

import { Card } from "@/components/ui/card";

export default function Map() {
  return (
    <Card className="overflow-hidden">
      <iframe
        width="100%"
        height="400"
        loading="lazy"
        src="https://www.google.com/maps?q=27.685651401972713,85.31258965767097&z=16&output=embed"
        style={{ border: "none" }}
        title="Embedded Google Map"
      ></iframe>
    </Card>
  );
}
