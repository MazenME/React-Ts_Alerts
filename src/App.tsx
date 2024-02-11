import {
  AlertTriangle,
  BellRing,
  CheckCheck,
  ScrollText,
  XCircle,
} from "lucide-react";
import "./App.css";
import Alert from "./components/Alerts/Alert";

function App() {
  return (
    <>
      <Alert
        type={"alert-danger"}
        icon={<XCircle size={20} className="me-2" />}
        title={"something went wrong"}>
        <>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </>
      </Alert>

      <Alert
        type={"alert-default"}
        icon={<BellRing size={20} className="me-2" />}
        title={"Upegrade your account now"}
        message={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />

      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} className="me-2" />}
        title={"mission accomplished"}
        message={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />

      <Alert
        type={"alert-warning"}
        icon={<AlertTriangle size={20} className="me-2" />}
        title={"Tips for you"}
        message={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />

      <Alert
        type={"alert-info"}
        icon={<ScrollText size={20} className="me-2" />}
        title={"notes for you"}
        message={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </>
  );
}

export default App;
