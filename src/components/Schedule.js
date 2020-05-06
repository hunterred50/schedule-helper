import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ItemList from './ItemList';
import AddItem from './AddItem';

const Schedule = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="schedule">
      <button onClick={e => setShowModal(true)}>+</button>
      <ReactModal
        // closeTimeoutMS={2000}
        isOpen={showModal}
        onRequestClose={e => setShowModal(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal">
          <button onClick={e => setShowModal(false)}>x</button>
          <AddItem />
        </div>
      </ReactModal>
      <ItemList />
    </div>
  )
}

export default Schedule
