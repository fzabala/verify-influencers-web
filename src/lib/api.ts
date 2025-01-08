import qs from "qs";

export const API_URL = `${
  process.env.NEXT_PUBLIC_API_URL || "http://0.0.0.0:3300/api/v1"
}`;

type UrlParamType = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | string[]
    | number[]
    | UrlParamType
    | { [key: string]: UrlParamType };
};

export const fetchAPI: <T>(
  path: string,
  urlParams?: UrlParamType,
  options?: UrlParamType
) => Promise<T> = async (path: string, urlParams = {}, options = {}) => {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    const queryString = qs.stringify(urlParams);
    const requestUrl = `${API_URL}${path}${
      queryString ? `?${queryString}` : ""
    }`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};