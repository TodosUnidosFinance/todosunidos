import React from "react";

function Social() {
  return (
    <div className="row mb-2">
      <div className="col">
        <div className="mx-auto text-center">
          <a
            className="mx-1"
            target="_blank"
            href="https://www.facebook.com/TodosUnidos-2041989902731282/"
          >
            <img
              src="images/facebook.svg"
              width="32"
              height="32"
              alt="Facebook"
            />
          </a>

          <a
            className="mx-1"
            target="_blank"
            href="https://www.instagram.com/todosunidosts/"
          >
            <img
              src="images/instagram.svg"
              width="32"
              height="32"
              alt="Instagram"
            />
          </a>

          <a
            className="mx-1"
            target="_blank"
            href="https://twitter.com/TodosUnidosTS"
          >
            <img
              src="images/twitter.svg"
              width="32"
              height="32"
              alt="Twitter"
            />
          </a>

          <a
            className="mx-1"
            target="_blank"
            href="https://www.youtube.com/channel/UCN3ilHkQlvyz3GkS7wyO2qg?view_as=subscriber"
          >
            <img
              src="images/youtube.svg"
              width="32"
              height="32"
              alt="Youtube"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
