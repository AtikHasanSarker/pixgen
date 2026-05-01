
const PhotoDetails = async ({ params }) => {
    const { id } = await params;
    console.log('Fetching details for photo ID:', id);
    const response = await fetch(`https://pixgen-lake.vercel.app/data.json`);
    const photos = await response.json();
    console.log('Fetched photos:', photos);
    const photo = photos.find(p => p.id === Number(id));

    console.log('Photo details:', photo);
    return (
      <div className="text-center">
        <h1 className="font-bold text-3xl">{photo?.title}</h1>
        <p>{photo?.prompt}</p>
      </div>
    );
};

export default PhotoDetails;