var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { app, input, output } = require("@azure/functions");
app.http("health", {
    methods: ["GET"],
    handler: (request, context) => __awaiter(this, void 0, void 0, function* () {
        return { body: "Ok" };
    }),
});
app.http("state/{key}", {
    methods: ["POST"],
    handler: (request, context) => __awaiter(this, void 0, void 0, function* () {
        context.log(request.body);
        context.bindings.state = {
            value: request.body,
        };
    }),
});
const state = input.daprState({
    stateStore: "statestore",
    key: "{key}",
});
app.http("state/{key}", {
    methods: ["GET"],
    extraInuts: [state],
    handler: (request, context) => __awaiter(this, void 0, void 0, function* () {
        context.res = {
            body: state,
        };
    }),
});
//# sourceMappingURL=index.js.map