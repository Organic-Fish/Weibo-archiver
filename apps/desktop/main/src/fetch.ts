import type { IPCFetch } from '@types'
import { userInfo } from '@core/services'
import { IPCMain } from '../../utils'

const channel = 'fetch'

export function setupFetchMainIPC() {
  const IPC = new IPCMain<IPCFetch>(channel)

  IPC.on('userInfo', userInfo)
}
