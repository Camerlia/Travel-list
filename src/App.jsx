import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"


const App = () => {
  return (
    <div className="bg-amber-600 h-screen p-16 text-base text-white text-center">
      <Logo/>
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

export default App