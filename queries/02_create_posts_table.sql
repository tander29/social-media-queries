CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    body VARCHAR(500),
    user_id integer REFERENCES users(id)
    -- instructions mention integer that referrences user by id which is a primary key on it's own table
    -- , but what is a foreign key then?
    -- why is the user_id blue, is it due to referrence?
);