const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const cropUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return cropUrl;
};

export default getCroppedImageUrl;
