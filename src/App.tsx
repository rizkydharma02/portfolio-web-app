import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 transition">
        Sending
      </button>
      <button>test</button>
      <Button className="button">test2</Button>
    </div>
  );
}

export default App;
