"use server";

import { rootUrl } from "@/utils/domains";

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export interface IResponse {
  statusCode: number;
  responseData: any;
}

const buildUrl = (
  endpoint: string,
  params?: Record<string, string>
): string => {
  const url = new URL(`${rootUrl}${endpoint}`);
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }
  return url.toString();
};

export async function fetchApiAction(endpoint: string, options?: FetchOptions) : Promise<IResponse | undefined> {
  const { params, ...fetchOptions } = options || {};
  const url = buildUrl(endpoint, params);

  try {
    const response = await fetch(url, fetchOptions);
    return {
      statusCode: response.status,
      responseData: await response.json()
    };
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
