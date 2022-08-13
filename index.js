setInterval(() => {
  const posts = document.querySelectorAll('[data-pagelet="FeedUnit_{n}"]')

  posts.forEach((post) => {
    console.log(post);

    const button = document.createElement('button');
    button.style.height = '200px';
    button.style.width = '200px';
    button.style.background = 'red';
    button.onclick = async () => {
      const canvas = await html2canvas(post);
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      const a = document.createElement('a')
      a.setAttribute('download', 'my-image.png')
      a.setAttribute('href', image)
      a.click()
      canvas.remove()
    };
    post.appendChild(button);
  })
}, 3000)
