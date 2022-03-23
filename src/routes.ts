import { UserRoute } from './modules/Acesso/routes/UserRoute'
import { LogRoute } from './modules/Sistema/routes/LogRoute'

export const Routes = [...LogRoute, ...UserRoute]
