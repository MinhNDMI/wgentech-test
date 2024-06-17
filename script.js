const items = [
  { src: 'imgs/image1.png', name: 'Julian Jameson', profession: 'Profession' },
  { src: 'imgs/image2.png', name: 'Julian Jameson', profession: 'Profession' },
  { src: 'imgs/image3.png', name: 'Julian Jameson', profession: 'Profession' },
  { src: 'imgs/image4.png', name: 'Julian Jameson', profession: 'Profession' },
];

const container = document.getElementById('card-container');

items.forEach(item => {
  // Tạo một thẻ div cho card
  const card = document.createElement('div');
  card.className = 'card';

  // Tạo thẻ img và thiết lập thuộc tính src
  const img = document.createElement('img');
  img.src = item.src;

  // Tạo thẻ h2 cho tên
  const name = document.createElement('h2');
  name.textContent = item.name;

  // Tạo thẻ p cho nghề nghiệp
  const profession = document.createElement('p');
  profession.textContent = item.profession;

  // Tạo thẻ div cho social icons
  const socialIcons = document.createElement('div');
  socialIcons.className = 'social-icons';

  // Tạo các thẻ a cho social icons
  const socialMedia = ['facebook', 'instagram', 'twitter'];
  socialMedia.forEach(media => {
      const a = document.createElement('a');
      a.href = '#';
      a.innerHTML = `<i class="fab fa-${media}"></i>`;
      socialIcons.appendChild(a);
  });

  // Thêm img, name, profession, và socialIcons vào card
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(profession);
  card.appendChild(socialIcons);

  // Thêm card vào container
  container.appendChild(card);
});
