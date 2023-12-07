const ImgSelector = ({ value, setSelectedImage }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataUrl = reader.result;
        console.log('Image Data URL:', imageDataUrl); // Log for debugging
        setSelectedImage(imageDataUrl); // Pass the selected image back to the parent component
      };

      reader.readAsDataURL(file);
    }
  };

  console.log('Value:', value); // Log for debugging

  return (
    <div className="self-start lg:self-end pt-2 w-10/12  sm:w-1/2  relative left-4 md:left-0">
      <input className="w-full text-sm md:text-lg" type='file' accept='image/*' onChange={handleImageChange} />
      
    </div>
  );
};

export default ImgSelector;
