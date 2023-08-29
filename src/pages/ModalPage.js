import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = <div>
    <Button primary onClick={handleClose}>I Accept</Button>
  </div>
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>


  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open modal
      </Button>
      {showModal && modal}
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at urna malesuada, mattis ligula a, posuere velit. Etiam nec risus arcu. In hac habitasse platea dictumst. Sed commodo enim id posuere pharetra. Sed maximus, orci et tempus dictum, sapien nulla condimentum urna, tincidunt mollis ante magna sit amet dui. Morbi lacinia neque at suscipit congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec commodo risus, in euismod arcu. Suspendisse a dui eget nisl porttitor sodales quis ut purus. Integer tellus ante, iaculis eu cursus non, venenatis dignissim lacus.
      </p>
    </div>
  )

}

export default ModalPage;