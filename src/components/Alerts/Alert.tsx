import "./Alert.scss";
import { X } from "lucide-react";
import { Iprops } from "../../interfaces/interfaces";


export default function Alert(props: Iprops) {
  const {type, title, icon, message, children} = props;

  return (
    <>
      <div className={`${type} mb-3`}>
        <div className="alert-header">
          <div className="title">
            {icon}
            <h3>{title}</h3>
          </div>
          <span>
            <X size={20} />
          </span>
        </div>
        <p>{children ? children :  message }</p>
      </div>
    </>
  );
}
