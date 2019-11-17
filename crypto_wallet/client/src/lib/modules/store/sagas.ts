import { watcher as chart } from 'lib/modules/chart/sagas'
import { watcher as user } from 'lib/modules/user/sagas'

const sagas = [chart, user]

export default sagas
