import React from 'react'
import EditCounter1 from './components/EditCounter1'
import EditCounter2 from './components/EditCounter2'
import EditCounter3 from './components/EditCounter3'
import EditCounter4 from './components/EditCounter4'
import ContextProvider from './contexts/ContextProvider'

function App() {
  return (
    <div className="bg-pink-600 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-h-screen">
      <ContextProvider>
        <EditCounter1 />
        <EditCounter2 />
        <EditCounter3 />
        <EditCounter4 />
      </ContextProvider>
    </div>
  )
}

export default App
