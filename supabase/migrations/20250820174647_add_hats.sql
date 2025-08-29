-- Insert Hats
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Adventure Wide-Brim Hat',
    19.99,
    'hats/hat-1.jpg',
    'Perfect for outdoor adventures and sun protection.',
    ARRAY['S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Warm Beanie',
    24.99,
    'hats/hat-10.jpg',
    'Comfortable and insulated material, perfect for wintery days.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Casual Cap',
    29.99,
    'hats/hat-11.jpg',
    'Simple design for a laid-back look.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Classic Cap',
    19.99,
    'hats/hat-2.jpg',
    'A timeless cap for that signature look.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Lightweight Sun Hat',
    22.99,
    'hats/hat-3.jpg',
    'Lightweight and durable for outdoor fun.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Classic Fedora',
    27.99,
    'hats/hat-4.jpg',
    'A stylish fedora for all occasions.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Stylish Beanie',
    30.99,
    'hats/hat-5.jpg',
    'A chic accessory that complements any outfit.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Trendy Cap (mini)',
    35.99,
    'hats/hat-6.jpg',
    'Because you deserve to look good no matter your stature',
    NULL,
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Vintage Top Hat',
    20.99,
    'hats/hat-7.jpg',
    'Are you the next David Barkerfield?',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Everyday Cap',
    25.99,
    'hats/hat-8.jpg',
    'Comfortable and stylish for everyday wear.',
    NULL,
    (SELECT id FROM categories WHERE name = 'hats')
  ),
  (
    'Rapper Cap',
    23.99,
    'hats/hat-9.jpg',
    'A versatile hat that suits anyone.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'hats')
  );
