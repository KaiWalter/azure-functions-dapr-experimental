using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Functions.Worker.Extensions.Dapr;

namespace dotnet_cs_v4
{
    public static class GetState
    {
        [Function(nameof(GetState))]
        public static string Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "state/{key}")] HttpRequestData req,
            [DaprStateInput("statestore", Key = "{key}")] string state,
            FunctionContext functionContext)
        {
            var log = functionContext.GetLogger(nameof(PostState));

            log.LogInformation(state);

            return state;
        }
    }
}
