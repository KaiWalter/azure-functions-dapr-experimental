import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  context.log(req.body);

  context.bindings.state = {
    value: req.body,
  };
};

export default httpTrigger;
