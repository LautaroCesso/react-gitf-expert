export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=TCS7wUM6c7KyUBXtpO1JEJ0J0AvtrAff&q=${category}&limit=10`;

  const res = await fetch(url);
  const { data = [] } = await res.json();

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => ({ id, title, url })
  );

  return gifs;
};
