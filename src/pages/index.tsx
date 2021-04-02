import React, { useContext, useState } from 'react'

import { NextPage } from 'next'
import Head from 'next/head'

import Modal from '../components/Modal'
import { Context } from '../modules/modules'

const Page: NextPage = () => {
  const { state, dispatch } = useContext(Context)

  const [modalName, setModalName] = useState('')

  const onClickHandler = (): void => {
    if (!modalName) {
      dispatch({ type: 'unshift', modal: 'error.empty' })
      return
    }
    dispatch({ type: 'push', modal: modalName })
  }

  return (
    <>
      <Head>
        <title>Potal Modal Example</title>
      </Head>

      <h1>Potal Modal Example</h1>

      <ul>
        <li>dialog.unshift: 前に割り込みダイアログをだす</li>
        <li>未入力: 何も入力しなければエラー</li>
        <li>その他: 通常のダイアログ</li>
      </ul>

      <div>
        <input
          type="text"
          value={modalName}
          onChange={(event): void => setModalName(`${event.target.value}`)}
        />
      </div>
      <div>
        <button onClick={onClickHandler}>add modal</button>

        <pre>{JSON.stringify(state.modals)}</pre>
      </div>

      <Modal />
    </>
  )
}

export default Page