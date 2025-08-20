INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Black Beater',
    19.99,
    'path/to/beater.jpg',
    'Durable beater for high-intensity workouts.',
    ARRAY['XS', 'S', 'M', 'L', 'XL'],
    (SELECT id FROM categories WHERE name = 'Fitness')
  ),
  (
    'Gray Jacket',
    49.99,
    'path/to/jacket2.jpg',
    'A lightweight jacket for outdoor activities.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Fitness')
  ),
  (
    'Gray Jacket (mini)',
    49.99,
    'path/to/jacket.jpg',
    'Extra-small size jacket for our pocket-friendly friends.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Fitness')
  ),
  (
    'Running shirt',
    69.99,
    'path/to/runner.jpg',
    'High-performance, absorbent sports tee for any athlete.',
    ARRAY['XS', 'S', 'M', 'L', 'XL'],
    (SELECT id FROM categories WHERE name = 'Fitness')
  ),
  (
    'Treadmill',
    499.99,
    'path/to/treadmill.jpg',
    'A custom-made, state-of-the-art treadmill for home workouts.',
    NULL,
    (SELECT id FROM categories WHERE name = 'Fitness')
  );
