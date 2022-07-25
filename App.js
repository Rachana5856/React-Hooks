import "./App.css";
import React from "react";
/*import {Header} from "./Components/Header";
import CHeader from "./Components/CHeader";
import Channel from "./Components/Channel";
import FunctionClick from "./Components/FunctionClick";
import CFunctionClick from "./Components/CFunctionClick";
import CFunc from "./Components/CFunc";
import Stylesheet from "./Components/Stylesheet";
import Inline from "./Components/Inline";
import "./AppStyle.css";
import Style from "./AppStyle.module.css"
import Form from "./Components/Form";
import Routing from "./Components/Routing";
import LifeCycleA from "./Components/LifeCycleA";
import Product from "./Components/Product";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import HookCounter from "./Components/HookCounter";
import HookObj from "./Components/HookObj";
import HookArray from "./Components/HookArray";
import HooksCondition from "./Components/HooksCondition";*/
import HookPosition from "./Components/HookPosition";



class App extends React.Component {
  render() {
    return (
      
      /*<div className="App">
        <h1>Class Component</h1>
        <Header name="John" last="Reigns">
          <p>John Reigns is a fantastic Person</p>
          </Header>
        <Header name="Anna" last="Styles"/>
        <Header name="Harry"/>
        <CHeader name="Mery" last="Jacks"/>
        <Channel/>
        <FunctionClick/>
        <CFunctionClick roll="22"/>
        <CFunc/>
      </div>
      
      <h1 className={Style.success}>Green</h1>
      <h1 className='error'>Error</h1>
      <Stylesheet isvalue={false}></Stylesheet>
      <Inline></Inline>
      <Form></Form>
      <Routing></Routing>
      <LifeCycleA></LifeCycleA>
      <Product></Product>
      <PostList></PostList>
      <PostForm></PostForm>
      <HookCounter></HookCounter>
      <HookObj></HookObj>
      <HookArray></HookArray>
      <HooksCondition></HooksCondition>
      */
      <>
      <HookPosition></HookPosition>
      
      </>
    );
  }
}

export default App;
