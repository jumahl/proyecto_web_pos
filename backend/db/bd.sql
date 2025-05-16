-- Create custom ENUM types
CREATE TYPE contact_type AS ENUM
('phone', 'mobile', 'fax');
CREATE TYPE subscription_status AS ENUM
('active', 'inactive', 'expired');
CREATE TYPE movement_type AS ENUM
('entry', 'exit', 'adjustment', 'return');
CREATE TYPE payment_status AS ENUM
('pending', 'completed', 'failed');
CREATE TYPE role_scope AS ENUM
('company', 'system');

-- Company table
CREATE TABLE company
(
    nit VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    address VARCHAR(150),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Function and trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at
()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Company contact table
CREATE TABLE company_contact
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) NOT NULL REFERENCES company(nit),
    type contact_type NOT NULL,
    value VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Plan table
CREATE TABLE plan
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    max_products INT NOT NULL,
    max_users INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Subscription table
CREATE TABLE subscription
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) NOT NULL REFERENCES company(nit),
    plan_id INT NOT NULL REFERENCES plan(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status subscription_status NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Role and permission system
CREATE TABLE role
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    scope role_scope NOT NULL DEFAULT 'company',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE permission
(
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE role_permission
(
    role_id INT NOT NULL REFERENCES role(id),
    permission_id INT NOT NULL REFERENCES permission(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id, permission_id)
);

-- User table
CREATE TABLE "user"
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) REFERENCES company(nit),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    role_id INT REFERENCES role(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TRIGGER user_updated_at
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Client table
CREATE TABLE client
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) NOT NULL REFERENCES company(nit),
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Product tables
CREATE TABLE product_category
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) NOT NULL REFERENCES company(nit),
    name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) NOT NULL REFERENCES company(nit),
    category_id INT REFERENCES product_category(id),
    name VARCHAR(100) NOT NULL,
    code VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL,
    current_stock INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    UNIQUE (company_nit, code)
);

CREATE TRIGGER product_updated_at
BEFORE UPDATE ON product
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Sales tables
CREATE TABLE sale
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) NOT NULL REFERENCES company(nit),
    client_id INT REFERENCES client(id),
    date TIMESTAMP NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sale_detail
(
    id SERIAL PRIMARY KEY,
    sale_id INT NOT NULL REFERENCES sale(id),
    product_id INT NOT NULL REFERENCES product(id),
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Inventory movement table
CREATE TABLE inventory_movement
(
    id SERIAL PRIMARY KEY,
    company_nit VARCHAR(20) NOT NULL REFERENCES company(nit),
    product_id INT NOT NULL REFERENCES product(id),
    type movement_type NOT NULL,
    quantity INT NOT NULL,
    date TIMESTAMP NOT NULL,
    observation VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Payment table
CREATE TABLE payment
(
    id SERIAL PRIMARY KEY,
    subscription_id INT NOT NULL REFERENCES subscription(id),
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    date TIMESTAMP NOT NULL,
    status payment_status NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Admin table
CREATE TABLE admin
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TRIGGER admin_updated_at
BEFORE UPDATE ON admin
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Product changes log table
CREATE TABLE product_changes_log
(
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES product(id),
    field VARCHAR(50) NOT NULL,
    old_value TEXT NOT NULL,
    new_value TEXT NOT NULL,
    user_id INT NOT NULL REFERENCES "user"(id),
    date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_company_name ON company (name);
CREATE INDEX idx_product_company ON product (company_nit);
CREATE INDEX idx_sale_date ON sale (date);
CREATE INDEX idx_client_company ON client (company_nit);




-- Plan Básico (ideal para pequeñas empresas)
INSERT INTO plan (name, price, max_products, max_users) 
VALUES ('Básico', 10000, 100, 3);

-- Plan Estándar (empresas medianas)
INSERT INTO plan (name, price, max_products, max_users) 
VALUES ('Estándar', 15000, 500, 10);

-- Plan Premium (sin límites)
INSERT INTO plan (name, price, max_products, max_users) 
VALUES ('Premium', 20000, 9999, 50);  -- 9999 = "ilimitado" en la práctica



