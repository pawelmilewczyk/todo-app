interface FetchDataInterface extends Omit<RequestInit, "body"> {
  url: string;
  body?: {};
}

const defaultHeaders = {
  "Content-type": "application/json",
};

interface FetchDataReturn<T> {
  response?: T;
  message?: string;
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
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api${url}`, {
      body: JSON.stringify(body),
      method,
      headers,
      ...req,
    });
    const response = await data.json();

    return {
      response,
      message: response?.message,
      status: data.status,
      ok: data.ok,
    };
  } catch (error: any) {
    console.log({ error });
    return {
      ...error,
      ok: false,
    };
  }
};

export default fetchData;
