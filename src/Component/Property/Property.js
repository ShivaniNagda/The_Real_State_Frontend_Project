import * as React from "react";
import { useNavigate } from 'react-router-dom';
import './Property.css';

function Property({id}) {
  const navigate = useNavigate()
  const handleImageClick = () => {
    navigate(`/description/${id}`)
  }
  return (
    <>


            <div className="card-container">

            <div class="div-property">
  <img
    loading="lazy"
    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1828c964d803953b125259245c7c696d5c37228eddc1cc3b100a845dbffc0ff4?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
    class="img-property"
  />
  <div class="div-2">
    <div class="sunset-ridge-villas">Sunset Ridge Villas</div>
    <div class="price">$ 200.33</div>
    <div
      class="beautiful-updated"
    >
      Beautiful,Updated,Ground Level Co-op apartment in the desirable Bay
      Terrace neighborhood
    </div>
    <div class="div-3"></div>
    <div class="div-4">
      <div class="div-five">
        <img
          loading="lazy"
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/277c3f1e7f3635eb3727c3336c58a0121caf262a409bc78008f0b97a395f3a61?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
          class="img-2"
        />
        <div class="alice-adams">Alice adams</div>
      </div>
      <div class="div-6">
        <div class="div-7"></div>
        <div class="div-8"></div>
        <div class="div-9"></div>
      </div>
    </div>
  </div>
</div>


</div>
</>
  );
};

{/* till here */}

export default Property;


