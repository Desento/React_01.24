import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './navigation/navigation.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/index.js'
import { PersistGate } from 'redux-persist/integration/react'

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  )
}
