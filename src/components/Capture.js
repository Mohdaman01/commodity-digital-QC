'use client'

import React, { useRef, useState } from 'react';

const Capture = () => {

    const [image, setImage] = useState(null);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('file', image);

        const res = await fetch(`/api/upload`, {
          method: 'POST',
          body: data,
        });

        console.log(res);
      }

    return (
        <section>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='file' name='image' accept='image/*' capture onChange={e => setImage(e.target.files[0])} />
                    <button type='submit'>submit</button>
                </form>
                
                {image && <img src={image} />}
            </div>
        </section>
    )
}


export default Capture;