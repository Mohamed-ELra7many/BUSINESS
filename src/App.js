import Pages from "./Pages/Pages";
import AOS from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {     // to animation items page
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages />
    </>
  );
}

export default App;