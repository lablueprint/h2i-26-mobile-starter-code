export type HelloResponse = {
  message: string;
};

export async function fetchHelloMessage(): Promise<HelloResponse> {
  await new Promise((resolve) => setTimeout(resolve, 750));

  return {
    message:
      "Hello from the dummy backend! This is the mobile starter response.",
  };
}
