import { ProductData } from "@/typings";
import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Params) {
  if (!id) {
    return NextResponse.next(
      new Response("Missing product ID", { status: 400 })
    );
  }

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        process.env.OXYLABS_USERNAME + ":" + process.env.OXYLABS_PASSWORD
      ).toString("base64")}`,
    },
    cache: "no-store",
    body: JSON.stringify({
      source: "google_shopping_product",
      domain: "com",
      query: id,
      parse: true,
    }),
  });

  const data = await response.json();

  if (data.results.length == 0) {
    return NextResponse.next(
      new Response("No product Found", {
        status: 404,
      })
    );
  }
  const productData: ProductData = data.results[0];

  return NextResponse.json(productData);
}
