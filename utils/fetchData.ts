interface FetchDataInterface extends Omit<RequestInit, "body"> {
  url: string;
  body?: {};
}

const defaultHeaders = {
  "Content-type": "application/json",
};

interface FetchDataReturn<T> {
  response?: T;
  status?: number;
  ok: boolean;
}

const fetchData = async <T = any>({
  url,
  method = "GET",
  headers = defaultHeaders,
  body,
  ...req
}: FetchDataInterface): Promise<FetchDataReturn<T>> => {
  try {
    const data = await fetch(`${process.env.API_URL}/${url}`, {
      body: JSON.stringify(body),
      method,
      headers,
      ...req,
    });
    const response: T = await data.json();
    return {
      response,
      status: data.status,
      ok: data.ok,
    };
  } catch (error: any) {
    return {
      ...error,
      ok: false,
    };
  }
};

export default fetchData;
