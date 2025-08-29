-- Insert accessories items
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Blue Bandana',
    14.99,
    'accessories/bandana.jpg',
    'A stylish bandana for a laid-back look.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Blue Headband',
    14.99,
    'accessories/bandana-2.jpg',
    'A classic blue headband - very bohemian.',
    NULL,
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Blue and Red Long Bandana',
    14.99,
    'accessories/bandana-3.jpg',
    'A vibrant bandana perfect for adding a pop of color.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Cotton Headband - Striped',
    9.99,
    'accessories/headband-1.jpg',
    'A chic striped headband to keep your hair stylishly in place.',
    NULL,
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Floral Headband',
    9.99,
    'accessories/headband-2.jpg',
    'A lovely floral headband that adds a touch of whimsy.',
    NULL,
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Bow Set',
    12.99,
    'accessories/bow.jpg',
    'An elegant bow set that enhances any look.',
    NULL,
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Gold Chain',
    24.99,
    'accessories/gold.jpg',
    'A stunning gold chain that adds elegance to your neckline.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Jewellery Set',
    99.99,
    'accessories/multiple-2.jpg',
    'A unique set consisting of a cap, gold jewellery, and shades.',
    NULL,
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Cap and Jewellery',
    51.99,
    'accessories/multiple.jpg',
    'Snoop dogg anyone?',
    NULL,
    (SELECT id FROM categories WHERE name = 'accessories')
  ),
  (
    'Winter Scarf',
    18.99,
    'accessories/scarf.jpg',
    'A heavy winter scarf perfect for warm days. Comes in red or blue.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'accessories')
  );
