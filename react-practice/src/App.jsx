import React from 'react'
import Name from './components/day8/Name'
import Counter from './components/day8/Counter'
import InputTest from './components/day8/InputTest'
import SearchNames from './components/day8/SearchNames'
import FetchApi from './components/day8/FetchApi'
import ShadCN from './components/day9/ShadCN'
import LearnAxios from './components/day10/LearnAxios'
import DebounceSearch from './components/day10/DebounceSearch'

const App = () => {
  return (
    <div className='bg-slate-700 text-white h-full py-10'>
      {/* <Name />
      <Counter /> */}
      {/* <InputTest/> */}
      {/* <SearchNames/> */}
      {/* <FetchApi/> */}
      {/* <ShadCN/> */}
      {/* <LearnAxios/> */}
      <DebounceSearch/>
    </div>
  )
}

export default App