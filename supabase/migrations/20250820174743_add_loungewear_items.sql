-- Insert loungewear items
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'White Robe',
    59.99,
    'loungewear/robe.jpg',
    'Luxurious robe perfect for spa days.',
    ARRAY['S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'loungewear')
  ),
  (
    'Cream Robe',
    69.99,
    'loungewear/robe-1.jpg',
    'Soft and cozy robe for relaxation.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'loungewear')
  ),
  (
    'Blue Pyjama Set',
    39.99,
    'loungewear/pyjama-1.jpg',
    'Comfortable pajama set for a good night''s sleep.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'loungewear')
  ),
  (
    'Pink Pyjama Set',
    49.99,
    'loungewear/pyjama-2.jpg',
    'Stylish pajama set for lounging.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'loungewear')
  );
