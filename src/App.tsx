import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './navigation/navigation'
import { Provider } from 'react-redux'
import { RootStore, persistor } from './redux/index.js'
import { PersistGate } from 'redux-persist/integration/react'

export const App: React.FC = () => {
  return (
    <div>
      <Provider store={RootStore}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  )
}
