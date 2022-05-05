
import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Microphone";
import SearchContainer from "./views/SearchContainer";
import SearchResults from "./views/SearchResults";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Signup } from "./views/auth/Signup";
import { Login } from "./views/auth/Login";
import { useNavigate } from 'react-router-dom';
import apiService from "./views/services/auth";
import Profile from "./views/Profile";
import AuthButtonDisplay from './components/AuthButtonDisplay';

function App() {
  let [searchResultsArray, setSearchResultsArray] = useState([]);

  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const res = await apiService.isLoggedIn()
      console.log(res)
      setLoggedInUser(res.data)
    }
    fetchUser()
  }, [])

  const logoutHandler = async () => {
    await apiService.logout();
    setLoggedInUser(null);
    navigate('/')
  };

  const handleSearchResults = (searchResults) => {
    setSearchResultsArray(searchResults.data);
  };

  // console.log(loggedInUser)

  return (

      <ChakraProvider>
        <div className="App">
        <AuthButtonDisplay loggedInUser={loggedInUser} logoutHandler={logoutHandler} />
          <Routes>
            <Route path="/" element={<Home loggedInUser={loggedInUser} />} />
            <Route path="/test" element={<Test />} />
            <Route path="/signup" element={<Signup setLoggedInUser={setLoggedInUser}/>} />
            <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser}/>} />
            <Route path="/profile" element={<Profile loggedInUser={loggedInUser}/>} />
            <Route path="/search" element={<SearchContainer handleSearchResults={handleSearchResults} />} />
            <Route path="/search/results" element={<SearchResults searchResultsArray={searchResultsArray} />} />
          </Routes>
        </div>
      </ChakraProvider>

  );
}
export default App;
