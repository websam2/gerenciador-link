import Home from "./layout/Home"
import Page from "./layout/Page"


function App () {
  return (
    <div className="flex flex-col h-full lg:flex-row lg:w-screen lg:h-screen">
      <Home/>
      <Page/>
    </div>
  )
}
export default App
