import {
  Comment__factory,
  Log,
  Log__factory,
  Page__factory,
  Tag__factory,
} from "@site/contracts/types";
import deploys from "@site/contracts/deploys/polygon-mumbai/all.json";

import { Provider } from "@ethersproject/providers";
import { polygonProvider } from "./providers";

const network = process.env.NODE_ENV === "production" ? "matic" : "mumbai";

export const tagContract = Tag__factory.connect(deploys.Page, polygonProvider);

export const pageContract = (provider: Provider) => {
  return Page__factory.connect(deploys.Page, provider);
};

export const commentContract = (provider: Provider) => {
  return Comment__factory.connect(deploys.Page, provider);
};

export const logContract = (provider: Provider) => {
  return Log__factory.connect(deploys.Page, provider);
};
