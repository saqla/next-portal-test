import React, { useContext, useRef, useState, useEffect } from 'react'

import { createPortal } from 'react-dom'

import { Context } from '../modules/modules'
import ModalContent from './ModalContent'

const Modal: React.FC = () => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#__next')
    setMounted(true)
  }, [])

  const { state } = useContext(Context)

  return mounted
    ? createPortal(
        <>
          {state.modals?.[0] && (
            <div className="modal">
              <ModalContent type={state.modals[0]} />

              <style jsx>{`
                .modal {
                  position: fixed;
                  top: 50vh;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background-color: rgba(0, 0, 0, 0.5);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              `}</style>
            </div>
          )}
        </>,
        ref.current
      )
    : null
}

export default Modal