import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-request";

const NewTask = (props) => {
  const { isLoading, error, sendRequest:sendTaskRequest } = useHttp();

  const applyData = (taskText,taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async(taskText)=>{
    const requestConfig = {
      url: "https://react-http-7e4a5-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: {text:taskText},
      headers: {
        "Content-Type": "application/json",
      },
    };
    sendTaskRequest(requestConfig,applyData.bind(null,taskText))
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
