import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModaPortal from "./ModalPortal";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola! este es el contenido de Modal 1</p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          perspiciatis corporis labore porro, ducimus, ipsam soluta ratione
          molestias beatae consequuntur quae ipsum temporibus eum eos.
          Repellendus dolorum ipsum error veritatis.
        </p>
        <img src="https://placeimg.com/400/400/any/grayscale" alt="grayscale" />
      </Modal>
      <button onClick={openModalContact}>Modal Contact</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSong}>Modal Song</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModaPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal En Portal</h3>
        <p>
          Este es el contenido de un "Modal" que carga en otro nodo del DOM
          diferente a donde carga nuestra App de React, gracias a un React
          Portal.{" "}
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </ModaPortal>
    </div>
  );
};

export default Modals;
