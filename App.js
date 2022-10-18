import Header from "./component/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/home";
import About from "./component/About";

function App() {
  return (

    <Router>
      <div className="App">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

























// <Router>
    // <div className="App">

    // <Layout/>

    //   {/* <Hello/> */}
    //   {/* <Reactprops/> */}
    //   {/* <Reactevent/> */}
    //   {/* <Reactcomponent/> */}
    //   {/* <Reactform/> */}
      
    //  <div className="content">
     
    //     <Switch>
    //       <Route exact path='/'>
    //         <Home/>
    //       </Route>
    //       <Route path='/blog'>
    //         <Blogs/>
    //       </Route>
    //       <Route path='/contact'>
    //         <Contact/>
    //       </Route>
    //       <Route path='*'>
    //         <Nopage/>
    //       </Route>
    //     </Switch>
     
    //  </div>
      
    // </div>
    // </Router>