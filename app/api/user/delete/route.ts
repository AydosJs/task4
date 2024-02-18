// import prisma from "@/lib/prisma";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function DELETE(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { selectedId } = req.body;
//   console.log("selectedId", selectedId);
//   const result = await prisma.user.deleteMany({
//     where: {
//       id: {
//         in: selectedId,
//       },
//     },
//   });
//   res.json({ message: "Deleted successfully", result });
// }

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, res: Response) {
  const { selectedId } = await request.json();

  const result = await prisma.user.deleteMany({
    where: {
      id: {
        in: selectedId,
      },
    },
  });

  return NextResponse.json({
    message: "Sussed!",
    result,
  });
}
