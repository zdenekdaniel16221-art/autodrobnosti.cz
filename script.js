function subscribe(){
  const input = document.getElementById('email');
  const msg = document.getElementById('msg');
  msg.textContent = 'Díky! Přidali jsme vás do seznamu (demo).';
  input.value = '';
}
document.getElementById('year').textContent = new Date().getFullYear();
