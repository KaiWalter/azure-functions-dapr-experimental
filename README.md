# Azure Functions with Dapr bindings experiments

Experimenting with [Azure Functions Dapr extensions](https://github.com/Azure/azure-functions-dapr-extension)

## Variants

| runtime stack | language   | programming model | folder       |
| ------------- | ---------- | ----------------- | ------------ |
| Node.js       | TypeScript | v3                | node-ts-v3   |
| Node.js       | TypeScript | v4                | node-ts-v4   |
| .NET          | C#         | Isolated          | dotnet-cs-v4 |

### for Node.js

Dapr extensions need to be build for .NET 3.1 or higher in the particular folder:

```
npm i
dotnet build -c Release -o bin
```

### for .NET

implemented workaround <https://github.com/Azure/azure-functions-dapr-extension/issues/151>

## TO DO

- [x] create reference app with TypeScript
- [ ] get LSP+debuggung working in NeoVim
