import chart from 'lib/modules/chart/sagas'
import user from 'lib/modules/user/sagas'
import wallet from 'lib/modules/wallet/sagas'
import transactions from 'lib/modules/transactions/sagas'

const sagas = [chart, user, wallet, transactions]

export default sagas
