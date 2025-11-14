import { Buffer } from "buffer";

export default defineEventHandler(async (event) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "BeforeBearer 62e505dc0c75da6cfe79da111231c7f3bb4b");
  myHeaders.append("Nonce", "62e5384f2c9f34bb89a05a1d6d3816c1aaea");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    certificationId: "passcloud",
    certificationKey: "mmtPrIzvUkrEWEykE1r0",
    userId: "4Wo0/MJyy8P/gzD5Mb5q3Q==",
    fileManagementNumber: "21736252",
    fileOwnerId: "4Wo0/MJyy8P/gzD5Mb5q3Q==",
    callType: "W",
  });
  const response = await fetch("https://st-whfile1.dev-webhard.co.kr/file/download", {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  });

  const blob = await response.arrayBuffer();
  const headers = Object.fromEntries(response.headers.entries());

  // Content-Disposition 그대로 전달
  event.node.res.writeHead(response.status, headers);
  event.node.res.end(Buffer.from(blob));
});
