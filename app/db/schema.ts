import {
  pgTable,
  text,
  varchar,
  numeric,
  boolean,
  integer,
  timestamp,
  jsonb,
  pgEnum,
  uuid,
  serial,
} from "drizzle-orm/pg-core";

export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "paid",
  "shipped",
  "delivered",
  "cancelled",
]);

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  subtitle: varchar("subtitle", { length: 255 }),
  description: text("description"),
  longDescription: text("long_description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  additionalCategories: jsonb("additional_categories").$type<string[]>(),
  image: text("image"),
  imageColor: varchar("image_color", { length: 255 }),
  format: varchar("format", { length: 100 }),
  chemicalProperties: jsonb("chemical_properties"),
  studies: jsonb("studies"),
  inStock: boolean("in_stock").default(true).notNull(),
  stockQuantity: integer("stock_quantity").default(100),
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  brand: varchar("brand", { length: 50 }).default("lumevara"),
  supplierCost: numeric("supplier_cost", { precision: 10, scale: 2 }),
  salesVelocity: integer("sales_velocity").default(0),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  icon: varchar("icon", { length: 50 }),
  displayOrder: integer("display_order").default(0).notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).unique(),
  phone: varchar("phone", { length: 20 }),
  phoneVerified: boolean("phone_verified").default(false).notNull(),
  name: varchar("name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const orders = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  status: orderStatusEnum("status").default("pending").notNull(),
  total: numeric("total", { precision: 10, scale: 2 }).notNull(),
  shippingAddress: jsonb("shipping_address"),
  paymentMethod: varchar("payment_method", { length: 50 }),
  paymentId: varchar("payment_id", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: uuid("order_id")
    .references(() => orders.id)
    .notNull(),
  productId: text("product_id")
    .references(() => products.id)
    .notNull(),
  quantity: integer("quantity").notNull(),
  priceAtPurchase: numeric("price_at_purchase", {
    precision: 10,
    scale: 2,
  }).notNull(),
});

export const cartItems = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 255 }).notNull(),
  productId: text("product_id")
    .references(() => products.id)
    .notNull(),
  quantity: integer("quantity").default(1).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const cartReservations = pgTable("cart_reservations", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 255 }).notNull(),
  productId: text("product_id")
    .references(() => products.id)
    .notNull(),
  quantity: integer("quantity").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
