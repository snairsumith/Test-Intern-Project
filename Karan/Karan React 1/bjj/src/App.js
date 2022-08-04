import React from "react";
import "./App.css";
import Topmenu from "./highmenu";
import Menu from "./menu";
import Banner from "./Banner";
import Blog from "./Blog";

function App() {
  return (
    <div>
    
    <Topmenu />
    <Menu />
    <Banner />
    <div className="blog-container">
    <Blog name="Blog1" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do"/>
    <Blog name="Blog2" message="lore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    <Blog name="Blog3" message="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit ame"/>
    </div>


    </div>
  );
}

export default App;
