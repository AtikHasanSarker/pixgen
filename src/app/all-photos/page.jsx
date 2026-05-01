
import PhotoCard from '@/components/ui/PhotoCard';
import React from 'react';

const AllPhotos = async () => {
    const generations = await fetch(
      "https://pixgen-lake.vercel.app/data.json"
    )
    const photos = await generations.json();
    console.log("from all photos", photos);
    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold my-5">All Photos</h1>

            <div className="grid grid-cols-4 gap-5">
                {photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
};

export default AllPhotos;