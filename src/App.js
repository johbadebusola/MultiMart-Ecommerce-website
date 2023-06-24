import "./App.css";
import Header from "./component/Header";
import Router from "./component/Routes";
import Footer from "./component/footer";

function App() {
  const displayName = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="App">
      <Header />
      {!!displayName === null ? (
        <h4 className="displayName"> Hi, {displayName.displayName} </h4>
      ) : (
        " "
      )}
      <Router />
      <Footer />
    </div>
  );
}

export default App;
