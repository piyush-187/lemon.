const MENU_DATA = [
  {
    id: "b2b",
    name: "B2B (Bukhara To Beijing)",
    tagline: "Multi-Cuisine Restaurant • North Indian, Tandoori & Indo-Chinese",
    badges: ["Multi-Cuisine", "Serves Combos"],
    categories: [
      {
        title: "Beverages",
        items: [
          { name: "Lassi (Sweet / Salt / Mango)", price: "₹79", numPrice: 79, diet: "veg" },
          { name: "Lemon Mint", price: "₹79", numPrice: 79, diet: "veg" },
          { name: "Mint Masala", price: "₹79", numPrice: 79, diet: "veg" },
          { name: "Classic Lemon Soda", price: "₹79", numPrice: 79, diet: "veg" }
        ]
      },
      {
        title: "Paratha & Snacks",
        items: [
          { name: "Aloo Paratha / Onion Paratha", price: "₹79", numPrice: 79, diet: "veg" },
          { name: "Mixed Paratha", price: "₹89", numPrice: 89, diet: "veg" },
          { name: "Paneer Paratha", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Egg Paratha", price: "₹89", numPrice: 89, diet: "egg" },
          { name: "Keema Paratha", price: "₹119", numPrice: 119, diet: "nonveg" },
          { name: "Chole Bhature / Chole Kulche / Pav Bhaji", price: "₹99", numPrice: 99, diet: "veg" }
        ]
      },
      {
        title: "Chinese Starters & Noodles",
        items: [
          { name: "Chilli Potato / Honey Chilli Potato", price: "₹139 / ₹149", numPrice: 139, diet: "veg" },
          { name: "Veg Spring Roll", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "Cheese Cigar Roll", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Veg Manchurian (Dry / Gravy)", price: "₹139 / ₹149", numPrice: 139, diet: "veg" },
          { name: "Chilli Paneer (Dry / Gravy)", price: "₹249 / ₹259", numPrice: 249, diet: "veg" },
          { name: "Chilli Chicken (Dry / Gravy)", price: "₹249 / ₹269", numPrice: 249, diet: "nonveg" },
          { name: "Veg Hakka Noodles", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Veg Chilli Garlic Noodles", price: "₹169", numPrice: 169, diet: "veg" },
          { name: "Egg Noodles", price: "₹169", numPrice: 169, diet: "egg" },
          { name: "Chicken Hakka Noodles", price: "₹229", numPrice: 229, diet: "nonveg" },
          { name: "Chicken Chilli Garlic Noodles", price: "₹239", numPrice: 239, diet: "nonveg" }
        ]
      },
      {
        title: "Rolls",
        items: [
          { name: "Soya Roll", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "Soya Malai / Soya Masala Roll", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Paneer / Paneer Malai / Peri Peri Roll", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Egg Roll", price: "₹119", numPrice: 119, diet: "egg" },
          { name: "Egg Masala Roll", price: "₹129", numPrice: 129, diet: "egg" },
          { name: "Egg Malai Roll", price: "₹139", numPrice: 139, diet: "egg" },
          { name: "Double Egg Roll", price: "₹149", numPrice: 149, diet: "egg" },
          { name: "Chicken Seekh Roll", price: "₹179", numPrice: 179, diet: "nonveg" },
          { name: "Chicken Malai / Double Chicken Roll", price: "₹199", numPrice: 199, diet: "nonveg" }
        ]
      },
      {
        title: "Rice & Biryani",
        note: "Complimentary raita with rice & biryani",
        items: [
          { name: "Steamed Rice", price: "₹79", numPrice: 79, diet: "veg" },
          { name: "Jeera Rice", price: "₹89", numPrice: 89, diet: "veg" },
          { name: "Peas Pulao", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Veg Fried Rice", price: "₹139", numPrice: 139, diet: "veg" },
          { name: "Egg Fried Rice", price: "₹149", numPrice: 149, diet: "egg" },
          { name: "Chicken Fried Rice", price: "₹199", numPrice: 199, diet: "nonveg" },
          { name: "Veg Biryani / Egg Biryani", price: "₹229", numPrice: 229, diet: "veg" },
          { name: "Chicken Biryani", price: "₹199 / ₹299", numPrice: 199, diet: "nonveg" }
        ]
      },
      {
        title: "Indian Main Course (Veg)",
        note: "300ml / 500ml",
        items: [
          { name: "Paneer Makhani / Lababdar / Kadai / Kolhapuri / Matar", price: "₹150 / ₹249", numPrice: 150, diet: "veg" },
          { name: "Special Dal Makhani", price: "₹150 / ₹249", numPrice: 150, diet: "veg" },
          { name: "Yellow Dal Tadka (500ml)", price: "₹229", numPrice: 229, diet: "veg" },
          { name: "Assorted Veg (500ml)", price: "₹199", numPrice: 199, diet: "veg" },
          { name: "Aloo Gobhi Adraki (500ml)", price: "₹229", numPrice: 229, diet: "veg" },
          { name: "Chana Masala (500ml)", price: "₹199", numPrice: 199, diet: "veg" }
        ]
      },
      {
        title: "Indian Main Course (Non-Veg)",
        note: "500ml",
        items: [
          { name: "Home Style Chicken Curry", price: "₹299", numPrice: 299, diet: "nonveg" },
          { name: "Chicken Lababdar", price: "₹299", numPrice: 299, diet: "nonveg" },
          { name: "Kadai Chicken", price: "₹349", numPrice: 349, diet: "nonveg" },
          { name: "Butter Chicken", price: "₹349", numPrice: 349, diet: "nonveg" }
        ]
      },
      {
        title: "Tandoori Veg & Non-Veg",
        items: [
          { name: "Paneer Tikka / Masala Tikka / Malai Tikka", price: "₹279", numPrice: 279, diet: "veg" },
          { name: "Soya Chaap / Malai Chaap / Dahi Kebab / Hara Bhara Kebab", price: "₹249", numPrice: 249, diet: "veg" },
          { name: "Chicken Tikka / Chicken Malai Tikka", price: "₹299", numPrice: 299, diet: "nonveg" },
          { name: "Tandoori Chicken (Half / Full)", price: "₹199 / ₹369", numPrice: 199, diet: "nonveg" },
          { name: "Chicken Seekh Kebab", price: "₹299", numPrice: 299, diet: "nonveg" },
          { name: "Tangri Kebab (Half / Full)", price: "₹199 / ₹349", numPrice: 199, diet: "nonveg" }
        ]
      },
      {
        title: "Indian Breads & Desserts",
        items: [
          { name: "Plain Roti / Rumali Roti", price: "₹15", numPrice: 15, diet: "veg" },
          { name: "Butter Roti", price: "₹20", numPrice: 20, diet: "veg" },
          { name: "Laccha Paratha / Plain Naan", price: "₹40", numPrice: 40, diet: "veg" },
          { name: "Pudina Paratha / Butter Naan", price: "₹50 / ₹55", numPrice: 50, diet: "veg" },
          { name: "Missi Paratha / Garlic Naan", price: "₹60", numPrice: 60, diet: "veg" },
          { name: "Aloo Kulcha / Onion Kulcha", price: "₹79", numPrice: 79, diet: "veg" },
          { name: "Paneer Kulcha / Mixed Kulcha", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Gulab Jamun", price: "₹79", numPrice: 79, diet: "veg" },
          { name: "Kulfi Pista", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Rabri Falooda / Kulfi Falooda", price: "₹129", numPrice: 129, diet: "veg" }
        ]
      },
      {
        title: "Combos (Serves 2/3)",
        items: [
          { name: "Chinese Veg Combo (Spring Roll, Fried Rice, Veg Manchurian)", price: "₹329", numPrice: 329, diet: "veg" },
          { name: "Chinese Veg Combo (Spring Roll, Hakka Noodles, Chilli Paneer)", price: "₹349", numPrice: 349, diet: "veg" },
          { name: "Chinese Non-Veg Combo (Fried Rice or Noodles + Manchurian/Chilli Chicken)", price: "₹399", numPrice: 399, diet: "nonveg" },
          { name: "Indian Veg Combo (Paneer Tikka, Dal Makhani, Shahi Paneer, Rice, Roti)", price: "₹449", numPrice: 449, diet: "veg" },
          { name: "Indian Non-Veg Combo (Chicken Tikka, Butter Chicken, Lababdar, Rice, Naan)", price: "₹499", numPrice: 499, diet: "nonveg" }
        ]
      }
    ]
  },
  {
    id: "hoc",
    name: "HOC",
    tagline: "House of Cravings • Pan-Asian, Momos, Boxes & Shakes",
    badges: ["Half / Full Tiers", "Chow & Bento Boxes"],
    categories: [
      {
        title: "Rice & Noodles",
        note: "Half / Full",
        items: [
          { name: "Veg Fried Rice", price: "₹105 / ₹147", numPrice: 105, diet: "veg" },
          { name: "Egg Fried Rice", price: "₹120 / ₹157", numPrice: 120, diet: "egg" },
          { name: "Chilli Garlic Fried Rice", price: "₹120 / ₹167", numPrice: 120, diet: "veg" },
          { name: "Chicken Fried Rice", price: "₹147 / ₹230", numPrice: 147, diet: "nonveg" },
          { name: "Paneer Fried Rice", price: "₹150 / ₹237", numPrice: 150, diet: "veg" },
          { name: "Veg Hakka Noodles / Veg Chowmein", price: "₹90 / ₹125", numPrice: 90, diet: "veg" },
          { name: "Chilli Garlic Noodle / Veg Singapore Noodles", price: "₹95 / ₹125–147", numPrice: 95, diet: "veg" },
          { name: "Chilli Garlic Chicken Noodles", price: "₹125 / ₹167", numPrice: 125, diet: "nonveg" },
          { name: "Chicken Hakka / Chowmein / Singapore Noodles", price: "₹155 / ₹205", numPrice: 155, diet: "nonveg" },
          { name: "Veg Chopsuey / Chicken Chopsuey (Full)", price: "₹245 / ₹305", numPrice: 245, diet: "veg" }
        ]
      },
      {
        title: "Veg & Non-Veg Appetizers",
        note: "Half / Full",
        items: [
          { name: "Bhel Puri", price: "₹55 / ₹90", numPrice: 55, diet: "veg" },
          { name: "Salted Fries", price: "₹80 / ₹157", numPrice: 80, diet: "veg" },
          { name: "Peri Peri Fries", price: "₹90 / ₹160", numPrice: 90, diet: "veg" },
          { name: "Crispy Chilli Potato", price: "₹95 / ₹120", numPrice: 95, diet: "veg" },
          { name: "Cheese Fries / Tandoori Fries", price: "₹100 / ₹180", numPrice: 100, diet: "veg" },
          { name: "Crispy Corns", price: "₹105 / ₹187", numPrice: 105, diet: "veg" },
          { name: "Veg Spring Roll (Full)", price: "₹110", numPrice: 110, diet: "veg" },
          { name: "Chilli Paneer", price: "₹125 / ₹157", numPrice: 125, diet: "veg" },
          { name: "Veg Salt And Pepper", price: "₹155 / ₹260", numPrice: 155, diet: "veg" },
          { name: "Cheese Baked Fries (Full)", price: "₹167", numPrice: 167, diet: "veg" },
          { name: "Chicken Drumsticks", price: "₹145 / ₹215", numPrice: 145, diet: "nonveg" },
          { name: "Chicken Spring Roll (Full)", price: "₹145", numPrice: 145, diet: "nonveg" },
          { name: "Chilli Chicken", price: "₹165 / ₹215", numPrice: 165, diet: "nonveg" }
        ]
      },
      {
        title: "Momos (8 Pcs) & Pick A Meal",
        items: [
          { name: "Chicken Steam Momos (8 Pcs)", price: "₹125", numPrice: 125, diet: "nonveg" },
          { name: "Veg Kurkure Momos (8 Pcs)", price: "₹130", numPrice: 130, diet: "veg" },
          { name: "Chicken Kurkure Momos (8 Pcs)", price: "₹167", numPrice: 167, diet: "nonveg" },
          { name: "Chow Box (1 Gravy, 1 Staple — Veg / Paneer / Chicken)", price: "₹205 / ₹235 / ₹255", numPrice: 205, diet: "veg" },
          { name: "Bento Box (1 Gravy, 1 Staple, 1 Side — Veg / Paneer / Chicken)", price: "₹305 / ₹335 / ₹355", numPrice: 305, diet: "veg" }
        ]
      },
      {
        title: "Burgers, Wraps & Sandwiches",
        items: [
          { name: "Chinese Veg Burger / Chilli Garlic Veg Burger", price: "₹75 / ₹80", numPrice: 75, diet: "veg" },
          { name: "Chilli Paneer Burger / Chilli Chicken Burger", price: "₹90 / ₹99", numPrice: 90, diet: "veg" },
          { name: "Salad Wrap / Veggie Wrap / Paneer Wrap", price: "₹67 / ₹75 / ₹95", numPrice: 67, diet: "veg" },
          { name: "Chilli Paneer Wrap / Chicken Kabab Wrap", price: "₹125", numPrice: 125, diet: "veg" },
          { name: "Chilli Chicken Wrap", price: "₹147", numPrice: 147, diet: "nonveg" },
          { name: "Veg Sandwich / Veg Chilli Garlic Sandwich", price: "₹80 / ₹89", numPrice: 80, diet: "veg" },
          { name: "Chilli Paneer / Schezwan Paneer Sandwich", price: "₹145 / ₹167", numPrice: 145, diet: "veg" },
          { name: "Chilli Chicken / Schezwan Chicken Sandwich", price: "₹157 / ₹175", numPrice: 157, diet: "nonveg" }
        ]
      },
      {
        title: "Oriental Gravies & Soups",
        note: "Half / Full",
        items: [
          { name: "Veg Gravies (Black Pepper, Chilli Soya, Hot Garlic, Kung Pao, Manchurian, Thai Curry, Schezwan)", price: "₹110 / ₹140", numPrice: 110, diet: "veg" },
          { name: "Paneer Gravies (Black Pepper, Chilli Soya, Hot Garlic, Kung Pao, Manchurian, Thai Curry, Schezwan)", price: "₹165 / ₹210–235", numPrice: 165, diet: "veg" },
          { name: "Non-Veg Gravies (Black Pepper, Chilli Soya, Hot Garlic, Kung Pao, Manchurian, Thai Curry, Schezwan)", price: "₹165–175 / ₹215–225", numPrice: 165, diet: "nonveg" },
          { name: "Vegetable Soup / Veg Manchow Soup", price: "₹105 / ₹115", numPrice: 105, diet: "veg" },
          { name: "Chicken Soup / Chicken Manchow Soup", price: "₹125 / ₹135", numPrice: 125, diet: "nonveg" }
        ]
      },
      {
        title: "Chai, Coolers, Shakes & Ice Creams",
        items: [
          { name: "Adrak Chai / Kadak Elaichi Chai", price: "₹10–25", numPrice: 10, diet: "veg" },
          { name: "Aloo Patties / Paneer Patties", price: "₹30 / ₹35", numPrice: 30, diet: "veg" },
          { name: "Ice Tea (Lemon / Peach) / Fresh Lime Soda", price: "₹55", numPrice: 55, diet: "veg" },
          { name: "Coolers (Strawberry, Watermelon, Blue Lagoon, Fruit Beer)", price: "₹65–80", numPrice: 65, diet: "veg" },
          { name: "Mojitos (Classic Mint, Kiwi, Spicy Mango, Peach, Green Apple, Strawberry, Black Currant, Passion Fruit, Blueberry, Watermelon)", price: "₹85", numPrice: 85, diet: "veg" },
          { name: "Cold Coffee / Hazelnut / Caramel Cold Coffee", price: "₹85 / ₹95", numPrice: 85, diet: "veg" },
          { name: "Ice Cream Shakes (Vanilla, Chocolate, Strawberry, Butterscotch, KitKat, Oreo, Lotus Biscoff, Brownie Sundae)", price: "₹85–115", numPrice: 85, diet: "veg" },
          { name: "Ice Cream Scoops (Single / Double)", price: "₹55–75 / ₹95–105", numPrice: 55, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "quench",
    name: "The Quench",
    tagline: "Burgers, Pastas, Subs, Waffles & Fresh Juices",
    badges: ["100% Veg", "Fresh Juices & Waffles"],
    categories: [
      {
        title: "Burgers",
        items: [
          { name: "Retro Aloo Tikki Burger", price: "₹55", numPrice: 55, diet: "veg" },
          { name: "Spicy Chilli Lava / Schezwan / Classic Veggie Burger", price: "₹65", numPrice: 65, diet: "veg" },
          { name: "Tandoori Crispy Burger", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Crunchy Paneer / Paneer Makhani Burger", price: "₹85", numPrice: 85, diet: "veg" },
          { name: "Maharaja Burger", price: "₹120", numPrice: 120, diet: "veg" }
        ]
      },
      {
        title: "Fries & Sides",
        items: [
          { name: "Classic Fries with Mayo", price: "₹60", numPrice: 60, diet: "veg" },
          { name: "Peri Peri Fries with Mayo", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Say Cheese Fries", price: "₹75", numPrice: 75, diet: "veg" },
          { name: "Fire n Cheese Fries", price: "₹80", numPrice: 80, diet: "veg" },
          { name: "Mexican Salsa / Paneer Makhani Fries", price: "₹85", numPrice: 85, diet: "veg" },
          { name: "Power Packed Tangy Salad", price: "₹100", numPrice: 100, diet: "veg" },
          { name: "Chilli Cheese Garlic Bread", price: "₹110", numPrice: 110, diet: "veg" }
        ]
      },
      {
        title: "Pastas, Wraps, Sandwiches & Subs",
        items: [
          { name: "Arrabbiata / Alfredo (White) / Pink Sauce Pasta", price: "₹90", numPrice: 90, diet: "veg" },
          { name: "Aloo Wrap / Tandoori Veggie Wrap", price: "₹70 / ₹80", numPrice: 70, diet: "veg" },
          { name: "Veg Paneer Wrap / Mexican Salsa Wrap", price: "₹90", numPrice: 90, diet: "veg" },
          { name: "Veg Masala Grilled / Creamy Cheese Corn Sandwich", price: "₹65 / ₹75", numPrice: 65, diet: "veg" },
          { name: "Spicy Paneer & Jalapeno / Paneer Korma / Bombay Street Style Sandwich", price: "₹90", numPrice: 90, diet: "veg" },
          { name: "Veg Delight / Corn n Peas Sub", price: "₹90", numPrice: 90, diet: "veg" },
          { name: "Hara Bhara Kabab / Paneer Tikka Sub", price: "₹110", numPrice: 110, diet: "veg" }
        ]
      },
      {
        title: "Waffles, Thick Shakes, Mocktails & Juices",
        items: [
          { name: "Choco Waffle / Strawberry Waffle", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Maple Waffle / Choco Oreo / Nutella Waffle", price: "₹80 / ₹90 / ₹95", numPrice: 80, diet: "veg" },
          { name: "Banana Shake", price: "₹60", numPrice: 60, diet: "veg" },
          { name: "Mango / Chocolate / Cold Coffee / Bubble Gum Shake", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Choco Oreo / Hazelnut / Irish Cold Coffee / Crunchy Caramel Shake", price: "₹85", numPrice: 85, diet: "veg" },
          { name: "Mocktails (Blue Curacao, Spicy Mango, Mint Mojito, Green Apple, Paan Mojito, Bloody Orange)", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Fresh Juices (Watermelon, Mosumbi, Pineapple, Cocktail, Apple, Pomegranate)", price: "₹60–90", numPrice: 60, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "coffee-vault",
    name: "The Coffee Vault",
    tagline: "Specialty Coffee, Ceremonial Matcha, Quesadillas & Burritos",
    badges: ["Ceremonial Matcha", "Meal Combos"],
    categories: [
      {
        title: "Signature Cold Coffee & Hot Beverages",
        items: [
          { name: "Classic Cold Coffee", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Roasted Hazelnut / Irish Cold Coffee", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "Vietnamese Iced Coffee", price: "₹139", numPrice: 139, diet: "veg" },
          { name: "Espresso / Americano", price: "₹99 / ₹109", numPrice: 99, diet: "veg" },
          { name: "Cappuccino / Café Latte", price: "₹139 / ₹149", numPrice: 139, diet: "veg" },
          { name: "Rich Drinking Hot Chocolate", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "Ceremonial Matcha (Vault Cappuccino, Mango, Iced Latte, Strawberry)", price: "₹199", numPrice: 199, diet: "veg" }
        ]
      },
      {
        title: "Shakes & Summer Drinks",
        items: [
          { name: "Shakes (Belgian Dark Chocolate, Cookie Caramel, Alphonso Mango, Toffee, Butterscotch, Vanilla, Blueberry, Oreo)", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Premium Shakes (Biscoff, American Bourbon, Chocolate Brownie)", price: "₹179", numPrice: 179, diet: "veg" },
          { name: "Masala Lemonade / Classic Aam Panna / Imli Banta / Chili Guava", price: "₹89", numPrice: 89, diet: "veg" },
          { name: "Watermelon / Green Apple / Yuzu Limon Mojito", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Passionfruit / Lemon Iced Tea / Peach Iced Tea / Mango Ice Tea", price: "₹119–129", numPrice: 119, diet: "veg" }
        ]
      },
      {
        title: "Wraps, Sandwiches, Quesadillas & Burritos",
        items: [
          { name: "Chatpata Aloo Wrap / Paneer Wrap", price: "₹99 / ₹129", numPrice: 99, diet: "veg" },
          { name: "Chicken Kabab Wrap / Chicken Fajita Wrap", price: "₹199 / ₹219", numPrice: 199, diet: "nonveg" },
          { name: "Cheese Burst Volcano Sandwich / Tandoori Paneer Toast", price: "₹119 / ₹149", numPrice: 119, diet: "veg" },
          { name: "Spicy Chicken Crunch / Tandoori Chicken Toast", price: "₹179", numPrice: 179, diet: "nonveg" },
          { name: "Sunset Salsa Kiss Quesadilla (Veg)", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Crispy Chicken Quesadilla", price: "₹179", numPrice: 179, diet: "nonveg" },
          { name: "Burrito Veg / Chicken Burrito", price: "₹149 / ₹199", numPrice: 149, diet: "veg" },
          { name: "Oasis of Falafel Pita / Jawa Moonlight Pita (Chicken)", price: "₹159 / ₹229", numPrice: 159, diet: "veg" }
        ]
      },
      {
        title: "Fries, Nachos, Bakery, Desserts & Combos",
        items: [
          { name: "Salted Fries / Peri Peri Fries / Cheesy Fries", price: "₹69 / ₹99 / ₹119", numPrice: 69, diet: "veg" },
          { name: "Loaded Chicken Fries", price: "₹159", numPrice: 159, diet: "nonveg" },
          { name: "Cheese & Desire Nachos / Wildfire Nachos (Chicken)", price: "₹169 / ₹189", numPrice: 169, diet: "veg" },
          { name: "Veg Puff / Paneer Puff / Chicken Strip Corn", price: "₹39 / ₹49 / ₹189", numPrice: 39, diet: "veg" },
          { name: "Brownie / Biscoff Brownie Bowl", price: "₹99 / ₹149", numPrice: 99, diet: "veg" },
          { name: "Snack Attack Combo (Fries + Cold Coffee)", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Hunger Combo (Any Wrap + Mojito) / Sandwich Combo", price: "₹199", numPrice: 199, diet: "veg" },
          { name: "Power Combo (Quesadilla + Fries + Iced Tea) / Couple Combo", price: "₹299 / ₹399", numPrice: 299, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "monginis",
    name: "Monginis",
    tagline: "Celebration Cakes, Pastries, Donuts & Bakery Savouries",
    badges: ["Bakery & Confectionery", "Veg Savouries"],
    categories: [
      {
        title: "Pastries (Fresh Cream & Chocolate)",
        items: [
          { name: "Choco Bomb Pastry", price: "₹48", numPrice: 48, diet: "veg" },
          { name: "Butter Scotch / Devils Delite Pastry", price: "₹55", numPrice: 55, diet: "veg" },
          { name: "Irish Coffee / Pineapple / Ivory / Swiss Miss Pastry", price: "₹60–65", numPrice: 60, diet: "veg" },
          { name: "Black Forest / Chocolate Mousse Cup", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Choco Gooey Brownie / Walnut Brownie / Brownee Square", price: "₹75", numPrice: 75, diet: "veg" },
          { name: "Tiramisu / Rainbow / Dutch Truffle / Almond Dutch / Royal Choco", price: "₹80", numPrice: 80, diet: "veg" },
          { name: "Fresh Fruit / Zebra Torte / Red Velvet Cheese / Choco Lava", price: "₹85", numPrice: 85, diet: "veg" },
          { name: "Hazelnut Dutch Choco Mud", price: "₹100", numPrice: 100, diet: "veg" },
          { name: "Blueberry Cheese Cake / Bisko Cheese Cake", price: "₹120", numPrice: 120, diet: "veg" }
        ]
      },
      {
        title: "Donuts, Jars & Small Cakes",
        items: [
          { name: "Choco Donut / Choco Drizzle / Chocotello / Jemmy Land Donut", price: "₹50–55", numPrice: 50, diet: "veg" },
          { name: "Choco Mousse Jar / Red Velvet Jar", price: "₹90 / ₹110", numPrice: 90, diet: "veg" },
          { name: "Beauty Cake / Beauty Cake Mousse (Small)", price: "₹300", numPrice: 300, diet: "veg" },
          { name: "Panda / Pineapple / Butter Scotch Cake (Small)", price: "₹350–375", numPrice: 350, diet: "veg" },
          { name: "Black Forest / Rainbow / Icy Spicy Cake (Small)", price: "₹400", numPrice: 400, diet: "veg" },
          { name: "Alpine Choco / Choco Bite / Devils Delite / Dutch Truffle Cakes", price: "₹425", numPrice: 425, diet: "veg" },
          { name: "Rasmalai / Red Velvet / Four Season Cakes", price: "₹475", numPrice: 475, diet: "veg" },
          { name: "Nutella / Choco Almond / Shahi Rasmalai / Super Choco Round Cakes", price: "₹500", numPrice: 500, diet: "veg" }
        ]
      },
      {
        title: "Savouries (Veg)",
        items: [
          { name: "Samosa", price: "₹20", numPrice: 20, diet: "veg" },
          { name: "Chatpata Aloo Puff / Aaloo Patty Puff / Vada Paav", price: "₹25", numPrice: 25, diet: "veg" },
          { name: "Mushroom Puff / Cheese Corn Puff / Veg Pattice", price: "₹30", numPrice: 30, diet: "veg" },
          { name: "Paneer Tart / Paneer Puff / Veg-65 Puff / Schezwan Noodle Puff", price: "₹35", numPrice: 35, diet: "veg" },
          { name: "Cheese Crunchy Sandwich", price: "₹42", numPrice: 42, diet: "veg" },
          { name: "Paneer Kulcha / Bun Maska / Cheese Chutney Sandwich", price: "₹45", numPrice: 45, diet: "veg" },
          { name: "Paneer Tikka Roll / Veg Sandwich / Cheese Corn Sandwich", price: "₹50", numPrice: 50, diet: "veg" },
          { name: "Veg Burger / Veg Pizza", price: "₹55", numPrice: 55, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "southern-stories",
    name: "Southern Stories",
    tagline: "Authentic South Indian Dosas, Uttapams, Idli-Vada & Filter Coffee",
    badges: ["South Indian", "100% Veg"],
    categories: [
      {
        title: "Dosas",
        items: [
          { name: "Plain Dosa", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Masala Dosa", price: "₹80", numPrice: 80, diet: "veg" },
          { name: "Rawa Dosa", price: "₹90", numPrice: 90, diet: "veg" },
          { name: "Rawa Onion Dosa / Podi Butter Masala Dosa", price: "₹100", numPrice: 100, diet: "veg" },
          { name: "Rawa Onion Masala Dosa / Mysore Masala Dosa", price: "₹110", numPrice: 110, diet: "veg" },
          { name: "Ghee Roast Masala Dosa / Cheese Dosa / Paneer Dosa", price: "₹120", numPrice: 120, diet: "veg" },
          { name: "Cheese Masala Dosa", price: "₹130", numPrice: 130, diet: "veg" },
          { name: "Rawa Paneer Dosa", price: "₹140", numPrice: 140, diet: "veg" },
          { name: "Paper Masala Dosa", price: "₹150", numPrice: 150, diet: "veg" }
        ]
      },
      {
        title: "Uttapam & Parathas",
        items: [
          { name: "Onion Uttapam / Tomato Onion Uttapam", price: "₹80 / ₹90", numPrice: 80, diet: "veg" },
          { name: "Veg Uttapam / Paneer Uttapam / Mixed Uttapam", price: "₹100 / ₹120 / ₹130", numPrice: 100, diet: "veg" },
          { name: "Aloo Payaaz Paratha (1pc / 2pcs)", price: "₹60 / ₹110", numPrice: 60, diet: "veg" },
          { name: "Mixed Veg Paratha / Gobhi Paratha (1pc / 2pcs)", price: "₹65 / ₹120", numPrice: 65, diet: "veg" },
          { name: "Paneer Paratha (1pc / 2pcs)", price: "₹75 / ₹140", numPrice: 75, diet: "veg" },
          { name: "Paratha with Paneer Korma", price: "₹130", numPrice: 130, diet: "veg" }
        ]
      },
      {
        title: "Sides, Snacks & Beverages",
        items: [
          { name: "Idli Sambhar", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Vada Sambhar / Idli-Vada Combo", price: "₹75", numPrice: 75, diet: "veg" },
          { name: "Pav Bhaji / Channa Kulcha", price: "₹80 / ₹100", numPrice: 80, diet: "veg" },
          { name: "Rajma Rice Bowl / Chole Rice Bowl", price: "₹120", numPrice: 120, diet: "veg" },
          { name: "Chole Bhatura", price: "₹130", numPrice: 130, diet: "veg" },
          { name: "Filter Coffee / Softy Cone", price: "₹40 / ₹30", numPrice: 40, diet: "veg" },
          { name: "Lassi / Classic Cold Coffee", price: "₹65 / ₹70", numPrice: 65, diet: "veg" },
          { name: "Hazelnut / Irish / Caramel Cold Coffee / KitKat / Oreo Shake", price: "₹85", numPrice: 85, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "calcuttas-chef",
    name: "Calcutta's Chef",
    tagline: "Amritsari Kulchas, Mini Meals, Tandoori Platters & Kolkata Rolls",
    badges: ["Mini Meals", "Half / Full Portions"],
    categories: [
      {
        title: "Amritsari Kulcha Combo & Rice Bowls",
        items: [
          { name: "Aloo Kulcha Combo (Single / Double)", price: "₹100 / ₹160", numPrice: 100, diet: "veg" },
          { name: "Paneer Kulcha / Mix Kulcha Combo (Single / Double)", price: "₹120 / ₹180", numPrice: 120, diet: "veg" },
          { name: "Rajma / Chole / Kadhi / Dal Tadka / Dal Makhani / Shahi Paneer Rice Bowl", price: "₹120", numPrice: 120, diet: "veg" },
          { name: "Manchurian / Chilli Paneer Rice or Noodles Bowl", price: "₹150–170", numPrice: 150, diet: "veg" },
          { name: "Egg Curry Rice Bowl", price: "₹150", numPrice: 150, diet: "egg" },
          { name: "Chicken Curry / Butter Chicken Rice Bowl", price: "₹210", numPrice: 210, diet: "nonveg" },
          { name: "Chicken Manchurian / Chilli Chicken Rice or Noodles Bowl", price: "₹230", numPrice: 230, diet: "nonveg" }
        ]
      },
      {
        title: "Veg & Non-Veg Mini Meals",
        items: [
          { name: "Dal Makhani Mini Meal", price: "₹140", numPrice: 140, diet: "veg" },
          { name: "Shahi Paneer / Butter Paneer / Matar Paneer / Kadhai Paneer / Chaap Mini Meal", price: "₹180", numPrice: 180, diet: "veg" },
          { name: "Chicken Curry / Butter Chicken / Lababdar / Kadhai / Rara / Seekh Mini Meal", price: "₹230", numPrice: 230, diet: "nonveg" }
        ]
      },
      {
        title: "Main Course (Veg & Non-Veg)",
        note: "Full / Half",
        items: [
          { name: "Dal Tadka", price: "₹140 / ₹80", numPrice: 140, diet: "veg" },
          { name: "Dal Makhani / Choley Masala / Rajma Masala", price: "₹220 / ₹140", numPrice: 220, diet: "veg" },
          { name: "Paneer Butter Masala / Lababdar / Shahi / Kadhai / Tikka Masala / Chaap", price: "₹250 / ₹150", numPrice: 250, diet: "veg" },
          { name: "Chicken Tikka Masala / Curry / Lababdar / Butter / Kadhai / Korma", price: "₹300 / ₹190", numPrice: 300, diet: "nonveg" },
          { name: "Chicken Rara Punjabi", price: "₹320 / ₹210", numPrice: 320, diet: "nonveg" }
        ]
      },
      {
        title: "Tandoori Snacks, Momos & Chinese",
        items: [
          { name: "Paneer Tikka / Achari Paneer Tikka (10/5 Pc)", price: "₹340 / ₹210", numPrice: 340, diet: "veg" },
          { name: "Afghani / Malai / Tandoori Chaap (8/4 Pc)", price: "₹260 / ₹150", numPrice: 260, diet: "veg" },
          { name: "Tandoori Chicken / Afghani Chicken / Chicken Tikka (8/4 Pc)", price: "₹350 / ₹230", numPrice: 350, diet: "nonveg" },
          { name: "Chicken Tangdi (8/4 Pc)", price: "₹400 / ₹230", numPrice: 400, diet: "nonveg" },
          { name: "Veg Momos (Steamed / Tandoori / Afghani)", price: "₹130–160", numPrice: 130, diet: "veg" },
          { name: "Paneer / Chicken Momos (Steamed / Tandoori / Afghani)", price: "₹150–180", numPrice: 150, diet: "nonveg" },
          { name: "K2FC Chicken Leg / Breast Pc", price: "₹400 / ₹250", numPrice: 400, diet: "nonveg" },
          { name: "Handi Chicken Dum Biryani / Veg Biryani", price: "₹320 / ₹210", numPrice: 320, diet: "nonveg" }
        ]
      }
    ]
  },
  {
    id: "ovenly-gusto",
    name: "Ovenly Gusto",
    tagline: "The OG Pizza • Artisanal Gourmet Pizzas, Pastas & Bruschettas",
    badges: ["Regular / Medium", "Chef Specials"],
    categories: [
      {
        title: "Gourmet Pizzas",
        note: "Regular / Medium",
        items: [
          { name: "The Classic Margherita", price: "₹199 / ₹229", numPrice: 199, diet: "veg" },
          { name: "Garden Fresh Veggies", price: "₹219 / ₹249", numPrice: 219, diet: "veg" },
          { name: "Creamy Mushroom & Parmesan", price: "₹219 / ₹249", numPrice: 219, diet: "veg" },
          { name: "Italian Summer Pizza (Chef's Special)", price: "₹249 / ₹279", numPrice: 249, diet: "veg" },
          { name: "Quattro Formaggi Pizza", price: "₹249 / ₹279", numPrice: 249, diet: "veg" },
          { name: "Tandoori Paneer Pizza", price: "₹259 / ₹289", numPrice: 259, diet: "veg" },
          { name: "Peri Peri Chicken Pizza", price: "₹259 / ₹289", numPrice: 259, diet: "nonveg" },
          { name: "Ultimate Chicken Lovers Pizza", price: "₹269 / ₹299", numPrice: 269, diet: "nonveg" }
        ]
      },
      {
        title: "Pasta & Breads",
        items: [
          { name: "Fiery Arrabbiata (Penne / Spaghetti / Macaroni)", price: "₹169", numPrice: 169, diet: "veg" },
          { name: "Creamy Alfredo", price: "₹179", numPrice: 179, diet: "veg" },
          { name: "Pink Fusion Sauce / Spaghetti Aglio e Olio", price: "₹189", numPrice: 189, diet: "veg" },
          { name: "Creamy Carbonara (Contains Egg)", price: "₹189", numPrice: 189, diet: "egg" },
          { name: "Baked Mac & Cheese", price: "₹199", numPrice: 199, diet: "veg" },
          { name: "Cheesy Garlic Bread / Stuffed Garlic Bread", price: "₹159 / ₹189", numPrice: 159, diet: "veg" },
          { name: "Wild Mushroom Bruschettas", price: "₹199", numPrice: 199, diet: "veg" },
          { name: "Tuscan Chicken Bruschettas", price: "₹209", numPrice: 209, diet: "nonveg" }
        ]
      },
      {
        title: "Sides, Combos & Drinks",
        items: [
          { name: "Plain Fries / Ghost Chilli Fries (Chef's Special)", price: "₹79 / ₹89", numPrice: 79, diet: "veg" },
          { name: "Loaded Fries / Molten Cheese Pops", price: "₹109 / ₹149", numPrice: 109, diet: "veg" },
          { name: "Veg Loaded Nachos / Chicken Loaded Nachos", price: "₹169 / ₹189", numPrice: 169, diet: "veg" },
          { name: "Chilli Chicken Tenders", price: "₹189", numPrice: 189, diet: "nonveg" },
          { name: "Pow Wow Pasta Combo / Mega Munches Combo", price: "₹199 / ₹279", numPrice: 199, diet: "veg" },
          { name: "Snack Attack / Italian Comfort / Garden Fresh Combo", price: "₹289 / ₹369 / ₹389", numPrice: 289, diet: "veg" },
          { name: "Italian Summer Combo / Mega Meal Combo", price: "₹419 / ₹449", numPrice: 419, diet: "veg" },
          { name: "Lemon Mint / Melon Mint Mojito", price: "₹89", numPrice: 89, diet: "veg" },
          { name: "Litchi Buzz Lemonade / Elderflower Chill Ice Tea / Berry Cherry Pop", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Smoky Bourbon Fizz / Island Spice Spritz (Exclusive)", price: "₹119", numPrice: 119, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "snapeats",
    name: "SNAPEATS",
    tagline: "Street Flavours, Kathi Rolls, Tandoori & Classic Indian Combos",
    badges: ["Kulhar Chai", "Thalis & Rolls"],
    categories: [
      {
        title: "Chai Nagri, Hot & Cold Beverages",
        items: [
          { name: "Adrak Chai / Masala Chai (Cup / Kulhar)", price: "₹10 / ₹20", numPrice: 10, diet: "veg" },
          { name: "Cappuccino / Hot Coffee / Hot Chocolate", price: "₹49 / ₹49 / ₹59", numPrice: 49, diet: "veg" },
          { name: "Cold Coffee / Frappes / Shakes / Mojitos / Iced Tea", price: "₹85", numPrice: 85, diet: "veg" }
        ]
      },
      {
        title: "Sandwiches, Burgers & Street Flavours",
        items: [
          { name: "Vada Pao / Paneer Bread Pakora", price: "₹49", numPrice: 49, diet: "veg" },
          { name: "Pao Bhaji / Chole Bhature", price: "₹70 / ₹89", numPrice: 70, diet: "veg" },
          { name: "Veg Sandwich / Cheese Sandwich / Paneer Tikka Sandwich", price: "₹69 / ₹99 / ₹99", numPrice: 69, diet: "veg" },
          { name: "Chicken Tikka / Seekh Kebab Sandwich", price: "₹129", numPrice: 129, diet: "nonveg" },
          { name: "Veg Burger / Cheese Burger / Peppy Paneer Burger", price: "₹59 / ₹69 / ₹109", numPrice: 59, diet: "veg" },
          { name: "Egg & Mayo Burger / Chicken Burger", price: "₹99 / ₹129", numPrice: 99, diet: "egg" },
          { name: "Classic Bread Omelette / Cheese Bread Omelette / Chicken Bread Omelette", price: "₹79 / ₹99 / ₹129", numPrice: 79, diet: "egg" }
        ]
      },
      {
        title: "Crispy Snacks, Soups & Dimsums",
        items: [
          { name: "Classic Salted Fries / Peri Peri Fries / Potato Wedges / Sweet Corn", price: "₹80–99", numPrice: 80, diet: "veg" },
          { name: "Crispy Corn / Honey Chilly Potato / Veg Manchurian Dry", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "Chilly Paneer Dry / Crispy Chicken", price: "₹159", numPrice: 159, diet: "veg" },
          { name: "Chicken Manchurian Dry / Chilly Chicken Dry", price: "₹249", numPrice: 249, diet: "nonveg" },
          { name: "Veg Momos / Paneer Momos (8 Pcs — Steamed / Fried)", price: "₹99–129", numPrice: 99, diet: "veg" },
          { name: "Chicken Momos (8 Pcs — Steamed / Fried)", price: "₹129 / ₹139", numPrice: 129, diet: "nonveg" },
          { name: "Veg Cigar Rolls / Chicken Cigar Rolls", price: "₹119 / ₹139", numPrice: 119, diet: "veg" }
        ]
      },
      {
        title: "Dil Se Tandoori & Kathi Rolls",
        items: [
          { name: "Malai Soya Chap / Tandoori Mushroom (8 Pcs)", price: "₹199", numPrice: 199, diet: "veg" },
          { name: "Malai Paneer Tikka (8 Pcs)", price: "₹249", numPrice: 249, diet: "veg" },
          { name: "Chicken Tikka / Seekh Kebab Chicken (8 Pcs)", price: "₹299", numPrice: 299, diet: "nonveg" },
          { name: "Tandoori Chicken (Half / Full)", price: "₹199 / ₹349", numPrice: 199, diet: "nonveg" },
          { name: "Veg Kathi / Noodle / Soya Chap / Creamy Soya Roll", price: "₹89–99", numPrice: 89, diet: "veg" },
          { name: "Paneer Kathi / Makhani / Schezwan Roll", price: "₹119–139", numPrice: 119, diet: "veg" },
          { name: "Egg Roll / Noodle Egg Roll", price: "₹89 / ₹109", numPrice: 89, diet: "egg" },
          { name: "Chicken Achari / Kebab / Tikka / Shawarma / Mutton Kebab Roll", price: "₹129–189", numPrice: 129, diet: "nonveg" }
        ]
      },
      {
        title: "Classic Indian Combos & Continental",
        items: [
          { name: "White / Red / Mix Pasta", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Cheese Pasta / Chicken Pasta", price: "₹139 / ₹149", numPrice: 139, diet: "veg" },
          { name: "Aloo Pyaz / Paneer Parantha with Curd & Pickle", price: "₹90 / ₹99", numPrice: 90, diet: "veg" },
          { name: "Egg Parantha / Chicken Keema Parantha Combo", price: "₹119 / ₹139", numPrice: 119, diet: "egg" },
          { name: "Premium Thali (Veg / Non-Veg)", price: "₹199 / ₹299", numPrice: 199, diet: "veg" },
          { name: "Chinese Platter (Veg / Non-Veg)", price: "₹249 / ₹349", numPrice: 249, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "infinity-kitchens",
    name: "Infinity Kitchens",
    tagline: "All-Day Campus Canteen • Parathas, Wraps, Frappes & Multigrain Sandwiches",
    badges: ["Multigrain Options", "Budget Friendly"],
    categories: [
      {
        title: "Crunch N Munch, Burgers & Pasta",
        items: [
          { name: "Aloo Samosa", price: "₹20", numPrice: 20, diet: "veg" },
          { name: "Veg Patty / Paneer Patty", price: "₹32 / ₹42", numPrice: 32, diet: "veg" },
          { name: "Kachori Sabji / Samosa Chhole", price: "₹50", numPrice: 50, diet: "veg" },
          { name: "Veg Burger / Cheese Burger", price: "₹63 / ₹74", numPrice: 63, diet: "veg" },
          { name: "Crispy Paneer Burger / Maharaja Burger", price: "₹116 / ₹140", numPrice: 116, diet: "veg" },
          { name: "Chicken Burger / Chicken Tikka / Makhani Burger", price: "₹90 / ₹120 / ₹129", numPrice: 90, diet: "nonveg" },
          { name: "White Sauce / Red Sauce / Mix Sauce Pasta", price: "₹105 / ₹105 / ₹126", numPrice: 105, diet: "veg" }
        ]
      },
      {
        title: "Sandwiches, Multigrain & Toast",
        items: [
          { name: "Aloo Tikki / Cheese Grilled Sandwich", price: "₹95", numPrice: 95, diet: "veg" },
          { name: "Cheese Pizza Grilled / Cheese Corn / Tandoori Soya / Paneer Masala", price: "₹126", numPrice: 126, diet: "veg" },
          { name: "Multigrain Veg Grilled Sandwich", price: "₹73", numPrice: 73, diet: "veg" },
          { name: "Multigrain Crispy Veg / Jungle Paneer / Crispy Paneer", price: "₹94", numPrice: 94, diet: "veg" },
          { name: "Garlic Toast with Cheese (2pc / 4pc)", price: "₹68 / ₹120", numPrice: 68, diet: "veg" },
          { name: "Chicken Tikka / Keema / Schezwan / Makhani Sandwich", price: "₹158", numPrice: 158, diet: "nonveg" },
          { name: "Chicken Kebab / Salami / Tandoori Tikka Sandwich", price: "₹179", numPrice: 179, diet: "nonveg" }
        ]
      },
      {
        title: "Parathas, Omelettes & Wraps",
        items: [
          { name: "Aloo / Aloo Pyaz / Pyaz / Mix / Gobhi Paratha", price: "₹75", numPrice: 75, diet: "veg" },
          { name: "Paneer / Egg / Aloo Paneer / Paneer Pyaz Paratha", price: "₹95", numPrice: 95, diet: "veg" },
          { name: "Plain / Masala / Bread / Cheese Omelette", price: "₹58–93", numPrice: 58, diet: "egg" },
          { name: "Soya Chap Wrap", price: "₹116", numPrice: 116, diet: "veg" },
          { name: "Paneer Tikka / Bhurji / Shawarma / Makhani / Schezwan Wrap", price: "₹137–152", numPrice: 137, diet: "veg" },
          { name: "Egg Wrap (2 Egg)", price: "₹95", numPrice: 95, diet: "egg" },
          { name: "Chicken Kabab / Tikka / Makhani / Shawarma / Achari Wrap", price: "₹180–190", numPrice: 180, diet: "nonveg" }
        ]
      },
      {
        title: "Chai, Cold Coffee, Shakes & Crushers",
        items: [
          { name: "Adrak Chai / Masala Chai / Kadak Elaichi / Lemon Tea", price: "₹11–26", numPrice: 11, diet: "veg" },
          { name: "Cappuccino / Latte / Mocha / Hazelnut / Irish Hot Coffee", price: "₹60–80", numPrice: 60, diet: "veg" },
          { name: "Cold Coffee / Caramel / Hazelnut / Irish Frappe", price: "₹69–199", numPrice: 69, diet: "veg" },
          { name: "Cold Coffee with Ice Cream (Ice Latte, Mocha, Brownie, Nutella, Tiramisu)", price: "₹116–158", numPrice: 116, diet: "veg" },
          { name: "Exotic Shakes (Oreo, KitKat, Peanut Butter, Red Velvet, Nutella, Biscoff)", price: "₹147–168", numPrice: 147, diet: "veg" },
          { name: "Mojitos (Classic Mint, Kiwi, Peach, Green Apple, Strawberry, Blueberry)", price: "₹105", numPrice: 105, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "nescafe-hotspot",
    name: "Nescafe Hotspot",
    tagline: "Signature Maggi Bowls, Freshly Brewed Espresso & Frappes",
    badges: ["Maggi & Pazzta", "Regular / Large"],
    categories: [
      {
        title: "Maggi Noodles, Pazzta & Bowls",
        items: [
          { name: "Special: Double Maggi", price: "₹45", numPrice: 45, diet: "veg" },
          { name: "Select: Butter / Oregano / Rosemary / Corn Maggi", price: "₹50", numPrice: 50, diet: "veg" },
          { name: "Premium: Atta Masala / Onion Capsicum / Peri Peri / Fusion / Oats Masala", price: "₹55", numPrice: 55, diet: "veg" },
          { name: "Exotic: Butter Double Masala / Cheese / Schezwan / Chilli Garlic / Pazzta / Macaroni", price: "₹60", numPrice: 60, diet: "veg" },
          { name: "Limited: Onion Capsicum Butter / Corn & Cheese / Chilli Garlic Cheese", price: "₹70", numPrice: 70, diet: "veg" },
          { name: "Extras: Cheese / Butter / Dry Masala / Vegetables", price: "₹15", numPrice: 15, diet: "veg" }
        ]
      },
      {
        title: "Hot Coffee, Tea & Cold Frappes",
        items: [
          { name: "Select: Espresso / Cardamom Tea / Milk / Masala Tea", price: "₹20", numPrice: 20, diet: "veg" },
          { name: "Premium: Cappuccino / Café Latte / Ginger & Honey / Assam / Darjeeling Tea", price: "₹30", numPrice: 30, diet: "veg" },
          { name: "Exotic: Café Mocha / Hot Chocolate", price: "₹35", numPrice: 35, diet: "veg" },
          { name: "Limited: Irish / Caramel / Hazelnut Cappuccino", price: "₹40", numPrice: 40, diet: "veg" },
          { name: "Lemon Ice Tea / Special Masala Lemon Ice Tea (Reg / Large)", price: "₹40–45 / ₹75–85", numPrice: 40, diet: "veg" },
          { name: "Classic Frappe (Reg / Large)", price: "₹55 / ₹105", numPrice: 55, diet: "veg" },
          { name: "Frappe Mocha / Cold Chocolate", price: "₹60", numPrice: 60, diet: "veg" },
          { name: "Caramel / Honey / Chocolate / Hazelnut / Cookie / KitKat / Munch Nuts Frappe", price: "₹75", numPrice: 75, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "momo-box",
    name: "The Momo Box",
    tagline: "Steamed, Kurkure & Jhol Momos in 9 Signature Sauces",
    badges: ["Jhol Momos", "9 Custom Sauces"],
    categories: [
      {
        title: "Classic & Kurkure Momos",
        items: [
          { name: "Mix Veg Steamed Momos", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Paneer Steamed Momos / Mix Veg Kurkure Momos", price: "₹169", numPrice: 169, diet: "veg" },
          { name: "Paneer Kurkure Momos", price: "₹189", numPrice: 189, diet: "veg" },
          { name: "Corn Cheese Kurkure Momos", price: "₹209", numPrice: 209, diet: "veg" },
          { name: "Chicken Steamed Momos", price: "₹189", numPrice: 189, diet: "nonveg" },
          { name: "Chicken Kurkure Momos", price: "₹209", numPrice: 209, diet: "nonveg" },
          { name: "Chicken & Cheese Kurkure Momos", price: "₹229", numPrice: 229, diet: "nonveg" },
          { name: "Toss Any Base Momo in Signature Sauce (Dynamite Cheetos, Khausey, Schezwan, Afghani, Green Thai, Korean BBQ, Makhani, Red Thai, Peri Peri)", price: "+₹30", numPrice: 30, diet: "veg" }
        ]
      },
      {
        title: "Jhol Momos, Rice Bowls & Sides",
        items: [
          { name: "The Ultimate Jhol Momo — Mix Veg", price: "₹179", numPrice: 179, diet: "veg" },
          { name: "The Ultimate Jhol Momo — Paneer", price: "₹199", numPrice: 199, diet: "veg" },
          { name: "The Ultimate Jhol Momo — Chicken", price: "₹229", numPrice: 229, diet: "nonveg" },
          { name: "Rice Bowl with Curry of Choice — Paneer", price: "₹189", numPrice: 189, diet: "veg" },
          { name: "Rice Bowl with Curry of Choice — Chicken", price: "₹189", numPrice: 189, diet: "nonveg" },
          { name: "Chilli Potato Sides (Sweet Chilli / Korean Chilli / Schezwan Chilli)", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Kurkure Spring Rolls", price: "₹99", numPrice: 99, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "eggspert",
    name: "Eggspert",
    tagline: "All-Things-Egg Kitchen • Signature Egg Mains, Rolls & French Toast",
    badges: ["Egg Specialists", "Veg & Chicken Options"],
    categories: [
      {
        title: "Egg Station & Egg Signature",
        items: [
          { name: "Boiled Eggs (Classic / Peri Peri / Garlic Podi / Masala)", price: "₹99–119", numPrice: 99, diet: "egg" },
          { name: "Half Fry (Sunny Side / Butter Garlic / Soy Sesame)", price: "₹99–129", numPrice: 99, diet: "egg" },
          { name: "Omelette (Masala / Cheese Masala)", price: "₹149 / ₹169", numPrice: 149, diet: "egg" },
          { name: "Classic Bread Omelette", price: "₹169", numPrice: 169, diet: "egg" },
          { name: "Egg Lollipop", price: "₹169", numPrice: 169, diet: "egg" },
          { name: "Japanese Panko Fried Egg", price: "₹189", numPrice: 189, diet: "egg" },
          { name: "Egg Ghee Roast / Kung Pao Chilli Egg", price: "₹199", numPrice: 199, diet: "egg" },
          { name: "Butter Garlic Egg", price: "₹229", numPrice: 229, diet: "egg" },
          { name: "Korean Noodle Omelette / Egg Galouti Kebab", price: "₹249", numPrice: 249, diet: "egg" }
        ]
      },
      {
        title: "Big Bite Rolls & Explosive Meals",
        items: [
          { name: "Classic Egg Roll / Aloo Masala Roll", price: "₹129", numPrice: 129, diet: "egg" },
          { name: "Double Egg Roll", price: "₹139", numPrice: 139, diet: "egg" },
          { name: "Egg Galouti Roll / Smoked Paneer Tikka Roll / Chicken Seekh Roll", price: "₹189", numPrice: 189, diet: "egg" },
          { name: "Smoked Chicken Tikka Roll / Crispy Chicken Roll", price: "₹199 / ₹229", numPrice: 199, diet: "nonveg" },
          { name: "Anda Masala Curry / Omelette Masala", price: "₹249 / ₹259", numPrice: 249, diet: "egg" },
          { name: "Anda Ghotala", price: "₹279", numPrice: 279, diet: "egg" },
          { name: "Paneer Tikka Masala / Chicken Tikka Masala", price: "₹289", numPrice: 289, diet: "veg" },
          { name: "Egg Thai Curry / Exotic Veg Thai Curry", price: "₹329", numPrice: 329, diet: "egg" }
        ]
      },
      {
        title: "Munchers, Meal Bowls, Desserts & Drinks",
        items: [
          { name: "Vada Pao (Classic / Egg)", price: "₹69 / ₹89", numPrice: 69, diet: "veg" },
          { name: "French Fries (Salted / Peri Peri / Garlic Podi)", price: "₹89–99", numPrice: 89, diet: "veg" },
          { name: "2 Min Maggi (Masala / Egg Masala / Cheese Masala)", price: "₹89 / ₹109 / ₹129", numPrice: 89, diet: "veg" },
          { name: "Crispy Egg Wedges / Korean Fried Chicken", price: "₹149–159 / ₹249", numPrice: 149, diet: "egg" },
          { name: "Veggie Power Bowl (Add Egg/Paneer +₹60)", price: "₹249", numPrice: 249, diet: "veg" },
          { name: "Choco Lava / Classic French Toast / Nutella French Toast", price: "₹99 / ₹199 / ₹229", numPrice: 99, diet: "egg" },
          { name: "Chai (Masala / Ginger) / Hot Coffee", price: "₹49", numPrice: 49, diet: "veg" },
          { name: "Virgin Mojito / Watermelon Mint / Aam Panna / Cold Coffee", price: "₹129–199", numPrice: 129, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "burrito-bro",
    name: "Burrito Bro",
    tagline: "Tex-Mex Street Kitchen • High-Protein Burritos, Tacos & Rice Bowls",
    badges: ["100% Pure Veg", "High-Protein Macros"],
    categories: [
      {
        title: "Burritos",
        items: [
          { name: "The Minty Chola Culprit (18g Protein)", price: "₹169", numPrice: 169, diet: "veg", desc: "Minty chola filling, peri peri salad, mint chutney & nachos" },
          { name: "The OG Soya Mushroom (20g Protein)", price: "₹179", numPrice: 179, diet: "veg", desc: "Mushroom soya filling, chipotle sauce, cheese, lettuce, rice & nachos" },
          { name: "The Ratatouille Bandit (16g Protein)", price: "₹179", numPrice: 179, diet: "veg", desc: "Ratatouille, refried beans, sour cream, cheese, lettuce & nachos" },
          { name: "The Paneer Pistolero (18g Protein)", price: "₹179", numPrice: 179, diet: "veg", desc: "Paneer filling, tandoori sauce, cheese, lettuce, rice & nachos" },
          { name: "The Exotic Veggie Bandit (16g Protein)", price: "₹189", numPrice: 189, diet: "veg", desc: "Zucchini & bell pepper filling, hummus, cheese, lettuce & nachos" }
        ]
      },
      {
        title: "Tacos, Quesadillas & Rice Bowls",
        items: [
          { name: "The Paneer Peri Peri Taco (Single / Double)", price: "₹89 / ₹169", numPrice: 89, diet: "veg" },
          { name: "Mr. Veg Crunch Taco (Single / Double)", price: "₹89 / ₹169", numPrice: 89, diet: "veg" },
          { name: "Bro's Special Tikki Taco (Single / Double)", price: "₹89 / ₹169", numPrice: 89, diet: "veg" },
          { name: "Bean Bandit Quesadilla / Pesto Impostor Quesadilla", price: "₹79 / ₹89", numPrice: 79, diet: "veg" },
          { name: "The Chola Smuggler Rice Bowl", price: "₹169", numPrice: 169, diet: "veg" },
          { name: "The Bean Bootlegger Rice Bowl", price: "₹179", numPrice: 179, diet: "veg" },
          { name: "The Paneer Prowler Rice Bowl", price: "₹189", numPrice: 189, diet: "veg" }
        ]
      },
      {
        title: "Nachos, Combos & Drinks",
        items: [
          { name: "The Cheese Kingpin Nachos / The Chola Cartel Nachos", price: "₹79 / ₹89", numPrice: 79, diet: "veg" },
          { name: "Double Burrito Trouble Combo (Any 2 Burritos)", price: "₹309", numPrice: 309, diet: "veg" },
          { name: "The Hot Pursuit (Hot Drink) / The Masala Fizz Bandit", price: "₹59 / ₹89", numPrice: 59, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "bigg-bear-bites",
    name: "Bigg Bear Bites",
    tagline: "Subs, Maggi, Salads, Nutri Kulchas & Value Combos",
    badges: ["Value Combos", "Healthy Salads"],
    categories: [
      {
        title: "Bigg Bear Subs & Wraps",
        items: [
          { name: "Aloo Tikki Sub / Spicy Barbeque Sub", price: "₹79 / ₹89", numPrice: 79, diet: "veg" },
          { name: "Spicy Salsa / Mexican King / Paneer / Paneer Tikka Sub", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Grilled Chicken Sub / Chicken Seekh Sub", price: "₹99 / ₹109", numPrice: 99, diet: "nonveg" },
          { name: "Classic Veg Wrap / Mexican Salsa Wrap / Grilled Paneer Wrap", price: "₹89 / ₹109 / ₹119", numPrice: 89, diet: "veg" },
          { name: "Grilled Chicken Wrap / Chicken Seekh Kabab Wrap", price: "₹119 / ₹129", numPrice: 119, diet: "nonveg" }
        ]
      },
      {
        title: "Maggi, Patties, Bun Maska & Toasties",
        items: [
          { name: "Adraki Chai / Masala Chai", price: "₹15 / ₹20", numPrice: 15, diet: "veg" },
          { name: "Butter Bun Maska / Chocolate / Cheese Pineapple / Butter Scotch Crunch", price: "₹49–99", numPrice: 49, diet: "veg" },
          { name: "Aloo / Paneer / Mushroom / Stuffed Kulcha / Makhni Paneer / Cheese Corn Patties", price: "₹40–69", numPrice: 40, diet: "veg" },
          { name: "Chicken Patties (Peri Peri, Chicken Tikka, Makhni, Cheesy, Butter Chicken)", price: "₹79–89", numPrice: 79, diet: "nonveg" },
          { name: "Maggi (Butter Double Masala, Hot Spicy Passion, Veg Masala, Cheese Chatpati, Chilli Garlic)", price: "₹59–99", numPrice: 59, diet: "veg" },
          { name: "Egg Maggi / Egg Cheese Maggi", price: "₹99", numPrice: 99, diet: "egg" },
          { name: "Nutri Kulcha / Masala Nutri Kulcha / Cheese Masala Nutri Kulcha", price: "₹99 / ₹99 / ₹119", numPrice: 99, diet: "veg" },
          { name: "Bread Toast / Italian Toast / Peri Peri Cheese Blast / Korean Spicy Paneer Toastie", price: "₹60–99", numPrice: 60, diet: "veg" }
        ]
      },
      {
        title: "Salads, Nachos, Fries & Mojitos",
        items: [
          { name: "Veg Salads (Veggie Delight, Sprouts Chana, Corn & Peas, Paneer Tikka)", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Non-Veg Salads (Grilled Chicken, Peri Peri Chicken, Creamy Chicken)", price: "₹199", numPrice: 199, diet: "nonveg" },
          { name: "Nachos (Cheesy Dip / Cheesy Delight / Salsa)", price: "₹89–109", numPrice: 89, diet: "veg" },
          { name: "Salted Fries / Peri Peri Fries / Sweet Corn", price: "₹69–99", numPrice: 69, diet: "veg" },
          { name: "Mojitos (Surprise, Strawberry, Korean, Tangy Mango, Pineapple, Litchi, Mint, Blue Heaven, Peach, Rose Petal)", price: "₹89", numPrice: 89, diet: "veg" }
        ]
      },
      {
        title: "Signature Combos",
        items: [
          { name: "Chai Chaska (Butter Bun Maska + Adraki Chai)", price: "₹59", numPrice: 59, diet: "veg" },
          { name: "Breakfast Combo (Sprouts Chana Salad + Bread Toast + Adraki Chai)", price: "₹109", numPrice: 109, diet: "veg" },
          { name: "Maggie Mojito Combo (Butter Double Masala Maggi + Any Mojito)", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "Snack & Sip (Nachos or Salted Fries + Any Mojito)", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Bunk & Bite (Maggi / Nutri Kulcha / Toastie / Veg Sub + Any Mojito)", price: "₹159", numPrice: 159, diet: "veg" },
          { name: "Bigg Bear Feast (Any Sub or Maggi + Salted Fries + Any Mojito)", price: "₹249", numPrice: 249, diet: "veg" },
          { name: "Bigg Bear Squad (Any 2 Subs or Maggi + Salted Fries + 2 Mojitos)", price: "₹399", numPrice: 399, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "bbf",
    name: "BBF",
    tagline: "2-Piece Stuffed Buns, Gourmet Smash Burgers, Lasagna Fries & Shakes",
    badges: ["Buns Served 2 at a Time", "Super Combos"],
    categories: [
      {
        title: "Buns (Served 2 at a Time)",
        items: [
          { name: "Bun Shammi Veg / Mumbai Bun Vada / Bun Beetroot Kebab", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Bun Hara Bhara Kebab / Bun Mushroom Galouti / Soya Bun Kheema", price: "₹99", numPrice: 99, diet: "veg" },
          { name: "Bun Chicken Shammi", price: "₹129", numPrice: 129, diet: "nonveg" },
          { name: "Chicken Bun Kheema", price: "₹139", numPrice: 139, diet: "nonveg" }
        ]
      },
      {
        title: "Burgers",
        items: [
          { name: "The Veg Classic Chase", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "The K-Town Cheese Blast", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "The Soya Protein Dripper", price: "₹159", numPrice: 159, diet: "veg" },
          { name: "3B Mexican Mafia", price: "₹169", numPrice: 169, diet: "veg" },
          { name: "The Mush Have Truffle Trouble", price: "₹199", numPrice: 199, diet: "veg" },
          { name: "The Chicken Classic Chase", price: "₹149", numPrice: 149, diet: "nonveg" },
          { name: "Korean Streetblast Chicken / Redlight Chicken Zinger", price: "₹169", numPrice: 169, diet: "nonveg" }
        ]
      },
      {
        title: "Crinkle Fries, Shakes & Super Combos",
        items: [
          { name: "Classic Crinkle Fries / Peri Peri Crinkle Fries", price: "₹89 / ₹99", numPrice: 89, diet: "veg" },
          { name: "Loaded Cheesy Chipotle Fries", price: "₹129", numPrice: 129, diet: "veg" },
          { name: "Loaded Soya Lasagna Fries", price: "₹149", numPrice: 149, diet: "veg" },
          { name: "Loaded Chicken Zinger Fries / Loaded Chicken Lasagna Fries", price: "₹149 / ₹169", numPrice: 149, diet: "nonveg" },
          { name: "Veg Bun Combo (Any 2 Veg Buns + Crinkle Fries + Beverage)", price: "₹198", numPrice: 198, diet: "veg" },
          { name: "Loaded Combo (Loaded Cheesy Chipotle Fries + Any Smoothie)", price: "₹218", numPrice: 218, diet: "veg" },
          { name: "Veg Classic Combo (Burger + Fries + Beverage)", price: "₹228", numPrice: 228, diet: "veg" },
          { name: "Chicken Classic Combo (Burger + Fries + Beverage)", price: "₹248", numPrice: 248, diet: "nonveg" },
          { name: "Softy Cones (Vanilla / Chocolate / Swirl) & Thick Shakes (Add-on)", price: "₹99 / ₹89", numPrice: 99, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "dominos",
    name: "Domino's Pizza",
    tagline: "Official Menu • Hand-Tossed Pizzas, Pizza Mania, Garlic Breads & Lava Cake",
    badges: ["Official Menu", "Regular / Medium"],
    categories: [
      {
        title: "Veg Pizzas",
        note: "Regular / Medium",
        items: [
          { name: "Margherita", price: "₹109 / ₹239", numPrice: 109, diet: "veg" },
          { name: "Fresh Veggie / Corn & Cheese", price: "₹179 / ₹319", numPrice: 179, diet: "veg" },
          { name: "Farmhouse / Peppy Paneer / Mexican Green Wave", price: "₹259 / ₹459", numPrice: 259, diet: "veg" },
          { name: "Deluxe Veggie / Veg Extravaganza / Paneer Makhani", price: "₹299 / ₹549", numPrice: 299, diet: "veg" },
          { name: "Cheese Volcano Peppy Paneer / Farmhouse (Medium)", price: "₹499", numPrice: 499, diet: "veg" }
        ]
      },
      {
        title: "Non-Veg Pizzas",
        note: "Regular / Medium",
        items: [
          { name: "Chicken Sausage / Pepper Barbecue Chicken", price: "₹199–249 / ₹369–449", numPrice: 199, diet: "nonveg" },
          { name: "Chicken Golden Delight / Chicken Dominator", price: "₹299–359 / ₹549–599", numPrice: 299, diet: "nonveg" },
          { name: "Non-Veg Supreme / Chicken Fiesta / Indi Chicken Tikka", price: "₹319 / ₹579", numPrice: 319, diet: "nonveg" }
        ]
      },
      {
        title: "Pizza Mania, Sides & Desserts",
        items: [
          { name: "Pizza Mania: Classic / Onion / Paneer & Capsicum", price: "₹49–99", numPrice: 49, diet: "veg" },
          { name: "Pizza Mania: Chicken Sausage / Pepper BBQ Chicken", price: "₹99–119", numPrice: 99, diet: "nonveg" },
          { name: "Classic Garlic Breadsticks", price: "₹109", numPrice: 109, diet: "veg" },
          { name: "Stuffed Garlic Bread (Classic / Paneer Tikka)", price: "₹159 / ₹169", numPrice: 159, diet: "veg" },
          { name: "Chicken Pepperoni Stuffed Garlic Bread", price: "₹179", numPrice: 179, diet: "nonveg" },
          { name: "Taco Mexicana (Veg / Non-Veg)", price: "₹139 / ₹169", numPrice: 139, diet: "veg" },
          { name: "Zingy Parcel (Veg / Chicken)", price: "₹49 / ₹59", numPrice: 49, diet: "veg" },
          { name: "Choco Lava Cake / Butterscotch Mousse Cake", price: "₹109 / ₹109", numPrice: 109, diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "subway",
    name: "Subway",
    tagline: "Official Menu • Custom 6-Inch & Footlong Subs, Signature Wraps & Salads",
    badges: ["Official Menu", "6-Inch / Footlong"],
    categories: [
      {
        title: "Vegetarian Subs",
        note: "6-Inch / Footlong",
        items: [
          { name: "Veggie Delite", price: "₹219 / ₹399", numPrice: 219, diet: "veg" },
          { name: "Aloo Patty / Hara Bhara Kebab / Mexican Patty", price: "₹239 / ₹439", numPrice: 239, diet: "veg" },
          { name: "Corn & Peas", price: "₹239 / ₹439", numPrice: 239, diet: "veg" },
          { name: "Paneer Tikka / Tandoori Tofu", price: "₹259 / ₹479", numPrice: 259, diet: "veg" },
          { name: "Veg Shammi / Crispy Veg Patty", price: "₹249 / ₹459", numPrice: 249, diet: "veg" }
        ]
      },
      {
        title: "Non-Vegetarian Subs",
        note: "6-Inch / Footlong",
        items: [
          { name: "Roasted Chicken / Chicken Slice", price: "₹269 / ₹499", numPrice: 269, diet: "nonveg" },
          { name: "Chicken Teriyaki / Peri Peri Chicken", price: "₹289 / ₹529", numPrice: 289, diet: "nonveg" },
          { name: "Chicken Tikka / Tandoori Chicken", price: "₹289 / ₹529", numPrice: 289, diet: "nonveg" },
          { name: "Chicken Seekh / Chicken Kofta", price: "₹279 / ₹509", numPrice: 279, diet: "nonveg" },
          { name: "Tuna Sub", price: "₹299 / ₹549", numPrice: 299, diet: "nonveg" }
        ]
      },
      {
        title: "Signature Wraps, Toasties & Cookies",
        items: [
          { name: "Paneer Tikka Signature Wrap / Mexican Patty Wrap", price: "₹269 / ₹249", numPrice: 249, diet: "veg" },
          { name: "Chicken Tikka Signature Wrap / Peri Peri Chicken Wrap", price: "₹299", numPrice: 299, diet: "nonveg" },
          { name: "Cheesy Paneer Toastie / Chicken Pepperoni Toastie", price: "₹149 / ₹169", numPrice: 149, diet: "veg" },
          { name: "Any Sub into Salad Upgrade", price: "+₹40", numPrice: 40, diet: "veg" },
          { name: "Choco Chip / Double Dark Chocolate / Oatmeal Raisin Cookie", price: "₹59", numPrice: 59, diet: "veg" }
        ]
      }
    ]
  }
];

// Application State
let currentOutletId = null; // null = Directory View, string = Single Outlet Menu View
let activeDiet = "all";
let searchQuery = "";
let tray = [];

// DOM Elements
const heroSection = document.getElementById("heroSection");
const outletsDirectoryView = document.getElementById("outletsDirectoryView");
const singleOutletView = document.getElementById("singleOutletView");
const outletsGrid = document.getElementById("outletsGrid");
const activeOutletContainer = document.getElementById("activeOutletContainer");
const quickSwitcher = document.getElementById("quickSwitcher");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const dishCountEl = document.getElementById("dishCount");
const trayDrawer = document.getElementById("trayDrawer");
const trayItemsEl = document.getElementById("trayItems");
const trayTotalEl = document.getElementById("trayTotal");
const trayBadgeEl = document.getElementById("trayBadge");

// Calculate total dishes across all outlets
function updateGlobalStats() {
  const total = MENU_DATA.reduce((sum, outlet) => {
    return sum + outlet.categories.reduce((catSum, cat) => catSum + cat.items.length, 0);
  }, 0);
  dishCountEl.textContent = total;
}

// Build Quick Switcher Dropdown inside Single Outlet View
function buildQuickSwitcher() {
  const options = MENU_DATA.map(
    o => `<option value="${o.id}">${o.name}</option>`
  ).join("");
  quickSwitcher.innerHTML = `<select id="outletSelect" aria-label="Switch Outlet">${options}</select>`;
  document.getElementById("outletSelect").addEventListener("change", (e) => {
    openOutletMenu(e.target.value);
  });
}

// Render Directory Grid (View 1)
function renderDirectory() {
  outletsGrid.innerHTML = "";
  const query = searchQuery.trim().toLowerCase();
  let visibleCount = 0;

  MENU_DATA.forEach((outlet, index) => {
    const outletMatches =
      outlet.name.toLowerCase().includes(query) ||
      outlet.tagline.toLowerCase().includes(query);

    // Count matching items inside this outlet
    let matchingDishCount = 0;
    outlet.categories.forEach(cat => {
      const catMatches = cat.title.toLowerCase().includes(query);
      cat.items.forEach(item => {
        const dietOk = activeDiet === "all" || item.diet === activeDiet;
        if (!dietOk) return;
        if (!query || outletMatches || catMatches || item.name.toLowerCase().includes(query)) {
          matchingDishCount++;
        }
      });
    });

    if (matchingDishCount === 0) return;
    visibleCount++;

    const card = document.createElement("div");
    card.className = "outlet-card";
    card.innerHTML = `
      <div>
        <div class="outlet-card-top">
          <span class="outlet-number">Outlet ${String(index + 1).padStart(2, "0")}</span>
          <span class="badge">${outlet.badges[0]}</span>
        </div>
        <h2>${outlet.name}</h2>
        <p>${outlet.tagline}</p>
      </div>
      <div class="outlet-card-footer">
        <span class="item-count-tag">${matchingDishCount} ${matchingDishCount === 1 ? "item" : "items"} available</span>
        <span class="view-menu-cta">View Menu →</span>
      </div>
    `;

    card.addEventListener("click", () => openOutletMenu(outlet.id));
    outletsGrid.appendChild(card);
  });

  if (visibleCount === 0) {
    outletsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No matching outlets or dishes</h3>
        <p>Try clearing your search term or switching the dietary filter back to "All".</p>
      </div>
    `;
  }
}

// Open Specific Outlet Menu (View 2)
function openOutletMenu(outletId) {
  currentOutletId = outletId;
  heroSection.classList.add("hidden");
  outletsDirectoryView.classList.add("hidden");
  singleOutletView.classList.remove("hidden");

  const selectEl = document.getElementById("outletSelect");
  if (selectEl) selectEl.value = outletId;

  renderSingleOutlet();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Return to All Outlets Grid (View 1)
function showAllOutlets() {
  currentOutletId = null;
  singleOutletView.classList.add("hidden");
  heroSection.classList.remove("hidden");
  outletsDirectoryView.classList.remove("hidden");
  renderDirectory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render Single Outlet Categories & Items
function renderSingleOutlet() {
  const outlet = MENU_DATA.find(o => o.id === currentOutletId);
  if (!outlet) return;

  const query = searchQuery.trim().toLowerCase();
  const outletMatches =
    outlet.name.toLowerCase().includes(query) ||
    outlet.tagline.toLowerCase().includes(query);

  const filteredCategories = outlet.categories
    .map(cat => {
      const catMatches = cat.title.toLowerCase().includes(query);
      const matchedItems = cat.items.filter(item => {
        const dietOk = activeDiet === "all" || item.diet === activeDiet;
        if (!dietOk) return false;
        if (!query || outletMatches || catMatches) return true;
        return (
          item.name.toLowerCase().includes(query) ||
          (item.desc && item.desc.toLowerCase().includes(query))
        );
      });
      return { ...cat, items: matchedItems };
    })
    .filter(cat => cat.items.length > 0);

  const badgesHtml = outlet.badges
    .map(b => `<span class="badge">${b}</span>`)
    .join("");

  let categoriesHtml = "";
  if (filteredCategories.length === 0) {
    categoriesHtml = `
      <div class="empty-state">
        <h3>No matching dishes in ${outlet.name}</h3>
        <p>Clear the search bar or switch dietary filters to see the full menu.</p>
      </div>
    `;
  } else {
    filteredCategories.forEach(cat => {
      const itemsHtml = cat.items
        .map(item => {
          const safeName = item.name.replace(/"/g, "&quot;");
          const safeOutlet = outlet.name.replace(/"/g, "&quot;");
          return `
            <li class="menu-item">
              <div class="item-left">
                <span class="diet-dot ${item.diet}" title="${item.diet.toUpperCase()}"></span>
                <div>
                  <span class="item-name">${item.name}</span>
                  ${item.desc ? `<span class="item-desc">${item.desc}</span>` : ""}
                </div>
              </div>
              <div class="item-right">
                <span class="item-price">${item.price}</span>
                <button class="add-btn" title="Add to Meal Planner"
                  onclick="addToTray('${safeOutlet}', '${safeName}', ${item.numPrice})">+</button>
              </div>
            </li>
          `;
        })
        .join("");

      categoriesHtml += `
        <div class="category-card">
          <h3 class="category-title">
            <span>${cat.title}</span>
            ${cat.note ? `<span class="category-note">${cat.note}</span>` : ""}
          </h3>
          <ul class="menu-list">${itemsHtml}</ul>
        </div>
      `;
    });
  }

  activeOutletContainer.innerHTML = `
    <section class="outlet-section">
      <div class="outlet-header">
        <div class="outlet-title-group">
          <h2>${outlet.name}</h2>
          <p class="outlet-tagline">${outlet.tagline}</p>
        </div>
        <div class="outlet-badges">${badgesHtml}</div>
      </div>
      <div class="categories-grid">${categoriesHtml}</div>
    </section>
  `;
}

// Meal Planner / Tray Logic
function addToTray(outlet, name, price) {
  const existing = tray.find(i => i.outlet === outlet && i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    tray.push({ outlet, name, price, qty: 1 });
  }
  renderTray();
}

function updateQty(index, delta) {
  tray[index].qty += delta;
  if (tray[index].qty <= 0) {
    tray.splice(index, 1);
  }
  renderTray();
}

function renderTray() {
  const totalItems = tray.reduce((sum, item) => sum + item.qty, 0);
  const totalCost = tray.reduce((sum, item) => sum + item.price * item.qty, 0);

  trayBadgeEl.textContent = `(${totalItems})`;
  trayTotalEl.textContent = `₹${totalCost}`;

  if (tray.length === 0) {
    trayItemsEl.innerHTML = `<p style="color: var(--text-muted); text-align:center; margin-top:2rem;">Click <strong>+</strong> next to any dish to build your campus food run.</p>`;
    return;
  }

  trayItemsEl.innerHTML = tray
    .map(
      (item, idx) => `
      <div class="tray-row">
        <div class="tray-row-info">
          <strong>${item.name}</strong>
          <span>${item.outlet} • ₹${item.price * item.qty}</span>
        </div>
        <div class="tray-qty-controls">
          <button onclick="updateQty(${idx}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${idx}, 1)">+</button>
        </div>
      </div>
    `
    )
    .join("");
}

// Event Listeners
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  if (currentOutletId) {
    renderSingleOutlet();
  } else {
    renderDirectory();
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeDiet = btn.dataset.filter;
    if (currentOutletId) {
      renderSingleOutlet();
    } else {
      renderDirectory();
    }
  });
});

document.getElementById("backToOutletsBtn").addEventListener("click", showAllOutlets);
document.getElementById("brandHomeBtn").addEventListener("click", (e) => {
  e.preventDefault();
  showAllOutlets();
});

document.getElementById("openTrayBtn").addEventListener("click", () => {
  trayDrawer.classList.add("open");
});

document.getElementById("closeTrayBtn").addEventListener("click", () => {
  trayDrawer.classList.remove("open");
});

document.getElementById("clearTrayBtn").addEventListener("click", () => {
  tray = [];
  renderTray();
});

// Initialize App
updateGlobalStats();
buildQuickSwitcher();
renderDirectory();
renderTray();