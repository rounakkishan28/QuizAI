import {
  integer,
  json,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  image: varchar(),
  email: varchar({ length: 255 }).notNull().unique(),
  xp: integer().default(0),
  credits: integer().default(10),
});

export const QUIZ_RAW_TABLE = pgTable("quizRaw", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  quizId: varchar().notNull(),
  count: integer().default(0),
  quizData: json(),
  level: varchar(),
  solved: integer().default(0),
  createdBy: varchar()
    .notNull()
    .references(() => USER_TABLE.email),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});
