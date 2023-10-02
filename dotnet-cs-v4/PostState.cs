using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Functions.Worker.Extensions.Dapr;

namespace dotnet_cs_v4
{
    public static class PostState
    {
        [Function(nameof(PostState))]
        [DaprStateOutput("statestore", Key = "{key}")]
        public static string Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = "state/{key}")] HttpRequestData req,
            FunctionContext functionContext)
        {
            var log = functionContext.GetLogger(nameof(PostState));

            string requestBody = new StreamReader(req.Body).ReadToEnd();

            log.LogInformation(requestBody);

            return requestBody;
        }
    }
}
