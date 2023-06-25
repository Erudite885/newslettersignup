import { Routes, Route } from "react-router-dom";
import { Newsletter, Success } from "./components/index";

const App = () => {
  // const [email, setEmail] = useState([]);

  // const emailHandler = (enteredEmailInput) => {
  //   setEmail((prevGoals) => {
  //     const updatedEmail = [...prevGoals];
  //     updatedEmail.unshift({
  //       text: enteredEmailInput,
  //       id: Math.random().toString,
  //     });
  //     return updatedEmail;
  //   });
  // };

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-[100vh] ">
        <Routes>
          <Route path="/" element={<Newsletter />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </section>
    </>
  );
};

export default App;
