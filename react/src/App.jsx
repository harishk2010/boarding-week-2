import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Parent from './pages/Parent'
import Callback from './pages/Callback'
import Memo from './components/Memo'
import HigerComp from './pages/HigerComp'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Parent/>}/>
      <Route path='/useCallback' element={<Callback/>}/>
      <Route path='/useMemo' element={<Memo/>}/>
      <Route path='/Hoc' element={<HigerComp/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App