
// alert('moataz');

   // تغيير تنسيق التاريخ والوقت وعرضه في الفقرة
   function updateDate() {
    var now = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var formattedDate = now.toLocaleDateString('ar-EG', options);
    document.getElementById('demo').innerHTML = 'التاريخ والوقت الحالي: ' + formattedDate;
}


  // Initialize AOS library
  AOS.init();
        
  // Optional: Add custom JavaScript for more dynamic behavior
  document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        //   alert('Card clicked!');
      });
  });