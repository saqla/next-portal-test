import React, { useContext } from 'react'

import { Context } from '../modules/modules'
import Dialog from './Dialog'

type Props = {
  type: string
}

const ModalContent: React.FC<Props> = ({ type }) => {
  const { dispatch } = useContext(Context)

  switch (type) {
    case 'dialog.unshift':
      return (
        <Dialog>
          <p>前に通常のダイアログを追加できるダイアログ</p>
          <div>
            <button
              onClick={(): void =>
                dispatch({ type: 'unshift', modal: 'dialog' })
              }
            >
              unshift
            </button>
            <button onClick={(): void => dispatch({ type: 'shift' })}>
              close
            </button>
          </div>
        </Dialog>
      )

    case 'error.empty':
      return (
        <Dialog>
          <p>エラー: 何も入力されていません</p>
          <p>type: {type}</p>
          <div>
            <button onClick={(): void => dispatch({ type: 'shift' })}>
              close
            </button>
          </div>
        </Dialog>
      )

    case 'dialog':
    default:
      return (
        <Dialog>
          <p>通常のダイアログ</p>
          <p>type: {type}</p>
          <div>
            <button onClick={(): void => dispatch({ type: 'shift' })}>
              close
            </button>
          </div>
        </Dialog>
      )
  }
}

export default ModalContent