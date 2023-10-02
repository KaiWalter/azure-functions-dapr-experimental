const { app, input, output } = require("@azure/functions");

app.http("health", {
  methods: ["GET"],
  handler: async (request, context) => {
    return { body: "Ok" };
  },
});

app.http("state/{key}", {
  methods: ["POST"],
  handler: async (request, context) => {
    context.log(request.body);

    context.bindings.state = {
      value: request.body,
    };
  },
});

const state = input.daprState({
  stateStore: "statestore",
  key: "{key}",
});

app.http("state/{key}", {
  methods: ["GET"],
  extraInuts: [state],
  handler: async (request, context) => {
    context.res = {
      body: state,
    };
  },
});
