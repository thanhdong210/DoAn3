import './App.css';
import SideBar from './Components/Sidebar';
import ModelManagement from './Pages/ModelManagement';
import NewActionLabeling from './Pages/NewActionLabeling';
import VideoAnalytics from './Pages/VideoAnalytics';

import ActionsLabeling from './Pages/ActionsLabeling';
import ModelConfiguration from './Pages/ModelConfiguration';
import Result from './Pages/Result';
import Summary from './Pages/Summary';
import GenerateDashboard from './Pages/GenerateDashboard';
import VideoEditor from './Pages/VideoEditor';
import TestCallAPI from './Pages/TestCallAPI';

import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar/>
        
          <Routes>
            <Route path="/model-management" exact element={
              <ModelManagement/>
              }>
            </Route>
            <Route path="/new-action-labeling"element={
              <NewActionLabeling/> 
              }>
            </Route>

            <Route path="video-analytics"element={
              <VideoAnalytics/>
              }>
            </Route>

            <Route path="/actions-labeling" element={
              <ActionsLabeling/>
              }>
            </Route>

            <Route path="/model-configuration" element={
              <ModelConfiguration/>
              }>
            </Route>

            <Route path="/result" element={
              <Result/>
              }>
            </Route>

            <Route path="/summary" element={
              <Summary/>
              }>
            </Route>
            
            <Route path="/generate-dashboard" element={
              <GenerateDashboard/>
              }>
            </Route>

            <Route path="/video-editor" element={
              <VideoEditor/>
              }>
            </Route>

            <Route path="/test-call-api" element={
              <TestCallAPI/>
              }>
            </Route>
          </Routes>
          
      </Router>
    </div>
  );
}

export default App;
