-- Insert Accessories items
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Blue Bandana',
    14.99,
    'path/to/bandana1.jpg',
    'A stylish bandana for a laid-back look.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Blue Headband',
    14.99,
    'path/to/bandana2.jpg',
    'A classic blue headband - very bohemian.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Blue and Red Long Bandana',
    14.99,
    'path/to/bandana3.jpg',
    'A vibrant bandana perfect for adding a pop of color.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Cotton Headband - Striped',
    9.99,
    'path/to/headband1.jpg',
    'A chic striped headband to keep your hair stylishly in place.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Floral Headband',
    9.99,
    'path/to/headband2.jpg',
    'A lovely floral headband that adds a touch of whimsy.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Bow Set',
    12.99,
    'path/to/bow.jpg',
    'An elegant bow set that enhances any look.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Gold Chain',
    24.99,
    'path/to/gold.jpg',
    'A stunning gold chain that adds elegance to your neckline.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Jewellery Set',
    99.99,
    'path/to/multiple2.jpg',
    'A unique set consisting of a cap, gold jewellery, and shades.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Cap and Jewellery',
    51.99,
    'path/to/multiple.jpg',
    'Snoop dogg anyone?',
    NULL,
    (SELECT id FROM categories WHERE name = 'Accessories')
  ),
  (
    'Winter Scarf',
    18.99,
    'path/to/scarf.jpg',
    'A heavy winter scarf perfect for warm days. Comes in red or blue.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Accessories')
  );
