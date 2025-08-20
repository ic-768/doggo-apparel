-- Insert Glasses
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Classic Black Frames',
    29.99,
    'path/to/glasses1.jpg',
    'A stylish pair of classic black-framed glasses for everyday use.',
    ARRAY['S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Glasses')
  ),
  (
    'Vintage Round Glasses',
    24.99,
    'path/to/glasses2.jpg',
    'Retro-inspired round glasses that add a vintage touch to any outfit.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Glasses')
  ),
  (
    'Sporty Wraparound Glasses',
    34.99,
    'path/to/glasses3.jpg',
    'Durable wraparound glasses designed for outdoor sports and activities.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Glasses')
  ),
  (
    'Trendy Oversized Frames',
    32.99,
    'path/to/glasses4.jpg',
    'Oversized frames that offer a trendy style and great sun protection.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Glasses')
  ),
  (
    'Elegant Reading Glasses',
    39.99,
    'path/to/glasses5.jpg',
    'Elegant reading glasses that blend style and functionality.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Glasses')
  ),
  (
    'Sleek Cat Eye Glasses',
    27.99,
    'path/to/glasses6.jpg',
    'Chic cat-eye glasses for a bold, fashionable look.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Glasses')
  ),
  (
    'Stylish Clear Frame Glasses',
    29.99,
    'path/to/glasses7.jpg',
    'Contemporary clear frame glasses for a sleek, modern appearance.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Glasses')
  ),
  (
    'Luxury Designer Shades',
    89.99,
    'path/to/glasses8.jpg',
    'Exclusive designer sunglasses that combine elegance and luxury.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Glasses')
  );
