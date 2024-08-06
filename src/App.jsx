import Home from "./layout/Home"
import Page from "./layout/Page"


function App () {
  return (
    <div className="flex flex-col xl:flex-row xl:w-screen xl:h-screen">
      <Home/>
      <Page/>
    </div>
  )
}
export default App
