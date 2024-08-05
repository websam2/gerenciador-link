import Home from "./layout/Home"
import Page from "./layout/Page"


function App () {
  return (
    <div className="flex flex-col xl:flex-row w-screen h-screen">
      <Home/>
      <Page/>
    </div>
  )
}
export default App
