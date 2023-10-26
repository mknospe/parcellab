import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

async function deferRender() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }

    const { worker } = await import('./mocks/browser')

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

deferRender().then(() => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
})
