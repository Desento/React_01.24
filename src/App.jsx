import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './navigation/navigation.jsx'

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
