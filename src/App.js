import { useViewportSize } from '@mantine/hooks';

function App() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default App;
