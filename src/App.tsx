import CenteredPalette from "./components/CenteredPalette"
import HorizontalPalette from "./components/HorizontalPalette"
import PaletteControl from "./components/PaletteControl"
import { StyleProvider, useStyleContext } from "./providers/StyleProvider"

const GetContent = () => {
  const [state] = useStyleContext();
  return (
    <div style={{fontFamily: state.font}}>
      <h1>Barevná paleta</h1>
      <HorizontalPalette />
      <PaletteControl />
      <CenteredPalette />
    </div>
  );
}
function App() {


  return (
    <StyleProvider>
      <GetContent />
    </StyleProvider>
  )
}

export default App