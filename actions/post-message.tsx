import { Contact } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/messages`;

const postMessage = async (
  data: Contact
): Promise<{ success: boolean; message: string }> => {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Failed to send form data: ${res.statusText}`);
  }

  const responseData = await res.json();

  return responseData;
};

export default postMessage;
