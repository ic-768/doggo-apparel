-- Insert Glasses
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Classic Black Frames',
    29.99,
    'glasses/glasses-1.jpg',
    'A stylish pair of classic black-framed glasses for everyday use.',
    ARRAY['S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'glasses')
  ),
  (
    'Vintage Round Glasses',
    24.99,
    'glasses/glasses-2.jpg',
    'Retro-inspired round glasses that add a vintage touch to any outfit.',
    NULL,
    (SELECT id FROM categories WHERE name = 'glasses')
  ),
  (
    'Sporty Wraparound Glasses',
    34.99,
    'glasses/glasses-3.jpg',
    'Durable wraparound glasses designed for outdoor sports and activities.',
    NULL,
    (SELECT id FROM categories WHERE name = 'glasses')
  ),
  (
    'Trendy Oversized Frames',
    32.99,
    'glasses/glasses-4.jpg',
    'Oversized frames that offer a trendy style and great sun protection.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'glasses')
  ),
  (
    'Elegant Reading Glasses',
    39.99,
    'glasses/glasses-5.jpg',
    'Elegant reading glasses that blend style and functionality.',
    NULL,
    (SELECT id FROM categories WHERE name = 'glasses')
  ),
  (
    'Sleek Cat Eye Glasses',
    27.99,
    'glasses/glasses-6.jpg',
    'Chic cat-eye glasses for a bold, fashionable look.',
    NULL,
    (SELECT id FROM categories WHERE name = 'glasses')
  ),
  (
    'Stylish Clear Frame Glasses',
    29.99,
    'glasses/glasses-7.jpg',
    'Contemporary clear frame glasses for a sleek, modern appearance.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'glasses')
  ),
  (
    'Luxury Designer Shades',
    89.99,
    'glasses/glasses-8.jpg',
    'Exclusive designer sunglasses that combine elegance and luxury.',
    NULL,
    (SELECT id FROM categories WHERE name = 'glasses')
  );
