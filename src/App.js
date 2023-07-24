import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero HeroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName="joker"></Hero>
      </ErrorBoundary>
    </div>
  );


}

export default App;
