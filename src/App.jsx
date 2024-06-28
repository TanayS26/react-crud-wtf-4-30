import { useNavigate } from "react-router-dom"
const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container bg-dark">
        <h1 className="text-info text-center">Welcome to React Crud</h1>
      </div>

      <div className="container text-center my-5">
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/create-user")}
        >Add a User</button>
      </div>
    </>
  )
}

export default App
