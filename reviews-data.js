const reviewsData = [
  {
    "name": "Ritu",
    "rating": 5,
    "text": "bridal makeup done here was mind blowing. main rani jaisi lag rhi thi. 5 stars to the team.",
    "date": "Yesterday"
  },
  {
    "name": "Tanushree",
    "rating": 5,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki.",
    "date": "Yesterday"
  },
  {
    "name": "Genelia Verma",
    "rating": 5,
    "text": "ac cooling was great, peaceful spa experience A/c was cooling nicely, very comfortable.",
    "date": "6 days ago"
  },
  {
    "name": "Rekha Dubey",
    "rating": 5,
    "text": "bohut acha hai acha facial kara hai",
    "date": "6 days ago"
  },
  {
    "name": "Aditi Das",
    "rating": 5,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi. Thank you didi :)",
    "date": "5 days ago"
  },
  {
    "name": "Hema",
    "rating": 5,
    "text": "Matrix products use karte hai. Quality is super.",
    "date": "2 weeks ago"
  },
  {
    "name": "Kriti Patel",
    "rating": 5,
    "text": "ac cooling was great, peaceful spa experience A/c was cooling nicely, very comfortable.",
    "date": "5 days ago"
  },
  {
    "name": "Suman Pandey",
    "rating": 5,
    "text": "mujhe bohut acha laga they are very friendly",
    "date": "Yesterday"
  },
  {
    "name": "Swati",
    "rating": 4,
    "text": "Friendly staff, bohut ache se hair cut kiya A/c was cooling nicely, very comfortable.",
    "date": "2 days ago"
  },
  {
    "name": "Shrishti Dubey",
    "rating": 5,
    "text": "ladies only environment makes it so secure and comfortable",
    "date": "3 weeks ago"
  },
  {
    "name": "Rimi",
    "rating": 5,
    "text": "hydrafacial was top notch, blackheads saaf ho gaye pure. Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "4 weeks ago"
  },
  {
    "name": "Pragya",
    "rating": 5,
    "text": "prices are pocket friendly, services are premium Highly recommend!",
    "date": "Today"
  },
  {
    "name": "Ananya",
    "rating": 4,
    "text": "Hygienic salon and reasonable rates. satisfied customer. main pehli baar gayi thi. Very hygienic.",
    "date": "5 days ago"
  },
  {
    "name": "Shruti Mehta",
    "rating": 5,
    "text": "staff was very friendly and did hair spa very carefully. massage was relaxing. Sabhi girls try karo.",
    "date": "1 month ago"
  },
  {
    "name": "Kirti Jain",
    "rating": 4,
    "text": "professional handling and polite talk. didi bohut pyari hain. 5 stars to the team.",
    "date": "2 days ago"
  },
  {
    "name": "Shweta Mishra",
    "rating": 5,
    "text": "facial was very relaxing and glowing skin mili instantly, bahut khush hoon main Will visit again surely. Main wapas jaungi.",
    "date": "6 days ago"
  },
  {
    "name": "Kiara Bose",
    "rating": 5,
    "text": "makeup was long lasting. overnight tick gaya and skin dry nahi hui.",
    "date": "2 weeks ago"
  },
  {
    "name": "Sneha",
    "rating": 5,
    "text": "prices are pocket friendly, services are premium",
    "date": "2 weeks ago"
  },
  {
    "name": "Babita",
    "rating": 5,
    "text": "best packages available. affordable prices me superb services. Value for money.",
    "date": "Today"
  },
  {
    "name": "Anita",
    "rating": 5,
    "text": "Matrix products use karte hai. Quality is super.",
    "date": "2 weeks ago"
  },
  {
    "name": "Sonia",
    "rating": 5,
    "text": "Bhopal me best salon h ladies ke liye. Main har month aati hoon.",
    "date": "3 days ago"
  },
  {
    "name": "Payal Kapoor",
    "rating": 5,
    "text": "safe environment for girls, hygiene is maintained",
    "date": "1 week ago"
  },
  {
    "name": "Shraddha Saxena",
    "rating": 4,
    "text": "makeup and hairstyle done perfectly for party. bohut compliments mile mujhe! Very hygienic.",
    "date": "Yesterday"
  },
  {
    "name": "Jyoti",
    "rating": 5,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi.",
    "date": "4 weeks ago"
  },
  {
    "name": "Udita Trivedi",
    "rating": 5,
    "text": "Matrix products use karte hai. Quality is super.",
    "date": "3 days ago"
  },
  {
    "name": "Manju",
    "rating": 5,
    "text": "ladies only environment makes it so secure and comfortable Sabhi girls try karo.",
    "date": "4 weeks ago"
  },
  {
    "name": "Tamannaah",
    "rating": 5,
    "text": "safe environment for girls, hygiene is maintained 5 stars to the team.",
    "date": "5 days ago"
  },
  {
    "name": "Udita Nair",
    "rating": 5,
    "text": "professional handling and polite talk. didi bohut pyari hain. Thank you didi :)",
    "date": "Today"
  },
  {
    "name": "Anjali Shrivastav",
    "rating": 5,
    "text": "profestional staff done haircut very good, hair bahut soft ho gaye",
    "date": "1 week ago"
  },
  {
    "name": "Muskan Mukherjee",
    "rating": 4,
    "text": "makeup and hairstyle done perfectly for party. bohut compliments mile mujhe!",
    "date": "3 days ago"
  },
  {
    "name": "Nisha Jain",
    "rating": 4,
    "text": "makeup was not cakey at all. natural look diya, thank you didi! Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "Today"
  },
  {
    "name": "Babita B",
    "rating": 5,
    "text": "best beauty parlour near kolar road. prices are affordable too. Perfect beauty services.",
    "date": "Yesterday"
  },
  {
    "name": "Shivani Kapoor",
    "rating": 5,
    "text": "happy with facial, skin feels soft now and glow is very nice. Will visit again surely. Main wapas jaungi.",
    "date": "3 days ago"
  },
  {
    "name": "Deepika",
    "rating": 4,
    "text": "happy with facial, skin feels soft now and glow is very nice.",
    "date": "Yesterday"
  },
  {
    "name": "Tanushree Sharma",
    "rating": 4,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki.",
    "date": "2 days ago"
  },
  {
    "name": "Anushka Das",
    "rating": 5,
    "text": "highly recommend for bridal makeup, she is highly trained and experienced!",
    "date": "Today"
  },
  {
    "name": "Kirti",
    "rating": 4,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain. Perfect beauty services.",
    "date": "2 months ago"
  },
  {
    "name": "Sunita Nagar",
    "rating": 4,
    "text": "Acha haircut kiya and very neat clean parlour 5 stars to the team.",
    "date": "3 weeks ago"
  },
  {
    "name": "Aarti",
    "rating": 5,
    "text": "bridal makeup done here was mind blowing. main rani jaisi lag rhi thi. Highly recommend!",
    "date": "2 weeks ago"
  },
  {
    "name": "Tina",
    "rating": 5,
    "text": "Clean salon, AC facility is very nice. staff is humble Best experience ever.",
    "date": "2 days ago"
  },
  {
    "name": "Jyoti Reddy",
    "rating": 5,
    "text": "highly recommend for bridal makeup, she is highly trained and experienced! Very hygienic.",
    "date": "3 weeks ago"
  },
  {
    "name": "Priyanka Shah",
    "rating": 5,
    "text": "happy with glow facial, immediate results mile skin par!",
    "date": "4 days ago"
  },
  {
    "name": "Sunita Sinha",
    "rating": 5,
    "text": "makeup and hairstyle done perfectly for party. bohut compliments mile mujhe! Will visit again surely. Main wapas jaungi.",
    "date": "4 days ago"
  },
  {
    "name": "Deepika Sharma",
    "rating": 5,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain.",
    "date": "Yesterday"
  },
  {
    "name": "Rashmi Rathore",
    "rating": 4,
    "text": "Matrix products use karte hai. Quality is super. Super satisfied. Bahut accha laga.",
    "date": "3 days ago"
  },
  {
    "name": "Payal Agarwal",
    "rating": 5,
    "text": "affordable rates with premium service",
    "date": "2 months ago"
  },
  {
    "name": "Sneha B",
    "rating": 5,
    "text": "happy with glow facial, immediate results mile skin par!",
    "date": "4 weeks ago"
  },
  {
    "name": "Isha Rao",
    "rating": 5,
    "text": "facial was very relaxing and glowing skin mili instantly, bahut khush hoon main",
    "date": "2 days ago"
  },
  {
    "name": "Hema Das",
    "rating": 5,
    "text": "great haircut experience, stylist suggested best look for me. main bohut happy thi. A/c was cooling nicely, very comfortable.",
    "date": "4 days ago"
  },
  {
    "name": "Rashi Mishra",
    "rating": 4,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki.",
    "date": "Today"
  },
  {
    "name": "Muskan Rao",
    "rating": 5,
    "text": "Clean salon, AC facility is very nice. staff is humble",
    "date": "6 days ago"
  },
  {
    "name": "Sakshi Pandey",
    "rating": 5,
    "text": "ladies only environment makes it so secure and comfortable",
    "date": "5 days ago"
  },
  {
    "name": "Mansi Jain",
    "rating": 4,
    "text": "strictly for females, very comfortable environment. I felt very relaxed. Super satisfied. Bahut accha laga.",
    "date": "2 months ago"
  },
  {
    "name": "Pooja",
    "rating": 5,
    "text": "makeup was not cakey at all. natural look diya, thank you didi! 5 stars to the team.",
    "date": "5 days ago"
  },
  {
    "name": "Bhumi",
    "rating": 4,
    "text": "manicure done nicely, clean look. hands feel very soft.",
    "date": "3 days ago"
  },
  {
    "name": "Kajal",
    "rating": 4,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h. Perfect beauty services.",
    "date": "2 months ago"
  },
  {
    "name": "Sheetal",
    "rating": 5,
    "text": "bridal makeup done here was mind blowing. main rani jaisi lag rhi thi.",
    "date": "2 months ago"
  },
  {
    "name": "Kriti",
    "rating": 5,
    "text": "mujhe bohut acha laga they are very friendly",
    "date": "1 week ago"
  },
  {
    "name": "Preeti Nair",
    "rating": 5,
    "text": "good service, staff is polite",
    "date": "4 days ago"
  },
  {
    "name": "Surbhi",
    "rating": 5,
    "text": "makeup was not cakey at all. natural look diya, thank you didi!",
    "date": "2 weeks ago"
  },
  {
    "name": "Ritu Yadav",
    "rating": 5,
    "text": "Matrix products use karte hai. Quality is super. Sabhi girls try karo.",
    "date": "3 weeks ago"
  },
  {
    "name": "Manju Sinha",
    "rating": 5,
    "text": "kolar road me isse acha ladies parlour nhi h, main humesha yahi jaati hoon.",
    "date": "6 days ago"
  },
  {
    "name": "Shivani",
    "rating": 5,
    "text": "Matrix products use karte hai. Quality is super. Value for money.",
    "date": "2 months ago"
  },
  {
    "name": "Anita Roy",
    "rating": 4,
    "text": "Very neat and professional. A/C working properly, feels premium. A/c was cooling nicely, very comfortable.",
    "date": "3 weeks ago"
  },
  {
    "name": "Simran Saxena",
    "rating": 5,
    "text": "fully satisfied, pricing is very reasonable Value for money.",
    "date": "1 month ago"
  },
  {
    "name": "Muskan Roy",
    "rating": 5,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h.",
    "date": "1 month ago"
  },
  {
    "name": "Sridevi",
    "rating": 4,
    "text": "facial pack was very soothing. glow was visible and skin felt clean. Best experience ever.",
    "date": "4 days ago"
  },
  {
    "name": "Rakul Sinha",
    "rating": 5,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain. A/c was cooling nicely, very comfortable.",
    "date": "1 week ago"
  },
  {
    "name": "Komal",
    "rating": 5,
    "text": "happy with glow facial, immediate results mile skin par! Best experience ever.",
    "date": "3 weeks ago"
  },
  {
    "name": "Richa Saxena",
    "rating": 5,
    "text": "Highly satisfied with facial treatment. Worth every rupee.",
    "date": "Today"
  },
  {
    "name": "Trisha Pandey",
    "rating": 5,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain. A/c was cooling nicely, very comfortable.",
    "date": "1 month ago"
  },
  {
    "name": "Shruti",
    "rating": 5,
    "text": "highly recommend for bridal makeup, she is highly trained and experienced! A/c was cooling nicely, very comfortable.",
    "date": "2 months ago"
  },
  {
    "name": "Riya",
    "rating": 5,
    "text": "kolar road me isse acha ladies parlour nhi h, main humesha yahi jaati hoon. Perfect beauty services.",
    "date": "Today"
  },
  {
    "name": "Simran Chatterjee",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed.",
    "date": "2 weeks ago"
  },
  {
    "name": "Tamannaah Rathore",
    "rating": 5,
    "text": "kolar road me isse acha ladies parlour nhi h, main humesha yahi jaati hoon.",
    "date": "2 days ago"
  },
  {
    "name": "Trisha",
    "rating": 4,
    "text": "happy with facial, skin feels soft now and glow is very nice. 5 stars to the team.",
    "date": "4 days ago"
  },
  {
    "name": "Nithya",
    "rating": 5,
    "text": "makeup of party was superb, eyes makeup was special. sab poch rhe the.",
    "date": "Yesterday"
  },
  {
    "name": "Richa",
    "rating": 5,
    "text": "Hygienic salon and reasonable rates. satisfied customer. main pehli baar gayi thi. Best experience ever.",
    "date": "2 days ago"
  },
  {
    "name": "Mamta Joshi",
    "rating": 5,
    "text": "great haircut experience, stylist suggested best look for me. main bohut happy thi. Value for money.",
    "date": "2 weeks ago"
  },
  {
    "name": "Aarti Das",
    "rating": 4,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h. Very hygienic.",
    "date": "Today"
  },
  {
    "name": "Geeta",
    "rating": 5,
    "text": "Friendly staff, bohut ache se hair cut kiya Super satisfied. Bahut accha laga.",
    "date": "6 days ago"
  },
  {
    "name": "Disha",
    "rating": 5,
    "text": "affordable rates with premium service",
    "date": "3 weeks ago"
  },
  {
    "name": "Ileana",
    "rating": 5,
    "text": "Highly satisfied with facial treatment. Worth every rupee. Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "5 days ago"
  },
  {
    "name": "Ananya B",
    "rating": 4,
    "text": "hydrafacial was top notch, blackheads saaf ho gaye pure. Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "3 weeks ago"
  },
  {
    "name": "Sara Verma",
    "rating": 5,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki.",
    "date": "1 week ago"
  },
  {
    "name": "Kirti Bose",
    "rating": 5,
    "text": "waxing and clean up done smoothly. pain was very less. Didi is very gentle. Super satisfied. Bahut accha laga.",
    "date": "6 days ago"
  },
  {
    "name": "Disha Rao",
    "rating": 5,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki. Perfect beauty services.",
    "date": "5 days ago"
  },
  {
    "name": "Jyoti Gupta",
    "rating": 5,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi. 5 stars to the team.",
    "date": "Today"
  },
  {
    "name": "Richa B",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed. Thank you didi :)",
    "date": "3 days ago"
  },
  {
    "name": "Rashi Chaurasia",
    "rating": 4,
    "text": "Clean salon, AC facility is very nice. staff is humble",
    "date": "1 month ago"
  },
  {
    "name": "Payal Saxena",
    "rating": 4,
    "text": "best beauty parlour near kolar road. prices are affordable too.",
    "date": "3 weeks ago"
  },
  {
    "name": "Kriti B",
    "rating": 5,
    "text": "highly recommend for bridal makeup, she is highly trained and experienced!",
    "date": "3 weeks ago"
  },
  {
    "name": "Sonia B",
    "rating": 4,
    "text": "makeup and hairstyle done perfectly for party. bohut compliments mile mujhe! Sabhi girls try karo.",
    "date": "3 weeks ago"
  },
  {
    "name": "Minissha",
    "rating": 5,
    "text": "mujhe bohut acha laga they are very friendly Value for money.",
    "date": "Yesterday"
  },
  {
    "name": "Garima Sharma",
    "rating": 5,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h.",
    "date": "5 days ago"
  },
  {
    "name": "Samantha",
    "rating": 5,
    "text": "great haircut experience, stylist suggested best look for me. main bohut happy thi. Will visit again surely. Main wapas jaungi.",
    "date": "4 weeks ago"
  },
  {
    "name": "Rimi Mukherjee",
    "rating": 5,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain. Perfect beauty services.",
    "date": "5 days ago"
  },
  {
    "name": "Shweta",
    "rating": 5,
    "text": "Hygienic salon and reasonable rates. satisfied customer. main pehli baar gayi thi.",
    "date": "1 week ago"
  },
  {
    "name": "Sheetal Bose",
    "rating": 5,
    "text": "best packages available. affordable prices me superb services. Super satisfied. Bahut accha laga.",
    "date": "3 days ago"
  },
  {
    "name": "Kirti Shrivastav",
    "rating": 5,
    "text": "Hygienic salon and reasonable rates. satisfied customer. main pehli baar gayi thi.",
    "date": "4 days ago"
  },
  {
    "name": "Nithya Roy",
    "rating": 5,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki. Value for money.",
    "date": "2 months ago"
  },
  {
    "name": "Trisha Nagar",
    "rating": 5,
    "text": "happy with facial, skin feels soft now and glow is very nice.",
    "date": "3 days ago"
  },
  {
    "name": "Pallavi Saxena",
    "rating": 5,
    "text": "happy with glow facial, immediate results mile skin par!",
    "date": "2 weeks ago"
  },
  {
    "name": "Udita Shrivastav",
    "rating": 5,
    "text": "makeup was not cakey at all. natural look diya, thank you didi!",
    "date": "4 days ago"
  },
  {
    "name": "Anita Roy B",
    "rating": 4,
    "text": "waxing and clean up done smoothly. pain was very less. Didi is very gentle. Best experience ever.",
    "date": "1 month ago"
  },
  {
    "name": "Rashmi Mukherjee",
    "rating": 4,
    "text": "Hygienic salon and reasonable rates. satisfied customer. main pehli baar gayi thi.",
    "date": "2 weeks ago"
  },
  {
    "name": "Swati Roy",
    "rating": 5,
    "text": "The owner has 10+ years experience, her behavior is very friendly. Will visit again surely. Main wapas jaungi.",
    "date": "1 month ago"
  },
  {
    "name": "Surbhi Gupta",
    "rating": 5,
    "text": "very good ambience, safe for ladies",
    "date": "2 days ago"
  },
  {
    "name": "Ileana B",
    "rating": 5,
    "text": "best beauty parlour near kolar road. prices are affordable too.",
    "date": "1 week ago"
  },
  {
    "name": "Garima Sen",
    "rating": 5,
    "text": "very good ambience, safe for ladies Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "Yesterday"
  },
  {
    "name": "Deepika Mishra",
    "rating": 4,
    "text": "Acha haircut kiya and very neat clean parlour Very hygienic.",
    "date": "Yesterday"
  },
  {
    "name": "Simran",
    "rating": 5,
    "text": "ac cooling was great, peaceful spa experience",
    "date": "2 months ago"
  },
  {
    "name": "Nithya B",
    "rating": 5,
    "text": "Friendly staff, bohut ache se hair cut kiya Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "3 weeks ago"
  },
  {
    "name": "Pinky",
    "rating": 5,
    "text": "facial pack was very soothing. glow was visible and skin felt clean.",
    "date": "1 month ago"
  },
  {
    "name": "Shrishti Das",
    "rating": 5,
    "text": "Matrix products use karte hai. Quality is super.",
    "date": "2 days ago"
  },
  {
    "name": "Payal Sharma",
    "rating": 5,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h. Very hygienic.",
    "date": "Today"
  },
  {
    "name": "Suman Dwivedi",
    "rating": 5,
    "text": "ladies only environment makes it so secure and comfortable",
    "date": "3 days ago"
  },
  {
    "name": "Sonia C",
    "rating": 4,
    "text": "professional handling and polite talk. didi bohut pyari hain.",
    "date": "6 days ago"
  },
  {
    "name": "Pragya Joshi",
    "rating": 5,
    "text": "Hygienic salon and reasonable rates. satisfied customer. main pehli baar gayi thi.",
    "date": "2 days ago"
  },
  {
    "name": "Jaya",
    "rating": 4,
    "text": "bridal makeup done here was mind blowing. main rani jaisi lag rhi thi.",
    "date": "1 week ago"
  },
  {
    "name": "Mamta Saxena",
    "rating": 5,
    "text": "ladies only environment makes it so secure and comfortable Sabhi girls try karo.",
    "date": "1 week ago"
  },
  {
    "name": "Jaya Gupta",
    "rating": 5,
    "text": "kolar road me isse acha ladies parlour nhi h, main humesha yahi jaati hoon.",
    "date": "Today"
  },
  {
    "name": "Sapna Verma",
    "rating": 5,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi.",
    "date": "Today"
  },
  {
    "name": "Kajal B",
    "rating": 5,
    "text": "They did my haircut, very experienced stylist. Bahut acchi cutting ki.",
    "date": "4 days ago"
  },
  {
    "name": "Shashi Jain",
    "rating": 4,
    "text": "affordable salon with best services in kolar. main first time gayi thi.",
    "date": "1 week ago"
  },
  {
    "name": "Namrata Sinha",
    "rating": 5,
    "text": "happy with glow facial, immediate results mile skin par! Will visit again surely. Main wapas jaungi.",
    "date": "1 month ago"
  },
  {
    "name": "Nisha Mehta",
    "rating": 5,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi.",
    "date": "5 days ago"
  },
  {
    "name": "Sakshi Mehta",
    "rating": 5,
    "text": "fully satisfied, pricing is very reasonable",
    "date": "2 weeks ago"
  },
  {
    "name": "Divya Roy",
    "rating": 5,
    "text": "safe environment for girls, hygiene is maintained Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "2 months ago"
  },
  {
    "name": "Megha Chawla",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed.",
    "date": "1 month ago"
  },
  {
    "name": "Ritu Reddy",
    "rating": 5,
    "text": "great haircut experience, stylist suggested best look for me. main bohut happy thi. Best experience ever.",
    "date": "6 days ago"
  },
  {
    "name": "Sakshi Chatterjee",
    "rating": 5,
    "text": "facial was very relaxing and glowing skin mili instantly, bahut khush hoon main",
    "date": "1 month ago"
  },
  {
    "name": "Suman Dubey",
    "rating": 4,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h.",
    "date": "3 days ago"
  },
  {
    "name": "Mansi Bose",
    "rating": 5,
    "text": "Affordable rates and premium quality products. very happy with my haircut!",
    "date": "2 days ago"
  },
  {
    "name": "Surbhi B",
    "rating": 5,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h. Best experience ever.",
    "date": "Today"
  },
  {
    "name": "Chanchal Nagar",
    "rating": 5,
    "text": "Acha haircut kiya and very neat clean parlour Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "2 weeks ago"
  },
  {
    "name": "Kriti C",
    "rating": 4,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain.",
    "date": "1 month ago"
  },
  {
    "name": "Kiara Nair",
    "rating": 5,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h. Perfect beauty services.",
    "date": "2 months ago"
  },
  {
    "name": "Nisha Joshi",
    "rating": 5,
    "text": "makeup of party was superb, eyes makeup was special. sab poch rhe the.",
    "date": "3 weeks ago"
  },
  {
    "name": "Swati Agarwal",
    "rating": 5,
    "text": "best beauty parlour near kolar road. prices are affordable too.",
    "date": "1 month ago"
  },
  {
    "name": "Kiran Joshi",
    "rating": 5,
    "text": "profestional staff done haircut very good, hair bahut soft ho gaye Sabhi girls try karo.",
    "date": "1 month ago"
  },
  {
    "name": "Priyanka Shrivastav",
    "rating": 5,
    "text": "prices are pocket friendly, services are premium",
    "date": "5 days ago"
  },
  {
    "name": "Ileana C",
    "rating": 5,
    "text": "affordable rates with premium service Thank you didi :)",
    "date": "4 weeks ago"
  },
  {
    "name": "Preeti",
    "rating": 5,
    "text": "bridal makeup done here was mind blowing. main rani jaisi lag rhi thi. Thank you didi :)",
    "date": "1 month ago"
  },
  {
    "name": "Tamannaah B",
    "rating": 4,
    "text": "Clean salon, AC facility is very nice. staff is humble",
    "date": "Today"
  },
  {
    "name": "Aarti Dwivedi",
    "rating": 5,
    "text": "makeup was not cakey at all. natural look diya, thank you didi! Will visit again surely. Main wapas jaungi.",
    "date": "6 days ago"
  },
  {
    "name": "Nikita Trivedi",
    "rating": 5,
    "text": "pedicure and manicure are best here. The staff is professional and sweet. Value for money.",
    "date": "3 days ago"
  },
  {
    "name": "Shashi Joshi",
    "rating": 5,
    "text": "Highly satisfied with facial treatment. Worth every rupee. Sabhi girls try karo.",
    "date": "4 weeks ago"
  },
  {
    "name": "Rashmika Dwivedi",
    "rating": 5,
    "text": "prices are pocket friendly, services are premium",
    "date": "5 days ago"
  },
  {
    "name": "Chanchal",
    "rating": 5,
    "text": "affordable salon with best services in kolar. main first time gayi thi.",
    "date": "1 week ago"
  },
  {
    "name": "Varsha",
    "rating": 5,
    "text": "Friendly staff, bohut ache se hair cut kiya",
    "date": "6 days ago"
  },
  {
    "name": "Geeta Dwivedi",
    "rating": 5,
    "text": "ladies only environment makes it so secure and comfortable A/c was cooling nicely, very comfortable.",
    "date": "Today"
  },
  {
    "name": "Seema Mishra",
    "rating": 4,
    "text": "makeup was long lasting. overnight tick gaya and skin dry nahi hui.",
    "date": "4 days ago"
  },
  {
    "name": "Preeti B",
    "rating": 5,
    "text": "makeup was long lasting. overnight tick gaya and skin dry nahi hui.",
    "date": "3 days ago"
  },
  {
    "name": "Sapna",
    "rating": 5,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi.",
    "date": "2 days ago"
  },
  {
    "name": "Sonia D",
    "rating": 5,
    "text": "staff was very friendly and did hair spa very carefully. massage was relaxing. Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "5 days ago"
  },
  {
    "name": "Shweta B",
    "rating": 5,
    "text": "The owner has 10+ years experience, her behavior is very friendly. Value for money.",
    "date": "2 days ago"
  },
  {
    "name": "Shraddha",
    "rating": 5,
    "text": "safe environment for girls, hygiene is maintained",
    "date": "2 days ago"
  },
  {
    "name": "Anushka Dwivedi",
    "rating": 4,
    "text": "bridal makeup done here was mind blowing. main rani jaisi lag rhi thi.",
    "date": "1 week ago"
  },
  {
    "name": "Mansi",
    "rating": 4,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi.",
    "date": "1 month ago"
  },
  {
    "name": "Sara",
    "rating": 5,
    "text": "ac cooling was great, peaceful spa experience Value for money.",
    "date": "2 weeks ago"
  },
  {
    "name": "Alia Rao",
    "rating": 4,
    "text": "professional handling and polite talk. didi bohut pyari hain. A/c was cooling nicely, very comfortable.",
    "date": "Yesterday"
  },
  {
    "name": "Trisha B",
    "rating": 4,
    "text": "good service, staff is polite",
    "date": "5 days ago"
  },
  {
    "name": "Pragya B",
    "rating": 4,
    "text": "staff was very friendly and did hair spa very carefully. massage was relaxing. Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "4 days ago"
  },
  {
    "name": "Sakshi",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed. Highly recommend!",
    "date": "1 week ago"
  },
  {
    "name": "Richa Kapoor",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed. Super satisfied. Bahut accha laga.",
    "date": "1 month ago"
  },
  {
    "name": "Tanushree B",
    "rating": 5,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h.",
    "date": "6 days ago"
  },
  {
    "name": "Ileana D",
    "rating": 5,
    "text": "manicure done nicely, clean look. hands feel very soft. Sabhi girls try karo.",
    "date": "5 days ago"
  },
  {
    "name": "Tamannaah Reddy",
    "rating": 5,
    "text": "Very neat and professional. A/C working properly, feels premium. A/c was cooling nicely, very comfortable.",
    "date": "4 weeks ago"
  },
  {
    "name": "Sara Dubey",
    "rating": 4,
    "text": "Affordable rates and premium quality products. very happy with my haircut!",
    "date": "1 week ago"
  },
  {
    "name": "Rashmi Verma",
    "rating": 5,
    "text": "very good ambience, safe for ladies",
    "date": "2 days ago"
  },
  {
    "name": "Shrishti",
    "rating": 5,
    "text": "profestional staff done haircut very good, hair bahut soft ho gaye",
    "date": "3 weeks ago"
  },
  {
    "name": "Preeti Shrivastav",
    "rating": 5,
    "text": "Acha haircut kiya and very neat clean parlour",
    "date": "4 days ago"
  },
  {
    "name": "Mansi B",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed.",
    "date": "Yesterday"
  },
  {
    "name": "Ritu B",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed. 5 stars to the team.",
    "date": "Today"
  },
  {
    "name": "Divya Choudhary",
    "rating": 5,
    "text": "bridal makeup done here was mind blowing. main rani jaisi lag rhi thi. Thank you didi :)",
    "date": "1 week ago"
  },
  {
    "name": "Shraddha Rathore",
    "rating": 5,
    "text": "professional handling and polite talk. didi bohut pyari hain. Best experience ever.",
    "date": "3 weeks ago"
  },
  {
    "name": "Nisha Malhotra",
    "rating": 5,
    "text": "Bhopal me best salon h ladies ke liye. Main har month aati hoon. Highly recommend!",
    "date": "1 week ago"
  },
  {
    "name": "Urvashi",
    "rating": 4,
    "text": "prices are pocket friendly, services are premium Perfect beauty services.",
    "date": "Yesterday"
  },
  {
    "name": "Alka",
    "rating": 5,
    "text": "makeup was long lasting. overnight tick gaya and skin dry nahi hui. Will visit again surely. Main wapas jaungi.",
    "date": "4 weeks ago"
  },
  {
    "name": "Sunita Sinha B",
    "rating": 5,
    "text": "Friendly staff, bohut ache se hair cut kiya",
    "date": "1 week ago"
  },
  {
    "name": "Rakul Singh",
    "rating": 5,
    "text": "ladies only environment makes it so secure and comfortable A/c was cooling nicely, very comfortable.",
    "date": "2 months ago"
  },
  {
    "name": "Rashmi Jain",
    "rating": 5,
    "text": "happy with facial, skin feels soft now and glow is very nice.",
    "date": "1 week ago"
  },
  {
    "name": "Manju Singh",
    "rating": 5,
    "text": "waxing and clean up done smoothly. pain was very less. Didi is very gentle. A/c was cooling nicely, very comfortable.",
    "date": "2 days ago"
  },
  {
    "name": "Trisha C",
    "rating": 5,
    "text": "profestional staff done haircut very good, hair bahut soft ho gaye Thank you didi :)",
    "date": "Yesterday"
  },
  {
    "name": "Alia",
    "rating": 5,
    "text": "strictly for females, very comfortable environment. I felt very relaxed.",
    "date": "2 weeks ago"
  },
  {
    "name": "Sheetal Yadav",
    "rating": 4,
    "text": "baki parlour se sasta aur acha h. Pure kolar road me sasta h. A/c was cooling nicely, very comfortable.",
    "date": "6 days ago"
  },
  {
    "name": "Anita B",
    "rating": 5,
    "text": "very good ambience, safe for ladies",
    "date": "5 days ago"
  },
  {
    "name": "Genelia Das",
    "rating": 5,
    "text": "Acha haircut kiya and very neat clean parlour",
    "date": "Yesterday"
  },
  {
    "name": "Mallika Chaurasia",
    "rating": 5,
    "text": "facial was very relaxing and glowing skin mili instantly, bahut khush hoon main",
    "date": "2 months ago"
  },
  {
    "name": "Mallika Chawla",
    "rating": 5,
    "text": "good service, staff is polite",
    "date": "1 month ago"
  },
  {
    "name": "Nikita Dubey",
    "rating": 4,
    "text": "ladies only environment makes it so secure and comfortable",
    "date": "5 days ago"
  },
  {
    "name": "Mansi Mehta",
    "rating": 4,
    "text": "profestional staff done haircut very good, hair bahut soft ho gaye A/c was cooling nicely, very comfortable.",
    "date": "Yesterday"
  },
  {
    "name": "Rashmi",
    "rating": 5,
    "text": "Friendly staff, bohut ache se hair cut kiya Super satisfied. Bahut accha laga.",
    "date": "4 days ago"
  },
  {
    "name": "Minissha B",
    "rating": 5,
    "text": "makeup was long lasting. overnight tick gaya and skin dry nahi hui. Highly recommend!",
    "date": "2 months ago"
  },
  {
    "name": "Sapna B",
    "rating": 5,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki. A/c was cooling nicely, very comfortable.",
    "date": "3 weeks ago"
  },
  {
    "name": "Megha Das",
    "rating": 5,
    "text": "clean and sanitised tools, must visit ladies! main fir se jaungi.",
    "date": "Yesterday"
  },
  {
    "name": "Sapna Nagar",
    "rating": 5,
    "text": "safe environment for girls, hygiene is maintained",
    "date": "6 days ago"
  },
  {
    "name": "Aarti B",
    "rating": 5,
    "text": "bohut acha hai acha facial kara hai 5 stars to the team.",
    "date": "2 months ago"
  },
  {
    "name": "Alka Yadav",
    "rating": 5,
    "text": "bohut acha hai acha facial kara hai Value for money.",
    "date": "6 days ago"
  },
  {
    "name": "Preeti Rathore",
    "rating": 4,
    "text": "ac cooling was great, peaceful spa experience",
    "date": "Yesterday"
  },
  {
    "name": "Pooja Jain",
    "rating": 4,
    "text": "good service, staff is polite Thank you didi :)",
    "date": "3 weeks ago"
  },
  {
    "name": "Ananya Shah",
    "rating": 4,
    "text": "The owner has 10+ years experience, her behavior is very friendly. Highly recommend!",
    "date": "2 days ago"
  },
  {
    "name": "Meena",
    "rating": 4,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain.",
    "date": "Yesterday"
  },
  {
    "name": "Riya Reddy",
    "rating": 5,
    "text": "kolar road me isse acha ladies parlour nhi h, main humesha yahi jaati hoon.",
    "date": "6 days ago"
  },
  {
    "name": "Garima",
    "rating": 5,
    "text": "Highly satisfied with facial treatment. Worth every rupee. Will visit again surely. Main wapas jaungi.",
    "date": "4 weeks ago"
  },
  {
    "name": "Amala Roy",
    "rating": 4,
    "text": "makeup was not cakey at all. natural look diya, thank you didi! A/c was cooling nicely, very comfortable.",
    "date": "3 days ago"
  },
  {
    "name": "Rashi Roy",
    "rating": 5,
    "text": "pedicure and manicure are best here. The staff is professional and sweet.",
    "date": "4 weeks ago"
  },
  {
    "name": "Sonia Nagar",
    "rating": 5,
    "text": "Very nice staff and quick service. Sanitized tools use karti hain.",
    "date": "1 week ago"
  },
  {
    "name": "Minissha C",
    "rating": 5,
    "text": "staff was very friendly and did hair spa very carefully. massage was relaxing.",
    "date": "4 weeks ago"
  },
  {
    "name": "Tamannaah Pandey",
    "rating": 5,
    "text": "They did my haircut, very experienced stylist. Bahut acchi cutting ki. Sabhi girls try karo.",
    "date": "3 weeks ago"
  },
  {
    "name": "Genelia Pandey",
    "rating": 5,
    "text": "Bhopal me best salon h ladies ke liye. Main har month aati hoon. Highly recommend!",
    "date": "4 days ago"
  },
  {
    "name": "Shweta Rathore",
    "rating": 4,
    "text": "Friendly staff, bohut ache se hair cut kiya Best experience ever.",
    "date": "1 month ago"
  },
  {
    "name": "Kajal C",
    "rating": 5,
    "text": "facial pack was very soothing. glow was visible and skin felt clean.",
    "date": "1 week ago"
  },
  {
    "name": "Aarti Agarwal",
    "rating": 4,
    "text": "best beauty parlour near kolar road. prices are affordable too.",
    "date": "1 month ago"
  },
  {
    "name": "Babita Sen",
    "rating": 4,
    "text": "mujhe bohut acha laga they are very friendly Bahut hi pyara kaam h, main fan ho gayi.",
    "date": "2 weeks ago"
  },
  {
    "name": "Payal Chaurasia",
    "rating": 5,
    "text": "Very neat and professional. A/C working properly, feels premium.",
    "date": "2 months ago"
  },
  {
    "name": "Jaya Mishra",
    "rating": 5,
    "text": "affordable salon with best services in kolar. main first time gayi thi.",
    "date": "Yesterday"
  },
  {
    "name": "Kiara Dwivedi",
    "rating": 5,
    "text": "Matrix products use karte hai. Quality is super.",
    "date": "3 weeks ago"
  },
  {
    "name": "Namrata",
    "rating": 5,
    "text": "They did amazing bridal makeup. I was looking so pretty! Sabne tareef ki.",
    "date": "5 days ago"
  }
];
