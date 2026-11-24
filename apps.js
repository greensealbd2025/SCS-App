/* ===================================================================
   SCS SUIT — অ্যাপের তালিকা
   নতুন অ্যাপ যোগ করতে নিচের তালিকায় একটি লাইন কপি করে বসান:
     { name: 'অ্যাপের নাম', url: 'https://script.google.com/macros/s/.../exec' },
   - name : অ্যাপের নাম (টাইলে ও উপরের বারে দেখাবে)
   - url  : অ্যাপের লিংক (Apps Script হলে /exec লিংক)
   - logo : (ঐচ্ছিক) আলাদা লোগো। না দিলে SCS লোগো দেখাবে।
            এই ফোল্ডারে ছবি রেখে 'my-logo.png' লিখুন, বা https লিংক দিন।
   - color: (ঐচ্ছিক) টাইলের রঙ, যেমন '#0ea5e9'
   মুছতে চাইলে লাইনটি মুছে দিন। ক্রম বদলাতে লাইন উপরে-নিচে সরান।
   এই ফাইল বদলানোর পর sw.js-এর VERSION সংখ্যাটা ১ বাড়িয়ে দিন,
   তাহলে ফোনে ইনস্টল করা অ্যাপও নতুন তালিকা পাবে।
   =================================================================== */
window.SCS_APPS = [
  { name: 'SCS Employee Attendance', url: 'https://script.google.com/macros/s/AKfycbwsYKVU0PQyq0PUHDzXHrBARHz5JTgBo4Go6HfB_OOZ8ec-5euQZ5loI3omNoKhvyducA/exec', color: '#0284c7' },
  { name: 'SCS Chemical Sales Order', url: 'https://script.google.com/macros/s/AKfycbz82t7k9qz71zoKMmoZM-uLHXVzKl4-1u3iY4XnE60vPYW20xTS61b3ZpqPyzgfIHw/exec', color: '#7c3aed' },
  { name: 'SCS Chemical Sales & Monthly Report', url: 'https://script.google.com/macros/s/AKfycbwitI830e_ljePP_QFIcz8fq7-zXtHO7zjRK3qJD0yn0sIb0m4J0RSDlXkWI9nqkEe5YA/exec', color: '#9333ea' },
  { name: 'SCS Project Wise Chemical Requisition', url: 'https://script.google.com/macros/s/AKfycbzzMMXLsyGr2eVxPrP-rPunyPjrbo8vmGKE6FMbJf5mzXbrHCSkTN_xPJbcLLB9XZfKCw/exec', color: '#c026d3' },
  { name: 'SCS Central Store', url: 'https://script.google.com/macros/s/AKfycbwlWpUHD58Uxxi5MZ5cezdwRMUrmmG3j60Kt_bz8koo7wz2iNfN1tubbynOhYWIsizX9g/exec', color: '#0d9488' },
  { name: 'SCS Daily Worker Attendance & Wages', url: 'https://script.google.com/macros/s/AKfycbwpxCM0U-AFXY2QgrqhKxHphu3FoFlWOlqpChfkcaRzZ7Fg8jhWXggH0lrJDvPvHRMV/exec', color: '#ea580c' },
  { name: 'SCS Employee Leave Application', url: 'https://script.google.com/macros/s/AKfycbyq80nmcNJfbsabDpUSQLiLZxG7w3CN814FFdcxNo3mNzFNHhMwiPSYP7aFdIFt2E9hgg/exec', color: '#2563eb' },
  { name: 'SCS Quotation Submit App', url: 'https://script.google.com/macros/s/AKfycbwnEV3_ODsLMvHgunQ0RMat0P1AJT61AJKGnkAdzr-bWUhxDLlLVvdeA44x3nm0KRQI/exec', color: '#4f46e5' },
  { name: 'SCS Running & Complete Projects', url: 'https://script.google.com/macros/s/AKfycbwVki6uy4Dbs1VaNaUot24c4Wi9RjChnQFletCxsRpa_WF454gn5Aqx2LWyxheWjvhZyw/exec', color: '#16a34a' },
  { name: 'SCS Project & Chemical Collection', url: 'https://script.google.com/macros/s/AKfycbxOEz9CUHVDSdsKDcC4oK_ox596VAUYV_vwSwF9pyXjHYGcNEZM1v8aA4Y6vn5WnIRq0g/exec', color: '#db2777' },
  { name: 'SCS Daily Expense', url: 'https://script.google.com/macros/s/AKfycbyS4bfGHnkqA7vW_MLRudWpx-j6w3yoKefhpQ-GHeN0I0BVEhBu36HguXGR7isgxHoU/exec', color: '#dc2626' }
];
