import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client'
import './index.css'

const Message = ({ type = 'info', content, onClose }) => {
    const closeHandler = () => onClose()

    return (
        <div className="info_div">
            <div className="content">{content}</div>
            <div className="button" onClick={closeHandler}>关闭</div>
        </div>
    )
}

const getContainer = () => {
    const container = document.querySelector('#customMessageWrapper')
    if (!container) {
        const _container = document.createElement('div');
        _container.id = 'customMessageWrapper'
        document.body.appendChild(_container)
        return _container
    }
    return container
}

const _message = (type) => {
    return (props) => {
        const container = getContainer();
        if (container.innerHTML === '') {
            const _dom = document.createElement('div');
            _dom.id = 'cover'
            container.appendChild(_dom);
            const root = createRoot(_dom)
            const closeHandler = () => {
                container.removeChild(_dom);
            }
            root.render(
                <Message
                    {...props}
                    type={type}
                    onClose={closeHandler}
                />
            )
        }

    }
}

const error = _message('error')
const warning = _message('warning')
const success = _message('success')
const info = _message('info')

export default {
    error,
    warning,
    success,
    info
}