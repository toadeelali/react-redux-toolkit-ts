// A mock function to mimic making an async request for data
export async function httpClient(processedApiData: any, processedDto:any, thunkAPI:{}) {
  return new Promise<{ data: any, status: number }>((resolve) =>
    setTimeout(() => resolve({ data: typeof processedDto.amount !== 'undefined' ? processedDto.amount+1: 'some data', status: 200 }), 500)
  );
}
