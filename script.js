function clearSearch() {
  document.getElementById('search').value = '';
}

document.getElementById('upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  img.onload = () => URL.revokeObjectURL(img.src);
  document.getElementById('images').innerHTML = '';
  document.getElementById('images').appendChild(img);
});