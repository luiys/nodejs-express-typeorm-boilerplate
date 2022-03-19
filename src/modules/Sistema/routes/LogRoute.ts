import { LogController } from "../controller/LogController"

export const LogRoute = [
    {
        method: "get",
        route: "/logs",
        controller: LogController,
        action: "all",
    }
] 