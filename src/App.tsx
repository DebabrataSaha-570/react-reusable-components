import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (true) {
      handleModalClose();
    }

    console.log("clicked");
  };

  return (
    <>
      {/* <MainLayout /> */}
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="w-96 border border-red-500 p-10 ">
            <Button
              onClick={() => setModal((prev) => !prev)}
              variant="outline"
              className=" w-full"
            >
              Open Modal
            </Button>
            <Modal isOpen={modal} onClose={handleModalClose}>
              <Modal.Header>
                <Modal.CloseButton></Modal.CloseButton>
              </Modal.Header>
              <form onSubmit={handleSubmit}>
                <input
                  className="border border-purple-500 p-2 mx-3 my-2 rounded-md"
                  type="text"
                />
                <button className="btn-solid" type="submit">
                  Submit
                </button>
              </form>
            </Modal>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
