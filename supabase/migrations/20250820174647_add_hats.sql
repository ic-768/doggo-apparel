-- Insert Hats
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Adventure Wide-Brim Hat',
    19.99,
    'path/to/hat1.jpg',
    'Perfect for outdoor adventures and sun protection.',
    ARRAY['S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Warm Beanie',
    24.99,
    'path/to/hat10.jpg',
    'Comfortable and insulated material, perfect for wintery days.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Casual Cap',
    29.99,
    'path/to/hat11.jpg',
    'Simple design for a laid-back look.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Classic Cap',
    19.99,
    'path/to/hat2.jpg',
    'A timeless cap for that signature look.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Lightweight Sun Hat',
    22.99,
    'path/to/hat3.jpg',
    'Lightweight and durable for outdoor fun.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Classic Fedora',
    27.99,
    'path/to/hat4.jpg',
    'A stylish fedora for all occasions.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Stylish Beanie',
    30.99,
    'path/to/hat5.jpg',
    'A chic accessory that complements any outfit.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Trendy Cap (mini)',
    35.99,
    'path/to/hat6.jpg',
    'Because you deserve to look good no matter your stature',
    NULL,
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Vintage Top Hat',
    20.99,
    'path/to/hat7.jpg',
    'Are you the next David Barkerfield?',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Everyday Cap',
    25.99,
    'path/to/hat8.jpg',
    'Comfortable and stylish for everyday wear.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Hats')
  ),
  (
    'Rapper Cap',
    23.99,
    'path/to/hat9.jpg',
    'A versatile hat that suits anyone.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Hats')
  );
