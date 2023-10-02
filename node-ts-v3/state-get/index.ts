import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
  state: object,
): Promise<void> {
  context.res = {
    body: state,
  };
};

export default httpTrigger;
