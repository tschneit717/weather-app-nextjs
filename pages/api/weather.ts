// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const exclude = ['minutely, alerts'];

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${req.body.lat}&lon=${
      req.body.lon
    }&exclude=${exclude.join(',')}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );
  return response;
};

export default handler;
