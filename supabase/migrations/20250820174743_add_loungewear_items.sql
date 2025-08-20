-- Insert Loungewear items
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'White Robe',
    59.99,
    'path/to/robe.jpg',
    'Luxurious robe perfect for spa days.',
    ARRAY['S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Loungewear')
  ),
  (
    'Cream Robe',
    69.99,
    'path/to/robe1.jpg',
    'Soft and cozy robe for relaxation.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Loungewear')
  ),
  (
    'Blue Pyjama Set',
    39.99,
    'path/to/pyjama1.jpg',
    'Comfortable pajama set for a good night''s sleep.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Loungewear')
  ),
  (
    'Pink Pyjama Set',
    49.99,
    'path/to/pyjama2.jpg',
    'Stylish pajama set for lounging.',
    ARRAY['XS','S','M','L','XL'],
    (SELECT id FROM categories WHERE name = 'Loungewear')
  );
