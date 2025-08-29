-- Categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Clothing items table
CREATE TABLE clothing_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  price DECIMAL(10,2) NOT NULL CHECK (price > 0),
  image_url TEXT,
  description TEXT,
  sizes TEXT[] DEFAULT '{}', -- Array of available sizes
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_clothing_items_category_id ON clothing_items(category_id);
CREATE INDEX idx_clothing_items_in_stock ON clothing_items(in_stock);

-- Insert sample categories
INSERT INTO categories (name) VALUES
  ('accessories'),
  ('fitness'),
  ('glasses'),
  ('hats'),
  ('loungewear'),
  ('outfits');

-- Insert sample clothing items
INSERT INTO clothing_items (name, price, image_url, description, sizes, category_id) VALUES
  (
    'Orange Hoodie',
    24.99,
    'fitness/bball.jpg',
    'Perfect for sports or casual streetwear.',
    ARRAY['S', 'M', 'L', 'XL'],
    (SELECT id FROM categories WHERE name = 'fitness')
  ),
  (
    'White Beater',
    19.99,
    'fitness/beater-2.jpg',
    'A lightweight beater for your fitness routines.',
    NULL,
    (SELECT id FROM categories WHERE name = 'fitness')
  );

-- Optional: Create a view for easier querying with category names
CREATE VIEW clothing_with_categories AS
SELECT
  ci.id,
  ci.name,
  ci.price,
  ci.image_url,
  ci.description,
  ci.sizes,
  ci.in_stock,
  c.name as category_name,
  ci.created_at,
  ci.updated_at
FROM clothing_items ci
JOIN categories c ON ci.category_id = c.id;
