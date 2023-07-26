import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
{
path:'/',
element: <div>Root</div>
},
{
path:'/quiz',
element: <div>Quiz</div>
},
{
path:'/result',
element: <div>Result</div>
}
])

function App() {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  );
}

export default App;
