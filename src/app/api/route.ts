// import { NextApiRequest, NextApiResponse } from "next";

// // Exported function to handle GET requests
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     // Handle GET request
//     res.status(200).json({ message: "Hello from GET handler!" });
//   } else {
//     // Handle other HTTP methods
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import { NextApiRequest, NextApiResponse } from "next";

// export async function GET(request: NextApiRequest, response: NextApiResponse) {
//   // Handle GET request
//   response.status(200).json({ message: "Hello from GET handler!" });
// }

// export async function POST(request: NextApiRequest, response: NextApiResponse) {
//   response.status(405).json({ error: `Method ${request.method} Not Allowed` });
// }

// export async function PUT(request: NextApiRequest, response: NextApiResponse) {
//   response.status(405).json({ error: `Method ${request.method} Not Allowed` });
// }

// export async function PATCH(
//   request: NextApiRequest,
//   response: NextApiResponse
// ) {
//   response.status(405).json({ error: `Method ${request.method} Not Allowed` });
// }

// export async function DELETE(
//   request: NextApiRequest,
//   response: NextApiResponse
// ) {
//   response.status(405).json({ error: `Method ${request.method} Not Allowed` });
// }

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default function GET() {
  return new NextResponse("Hello from Next.js API!");
  return NextResponse.json({ he: "hee" });
  //   if (req.method === "GET") {
  //     res.status(200).json({ message: "Hello from GET handler!" });
  //   } else {
  //     res.setHeader("Allow", ["GET"]);
  //     res.status(405).end(`Method ${req.method} Not Allowed`);
  //   }
}
