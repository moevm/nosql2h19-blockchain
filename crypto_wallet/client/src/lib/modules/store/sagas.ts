import { watcher as chart } from 'lib/modules/chart/sagas'
import { watcher as user } from 'lib/modules/user/sagas'
import { watcher as wallet } from 'lib/modules/wallet/sagas'

const sagas = [chart, user, wallet]

export default sagas
