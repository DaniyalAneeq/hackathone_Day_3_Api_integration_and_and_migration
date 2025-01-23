import { shipEngine } from "@/helper/shipEngine";
import { NextRequest } from "next/server";

export async function GET() {
  return new Response(JSON.stringify({ message: "Shipengine Testing" }));
}

export async function POST(request: NextRequest) {
  const { shipToAddress, packages } = await request.json();

  try {
    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "Daniyal",
          phone: "03091020816",
          addressLine1: "Address1",
          addressLine2: "Address2",
          cityLocality: "Karachi",
          stateProvince: "IL",
          postalCode: "12345",
          countryCode: "PK",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPMENT_FIRST_COURIER || "",
          process.env.SHIPMENT_SECOND_COURIER || "",
          process.env.SHIPMENT_THIRD_COURIER || "",
          process.env.SHIPMENT_FOURTH_COURIER || "",
        ].filter(Boolean),
      },
    });

    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error" }));
  }
}
