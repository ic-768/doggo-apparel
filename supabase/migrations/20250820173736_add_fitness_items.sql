INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Black Beater',
    19.99,
    'fitness/beater.jpg',
    'Durable beater for high-intensity workouts.',
    ARRAY['XS', 'S', 'M', 'L', 'XL'],
    (SELECT id FROM categories WHERE name = 'fitness')
  ),
  (
    'Gray Jacket',
    49.99,
    'fitness/jacket-2.jpg',
    'A lightweight jacket for outdoor activities.',
    NULL,
    (SELECT id FROM categories WHERE name = 'fitness')
  ),
  (
    'Gray Jacket (mini)',
    49.99,
    'fitness/jacket.jpg',
    'Extra-small size jacket for our pocket-friendly friends.',
    NULL,
    (SELECT id FROM categories WHERE name = 'fitness')
  ),
  (
    'Running shirt',
    69.99,
    'fitness/runner.jpg',
    'High-performance, absorbent sports tee for any athlete.',
    ARRAY['XS', 'S', 'M', 'L', 'XL'],
    (SELECT id FROM categories WHERE name = 'fitness')
  ),
  (
    'Treadmill',
    499.99,
    'fitness/treadmill.jpg',
    'A custom-made, state-of-the-art treadmill for home workouts.',
    NULL,
    (SELECT id FROM categories WHERE name = 'fitness')
  );
