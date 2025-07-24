import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Signup/component/Login';
import { Signup } from './pages/Signup/component/Signup';
import { Main } from './pages/main/main';
import { Announcement } from './pages/announcement/announcement';
import { MainLayout } from './component/MainLayout';
import { AnnouncementDetail } from './pages/announcement/component/AnnouncementDetail';
import { WorkResult } from './pages/workresults/workresult';
import { Post } from './pages/post/post';
import { PostWrite } from './pages/post/component/PostWrite';
import { PostDetail } from './pages/post/PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route
              path="/announcement/announcementDetail/:id"
              element={<AnnouncementDetail />}
            />
            <Route path="/workresult" element={<WorkResult />} />
            <Route path="/post" element={<Post />} />
            <Route path="/write" element={<PostWrite />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
