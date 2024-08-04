"use client"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type ModalProps = {
  children?: React.ReactNode
  html: React.ReactElement
};

export default function Modal(props: ModalProps) {
  return (
    <button onClick={sweetModal} type="button">{props.children}</button>
  );

  function sweetModal() {
    return withReactContent(Swal).fire({
      html: props.html,
      width: "60rem",
      showCloseButton: true,
      showConfirmButton: false,
    })
  }
}
