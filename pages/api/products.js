import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function products(req, res) {
  const { accessToken } = await getAccessToken(req, res, {
    scopes: ["read:messages"],
  });
  const response = await fetch(`${process.env.API_ENDPOINT}/api/private`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const products = await response.json();
  res.status(200).json(products);
});
