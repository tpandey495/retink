import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Scroll from './components/Scroll';



function App() {
  const [items, setItems] = useState([]);
   const [page, setpage] = useState(2);
  
  // for login
const data=localStorage.getItem('login');
const navigate=useNavigate();
  
function logouthandle(){
     localStorage.clear();
     navigate("/");
 }

useEffect(() => {
    if(!data){
    navigate("/");
    }
    const startData = async () => {
      const res = await fetch(
    `https://randomuser.me/api/?result=500?_page=1&_limit=10`    
       );
      const data1 = await res.json();
      setItems(data1.results);
    };

    startData();
  },[]);
  
 

  const fetchComments = async () => {
    const res = await fetch(
  `https://randomuser.me/api/?result=500?_page=${page}&_limit=10`    
     );
    const data1 = await res.json();
    console.log(data1.results)
    return data1.results;
  };



  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    setItems([...items, ...commentsFormServer]);
    setpage(page + 1);
  };


return (
  <div>
    <div>
    <button className="logout" onClick={logouthandle}>logout</button>
    </div>
    <InfiniteScroll
      dataLength={items.length} 
      next={fetchData}
      hasMore={items.length<500}
      loader={<h1>loading.. </h1>}
      endMessage={<h1>message end</h1>}
    >
       {
      items.map(elem=>{
        return <Scroll key={elem.id} item={elem} />
      })
    }
    </InfiniteScroll>
    </div>
      );
}
  


export default App;
