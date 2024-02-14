import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './navigation/navigation.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/index.js'

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </div>
  )
}
